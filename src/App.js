import React from 'react';
import { ThemeProvider } from 'styled-components'
import defaultTheme from './theme/defaultTheme'
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import { ThemeProvider as MuiTheme } from '@mui/material/styles'
import muiTheme from './theme/muiTheme'
import Main from './components/Main';
import News from './components/News';
import Events from './components/Events';
import Nav from './components/Nav';
import MainRegistr from './components/MainRegistr';
import MainOrganizers from './components/Organizers';
import MainGuests from './components/MainGuests';
import MainMembers from './components/MainMembers';
import MainCountryMembers from './components/MainCountryMembers';


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
              <Route path='/organizers' element={<MainOrganizers/>}/>
              <Route path='/register' element={<MainRegistr/>}/>
              <Route path='/guests' element={<MainGuests/>}/>
              <Route path='/members' element={<MainMembers/>}/>
              <Route path='/countrymembers' element={<MainCountryMembers/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MuiTheme>
  );
}

export default App;
