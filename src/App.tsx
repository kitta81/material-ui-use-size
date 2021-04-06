import { createMuiTheme, Theme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import './App.css';
import { Sizing } from './Sizing';

function App() {
  const theme: Theme = createMuiTheme({});
  return (
    <ThemeProvider theme={theme}>
      <Sizing />
    </ThemeProvider>
  );
}

export default App;
