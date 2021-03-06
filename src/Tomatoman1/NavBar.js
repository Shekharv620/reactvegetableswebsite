import { Navbar, Nav } from 'react-bootstrap';
import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home" style={{color:'white',fontSize:22}}>TomatoMan</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/vegetable" style={{color:'white',fontSize:20}}><b>menu</b></Nav.Link>
            <Nav.Link href="/Cards" style={{color:'white',fontSize:20}}><b>Cart</b></Nav.Link>
            <Nav.Link href="/Profile" style={{color:'white',fontSize:20}}><b>Profile</b></Nav.Link>
            <Nav.Link href="/History" style={{color:'white',fontSize:20}}><b>History</b></Nav.Link>
            <Nav.Link href="" style={{marginRight:20}}> 
            
            {/* <ShoppingCartIcon style={{ color: 'white', float:'right' }}> */}
             {/* <Link to='/Cards' style={{color:'white',fontSize:20,textDecoration:'none', float:'right'}}>
                   <b> Cart</b>
                </Link> */}
            </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}


