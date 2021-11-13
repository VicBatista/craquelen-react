import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import CartIcon from './CartIcon'
const NavBar = () => {
    return (
        <div>
            <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Nosotras</Nav.Link>
                <Nav.Link href="#pricing">Mayoristas</Nav.Link>
                <Nav.Link href="#pricing">Tienda</Nav.Link>
                <Navbar.Brand href="#home"><img src="https://i.ibb.co/qRKD4TK/logo.png" 
                alt="Logo Craquelen"
                width="90"
                height="90"
                className="d-inline-block align-top"
                />
                </Navbar.Brand>
                <Nav>
                    <CartIcon />
                </Nav>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        </div>
    )
}

export default NavBar
