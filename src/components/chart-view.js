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
              data: dataset.data.slice(1).concat(Math.random())
            }),
          )}
      })

    }, 1000)
}
  render() {
    return (
        <div>
          <Line
            data={this.state.data}
            options={{
              title: {
                display: true,
                text: "afasfasf"
              }
              }}
            width="800px"
            height="400px"/>
        </div>
    )
  }
}
export default ChartView