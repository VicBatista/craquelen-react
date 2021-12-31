import React from 'react';
import CartIcon from './CartIcon';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import {Navbar, Container, Nav, Dropdown} from 'react-bootstrap';
import './navBarStyles.css';

const NavBar = (props) => {
    const count = (props);
    const cartWidget = useCartContext();

    return (
        <div>
            <>
            <Navbar collapseOnSelect expand="lg" className="nav">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="row align-items-center justify-content-between">
                        <ul className="col-4">
                            <li><Link to="/">Home</Link></li>
                            <li>Nosotras</li>
                            <li>Mayoristas</li>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle className="btnLinksNav" id="dropdown-basic">
                                        <Link to="/">Tienda</Link>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            <Link to="/categoria/semanal">Stock semanal</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            <Link to="/categoria/tortas">Tortas</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            <Link to="/categoria/box">Box</Link>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <Navbar.Brand href="#home">
                                <img src="https://i.ibb.co/qRKD4TK/logo.png" alt="Logo Craquelen" width="90" height="90"  className="d-inline-block align-top"/>
                            </Navbar.Brand>
                            <Nav>
                                <Link to= "/cart">
                                    {cartWidget}
                                    <CartIcon count={count} />
                                </Link>
                            </Nav>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        </div>
    )
}

export default NavBar
