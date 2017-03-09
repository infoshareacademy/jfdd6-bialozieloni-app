import React from 'react'
import {connect} from 'react-redux'
import { Grid } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'


export default connect(
  state => ({
    companies: state.companies.companies
  })
)(
class ChartView extends React.Component {
  render() {
  let dataset = {
    labels: [],
    datasets: [
      {
      label: this.props.params.companyId,
      data: this.props.companies.filter(
      company => company.id === this.props.params.companyId
    )[0].currentValues,
      borderColor: 'yellow'
    },
      {
        label: 'Średnia krocząca',
        data: this.props.companies.filter(
          company => company.id === this.props.params.companyId
        )[0].prices,
        borderColor: 'red'
      }
    ]
  };
    console.log(dataset);
    return (
        <Grid>
          <Line
            data={dataset}
            height={150}
            options={{
              title: {
                display: true,
                text: 'Cena spółki...',
                fontSize: 30
              },
              legend: {
                position: 'bottom'
              },
              elements: {
                line: {
                  backgroundColor: 'rgba(0,0,0,0)'
                }
              }
            }}
          />
        </Grid>
    )
  }
}
)