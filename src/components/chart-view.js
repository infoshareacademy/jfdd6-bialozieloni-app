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
    labels: Array(this.props.companies[0].currentValues.length),
    datasets: [
      {
      label: this.props.params.companyId,
      data: this.props.companies.find(
      company => company.id === this.props.params.companyId
    ).currentValues,
      borderColor: 'yellow',
        stepSize: 30
    },
      {
        label: 'Średnia krocząca',
        data: this.props.companies.find(
          company => company.id === this.props.params.companyId
        ).movingAveragesTable,
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