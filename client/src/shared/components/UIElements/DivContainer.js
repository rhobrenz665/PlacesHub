import React from 'react';

import Grid from '@material-ui/core/Grid';

const DivContainer = props => {
  return (
    <Grid container spacing={0} direction="column" alignItems="center">
      <Grid item xs={2} lg={4}></Grid>
      <Grid item xs={8} lg={4}>
        {props.children}
      </Grid>
      <Grid item xs={2} lg={4}></Grid>
    </Grid>
  );
};

export default DivContainer;
