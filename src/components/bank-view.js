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



const BankForm = ({objectValue, changeRadio, changeIlosc, changeSelect, changeLimit, changeSend}) => (
  <Grid>
    <h1>Lorem Ipsum Bank</h1>
    <Row>
      <Col xs={1} sm={1}/>
      <Col xs={10} sm={4}>
    <FormGroup style={{marginTop: '5vmin'}}>
    <strong style={{marginRight:'2vmin'}}>Oferta</strong>
      <Radio inline checked={objectValue[ objectValue.length - 1 ].radioValue==='Kupno' ? "checked" : ''} value="Kupno" name="KupnoSprzedaz" onChange={(event) => changeRadio(event.target.value)}>
      Kupno
    </Radio>
    {' '}
    <Radio inline checked={objectValue[ objectValue.length - 1 ].radioValue==='Sprzedaż' ? "checked" : ''} value="Sprzedaż" name="KupnoSprzedaz" onChange={(event) => changeRadio(event.target.value)}>
      Sprzedaż
    </Radio>
</FormGroup>
    <FieldGroup
      id="iloscKS"
      type="Text"
      label="Ilość"
      placeholder={objectValue[ objectValue.length - 1 ].iloscValue}
      onChange={(event) => changeIlosc(event.target.value)}
    />
    <FormGroup style={{marginTop: '5vmin'}} controlId="formControlsSelect">
      <ControlLabel>Walor</ControlLabel>
      <FormControl componentClass="select" placeholder="select" onChange={(event) => changeSelect(event.target.value)}>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'ALIOR' ? "selected" : '' } value="ALIOR">ALIOR</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'ASSECOPOL' ? "selected" : '' } value="ASSECOPOL">ASSECOPOL</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'BZWBK' ? "selected" : '' } value="BZWBK">BZWBK</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'CCC' ? "selected" : '' } value="CCC">CCC</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'CYFRPLSAT' ? "selected" : '' } value="CYFRPLSAT">CYFRPLSAT</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'ENEA' ? "selected" : '' } value="ENEA">ENEA</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'ENERGA' ? "selected" : '' } value="ENERGA">ENERGA</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'EUROCASH' ? "selected" : '' } value="EUROCASH">EUROCASH</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'KGHM' ? "selected" : '' } value="KGHM">KGHM</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'LOTOS' ? "selected" : '' } value="LOTOS">LOTOS</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'LPP' ? "selected" : '' } value="LPP">LPP</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'MBANK' ? "selected" : '' } value="MBANK">MBANK</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'ORANGEPL' ? "selected" : '' } value="ORANGEPL">ORANGEPL</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'PEKAO' ? "selected" : '' } value="PEKAO">PEKAO</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'PGE' ? "selected" : '' } value="PGE">PGE</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'PGNIG' ? "selected" : '' } value="PGNIG">PGNIG</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'PKNORLEN' ? "selected" : '' } value="PKNORLEN">PKNORLEN</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'PKOBP' ? "selected" : '' } value="PKOBP">PKOBP</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'PZU' ? "selected" : '' } value="PZU">PZU</option>
        <option selected={objectValue[ objectValue.length - 1 ].selectValue === 'CTAURONPE' ? "selected" : '' } value="TAURONPE">TAURONPE</option>
      </FormControl>
    </FormGroup >
        <FormGroup style={{marginTop: '5vmin'}}>
          <ControlLabel>Limit ceny</ControlLabel>
          <InputGroup>
            <FormControl type="text" placeholder={objectValue[ objectValue.length - 1 ].limitValue} onChange={(event) => changeLimit(event.target.value)} />
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
    <Button bsStyle="primary" style={{marginTop: '5vmin'}} onClick={(event) => changeSend()}>Wyślij</Button>
      </Col>
      <Col xs={1} sm={7}>
        <Bank objectValue={objectValue}/>
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
    objectValue: state.bankData.objectValue
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
    changeSend: (value) => dispatch({
      type: 'bankForm/SEND',
      value
    }),

})
)(BankForm)
