import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import Header from './molecules/Header';
import Footer from './molecules/Footer';
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
                <Route path="/bio" component={Bio} />
                <Route path="/contact" component={Contact} />
              </Switch>
              <Footer>Copyright © 2018</Footer> 
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