import React from 'react';
import { Link } from 'react-router-dom';

import PlaceItem from './PlaceItem';
import DivContainer from '../../shared/components/UIElements/DivContainer';

//@material-ui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <DivContainer>
        <Grid container justify="center" direction="column" alignItems="center">
          <Typography
            variant="h4"
            align="center"
            style={{ marginTop: '5rem' }}
            gutterBottom
          >
            No places found. Maybe create one?
          </Typography>
          <Button
            component={Link}
            to="/places/new"
            variant="contained"
            color="primary"
            style={{ marginTop: '1rem' }}
          >
            Share Place
          </Button>
        </Grid>
      </DivContainer>
    );
  }

  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={1} md={3} lg={4} />
        <Grid item xs={10} md={6} lg={4}>
          <Grid container spacing={4}>
            {props.items.map(place => (
              <PlaceItem
                key={place.id}
                id={place.id}
                image={place.image}
                title={place.title}
                description={place.description}
                address={place.address}
                creatorId={place.creator}
                coordinates={place.location}
                onDelete={props.onDeletePlace}
              />
            ))}
          </Grid>
        </Grid>
        <Grid item xs={1} md={3} lg={4} />
      </Grid>
    </Grid>
  );
};

export default PlaceList;
