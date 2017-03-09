// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react'
import {Navbar, NavbarBrand} from 'reactstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar>
          <IndexLinkContainer to="/">
            <NavbarBrand>
              <img
                alt="CrowdFood"
                src="http://i65.tinypic.com/20uda53.png"
                height="30"
              >
              </img>
              <span>CrowdFood</span>
            </NavbarBrand>
          </IndexLinkContainer>
        </Navbar>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
