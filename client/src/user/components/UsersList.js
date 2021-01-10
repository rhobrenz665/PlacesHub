import React from 'react';
import UserItem from './UserItem';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <Typography variant="h3" align="center" style={{ marginTop: '5rem' }}>
        No users found!
      </Typography>
    );
  }

  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={1} sm={4} lg={3} />
        <Grid item xs={10} sm={4} lg={6}>
          <Grid container spacing={2}>
            {items.map(user => (
              <UserItem
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                placeCount={user.places}
              />
            ))}
          </Grid>
        </Grid>
        <Grid item xs={1} sm={4} lg={3} />
      </Grid>
    </Grid>
  );
};

export default UsersList;
