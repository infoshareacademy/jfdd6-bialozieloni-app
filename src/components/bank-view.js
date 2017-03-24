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
  changeAkceptacja,
  totalCapital,
  returnRate,
  stopLoss,
  initialPrice,
  companies,
  router,
  params
}) => {
  const limitVal = (companies.find( e => e.name ===  selectValue ).currentValue)
  const val = Math.floor(totalCapital/limitVal)
  const sel = (companies.find( f => f.name ===  selectValue ).signal)

  return (
    <Grid>
      <h1>Panel transakcji</h1>
      <Row>
        <Col xs={10} sm={4}>
          <FieldGroup
            id="iloscKS"
            type="Text"
            label="Ilość"
            value={ val}  //{iloscValue}
            onChange={(event) => changeIlosc(event.target.value)}
          />
          <FormGroup style={{marginTop: '5vmin'}} controlId="formControlsSelect">
            <ControlLabel>Walor</ControlLabel>
            <FormControl componentClass="select" placeholder="select" value={params.name || selectValue} onChange={(event) => {
              changeSelect(event.target.value)
              router.push('/bank-view')
            }}>
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
            <FieldGroup
              id="limitCeny"
              type="Text"
              label="Cena zakupu"
              value={ limitVal}  //{iloscValue}
              onChange={(event) => changeLimit(event.target.value)}
            />
          </FormGroup>
          <Button bsStyle="primary" style={{marginTop: '5vmin'}} onClick={(event) => changeSend({
            radioValue: radioValue,
            iloscValue: val,
            selectValue: params.name || selectValue,
            limitValue: limitVal
          })} disabled={val === 0}>Wyślij</Button>
        </Col>
        <Col xs={2} sm={8}>
          <Bank transactions={transactions} companies={companies}/>
        </Col>
      </Row>
    </Grid>
  )
}


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
    acceptedValue: state.bankData.acceptedValue,
    transactions: state.formData.transactions,
    totalCapital:state.budget.totalCapital,
    returnRate: state.budget.returnRate,
    stopLoss: state.budget.stopLoss,
    companies: state.companies.companies,

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
    changeAkceptacja: (value) => dispatch({
      type: 'bankForm/AKCEPTACJA',
      value
    }),
    changeSend: (transaction) => dispatch({
      type: 'bankForm/SEND',
      transaction
    })


  })
)(BankForm)
