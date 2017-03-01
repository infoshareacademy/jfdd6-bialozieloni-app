import React from 'react'
import { Table } from 'react-bootstrap'
import Companies from './wig20-data'

const Wig20View =  () => {

  return (

    <div>
      <h1>WIG 20</h1>
      <Table>
        <tbody>
        {
          Companies.map(
            company => (
              <tr key ={company.id}>
                <td>{company.name}</td>
                <td>{company.price}</td>
                <td>{company.positive}</td>
                <td>{company.negative}</td>
              </tr>
            )
          )
        }
        </tbody>
      </Table>
    </div>

  )

}





export default Wig20View