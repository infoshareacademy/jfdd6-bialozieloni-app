import React from 'react'
import {connect} from 'react-redux'
import {Grid, Button} from 'react-bootstrap'
import {Line} from 'react-chartjs-2'
import {Link} from 'react-router'

export default connect(
  state => ({
    companies: state.companies.companies
  })
)(
  class ChartView extends React.Component {
    render() {
      const dataset = {
        labels: new Array(800),
        datasets: [
          {
            label: 'Cena za akcję',
            data: this.props.companies.find(
              company => company.id === this.props.params.companyId
            ).currentValues,
            borderColor: 'black'
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
      dataset.labels.unshift('09:00')
      dataset.labels.push('17:00')

      const yAxe = this.props.companies.find(
          company => company.id === this.props.params.companyId
          ).currentValues[0]

      const yAxeMax = parseFloat((yAxe * 1.25).toFixed(2))
      const yAxeMin = parseFloat((yAxe * 0.75).toFixed(2))

      const stepSize = Math.ceil((parseFloat((yAxe * 0.05).toFixed(2)))/5)*5


      return (
        <Grid>
          <Line
            data={dataset}
            height={150}
            options={{
              title: {
                display: true,
                text: this.props.companies.filter(
                  company => company.id === this.props.params.companyId
                ).map(
                  company => company.name + ' ' + parseFloat(company.currentValue).toFixed(2) + ' zł'
                ),
                fontSize: 30,
                fontColor: this.props.companies.find(
                  company => company.id === this.props.params.companyId
                ).signal === 'POZYTYWNY' ? 'green' : 'red'
              },
              legend: {
                position: 'right'
              },
              elements: {
                line: {
                  backgroundColor: 'rgba(0,0,0,0)'
                },
                point: {
                  radius: 0,
                  hoverRadius: 10
                }
              },
              scales: {
                yAxes: [{
                  ticks: {
                    max: yAxeMax,
                    min: yAxeMin,
                    stepSize: stepSize
                  }
                }]
              }
            }}
          />
          {
            this.props.companies.filter(company => company.id === this.props.params.companyId).map(
              company => {
                return (
                <Link to={"/transaction-panel/" + company.name}>
                  <div className="text-center">
                    <Button bsStyle="success">Kup/sprzedaj</Button>
                  </div>
                </Link>
                )
              }
            )
          }
          <br/>
        </Grid>
      )
    }
  }
)