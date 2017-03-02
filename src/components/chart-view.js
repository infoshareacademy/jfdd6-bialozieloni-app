import React from 'react'
import data from './chart-data.json'
import { Line } from 'react-chartjs'

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
              data: dataset.data.slice(1).concat(Math.random()*50)
            }),
          )}
      })
    }, 1000)
}
  render() {
    return (
        <div>
          <Line data={this.state.data} width="1000" height="400"/>
        </div>
    )
  }
}
export default ChartView