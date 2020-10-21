import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ToDo from './components/todo/todo-connected';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
// import TodoForm from './components/todo/form';
import Auth from './context/auth/auth';
import AuthContext from './context/auth/context';
import Login from './context/auth/login';
import Signup from './context/auth/signup';


export default class App extends React.Component {
  render() {
    return (

      <BrowserRouter>

        <Header />
        <Switch>

          <Route exact path="/">
            <AuthContext>
              <Login />
              <Signup />
              <Auth action="read" >
                <ToDo />
              </Auth>

            </AuthContext>
          </Route>

        </Switch>
        <Footer />
      </BrowserRouter>

    );
  }
}