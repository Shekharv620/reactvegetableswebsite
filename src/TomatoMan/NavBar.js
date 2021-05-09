import { Navbar, Nav } from 'react-bootstrap';
import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg" fixed="top">
                    <Navbar.Brand href="#home" style={{ color: 'white', fontSize: 22 }}>TomatoMan</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link href="/vegetable" style={{ color: 'white', fontSize: 20 }}><b>Menu</b></Nav.Link>
                            <Nav.Link href="/profile" style={{ color: 'white', fontSize: 20 }}><b>Profile</b></Nav.Link>
                            <Nav.Link href="/history" style={{ color: 'white', fontSize: 20 }}><b>History</b></Nav.Link>
                            <Nav.Link href="/cart" style={{ color: 'white', fontSize: 20 }}><b>Cart</b></Nav.Link>
                            <Nav.Link href="/logout" style={{ color: 'white', fontSize: 20, float: 'right' }}><b>Logout</b></Nav.Link>
                                    {/* <Nav.Link href="" style={{ marginRight: 20 }}>
                      <Link to='/cart' style={{ color: 'white', fontSize: 20, textDecoration: 'none' }}>
                        <b>Cart</b>
                      </Link>
                    </Nav.Link> */}
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>
            </div>
        )
    }
}
