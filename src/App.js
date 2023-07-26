import React from 'react';
import { ThemeProvider } from 'styled-components'
import defaultTheme from './theme/defaultTheme'
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
