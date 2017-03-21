'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class MainNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isCollapsed: true};
  }

  toggleCollapse() {
    const isCollapsed = !this.state.isCollapsed;
    this.setState({isCollapsed});
  }

  render() {
    const navClass = this.state.isCollapsed ? "collapse" : "";
    const homeClass = this.props.location.pathname.match(/^\/home/) ? "active" : "";
    const aboutClass = this.props.location.pathname.match(/^\/about/) ? "active" : "";
    return (
      <div>
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Learn Redux</Link>
          </Navbar.Brand>
          <button type="button" className="navbar-toggle collapsed" onClick={this.toggleCollapse.bind(this)}>
            <span className="sr-only">Toggle Navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </Navbar.Header>
        <Nav className={"navbar-collapse " + navClass}>
          <LinkContainer to={{pathname: 'home'}}>
            <NavItem eventKey={1} className={homeClass} onClick={this.toggleCollapse.bind(this)}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to={{pathname: 'about'}}>
            <NavItem eventKey={2} className={aboutClass} onClick={this.toggleCollapse.bind(this)}>About</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
      </div>
    );
  }
}

export { MainNavbar as default };
