import React from 'react';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';

const MyNavbar = () => {
    return (
        <div>
            <Navbar expand="lg" light bg="light">
                <Navbar.Brand href="#">
                    Navbar
                </Navbar.Brand>
                <Navbar.Toggler target="#navbarSupportedContent" />
                <Collapse navbar id="navbarSupportedContent">
                    <Navbar.Nav mr="auto">
                        <Nav.Item active>
                            <Nav.Link href="/">Dashboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/user">Usuário</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/product">Produtos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/client">Clientes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item dropdown>
                            <Nav.Link dropdownToggle>Dropdown</Nav.Link>
                            <Dropdown.Menu>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Another action</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Nav.Item>                        
                    </Navbar.Nav>                    
                </Collapse>
            </Navbar>
        </div>
    )
}

export default MyNavbar