import React from 'react'
import {Grid, Table} from 'react-bootstrap'
const Bank = ({transactions, companies, returnRate, stopLoss}) => (
<Grid>

const Bank = ({transactions, companies}) => (
<Grid fluid>
  <Table striped>
    <thead>
    <tr>
      <th>Cena</th>
      <th>Sygnał sprzedaży</th>
      <th>Cena zakupu</th>
      <th>Zysk/Strata</th>
      <th>Ilosc</th>
      <th>Walor</th>
      <th>Akceptacja ze strony banku</th>
    </tr>
    </thead>
    <tbody>
    {
      transactions ?
        transactions.map(
          (transaction, index) => (
            <tr key={index}>
              <td>{companies.find(company=>transaction.selectValue===company.name).currentValue}</td>
              <td>{((companies.find(company=>transaction.selectValue===company.name).currentValue-transaction.limitValue).toFixed(2)>returnRate ||
              (companies.find(company=>transaction.selectValue===company.name).currentValue-transaction.limitValue).toFixed(2)>=stopLoss) ?
                'sprzedawaj' : 'nie sprzedawaj' }</td>
              <td>{transaction.limitValue}</td>
              <td>{(companies.find(company=>transaction.selectValue===company.name).currentValue-transaction.limitValue).toFixed(2)}</td>
              <td>{transaction.iloscValue}</td>
              <td>{transaction.selectValue}</td>
              <td>{transaction.isAccepted ? 'tak' : 'nie'}</td>
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