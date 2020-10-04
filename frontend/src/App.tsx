import React from 'react';
import './App.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Login } from 'Pages/Login/Login';
import { StartPage } from 'Pages/StartPage/StartPage';
import { Register } from 'Pages/Register/Register';
import { Header } from 'elements/Header/Header';
import { Profile } from 'Pages/Profile/Profile';

const App = () => {
    const token = false;

    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    {token ? <Redirect to="/tasks" /> : <StartPage />}
                </Route>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
        </>
    );
};

export default App;
