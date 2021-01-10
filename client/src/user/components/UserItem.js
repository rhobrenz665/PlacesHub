import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#fff',
    '&:hover': {
      background: '#ebebeb',
    },
  },
}));

const UserItem = ({ name, placeCount, image, id }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} lg={6}>
      <Link to={`/${id}/places`} style={{ textDecoration: 'none' }}>
        <Card className={classes.root}>
          <CardHeader
            avatar={<Avatar src={image} alt={name} />}
            title={name}
            subheader={placeCount}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
          ></CardHeader>
        </Card>
      </Link>
    </Grid>
  );
};

export default UserItem;
