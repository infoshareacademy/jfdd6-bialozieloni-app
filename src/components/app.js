import React from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, NavItem, Form, FormGroup, ControlLabel, Button, FormControl, Col, Checkbox} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'


import { updateCompanies } from '../state/wig20-reducer'
import UsersBudget from './users-budget'
import { fetchSession, logout } from '../state/session'


export default connect (
  state => ({
    session: state.session,
    user: state.user
  }),
  dispatch => ({
    updateCompaniesHelper: () => dispatch(updateCompanies()),
    fetchSessionHelper: (username, password) => dispatch(fetchSession(username, password)),
    logoutHelper: () => dispatch(logout())
  })
)(
  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        username: '',
        password: ''
      }
    }


    componentWillMount() {
      this.props.updateCompaniesHelper()
    }

    render() {
      return this.props.session.data === null ?
        <section className="logon">
          <div className="login"><span className="login__title">LOGOWANIE</span>
            <Form horizontal onSubmit={(event) => {
              event.preventDefault()
              this.props.fetchSessionHelper(this.state.username, this.state.password)
            }}>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel}>
                  Nazwa użytkownika
                </Col>
                <FormControl type="text" placeholder="Nazwa użytkownika" value={this.state.username}
                             onChange={(event) => this.setState({ username: event.target.value })}/>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel}>
                  Hasło
                </Col>
                <FormControl type="password" placeholder="Twoje hasło" value={this.state.password}
                             onChange={(event) => this.setState({ password: event.target.value })}/>
              </FormGroup>
              <FormGroup>
                <Button type="submit" bsStyle="success">
                  Zaloguj mnie
                </Button>
              </FormGroup>
            </Form>
          </div>
        </section> :
        (
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 24 24">
                    <path
                      d="M24 3.055l-6 1.221 1.716 1.708-5.351 5.358-3.001-3.002-7.336 7.242 1.41 1.418 5.922-5.834 2.991 2.993 6.781-6.762 1.667 1.66 1.201-6.002zm-16.69 6.477l-3.282-3.239 1.41-1.418 3.298 3.249-1.426 1.408zm15.49 3.287l1.2 6.001-6-1.221 1.716-1.708-2.13-2.133 1.411-1.408 2.136 2.129 1.667-1.66zm1.2 8.181v2h-24v-22h2v20h22z"/>
                  </svg>
                  GW Calc
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to="/bank-view">
                  <NavItem eventKey={3}>Bank-form</NavItem>
                </LinkContainer>
                <LinkContainer to="/bank-view">
                  <NavItem>Jesteś zalogowany jako: {this.state.username}</NavItem>
                </LinkContainer>
              </Nav>
              <Nav pullRight className="nav__btn">
                <Button bsStyle="danger"  className= 'btn_logout' onClick={() => this.props.logoutHelper() }>Wyloguj się</Button>
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
