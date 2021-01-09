import React from 'react';
import UserItem from './UserItem';

import Grid from '@material-ui/core/Grid';

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={false} sm={4} />
        <Grid item xs={12} sm={4}>
          <Grid container spacing={6}>
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
        <Grid item xs={false} sm={4} />
      </Grid>
    </Grid>
  );
};

export default UsersList;
