import React from 'react'
import data from './chart-data.json'
import { Grid } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'

class ChartView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    data: data
    }

    setInterval(() => {
      this.setState({
        data: {
          labels: this.state.data.labels,
          datasets: this.state.data.datasets.map(
            dataset => ({
              ...dataset,
              data: dataset.data.slice(1).concat(Math.random() * 50)
            }),
          )}
      })

    }, 1000)
}
  render() {
    return (
        <Grid>
          <Line
            data={this.state.data}
            height={150}
            options={{
              title: {
                display: true,
                text: 'Cena spółki ABC',
                fontSize: 30
              },
              legend: {
                position: 'bottom'
              },
              elements: {
                line: {
                  backgroundColor: 'rgba(0,255,0,0.2)'
                }
              }
            }}
          />
        </Grid>
    )
  }
}
export default ChartView
