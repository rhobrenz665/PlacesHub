import React from 'react';

import Modal from './Modal';
import Button from '@material-ui/core/Button';

const ErrorModal = props => {
  return (
    <Modal
      onclose={props.onClear}
      title="An Error Occurred!"
      open={!!props.error}
      actions={
        <Button variant="contained" onClick={props.onClear}>
          Okay
        </Button>
      }
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
