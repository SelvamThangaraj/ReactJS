import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    //https://react-bootstrap.github.io/components/navbar/
    return (
        <header>
            <div>
                <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                    <Navbar.Brand href="/">MyShop</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                        <Nav.Link href="#link">Sign in</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        </header>
    )
}

export default Header