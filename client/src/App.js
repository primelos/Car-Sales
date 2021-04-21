import React from "react";
import CarHome from './components/CarHome'
import PrivateRoute from './components/PrivateRoute'
import { Route } from 'react-router-dom'
import Login from './components/Login'

const App = () => {
  


  return (
    <div className='main-page'>
      <Route exact path='/' component={Login} />

      <PrivateRoute path='/protected' component={CarHome} />
    </div>
  );
};

export default App;