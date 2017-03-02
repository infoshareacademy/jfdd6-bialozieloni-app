import React from 'react'
import { Table, Button } from 'react-bootstrap'
import companies from './wig20-data'



class Wig20View extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      price: 100,
      signal: 'positive',
      companies: companies
    }

    setInterval(() => {
      const price = this.state.price + Math.random() * 10 - Math.random() * 10

      this.setState({
        price: price,
        signal: price > 100 ? 'positive' : 'negative',
        companies: this.state.companies.map(
          company => {
            const price = company.prices[0] + (Math.random() * Math.random() *10) -(Math.random() * Math.random() *10)
            const signal = price > 100 ? 'positive' : 'negative'
            return ({
              id: company.id,
              name: company.name,
              prices: company.prices.concat(price).slice(1),
              signal: signal

            })
          }
        )
      })
    }, 1000)
  }
  render() {
    return (

      <div>

        <h1>WIG 20</h1>
        <Button onClick={this.handleIncrementClick}>Losowanie</Button>
        <p>{this.state.price} {this.state.signal}</p>
        <Table>
          <tbody>
          {
            this.state.companies.map(
              company => (
                <tr key={company.id}>
                  <td>{company.id}</td>
                  <td>{company.name}</td>
                  <td>{company.prices}</td>
                  <td className={company.signal =='positive' ? 'success': 'danger'}>{company.signal}</td>
                </tr>
              )
            )
          }
          </tbody>
        </Table>
      </div>

    )
  }

}
export default Wig20View