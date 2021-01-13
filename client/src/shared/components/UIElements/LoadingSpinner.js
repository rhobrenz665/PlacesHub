import React from 'react';
import DivContainer from './DivContainer';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingSpinner = props => {
  return (
    <DivContainer>
      <CircularProgress />
    </DivContainer>
  );
};

export default LoadingSpinner;
