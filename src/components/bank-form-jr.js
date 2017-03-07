import React from 'react'
import { connect } from 'react-redux'
import {Grid,
  Radio,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button,
  Col,
  Row,
  InputGroup,
  MenuItem,
  DropdownButton} from 'react-bootstrap'
// import {ks} from '../state/bank-data-jr'


const BankForm = ({radio, ilosc}) => (
  <Grid>
    <h1>Lorem Ipsum Bank</h1>
    <Row>
      <Col xs={1} sm={1}/>
      <Col xs={10} sm={4}>
    <FormGroup style={{marginTop: '5vmin'}}>
    <strong style={{marginRight:'2vmin'}}>Oferta</strong>

    <Radio inline value="Kupno" name="KupnoSprzedaz" onChange={(event) => radio(event.target.value)}>
      Kupno
    </Radio>
    {' '}
    <Radio inline value="Sprzedaz" name="KupnoSprzedaz" onChange={(event) => radio(event.target.value)}>
      Sprzedaż
    </Radio>
</FormGroup>
    <FieldGroup
      id="iloscKS"
      type="Text"
      label="Ilość"
      placeholder="Wpisz ilość"
      onChange={(event) => ilosc(event.target.value)}
    />
    <FormGroup style={{marginTop: '5vmin'}} controlId="formControlsSelect">
      <ControlLabel>Walor</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="ALIOR">ALIOR</option>
        <option value="ASSECOPOL">ASSECOPOL</option>
        <option value="BZWBK">BZWBK</option>
        <option value="CCC">CCC</option>
        <option value="CYFRPLSAT">CYFRPLSAT</option>
        <option value="ENEA">ENEA</option>
        <option value="ENERGA">ENERGA</option>
        <option value="EUROCASH">EUROCASH</option>
        <option value="KGHM">KGHM</option>
        <option value="LOTOS">LOTOS</option>
        <option value="LPP">LPP</option>
        <option value="MBANK">MBANK</option>
        <option value="ORANGEPL">ORANGEPL</option>
        <option value="PEKAO">PEKAO</option>
        <option value="PGE">PGE</option>
        <option value="PGNIG">PGNIG</option>
        <option value="PKNORLEN">PKNORLEN</option>
        <option value="PKOBP">PKOBP</option>
        <option value="PZU">PZU</option>
        <option value="TAURONPE">TAURONPE</option>
      </FormControl>
    </FormGroup >
        <FormGroup style={{marginTop: '5vmin'}}>
          <ControlLabel>Limit ceny</ControlLabel>
          <InputGroup>
            <FormControl type="text" />
            <DropdownButton
              componentClass={InputGroup.Button}
              id="input-dropdown-addon"
              title="Waluta"
            >
              <MenuItem key="1">PLN</MenuItem>
              <MenuItem key="2">USD</MenuItem>
              <MenuItem key="3">EUR</MenuItem>
            </DropdownButton>
          </InputGroup>
        </FormGroup>
    <Button bsStyle="primary" style={{marginTop: '5vmin'}}>Wyślij</Button>
      </Col>
      <Col xs={1} sm={7}/>
      </Row>
  </Grid>
)


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup style={{marginTop: '5vmin'}} controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default connect(
  state => ({
    value: state.bankData.radioValue
  }),

  dispatch => ({
    radio: (value) => dispatch({
      type: 'ks',
      value
    }),
    ilosc: (value) => dispatch({
      type: 'ilosc',
      value
    })
})
)(BankForm)
