'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexLink, Link, browserHistory, IndexRoute, Redirect} from 'react-router';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import MainNavbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';

// create components
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isCollapsed: true};
  };
  componentDidMount() {
    console.log('App did mount');
  }
  componentWillReceiveProps() {
    console.log('App will receive props');
  }
  componentDidUpdate() {
    console.log('App did update');
  }
  componentWillUnmount() {

  }
  toggleCollapse() {
    const isCollapsed = !this.state.isCollapsed;
    this.setState({isCollapsed});
  }

    render() {
      return (
        <div>
          <MainNavbar location={this.props.location} />
          {this.props.children}
        </div>
        );
    }
}

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={'/'} component={App}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path={'home'} component={Home}></Route>
          <Route path={'about'} component={About}></Route>
        </Route>
      </Router>
    );
  }
}

// put component into html page
ReactDOM.render(
  <Root />, document.getElementById('app'));
