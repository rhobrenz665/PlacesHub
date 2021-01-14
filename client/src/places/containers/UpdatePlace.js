import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import DivContainer from '../../shared/components/UIElements/DivContainer';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';

import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

// @material-ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
}));

const UpdatePlace = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPlace, setLoadedPlace] = useState();
  const placeId = useParams().placeId;
  const history = useHistory();

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/places/${placeId}`
        );
        setLoadedPlace(responseData.place);
        setFormData(
          {
            title: {
              value: responseData.place.title,
              isValid: true,
            },
            description: {
              value: responseData.place.description,
              isValid: true,
            },
          },
          true
        );
      } catch (err) {}
    };
    fetchPlace();
  }, [sendRequest, placeId, setFormData]);

  const placeUpdateSubmitHandler = async event => {
    event.preventDefault();
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/places/${placeId}`,
        'PATCH',
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
        }),
        {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token,
        }
      );
      history.push('/' + auth.userId + '/places');
    } catch (err) {}
  };

  const classes = useStyles();

  if (isLoading) {
    return (
      <DivContainer>
        <LoadingSpinner />
      </DivContainer>
    );
  }

  if (!loadedPlace && !error) {
    return (
      <DivContainer>
        <Typography
          variant="h4"
          align="center"
          style={{ marginTop: '5rem' }}
          gutterBottom
        >
          Could not find a place!
        </Typography>
      </DivContainer>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <ErrorModal error={error} onClear={clearError} />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Update Places
        </Typography>
        {!isLoading && loadedPlace && (
          <form className={classes.form} onSubmit={placeUpdateSubmitHandler}>
            <Input
              id="title"
              type="text"
              label="Title"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid title."
              onInput={inputHandler}
              fullWidth
              initialValue={loadedPlace.title}
              initialValid={true}
            />
            <Input
              id="description"
              label="Description"
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid description (min. 5 characters)."
              onInput={inputHandler}
              fullWidth
              multiline={true}
              rows={3}
              initialValue={loadedPlace.description}
              initialValid={true}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!formState.isValid}
              style={{ marginTop: '.4rem' }}
            >
              Update Place
            </Button>
          </form>
        )}
      </div>
    </Container>
  );
};

export default UpdatePlace;
