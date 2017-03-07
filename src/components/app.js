import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'

const App = (props) => (
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
          <LinkContainer to="/bank-view">
            <NavItem eventKey={3}>Bank-form</NavItem>
          </LinkContainer>
          <LinkContainer to="/wig-20">
            <NavItem eventKey={3}>WIG20</NavItem>
          </LinkContainer>
          <LinkContainer to="/chart">
            <NavItem eventKey={4}>Chart</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {props.children}
  </div>
)

export default App