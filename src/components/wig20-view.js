import React from 'react'
import { Table, Button } from 'react-bootstrap'
import companies from './wig20-data'



class Wig20View extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      price: 100,
      companies: companies
    }

    setInterval(() => {
      const companies = this.state.companies.map(
        company => {
          const price = Math.round(Math.random() *10 - Math.random() *10 )
          const signal = company.currentValue > 100 ? 'positive' : 'negative'
          return ({
            id: company.id,
            name: company.name,
            prices: company.prices.concat(price).slice( company.prices.length > 9 ? 1 : 0),
            currentValue: company.currentValue + price,
            signal: signal,
            sum: company.prices.reduce( (p, c) => this.state.price + p + c, 0 )
          })
        }
      );
      this.setState({
        companies: companies,
      })
    }, 1000)
  }
  render() {
    return (

      <div>

        <h1>WIG 20</h1>
        <Table>
          <tbody>
          {
            this.state.companies.map(
              company => (
                <tr key={company.id}>
                  <td>{company.id}</td>
                  <td>{company.name}</td>
                  <td>{company.currentValue}</td>
                  <td>{company.sum/company.prices.length}</td>
                  <td>{company.prices.join(', ')}</td>
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