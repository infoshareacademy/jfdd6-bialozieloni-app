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



const BankForm = ({changeSend, transactions, radioValue, selectValue, limitValue, iloscValue, changeRadio, changeIlosc, changeSelect, changeLimit}) => (
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
      placeholder={iloscValue}
      onChange={(event) => changeIlosc(event.target.value)}
    />
    <FormGroup style={{marginTop: '5vmin'}} controlId="formControlsSelect">
      <ControlLabel>Walor</ControlLabel>
      <FormControl componentClass="select" placeholder="select" onChange={(event) => changeSelect(event.target.value)}>
        <option selected={selectValue === 'ALIOR' ? "selected" : '' } value="ALIOR">ALIOR</option>
        <option selected={selectValue === 'ASSECOPOL' ? "selected" : '' } value="ASSECOPOL">ASSECOPOL</option>
        <option selected={selectValue === 'BZWBK' ? "selected" : '' } value="BZWBK">BZWBK</option>
        <option selected={selectValue === 'CCC' ? "selected" : '' } value="CCC">CCC</option>
        <option selected={selectValue === 'CYFRPLSAT' ? "selected" : '' } value="CYFRPLSAT">CYFRPLSAT</option>
        <option selected={selectValue === 'ENEA' ? "selected" : '' } value="ENEA">ENEA</option>
        <option selected={selectValue === 'ENERGA' ? "selected" : '' } value="ENERGA">ENERGA</option>
        <option selected={selectValue === 'EUROCASH' ? "selected" : '' } value="EUROCASH">EUROCASH</option>
        <option selected={selectValue === 'KGHM' ? "selected" : '' } value="KGHM">KGHM</option>
        <option selected={selectValue === 'LOTOS' ? "selected" : '' } value="LOTOS">LOTOS</option>
        <option selected={selectValue === 'LPP' ? "selected" : '' } value="LPP">LPP</option>
        <option selected={selectValue === 'MBANK' ? "selected" : '' } value="MBANK">MBANK</option>
        <option selected={selectValue === 'ORANGEPL' ? "selected" : '' } value="ORANGEPL">ORANGEPL</option>
        <option selected={selectValue === 'PEKAO' ? "selected" : '' } value="PEKAO">PEKAO</option>
        <option selected={selectValue === 'PGE' ? "selected" : '' } value="PGE">PGE</option>
        <option selected={selectValue === 'PGNIG' ? "selected" : '' } value="PGNIG">PGNIG</option>
        <option selected={selectValue === 'PKNORLEN' ? "selected" : '' } value="PKNORLEN">PKNORLEN</option>
        <option selected={selectValue === 'PKOBP' ? "selected" : '' } value="PKOBP">PKOBP</option>
        <option selected={selectValue === 'PZU' ? "selected" : '' } value="PZU">PZU</option>
        <option selected={selectValue === 'CTAURONPE' ? "selected" : '' } value="TAURONPE">TAURONPE</option>
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
    transactions: state.formData.transactions
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
