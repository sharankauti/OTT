import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect, Route,Switch} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import MainNavigation from './Shared/Componets/Navigation/MainNavigation';
import SideNavigation from './Shared/Componets/Navigation/SideNavigation'

function App() {
  return (
    <>
     
        <MainNavigation/>
        <SideNavigation/>
          {/* <Switch>
              <Route path='/' exact component={User}></Route>
              <Route path='/:userId/places' exact component={UserPlaces}></Route>
              <Route path='/places/new' exact component={NewPlaces}></Route>
              <Redirect to='/'/>
          </Switch> */}
    </>
  );
}

export default App;
