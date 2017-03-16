import React from 'react'
import {connect} from 'react-redux'
import {Table, Grid, Button} from 'react-bootstrap'
import {Link} from 'react-router'

export default connect(
  state => ({
    companies: state.companies.companies
  })
)(
  class Wig20View extends React.Component {

    render() {

      return (

        <Grid>
          <h1>WIG 20</h1>
          <Table striped bordered hover condensed responsive className="text-center">
            <thead>
            <tr>
              <th className="text-center">ID FIRMY</th>
              <th className="text-center">NAZWA FIRMY</th>
              <th className="text-center">AKTUALNA CENA</th>
              <th className="text-center">OSTATNIA WARTOŚĆ <br/>ŚREDNIEJ KROCZĄCEJ</th>
              <th className="text-center">SYGNAŁ KUPNA</th>
              <th className="text-center">ZLECENIE</th>
              <th className="text-center">WYKRES</th>
            </tr>
            </thead>
            <tbody>
            {
              this.props.companies.map(
                company => {

                  return (

                    <tr key={company.id}>
                      <td>{company.id}</td>
                      <td>{company.name}</td>
                      <td>{company.currentValue}</td>
                      <td>{company.lastMAV}</td>
                      <td className={company.signal === 'POZYTYWNY' ? 'success' : 'danger'}>{company.signal}</td>
                      <td>
                        <Link to="/bank-view">
                          <Button bsSize="small" bsStyle="success">Kup/sprzedaj</Button>
                        </Link></td>
                      <td>
                        <Link to={'/' + company.id}>
                          <Button bsSize="small" bsStyle="success">
                            <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                              <path
                                d="M24 3.055l-6 1.221 1.716 1.708-5.351 5.358-3.001-3.002-7.336 7.242 1.41 1.418 5.922-5.834 2.991 2.993 6.781-6.762 1.667 1.66 1.201-6.002zm-16.69 6.477l-3.282-3.239 1.41-1.418 3.298 3.249-1.426 1.408zm15.49 3.287l1.2 6.001-6-1.221 1.716-1.708-2.13-2.133 1.411-1.408 2.136 2.129 1.667-1.66zm1.2 8.181v2h-24v-22h2v20h22z"/>
                            </svg>
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  )
                }
              )
            }
            </tbody>
          </Table>
        </Grid>

      )
    }

  }
)