import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

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
  id,
}) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/places/${id}`,
        'DELETE',
        null,
        {
          Authorization: 'Bearer ' + auth.token,
        }
      );
      onDelete(id);
    } catch (err) {}
  };

  const classes = useStyles({
    card: {
      minWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9,
      marginTop: '30',
    },
  });

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        open={showMap}
        onClose={closeMapHandler}
        title={address}
        actions={
          <Button size="small" color="secondary" onClick={closeMapHandler}>
            Close
          </Button>
        }
      >
        <div className="map-container">
          <Map coordinates={coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        title="Are you sure?"
        open={showConfirmModal}
        onClose={cancelDeleteHandler}
        actions={
          <>
            <Button
              size="small"
              onClick={cancelDeleteHandler}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              size="small"
              color="secondary"
              onClick={confirmDeleteHandler}
              variant="outlined"
            >
              Delete
            </Button>
          </>
        }
      >
        <Typography
          variant="body2"
          color="textPrimary"
          component="p"
          gutterBottom
        >
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter
        </Typography>
      </Modal>
      <Grid item xs={12} md={12} lg={12}>
        {isLoading && <LoadingSpinner />}
        <Card className={classes.card} raised={true}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              alt={image}
              // src={`${process.env.REACT_APP_ASSET_URL}/${image}`}
              src={image}
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
            <Button
              size="small"
              color="primary"
              onClick={openMapHandler}
              variant="outlined"
            >
              VIEW ON MAP
            </Button>
            {auth.userId === creatorId && (
              <Button
                component={Link}
                size="small"
                color="primary"
                to={`/places/${id}`}
                variant="outlined"
              >
                Edit
              </Button>
            )}
            {auth.userId === creatorId && (
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                onClick={showDeleteWarningHandler}
              >
                Delete
              </Button>
            )}
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default PlaceItem;
