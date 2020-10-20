import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import ToDo2 from './components/todo/todo.js';
import Signin from './context/auth/login.js'
import ToDo from './components/todo/todo-connected';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
// import TodoForm from './components/todo/form';
// import TodoList from './components/todo/list.js';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header SignForm={<Signin />}/>
        <Switch>

          <Route exact path="/">
             <ToDo />
          </Route>

        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}