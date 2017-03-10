import React from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'

import { updateCompanies } from '../state/wig20-reducer'
import UsersBudget from './users-budget'

export default connect (
  state => ({}),
  dispatch => ({
    updateCompaniesHelper: () => dispatch(updateCompanies())
  })
)(
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
              <LinkContainer to="/bank-view">
                <NavItem eventKey={3}>Bank-form</NavItem>
              </LinkContainer>
              <LinkContainer to="/wig-20">
                <NavItem eventKey={4}>WIG20</NavItem>
              </LinkContainer>
              <LinkContainer to="/chart">
                <NavItem eventKey={5}>Chart</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <UsersBudget />
        {this.props.children}
      </div>
    )
  }
}
)
