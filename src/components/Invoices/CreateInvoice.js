import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createInvoice } from '../../api/invoice'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreateInvoice extends Component {
  constructor () {
    super()

    this.state = {
      title: '',
      description: ''
    }
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
        this.setState({ title: '', description: '' })
      })
      .catch(error => {
        console.error(error)
        this.setState({ title: '', description: '' })
        alert({
          heading: 'Some sort of error, sorry',
          message: messages.createInvoiceFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { title, description } = this.state

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Sign In</h3>
          <Form onSubmit={this.onCreateInvoice}>
            <Form.Group controlId="title">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="title"
                name="title"
                value={title}
                placeholder="Enter title"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                name="description"
                value={description}
                type="description"
                placeholder="Description"
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

export default withRouter(CreateInvoice)
