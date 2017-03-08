import React from 'react'
import {Grid, Table} from 'react-bootstrap'
const objectValue = 0;
const Bank = ({objectValue}) => (
<Grid>
  <Table striped>
    <thead>
    <tr>
      <th>Oferta</th>
      <th>Ilosc</th>
      <th>Walor</th>
      <th>Limit ceny</th>
    </tr>
    </thead>
    <tbody>
    {
      objectValue ?
        objectValue.map(
          (formData, index) => (
            <tr key={index}>
              <td>{formData.radioValue}</td>
              <td>{formData.iloscValue}</td>
              <td>{formData.selectValue}</td>
              <td>{formData.limitValue}</td>
            </tr>
          )
        ) :
        <tr>
          <td colSpan="4">
            Waiting for groups...
          </td>
        </tr>
    }
    </tbody>
  </Table>
</Grid>
)

export default Bank