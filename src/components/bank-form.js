import React from 'react'
import {Radio, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'


const BankForm = (props) => (
  <div>
    Oferta
    <Radio inline>
      Kupno
    </Radio>
    {' '}
    <Radio inline>
      Sprzedaż
    </Radio>

    <FieldGroup
      id="formControlsText"
      type="Text"
      label="Ilość"
      placeholder="Enter text"
    />
    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Walor</ControlLabel>
      <FormControl componentClass="WIG20.1" placeholder="WIG20.1">
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
{/*</FieldGroup>*/}
  </div>
)


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default BankForm
