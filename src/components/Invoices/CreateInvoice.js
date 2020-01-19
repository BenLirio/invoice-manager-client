import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createInvoice } from '../../api/invoice'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreateInvoice extends Component {
  constructor () {
    super()
    this.state = CreateInvoice._defaultState
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onCreateInvoice = event => {
    event.preventDefault()

    const { alert } = this.props

    createInvoice(this.state, this.props.user.token)
      .then(() => alert({
        heading: 'Created Invoice',
        message: messages.createInvoiceSuccess,
        variant: 'success'
      }))
      .then(() => {
        this.setState(CreateInvoice._defaultState)
      })
      .catch(error => {
        console.error(error)
        this.setState(CreateInvoice._defaultState)
        alert({
          heading: 'Some sort of error, sorry',
          message: messages.createInvoiceFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { title, customer, notes, dueDate, total } = this.state

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Create an Invoice</h3>
          <Form onSubmit={this.onCreateInvoice}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="title"
                name="title"
                value={title}
                placeholder="Enter title"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="customer">
              <Form.Label>Customer</Form.Label>
              <Form.Control
                required
                type="customer"
                name="customer"
                value={customer}
                placeholder="Enter customer"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Details</Form.Label>
              <Form.Control
                required
                name="notes"
                value={notes}
                type="notes"
                placeholder="Notes"
                onChange={this.handleChange}
              />
              <Form.Control
                required
                name="total"
                value={total}
                type="total"
                placeholder="Total"
                onChange={this.handleChange}
              />
              <Form.Control
                required
                name="dueDate"
                value={dueDate}
                type="dueDate"
                placeholder="dueDate"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant="success"
              type="submit"
            >
              Create
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}
CreateInvoice._defaultState = {
  title: 'title',
  customer: 'customer',
  notes: 'notes',
  dueDate: '12-12-12',
  total: '55'
}
export default withRouter(CreateInvoice)
