import React from 'react';

import Input from '../../shared/components/FormElements/Input';
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
  // submit: {
  //   margin: theme.spacing(3, 0, 2),
  // },
}));

const NewPlace = () => {
  const classes = useStyles();

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
      address: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
    console.log(formState.isValid);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add Place
        </Typography>
        <form className={classes.form} onSubmit={placeSubmitHandler}>
          <Input
            id="title"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            fullWidth
          />
          <Input
            id="description"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (at least 5 characters)."
            onInput={inputHandler}
            fullWidth
            multiline={true}
            rows={3}
          />
          <Input
            id="address"
            type="text"
            label="Address"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid address."
            onInput={inputHandler}
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!formState.isValid}
          >
            Add Place
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default NewPlace;
