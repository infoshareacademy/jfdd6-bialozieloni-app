import React from 'react'
import { Table } from 'react-bootstrap'
import companies from './wig20-data'
import {connect} from 'react-redux'
import { Link } from 'react-router'



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
          // Zmiana ceny //
          const price = Math.round(Math.random() *10 - Math.random() *10 )
          // tablica 10-ciu cen po zmianach
          const currentValues = company.currentValues.concat(company.currentValue + price).slice( company.currentValues.length > 9 ? 1 : 0)
          // Średnia krocząca
          const movingAverages = ( currentValues.reduce( (p, c) => p + c , 0 ) / currentValues.length ).toFixed(3)
          // sygnał positive/negative zależny od różnicy pomiędzy średnią kroczącą a aktualną ceną //
          const signal = movingAverages < company.currentValue ? 'positive' : 'negative'
          // tablica maksymalnie 10-ciu ostatnich zmian
          const prices = company.prices.concat(price).slice( company.prices.length > 9 ? 1 : 0)
          return ({
            id: company.id,
            name: company.name,
            prices: prices,
            currentValues: currentValues,
            //aktualna cena waloru //
            currentValue: company.currentValue + price,
            signal: signal,
            // tablica ostatnich dziesięciu cen zredukowanych do jednej wartości
            sum: currentValues.reduce( (p, c) => p + c , 0 ),
            // tablica aktualnych cen zredukowanych do jednej wartości. Uzyskana wartość podzielona przez długość tablicy i zaokrąglona do trzeciego miejsca po przecinku. //
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
                  <td><Link to="/chart">{company.name}</Link></td>
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
// export default Wig20View

export default connect(
  state => ({
    companies: state.companies


  }),
  dispatch => ({
    saveData: (value) => dispatch({
      type: 'formSave',
      value
    })
  }))(Wig20View)