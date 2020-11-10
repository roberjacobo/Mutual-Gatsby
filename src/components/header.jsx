import React from "react"
import { Link } from "gatsby";

/* React Bootstrap */
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
/* import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl' */

export default function Header() {

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Funerales Rafael Paz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="#">Inicio</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="#link">Nosotros</Link>
            </Nav.Link>
            <NavDropdown title="Más" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="#action/3.1">Servicios</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="#action/3.2">Ubicación</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="#action/3.3">Contacto</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/loginPage/">Mutual</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/*           <Form inline>
            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <Button variant="outline-success">Búsqueda</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}