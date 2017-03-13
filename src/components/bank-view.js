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

 import Bank from '../components/BANK'



const BankForm = ({
  changeSend,
  transactions,
  radioValue,
  selectValue,
  limitValue,
  iloscValue,
  changeRadio,
  changeIlosc,
  changeSelect,
  changeLimit,
  initialPrice,
  companies
}) => (
  <Grid>
    <h1>Lorem Ipsum Bank</h1>
    <Row>
      <Col xs={1} sm={1}/>
      <Col xs={10} sm={4}>
    <FormGroup style={{marginTop: '5vmin'}}>
    <strong style={{marginRight:'2vmin'}}>Oferta</strong>
      <Radio inline checked={radioValue==='Kupno' ? "checked" : ''} value="Kupno" name="KupnoSprzedaz" onChange={(event) => changeRadio(event.target.value)}>
      Kupno
    </Radio>
    {' '}
    <Radio inline checked={radioValue==='Sprzedaż' ? "checked" : ''} value="Sprzedaż" name="KupnoSprzedaz" onChange={(event) => changeRadio(event.target.value)}>
      Sprzedaż
    </Radio>
</FormGroup>
    <FieldGroup
      id="iloscKS"
      type="Text"
      label="Ilość"
      placeholder={ initialPrice/(companies.find( e => e.name ===  selectValue ).currentValue)}  //{iloscValue}
      onChange={(event) => changeIlosc(event.target.value)}
    />
    <FormGroup style={{marginTop: '5vmin'}} controlId="formControlsSelect">
      <ControlLabel>Walor</ControlLabel>
      <FormControl componentClass="select" placeholder="select" value={selectValue} onChange={(event) => changeSelect(event.target.value)}>
        <option  value="ALIOR">ALIOR</option>
        <option  value="ASSECOPOL">ASSECOPOL</option>
        <option  value="BZWBK">BZWBK</option>
        <option  value="CCC">CCC</option>
        <option  value="CYFRPLSAT">CYFRPLSAT</option>
        <option  value="ENEA">ENEA</option>
        <option  value="ENERGA">ENERGA</option>
        <option  value="EUROCASH">EUROCASH</option>
        <option  value="KGHM">KGHM</option>
        <option value="LOTOS">LOTOS</option>
        <option  value="LPP">LPP</option>
        <option  value="MBANK">MBANK</option>
        <option  value="ORANGEPL">ORANGEPL</option>
        <option  value="PEKAO">PEKAO</option>
        <option value="PGE">PGE</option>
        <option  value="PGNIG">PGNIG</option>
        <option value="PKNORLEN">PKNORLEN</option>
        <option  value="PKOBP">PKOBP</option>
        <option value="PZU">PZU</option>
        <option value="TAURONPE">TAURONPE</option>
      </FormControl>
    </FormGroup >
        <FormGroup style={{marginTop: '5vmin'}}>
          <ControlLabel>Limit ceny</ControlLabel>
          <InputGroup>
            <FormControl type="text" placeholder={limitValue} onChange={(event) => changeLimit(event.target.value)} />
            <DropdownButton
              componentClass={InputGroup.Button}
              id="input-dropdown-addon"
              title=""
              disabled
            >
              <MenuItem key="1">PKC</MenuItem>
              <MenuItem key="2">PCR</MenuItem>
              <MenuItem key="3">PEG</MenuItem>
            </DropdownButton>
          </InputGroup>
        </FormGroup>
    <Button bsStyle="primary" style={{marginTop: '5vmin'}} onClick={(event) => changeSend({
      radioValue: radioValue,
      iloscValue: iloscValue,
      selectValue: selectValue,
      limitValue: limitValue
    })}>Wyślij</Button>
      </Col>
      <Col xs={1} sm={7}>
        <Bank transactions={transactions}/>
      </Col>
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
    radioValue: state.bankData.radioValue,
    iloscValue: state.bankData.iloscValue,
    selectValue: state.bankData.selectValue,
    limitValue: state.bankData.limitValue,
    transactions: state.formData.transactions,
    initialPrice:state.budget.initialPrice,
    companies: state.companies.companies
  }),

  dispatch => ({
    changeRadio: (value) => dispatch({
      type: 'bankForm/RADIO',
      value
    }),
    changeIlosc: (value) => dispatch({
      type: 'bankForm/ILOSC',
      value
    }),
    changeSelect: (value) => dispatch({
      type: 'bankForm/SELECT',
      value
    }),
    changeLimit: (value) => dispatch({
      type: 'bankForm/LIMIT',
      value
    }),
    changeSend: (transaction) => dispatch({
      type: 'bankForm/SEND',
      transaction
    }),

})
)(BankForm)
