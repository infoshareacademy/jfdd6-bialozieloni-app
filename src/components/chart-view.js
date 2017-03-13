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
        labels: Array(this.props.companies[0].currentValues.length),
        datasets: [
          {
            label: 'Cena',
            data: this.props.companies.find(
              company => company.id === this.props.params.companyId
            ).currentValues,
            borderColor: 'blue'
          },
          {
            label: 'Średnia krocząca',
            data: this.props.companies.find(
              company => company.id === this.props.params.companyId
            ).movingAveragesTable,
            borderColor: 'black'
          }

        ]
      };
      return (
        <Grid>
          <Line
            data={dataset}
            height={150}
            options={{
              title: {
                display: true,
                text: this.props.companies.find(
                  company => company.id === this.props.params.companyId
                ).name,
                fontSize: 30,
                fontColor: this.props.companies.find(
                  company => company.id === this.props.params.companyId
                ).signal === 'positive' ? 'green' : 'red'
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
            <Button bsStyle="primary">Kup/sprzedaj</Button>
          </div>
          </Link>
          <br/>
          <p className="text-center">Created by GW Calc</p>
        </Grid>
      )
    }
  }
)