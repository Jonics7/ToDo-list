import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from 'Pages/Login/Login';
import StartPage from 'Pages/StartPage/StartPage';
import Register from 'Pages/Register/Register';

const App = () => {

  return (
    <Switch>
      <Route exact path='/start-page' component={StartPage}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
    </Switch>
  );
}

export default App;
