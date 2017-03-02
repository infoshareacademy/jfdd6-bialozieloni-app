import React from 'react'
import {Grid, Radio, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Col, Row} from 'react-bootstrap'


const BankForm = (props) => (
  <Grid>
    <h1>Lorem Ipsum Bank</h1>
    <Row>
      <Col xs={1}></Col>
      <Col xs={4}>
    <FormGroup style={{marginTop: '20px'}}>
    <strong style={{marginRight:'25px'}}>Oferta</strong>

    <Radio inline name="KupnoSprzedaz">
      Kupno
    </Radio>
    {' '}
    <Radio inline name="KupnoSprzedaz">
      Sprzedaż
    </Radio>
</FormGroup>
    <FieldGroup
      id="iloscKS"
      type="Text"
      label="Ilość"
      placeholder="Wpisz ilość"
    />
    <FormGroup style={{marginTop: '40px'}} controlId="formControlsSelect">
      <ControlLabel>Walor</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="WIG20.1">WIG20.1</option>
        <option value="WIG20.2">WIG20.2</option>
        <option value="WIG20.3">WIG20.3</option>
        <option value="WIG20.">WIG20.4</option>
        <option value="WIG20.5">WIG20.5</option>
        <option value="WIG20.6">WIG20.6</option>
        <option value="WIG20.7">WIG20.7</option>
        <option value="WIG20.8">WIG20.8</option>
        <option value="WIG20.9">WIG20.9</option>
        <option value="WIG20.10">WIG20.10</option>
        <option value="WIG20.11">WIG20.11</option>
        <option value="WIG20.12">WIG20.12</option>
        <option value="WIG20.13">WIG20.13</option>
        <option value="WIG20.14">WIG20.14</option>
        <option value="WIG20.15">WIG20.15</option>
        <option value="WIG20.16">WIG20.16</option>
        <option value="WIG20.17">WIG20.17</option>
        <option value="WIG20.18">WIG20.18</option>
        <option value="WIG20.19">WIG20.19</option>
        <option value="WIG20.20">WIG20.20</option>
      </FormControl>
    </FormGroup>
    <FieldGroup
      id="limitCeny"
      type="Text"
      label="Limit ceny"
      placeholder="Wpisz sumę"
    />
    <Button bsStyle="primary" style={{marginTop: '20px'}}>Wyślij</Button>
      </Col>
      <Col xs={7}></Col>
      </Row>
  </Grid>
)


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup style={{marginTop: '40px'}} controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default BankForm
