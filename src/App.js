import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Header from './molecules/Header';
import { updateEntries } from './actions/entries';
import { getEntries } from './services/entries';

class App extends Component {
  componentDidMount() {
    getEntries()
      .then((response) => this.props.updateEntries(response.items))
      .catch(console.error)
  }
  render() {
    return (
      <div>
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/portfolio/:projectSlug" component={Project} />
              </Switch>
            </div>
          </ BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  entries: state.entries,
});

const mapDispatchToProps = dispatch => ({
  updateEntries(entries) {
    dispatch(updateEntries(entries));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);