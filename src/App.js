import React, { Component } from 'react';
import './App.css';
import Main from './Containers/Main';
import Login from './Containers/Login';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
