import React, { useState } from 'react';

import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';

//@material-ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({}));

const PlaceItem = ({
  image,
  title,
  description,
  address,
  creatorId,
  coordinates,
  onDelete,
}) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  const classes = useStyles({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9,
      marginTop: '30',
    },
  });

  return (
    <React.Fragment>
      <Modal
        open={showMap}
        onClose={closeMapHandler}
        title={address}
        actions={
          <Button size="small" color="secondary" onClick={closeMapHandler}>
            Close
          </Button>
        }
        // dialogContent={{ minHeight: '200px', width: '100%' }}
      >
        <div className="map-container">
          <Map coordinates={coordinates} zoom={16} />
        </div>
      </Modal>
      <Grid item lg={12}>
        <Card className={classes.card} raised={true}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              alt={image}
              image={image}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="textPrimary"
                component="p"
                gutterBottom
              >
                {address}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button size="small" color="primary">
              Edit
            </Button>
            <Button size="small" color="secondary">
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default PlaceItem;
