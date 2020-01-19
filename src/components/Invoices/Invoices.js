import React, { Component } from 'react'
import { getInvoices, deleteInvoice } from '../../api/invoice'
import Table from 'react-bootstrap/Table'

export default class Invoices extends Component {
  constructor () {
    super()

    this.state = {
      invoices: []
    }
  }

  deleteInvoice = (e, id) => {
    console.log('id', id)
    this.setState((currentState) => {
      console.log('currentState', currentState)
      const a = currentState.invoices
      const theFiltered = a.filter(invoice => invoice._id !== id)
      deleteInvoice(this.props.user.token, id)
        .then(console.log)
        .catch(console.error)
      return { invoices: theFiltered }
    })
  }

  componentDidMount () {
    getInvoices(this.props.user.token)
      .then(res => {
        this.setState({ invoices: res.data.invoices })
      })
  }

  render () {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          {this.state.invoices.map(invoice => (
            <tr key={invoice._id}>
              <td>{invoice.id}</td>
              <td>{invoice.title}</td>
              <td>{invoice.total}</td>
              <td>
                <button onClick={(e) => this.deleteInvoice(e, invoice._id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
}
