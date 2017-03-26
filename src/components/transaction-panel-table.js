import React from 'react'
import {Grid, Table, Button} from 'react-bootstrap'



const Bank = ({transactions, companies, returnRate, stopLoss, sell}) => (
<Grid fluid>
  <Table striped bordered hover condensed responsive className="text-center">
    <thead>
    <tr>
      <th className="text-center">Walor</th>
      <th className="text-center">Aktualna cena</th>
      <th className="text-center">Cena zakupu</th>
      <th className="text-center">Ilość akcji</th>
      <th className="text-center">Zysk/Strata</th>
      <th className="text-center">Sygnał sprzedaży</th>
      <th className="text-center">Akceptacja z banku</th>
    </tr>
    </thead>
    <tbody>
    {
      transactions ?
        transactions.map(
          (transaction, index) => {
            //aktualizowana na bieżąco cena akcji
            const currentPrice = companies.find(company=>transaction.selectValue===company.name).currentValue
            //aktualizowany na bieżąco Zysk/strata ((cena akcji - cena zakupu)* liczba kupowanych akcji)
            const profit = parseFloat(((currentPrice-transaction.limitValue) * transaction.iloscValue).toFixed(2))
            return (
              <tr key={index}>
                <td>{transaction.selectValue}</td>
                <td>{currentPrice}</td>
                <td>{transaction.limitValue}</td>
                <td>{transaction.iloscValue}</td>
                <td>{profit}</td>
                <td>{(profit > ((currentPrice * returnRate)*transaction.iloscValue) ) ?
                  'sprzedawaj' : 'nie sprzedawaj' }</td>
                <td>{transaction.isAccepted ? 'tak' : 'nie'}</td>
                <td>
                  <Button bsSize="small"
                          bsStyle="success"
                          onClick={() => sell(index, profit)}
                  >Sprzedaj
                  </Button>
                </td>
              </tr>
            )
          }
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