import companies from '../data/wig20-data'

const UPDATE_COMPANIES = 'wig-20/UPDATE_COMPANIES'

export const updateCompanies = () => dispatch => {
  setInterval(
    () => dispatch({ type: UPDATE_COMPANIES }),
    1000
  )
}

const initialState = {
  companies: companies
}


const Wig20Reducer = (state = initialState, action = {}) => {

  switch(action.type) {

    case UPDATE_COMPANIES:
      return {
        ...state,
        companies: state.companies.map(
          company => {
            // Zmiana ceny //
            const price = Math.round(Math.random() *10 - Math.random() *10 )
            // tablica 10-ciu cen po zmianach
            const currentValues = company.currentValues.concat(company.currentValue + price).slice( company.currentValues.length > 9 ? 1 : 0)
            // Średnia krocząca- tablica aktualnych cen zredukowanych do jednej wartości. Uzyskana wartość podzielona przez długość tablicy i zaokrąglona do trzeciego miejsca po przecinku.
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
              movingAverages: movingAverages
            })
          }
        )
      }
    default:
      return state

  }
}

export default Wig20Reducer


