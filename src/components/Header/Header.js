import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Dropdown } from 'react-bootstrap'

const authenticatedOptions = user => (
  <Fragment>
    <Nav.Link href="#create-invoice">Create Invoice</Nav.Link>
    <Nav.Link href="#invoices">Invoices</Nav.Link>
    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic">
      Account
      </Dropdown.Toggle>
      <Dropdown.Menu alignRight>
        <Dropdown.Item disabled>{user && user.email}</Dropdown.Item>
        <Dropdown.Divider></Dropdown.Divider>
        <Dropdown.Item eventKey="1" href="#change-password">Change Password</Dropdown.Item>
        <Dropdown.Item eventKey="2" href="#sign-out">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Create Accout</Nav.Link>
    <Nav.Link href="#sign-in">Login</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="dark" variant="dark" expand="md">
    <Navbar.Brand href="#">
      Invoice Management
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { alwaysOptions }
        { user ? authenticatedOptions(user) : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
