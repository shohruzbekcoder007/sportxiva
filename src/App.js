import React from 'react';
import { ThemeProvider } from 'styled-components'
import defaultTheme from './theme/defaultTheme'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as MuiTheme } from '@mui/material/styles'
import muiTheme from './theme/muiTheme'
import Main from './components/Main';

function App() {
  return (
    <MuiTheme theme={muiTheme}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </ThemeProvider>
    </MuiTheme>
  );
}

export default App;
