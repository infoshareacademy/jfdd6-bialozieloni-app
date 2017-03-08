import React from 'react'

import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'

class App extends React.Component {
  componentWillMount() {

  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                Home
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/bank-form">
                <NavItem eventKey={3}>Bank-form</NavItem>
              </LinkContainer>
              <LinkContainer to="/wig-20">
                <NavItem eventKey={3}>WIG20</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    )
  }
}

export default App