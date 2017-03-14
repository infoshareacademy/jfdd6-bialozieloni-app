import React from 'react'
import { connect } from 'react-redux'
import {
  Grid,
  FormControl,
  FormGroup,
  ControlLabel,
  Radio,
  InputGroup,
  Row,
  Col
} from 'react-bootstrap'

import { setBudget, setReturnRate } from '../state/budget'

export default connect(
  // mapStateToProps
  state => ({
    value: state.budget.initialPrice,
    returnRate: state.budget.returnRate
  }),
  // mapDispatchToProps
  dispatch => ({
    setBudget: (value) => dispatch(setBudget(value)),
    setReturnRate: (value) => dispatch(setReturnRate(value))
  })
)(
  class UsersBudget extends React.Component {
    render() {
      const { value, returnRate, setBudget, setReturnRate } = this.props
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
                      <Radio name="stopaZwrotu" inline value={0.02} onChange={(event) => setReturnRate(event.target.value)}>
                        2%
                      </Radio>
                      {' '}
                      <Radio name="stopaZwrotu" inline value={0.04} onChange={(event) => setReturnRate(event.target.value)}>
                        4%
                      </Radio>
                      {' '}
                      <Radio name="stopaZwrotu" inline value={0.06} onChange={(event) => setReturnRate(event.target.value)}>
                        6%
                      </Radio>
                    </FormGroup>

                    <FormGroup>
                      <ControlLabel>
                        Kwota minimalnego zysku
                      </ControlLabel>
                      <InputGroup>
                        <InputGroup.Addon>PLN</InputGroup.Addon>
                        <FormControl value={(value * returnRate).toFixed(2)} type="text" disabled/>
                      </InputGroup>
                    </FormGroup>

                    <FormGroup>

                      <ControlLabel>Stop-Loss</ControlLabel>
                      <br/>

                      <Radio name="stopLoss" inline>
                        do 2% akceptuję spadek kursu
                      </Radio>
                      <br/>
                      <Radio name="stopLoss" inline>
                        do 4% akceptuję spadek kursu
                      </Radio>
                      <br/>
                      <Radio name="stopLoss" inline>
                        do 6% akceptuję spadek kursu
                      </Radio>
                      <br/>
                      <Radio name="stopLoss" inline>
                        mam mocne nerwy i inwestuję długoterminowo
                      </Radio>
                    </FormGroup>

                    <FormGroup>
                      <ControlLabel>
                        <h3>
                          <strong>
                            Aktualny budżet użytkownika
                          </strong>
                        </h3>
                      </ControlLabel>
                      <InputGroup>
                        <InputGroup.Addon>PLN</InputGroup.Addon>
                        <FormControl type="text" value={value} onChange={(event) => setBudget(event.target.value) }/>
                        <InputGroup.Addon>.00</InputGroup.Addon>
                      </InputGroup>
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
