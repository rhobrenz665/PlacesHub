import React from 'react';

import PlaceItem from './PlaceItem';

// import Button from '../../shared/components/FormElements/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <div>
        <Typography variant="h3" align="center" style={{ marginTop: '5rem' }}>
          No places found. Maybe create one?
        </Typography>
        {/* <Button component={Link} to="/places/new">
          Share Place
        </Button> */}
      </div>
    );
  }

  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={1} sm={4} />
        <Grid item xs={10} sm={4}>
          <Grid container spacing={4}>
            {props.items.map(place => (
              <PlaceItem
                key={place.id}
                id={place.id}
                image={place.imageUrl}
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
        <Grid item xs={1} sm={4} />
      </Grid>
    </Grid>
  );
};

export default PlaceList;
