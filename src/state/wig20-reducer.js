import companies from '../data/wig20-data'

const UPDATE_COMPANIES = 'wig-20/UPDATE_COMPANIES'

export const updateCompanies = () => dispatch => {
  setInterval(
    () => dispatch({type: UPDATE_COMPANIES}),
    2000
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
            const price = parseFloat(((company.currentValue / 100) *(Math.random() - Math.random())).toFixed(2))

            // tablica cen po zmianach
            const currentValues = company.currentValues.concat(parseFloat((company.currentValue + price).toFixed(2)))

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
              let avarage = (sum/len).toFixed(2)
              movingAveragesTable.push(avarage)
            } else {
              movingAveragesTable.push(null)
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
              currentValue: currentValue < currentValues[0] * 0.8 ? currentValue * (Math.random() * 0.05 + 1) : currentValue > currentValues[0] * 1.2 ? currentValue * (1 - Math.random() * 0.05) : currentValue,
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


