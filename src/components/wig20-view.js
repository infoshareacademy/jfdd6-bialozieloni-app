import React from 'react'
import {connect} from 'react-redux'
import { Table } from 'react-bootstrap'

export default connect(
  state => ({
    companies: state.companies.companies
  })
)(
  class Wig20View extends React.Component {

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
              this.props.companies.map(
                company => (

                  <tr key={company.id}>
                    <td>{company.id}</td>
                    <td>{company.name}</td>
                    <td>{company.currentValue}</td>
                    <td>{company.movingAverages}</td>
                    <td>{company.prices.join(', ')}</td>
                    <td className={company.signal ==='positive' ? 'success': 'danger'}>{company.signal}</td>
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

)