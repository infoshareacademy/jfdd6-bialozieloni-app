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
        labels: new Array(100),
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
                  company => company.name + ' ' + company.currentValue + ' zł'
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
                }
              },
              scales: {
                yAxes: [{
                  ticks: {
                    max: 200,
                    min: 0,
                    stepSize: 10
                  }
                }]
              }
            }}
          />
          <Link to="/bank-view">
          <div className="text-center">
            <Button bsStyle="success">Kup/sprzedaj</Button>
          </div>
          </Link>
          <br/>
          <p className="text-center">Created by GW Calc</p>
        </Grid>
      )
    }
  }
)