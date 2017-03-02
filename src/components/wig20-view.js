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

    this.handleIncrementClick = () => {
      console.log(this.price > 100);
      const price = this.state.price + Math.random() * 10 - Math.random() * 10

      this.setState({
        price: price,
        signal: price > 100 ? 'positive' : 'negative',
        companies: this.state.companies.map(
          company => {

            return ({
              id: company.id,

            })
          }
        )
      })
    }
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
                  <td>{company.price}</td>
                  <td>{company.signal}</td>
                  <td>{company.negative}</td>
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