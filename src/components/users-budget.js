import React from 'react'

import {
  Grid,
  FormControl,
  FormGroup,
  Button,
  ControlLabel,
  Radio,
  InputGroup,
  Row,
  Col,

} from 'react-bootstrap'


const UsersBudget = () => (
  <div>
    <div className="container">
      {FormBudget}
    </div>
  </div>
)


const FormBudget = (
  <Grid>
    <Row>
      <Col xs={4}></Col>
      <Col xs={4}>

        <form>
          <FormGroup>
            <ControlLabel>
              <h3>
                <strong>
                  Kwota do zinwestowania
                </strong>
              </h3>
            </ControlLabel>
            <InputGroup>
              <InputGroup.Addon>PLN</InputGroup.Addon>
              <FormControl type="text"/>
              <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Minimalna stopa zwrotu</ControlLabel>
            <br />
            <Radio name="stopaZwrotu" inline>
              2%
            </Radio>
            {' '}
            <Radio name="stopaZwrotu" inline>
              4%
            </Radio>
            {' '}
            <Radio name="stopaZwrotu" inline>
              6%
            </Radio>
          </FormGroup>

          <FormGroup>
            <ControlLabel>
              Kwota minimalnego zysku
            </ControlLabel>
            <InputGroup>
              <InputGroup.Addon>PLN</InputGroup.Addon>
              <FormControl type="text"/>
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
);

export default UsersBudget