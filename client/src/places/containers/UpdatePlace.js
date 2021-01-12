import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import DivContainer from '../../shared/components/UIElements/DivContainer';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';

import { useForm } from '../../shared/hooks/form-hook';

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

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Rizal Park',
    description: 'Leneta tastsat utas as places teasa ',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/cd/Rizal_Park_Front_View.jpg',
    address: 'Liwasang Rizal, Ermita, Maynila, 1000 Kalakhang Maynila',
    location: {
      lat: '14.582919',
      lng: '120.979683',
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Luneta Park',
    description:
      'Ang Liwasang Rizal o Parkeng Rizal (Ingles: Rizal Park, Kastila: Parque Rizal) ',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/cd/Rizal_Park_Front_View.jpg',
    address: 'Liwasang Rizal, Ermita, Maynila, 1000 Kalakhang Maynila',
    location: {
      lat: 14.582919,
      lng: 120.979683,
    },
    creator: 'u2',
  },
];

const UpdatePlace = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);

  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  // Initial input data
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
    if (identifiedPlace) {
      // set loaded input data
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
    console.log(formState.isValid);
  };

  if (!identifiedPlace) {
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

  if (isLoading) {
    return (
      <DivContainer>
        <h2>Loading!</h2>
      </DivContainer>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Update Place
        </Typography>
        <form className={classes.form} onSubmit={placeSubmitHandler}>
          <Input
            id="title"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            fullWidth
            initialValid={formState.inputs.description.isValid}
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
            initialValue={formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
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
      </div>
    </Container>
  );
};

export default UpdatePlace;
