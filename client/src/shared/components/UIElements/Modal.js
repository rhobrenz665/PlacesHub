import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import { DialogContent } from '@material-ui/core';

const CustomModal = props => {
  return (
    <div>
      <Dialog style={props.dialog} onClose={props.onClose} open={props.open}>
        <DialogTitle style={props.dialogTitle}>{props.title}</DialogTitle>
        <DialogContent style={props.dialogContent}>
          {props.children}
        </DialogContent>
        <DialogActions style={props.Actions}>{props.actions}</DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomModal;
