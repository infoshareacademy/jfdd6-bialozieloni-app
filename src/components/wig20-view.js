import React from 'react'
import { Table } from 'react-bootstrap'
import companies from './wig20-data'
import {connect} from 'react-redux'



class Wig20View extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      price: 100,
      companies: companies,
    }

    setInterval(() => {
      const companies = this.state.companies.map(
        company => {
          const price = Math.round(Math.random() *10 - Math.random() *10 )
          const movingAverages = company.sum / company.prices.length
          const signal = movingAverages > company.currentValue ? 'positive' : 'negative'
          return ({
            id: company.id,
            name: company.name,
            prices: company.prices.concat(price).slice( company.prices.length > 9 ? 1 : 0),
            currentValue: company.currentValue + price,
            signal: signal,
            sum: company.prices.reduce( (p, c) => this.state.price + p + c, 0 ),
            movingAverages: movingAverages
          })
        }
      );
      props.saveData(companies);

      this.setState({
        companies: companies,
      });
    }, 1000)
  }
  render() {
    return (

      <div>

        <h1>WIG 20</h1>
        <Table>
          <thead>
          <tr>
            <td><b>ID FIRMY</b></td>
            <td><b>NAZWA FIRMY</b></td>
            <td><b>AKTUALNA CENA</b></td>
            <td><b>ŚREDNIA KROCZĄCA</b></td>
            <td><b>OSTATNIE ZMIANY CENY</b></td>
            <td><b>SYGNAŁ KUPNA</b></td>
          </tr>
          </thead>
          <tbody>
          {
            this.state.companies.map(
              company => (

                <tr key={company.id}>
                  <td>{company.id}</td>
                  <td>{company.name}</td>
                  <td>{company.currentValue}</td>
                  <td>{company.movingAverages}</td>
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
// export default Wig20View

export default connect(
  state => ({
    companies: state.companies
//    groups: state.groups.groupsData

  }),
  dispatch => ({
    saveData: (value) => dispatch({
      type: 'formSave',
      value
    })
  }))(Wig20View)