import React, { Component } from 'react';
import { Container, FormControl, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logoIcon from '../images/logo.png'

class Header extends Component {
    render() {
        return (
            <Navbar sticky="top" collapseOnSelect expand="md" bg="light" variant="light">
                <Container>
                    <Navbar.Brand><img src={logoIcon} alt="" width="35" className="me-2"/>Генератор хэштегов</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <NavLink activeClassName="activeLink" to="/">Тимофей</NavLink>
                            <NavLink activeClassName="activeLink" to="/snezh">Снежана</NavLink>
                            <NavLink activeClassName="activeLink" to="/about">О сайте</NavLink>
                        </Nav>
                       {/* <Form inline>
                          <FormControl 
                            type="text"
                           placeholder="Search"
                        />
                       </Form> */}
                           {/* <Nav>
                                <Button variant="primary" className="me-2">Log In</Button>                                <Button variant="primary">Sign Out</Button>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;