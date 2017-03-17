import React from 'react'
import {connect} from 'react-redux'
import {
  Grid,
  FormControl,
  FormGroup,
  ControlLabel,
  Radio,
  InputGroup,
  Row,
  Col,
  Button
} from 'react-bootstrap'

import {setBudget, setReturnRate, increaseTotalCapital, currentBudget} from '../state/budget'

export default connect(
  // mapStateToProps
  state => ({
    value: state.budget.initialPrice,
    returnRate: state.budget.returnRate,
    totalCapital: state.budget.totalCapital,
    currentBudget: state.budget.currentBudget,
    transactions: state.formData.transactions

  }),
  // mapDispatchToProps
  dispatch => ({
    setBudget: (value) => dispatch(setBudget(value)),
    setReturnRate: (value) => dispatch(setReturnRate(value)),
    increaseTotalCapital: (value) => dispatch(increaseTotalCapital(value)),
    currentBudget: (value) => dispatch(currentBudget(value))
  })
)(
  class UsersBudget extends React.Component {
    render() {
      const { transactions, value, returnRate, setBudget, setReturnRate, increaseTotalCapital, totalCapital, currentBudget} = this.props
      console.log(value);
      return (
        <div>

          <Grid>
            <Row>
              <Col md={4}>
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
                  <Radio name="stopaZwrotu" inline value={0.02}
                         onChange={(event) => setReturnRate(event.target.value)}>
                    2%
                  </Radio>
                  {' '}
                  <Radio name="stopaZwrotu" inline value={0.04}
                         onChange={(event) => setReturnRate(event.target.value)}>
                    4%
                  </Radio>
                  {' '}
                  <Radio name="stopaZwrotu" inline value={0.06}
                         onChange={(event) => setReturnRate(event.target.value)}>
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
                  </InputGroup><br/>
                  <Button type="button" className="btn btn-primary" bsStyle="success" onClick={(event) => increaseTotalCapital(value) }>Zainwestuj</Button>

                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <ControlLabel>
                    <h3>
                      <strong>
                        Suma kapitału
                      </strong>
                    </h3>
                  </ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>PLN</InputGroup.Addon>
                    <FormControl type="text" value={totalCapital} disabled/>
                    <InputGroup.Addon>.00</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <ControlLabel>
                    <h3><br/>
                      <strong>
                        Aktualny budżet użytkownika
                      </strong>
                    </h3>
                  </ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>PLN</InputGroup.Addon>
                    <FormControl type="text" value={totalCapital - transactions.reduce((prev, next) => prev + (next.iloscValue * next.limitValue), 0)} disabled/>
                    <InputGroup.Addon>.00</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>

                  <FormGroup>
                    <ControlLabel>
                      <h3>
                        <strong>
                          Suma zysków
                        </strong>
                      </h3>
                    </ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>PLN</InputGroup.Addon>
                      <FormControl type="text" value={value} disabled />
                      <InputGroup.Addon>.00</InputGroup.Addon>
                    </InputGroup>
                  </FormGroup>
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
              </Col>

            </Row>
          </Grid>
        </div>

      )
    }
  }
)
