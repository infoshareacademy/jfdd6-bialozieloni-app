import React from 'react'
import data from './chart-data'
import { Line } from 'react-chartjs'

const ChartView = () => (
  <div>
    <Line data={data.data} width="600" height="300"/>
  </div>
)

export default ChartView