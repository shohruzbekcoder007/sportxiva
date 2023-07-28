import React from 'react';
import { ThemeProvider } from 'styled-components'
import defaultTheme from './theme/defaultTheme'
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import { ThemeProvider as MuiTheme } from '@mui/material/styles'
import muiTheme from './theme/muiTheme'
import Main from './components/Main';
import News from './components/News';
import Events from './components/Events';
import Organizers from './components/Organizers';
import Nav from './components/Nav';
import Register from './components/Register/Register';

function App() {
  return (
    <MuiTheme theme={muiTheme}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Nav/>}>
              <Route index element={<Main/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/events' element={<Events/>}/>
              <Route path='/organizers' element={<Organizers/>}/>
              <Route path='/register' element={<Register/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MuiTheme>
  );
}

export default App;
