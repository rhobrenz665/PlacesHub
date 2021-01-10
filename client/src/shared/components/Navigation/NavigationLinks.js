import React from 'react';
import { Link } from 'react-router-dom';

// @material-ui
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import PlaceIcon from '@material-ui/icons/Place';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const NavigationLinks = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="All Users" />
        </ListItem>
        <ListItem button component={Link} to="/places">
          <ListItemIcon>
            <PlaceIcon />
          </ListItemIcon>
          <ListItemText primary="My Places" />
        </ListItem>
        <ListItem button component={Link} to="/places/new">
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Add Place" />
        </ListItem>
      </List>
    </div>
  );
};

export default NavigationLinks;
