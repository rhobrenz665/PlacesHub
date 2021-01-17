import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// @material-ui
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, lightBlue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[900],
    },
    secondary: {
      main: red[500],
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
