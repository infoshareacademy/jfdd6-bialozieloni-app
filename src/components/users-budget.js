import React from 'react'
import { connect } from 'react-redux'
import {
  Grid,
  FormControl,
  FormGroup,
  Button,
  ControlLabel,
  Radio,
  InputGroup,
  Row,
  Col
} from 'react-bootstrap'

import { setBudget } from '../state/budget'

export default connect(
  // mapStateToProps
  state => ({
    value: state.budget.initialPrice
  }),
  // mapDispatchToProps
  dispatch => ({
    setBudget: (value) => dispatch(setBudget(value))
  })
)(
  class UsersBudget extends React.Component {
    render() {
      const { value, setBudget } = this.props
      console.log(value);
      return (
        <div>
          <div className="container">
            <Grid>
              <Row>
                <Col xs={4}></Col>
                <Col xs={4}>

                  <form>
                    <FormGroup>
                      <ControlLabel>
                        <h3>
                          <strong>
                            Kwota do zainwestowania
                          </strong>
                        </h3>
                      </ControlLabel>
                      <InputGroup>
                        <InputGroup.Addon>PLN</InputGroup.Addon>
                        <FormControl type="text" value={value} onChange={(event) => setBudget(event.target.value) }/>
                        <InputGroup.Addon>.00</InputGroup.Addon>
                      </InputGroup>
                    </FormGroup>

                    <FormGroup>
                      <ControlLabel>Minimalna stopa zwrotu</ControlLabel>
                      <br />
                      <Radio name="stopaZwrotu" inline value={0.02} onChange={(event) => console.log(parseFloat(event.target.value))}>
                        2%
                      </Radio>
                      {' '}
                      <Radio name="stopaZwrotu" inline value="4">
                        4%
                      </Radio>
                      {' '}
                      <Radio name="stopaZwrotu" inline value="6">
                        6%
                      </Radio>
                    </FormGroup>

                    <FormGroup>
                      <ControlLabel>
                        Kwota minimalnego zysku
                      </ControlLabel>
                      <InputGroup>
                        <InputGroup.Addon>PLN</InputGroup.Addon>
                        <FormControl value={value * 0.02} type="text"/>
                        <InputGroup.Addon>.00</InputGroup.Addon>
                      </InputGroup>
                    </FormGroup>

                    <FormGroup>

                      <ControlLabel>Stop-Loss</ControlLabel>
                      <br/>

                      <Radio name="stopaZwrotu" inline>
                        do 2% akceptuję spadek kursu
                      </Radio>
                      <br/>
                      <Radio name="stopaZwrotu" inline>
                        do 4% akceptuję spadek kursu
                      </Radio>
                      <br/>
                      <Radio name="stopaZwrotu" inline>
                        do 6% akceptuję spadek kursu
                      </Radio>
                      <br/>
                      <Radio name="stopaZwrotu" inline>
                        mam mocne nerwy i inwestuję długoterminowo
                      </Radio>
                    </FormGroup>

                    <FormGroup controlId="formControlsSelect">
                      <ControlLabel>Wybierz walutę</ControlLabel>
                      <FormControl componentClass="select">
                        <option value="select">PLN</option>
                        <option value="select">Marki</option>
                        <option value="other">Dolce</option>
                        <option value="other">Złote zęby</option>
                      </FormControl>
                    </FormGroup>

                    <FormGroup style={{textAlign: 'center'}}>
                      <Button type="submit">
                        Wyślij
                      </Button>
                    </FormGroup>
                  </form>
                </Col>
                <Col xs={4}></Col>
              </Row>
            </Grid>
          </div>
        </div>
      )
    }
  }
)
