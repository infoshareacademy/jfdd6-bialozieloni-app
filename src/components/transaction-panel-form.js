import React from 'react'
import { connect } from 'react-redux'
import {Grid,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button,
  Col,
  Row
  } from 'react-bootstrap'

import Bank from './transaction-panel-tabel'

const BankForm = ({
  changeSend,
  transactions,
  selectValue,
  changeIlosc,
  changeSelect,
  changeLimit,
  sell,
  totalCapital,
  companies,
  router,
  params,
  returnRate,
  stopLoss
}) => {
  const limitVal = (companies.find( e => e.name ===  selectValue ).currentValue);
  const tmp = parseFloat((totalCapital - transactions.reduce((prev, next) => prev + (next.iloscValue * next.limitValue), 0)).toFixed(2));
  const val = Math.floor(tmp/limitVal);
  return (
    <Grid>
      <h1>Panel transakcji</h1>
      <Row>
        <Col xs={10} sm={4}>
          <FieldGroup
            id="iloscKS"
            type="Text"
            label="Ilość"
            value={val}
            onChange={(event) => changeIlosc(event.target.value)}
          />
          <FormGroup style={{marginTop: '5vmin'}} controlId="formControlsSelect">
            <ControlLabel>Walor</ControlLabel>
            <FormControl componentClass="select" placeholder="select" value={params.name || selectValue} onChange={(event) => {
              changeSelect(event.target.value)
              router.push('/transaction-panel')
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
              value={ limitVal}
              onChange={(event) => changeLimit(event.target.value)}
            />
          </FormGroup>
          <Button bsStyle="primary" style={{marginTop: '5vmin'}} onClick={(event) => changeSend({
            iloscValue: val,
            selectValue: params.name || selectValue,
            limitValue: limitVal
          })} disabled={val === 0}>Kup</Button>
        </Col>
        <Col xs={2} sm={8}>
          <Bank transactions={transactions } stopLoss ={stopLoss} returnRate={returnRate} companies={companies} sell={sell} />
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
    iloscValue: state.bankData.iloscValue,
    selectValue: state.bankData.selectValue,
    limitValue: state.bankData.limitValue,
    transactions: state.formData.transactions,
    totalCapital:state.budget.totalCapital,
    returnRate: state.budget.returnRate,
    stopLoss: state.budget.stopLoss,
    companies: state.companies.companies
  }),

  dispatch => ({
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
    sell: (transactionId, profit) => dispatch({
      type: 'bankForm/SELL',
      transactionId,
      value: profit
    })
  })
)(BankForm)
