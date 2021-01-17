import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import UsersList from '../components/UsersList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import DivContainer from '../../shared/components/UIElements/DivContainer';

//@material-ui
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Users = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users`
        );

        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <DivContainer>
          <LoadingSpinner />
        </DivContainer>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
      {auth.isLoggedIn && (
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
          component={Link}
          to="/places/new"
        >
          <AddIcon />
        </Fab>
      )}
    </React.Fragment>
  );
};

export default Users;
