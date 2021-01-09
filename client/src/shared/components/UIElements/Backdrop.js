import React from 'react';
import ReactDOM from 'react-dom';
import { Backdrop as BackDrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  backdrop: {
    color: '#fff',
  },
}));

const Backdrop = props => {
  const classes = useStyles();
  return ReactDOM.createPortal(
    <BackDrop
      className={classes.backdrop}
      open={props.open}
      onClick={props.onClick}
    ></BackDrop>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
