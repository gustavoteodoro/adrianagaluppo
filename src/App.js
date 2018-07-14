import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/projeto" component={Project} />
          </Switch>
      </ BrowserRouter>
    );
  }
}

export default App;
