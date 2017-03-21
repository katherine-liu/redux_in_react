'use strict';

import React, {Component} from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, Redirect } from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';

// create components
class Home extends Component {
  render() {
    let imgStyle = {
      width: '400px',
      height: '200px',
    }
    return (
      <div>
      <Grid>
        <Row>
          <Col xs={6}>
          <div style={imgStyle}>
            <Link to="/page1">
              <div><img src="../asset/travel-on-road.jpg" className="img-responsive" /></div>
              <div className="text-center">Page 1</div>
            </Link>
          </div>
          </Col>
          <Col xs={6}>
          <div style={imgStyle}>
            <Link className="" to="/page2">
              <div><img src="../asset/aircraft-in-sky.jpg" className="img-responsive" /></div>
              <div className="text-center">Page 2</div>
            </Link>
          </div>
          </Col>
        </Row>
      </Grid>
        {this.props.children}
      </div>
    );
  }
}

export {Home as default};
