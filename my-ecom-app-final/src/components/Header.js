import React from 'react';
import { Container,Nav,Navbar} from 'react-bootstrap';

import {LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return(
        <header>
            <Navbar bg="dark"  variant="dark" expand="lg" collapseOnSelect>
            <LinkContainer to="/">
            <Navbar.Brand>MyShop</Navbar.Brand>
            </LinkContainer>
        
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">4
            <LinkContainer to="/cart">
                    <Nav.Link>
                    <i className="fas fa-shopping-cart"></i>   Cart
                    </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
            <Nav.Link >
            <i className="fas fa-user"></i>Sign in</Nav.Link>
            </LinkContainer>
        
            </Nav>
            </Navbar.Collapse>
            </Navbar>
             
        </header>
    )
}

export default Header