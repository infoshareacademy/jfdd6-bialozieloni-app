import companies from '../data/wig20-data'

const UPDATE_COMPANIES = 'wig-20/UPDATE_COMPANIES'

export const updateCompanies = () => dispatch => {
  setInterval(
    () => dispatch({type: UPDATE_COMPANIES}),
    1000
  )
}

const initialState = {
  companies: companies
}


const Wig20Reducer = (state = initialState, action = {}) => {

  switch (action.type) {

    case UPDATE_COMPANIES:
      const AVG_COUNT = 10;
      return {
        ...state,
        companies: state.companies.map(
          company => {
            // Zmiana ceny //
            const price = parseFloat((Math.random() * 10 - Math.random() * 10 ).toFixed(2))

            // tablica cen po zmianach
            const currentValues = company.currentValues.concat(parseFloat((company.currentValue + price).toFixed(2)))

            // Średnia krocząca- tablica aktualnych cen zredukowanych do jednej wartości. Uzyskana wartość podzielona przez długość tablicy i zaokrąglona do trzeciego miejsca po przecinku.
            const movingAverages = currentValues.reduce((p, c) => p + c, 0) / currentValues.length

            // tablica ostatnich zmian ceny
            const prices = company.prices.concat(price)

            // tabela średniej kroczącej
            let movingAveragesTable = company.movingAveragesTable
            let len = currentValues.length > AVG_COUNT ? AVG_COUNT : currentValues.length
            if (currentValues.length >= len) {
              let sum = 0;
              for (var i = currentValues.length - 1; i >= currentValues.length - len; i--) {
                sum += currentValues[i];
              }
              company.movingAveragesTable.push(sum / len)
            } else {
              company.movingAveragesTable.push(null)
            }

            // obecna cena waloru
            const currentValue = parseFloat((company.currentValue + price).toFixed(2))

            // sygnał positive/negative zależny od różnicy pomiędzy średnią kroczącą a aktualną ceną //
            const signal = movingAveragesTable[movingAveragesTable.length - 1] < company.currentValue ? 'POZYTYWNY' : 'NEGATYWNY'
            const lastMAV = parseFloat(movingAveragesTable[movingAveragesTable.length - 1]).toFixed(2)
            return ({
              id: company.id,
              name: company.name,
              prices: prices,
              currentValues: currentValues,
              //aktualna cena waloru //
              currentValue: currentValue < 10 ? currentValue + 10 : currentValue,
              signal: signal,
              // tablica ostatnich dziesięciu cen zredukowanych do jednej wartości
              sum: currentValues.reduce((p, c) => p + c, 0),
              movingAveragesTable: movingAveragesTable,
              lastMAV: lastMAV
            })
          }
        )
      }
    default:
      return state

  }
}

export default Wig20Reducer


