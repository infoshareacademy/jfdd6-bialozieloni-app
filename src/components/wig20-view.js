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
          // Zmiana ceny //
          const price = Math.round(Math.random() *10 - Math.random() *10 )

          const movingAverages = company.sum / company.prices.length
          // sygnał positive/negative zależny od różnicy pomiędzy średnią kroczącą a aktualną ceną //
          const signal = movingAverages < company.currentValue ? 'positive' : 'negative'
          // tablica 10-ciu ostatnich zmian cen
          const currentValues = company.currentValues.concat(company.currentValue + price).slice( company.currentValues.length > 9 ? 1 : 0)
          //
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
            movingAverages: ( currentValues.reduce( (p, c) => p + c , 0 ) / currentValues.length ).toFixed(3)
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
//    groups: state.groups.groupsData

  }),
  dispatch => ({
    saveData: (value) => dispatch({
      type: 'formSave',
      value
    })
  }))(Wig20View)