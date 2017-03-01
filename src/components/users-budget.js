import React from 'react'
import Users from './users'
import UsersTable from './users-table'
import {FormControl, FormGroup, Button, ControlLabel, Radio, Checkbox, InputGroup} from 'react-bootstrap'

const users = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe'
  },
  {
    id: 2,
    name: 'Bill',
    surname: 'Gates'
  }
]

const styleEx = {width: '500px', margin: '0 auto', border: '2px solid red'};

const UsersBudget = () => (
  <div>
    <div className="container">
      {FormBudget}
    </div>
  </div>
)



const FormBudget = (
  <form>
    <FormGroup>
      <InputGroup>
        <InputGroup.Addon>$</InputGroup.Addon>
        <FormControl type="text" />
        <InputGroup.Addon>.00</InputGroup.Addon>
      </InputGroup>
    </FormGroup>

    <FormGroup
      id="formControlsText"
      type="text"
      label="Text"
      placeholder="Enter text"
    />
    <FormGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
    />
    <FormGroup
      id="formControlsPassword"
      label="Password"
      type="password"
    />
    <FormGroup
      id="formControlsFile"
      type="file"
      label="File"
      help="Example block-level help text here."
    />

    <Checkbox checked readOnly>
      Checkbox
    </Checkbox>
    <Radio checked readOnly>
      Radio
    </Radio>

    <FormGroup>
      <Checkbox inline>
        1
      </Checkbox>
      {' '}
      <Checkbox inline>
        2
      </Checkbox>
      {' '}
      <Checkbox inline>
        3
      </Checkbox>
    </FormGroup>
    <FormGroup>
      <Radio inline>
        1
      </Radio>
      {' '}
      <Radio inline>
        2
      </Radio>
      {' '}
      <Radio inline>
        3
      </Radio>
    </FormGroup>

    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>
    <FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>Multiple select</ControlLabel>
      <FormControl componentClass="select" multiple>
        <option value="select">select (multiple)</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Textarea</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>



    <Button type="submit">
      Submit
    </Button>
  </form>
);


export default UsersBudget