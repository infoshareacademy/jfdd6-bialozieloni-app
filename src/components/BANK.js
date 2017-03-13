import React from 'react'
import {Grid, Table} from 'react-bootstrap'
const Bank = ({transactions}) => (
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
      transactions ?
        transactions.map(
          (transaction, index) => (
            <tr key={index}>
              <td>{transaction.radioValue}</td>
              <td>{transaction.iloscValue}</td>
              <td>{transaction.selectValue}</td>
              <td>{transaction.limitValue}</td>
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