import React, { Component } from 'react'
import { getInvoices } from '../../api/invoice'

export default class Invoices extends Component {
  constructor () {
    super()

    this.state = {
      invoices: []
    }
  }

  componentDidMount () {
    getInvoices(this.props.user.token)
      .then(res => {
        this.setState({ invoices: res.data.invoices })
      })
  }

  render () {
    return (
      <div>{this.state.invoices.map(invoice => (
        <div key={invoice._id}>{invoice.title}</div>
      ))}</div>
    )
  }
}
