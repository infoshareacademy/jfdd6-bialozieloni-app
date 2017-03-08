import React from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'

import { updateCompanies } from '../state/wig20-reducer'

class App extends React.Component {
  componentWillMount() {
    this.props.updateCompaniesHelper()
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

export default connect (
  state => ({}),
  dispatch => ({
    updateCompaniesHelper: () => dispatch(updateCompanies())
  })
)(App)