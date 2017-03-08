import React from 'react'
import {Grid, Table} from 'react-bootstrap'

const Bank = () => (
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
      groups.data ?
        groups.data.map(
          group => (
            <tr key={group.id}>
              <td>{group.id}</td>
              <td>{group.name}</td>
              <td>{group.studentIds.length}</td>
              <td>{group.studentIds.length}</td>
            </tr>
          )
        ) :
        <tr>
          <td colSpan="3">
            Waiting for groups...
          </td>
        </tr>
    }
    </tbody>
  </Table>
<p> Oferta:</p>
<p>Ilosc: </p>
<p>Walor: </p>
<p>Limit ceny: </p>
</Grid>
)

export default Bank