import React, { useReducer, useEffect } from 'react';

import { validate } from '../../util/validators';

//@material-ui
import TextField from '@material-ui/core/TextField';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    //InitialState
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid || false,
  });

  // InputHooks
  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = event => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH',
    });
  };

  return (
    <TextField
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      label={props.label}
      variant="outlined"
      margin="dense"
      fullWidth={props.fullWidth}
      autoComplete={props.autoComplete}
      error={!inputState.isValid && inputState.isTouched}
      helperText={
        !inputState.isValid && inputState.isTouched && props.errorText
      }
      onChange={changeHandler}
      onBlur={touchHandler}
      value={inputState.value}
      multiline={props.multiline}
      rows={props.rows}
    />
  );
};

export default Input;
