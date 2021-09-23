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
import Logo from "../images/Logo.png"

export default function Header({ app, isMutual }) {

  return !isMutual ? (
    <Container>
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="#"><Link to="/"><img src={Logo} alt="Logotipo" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">INICIO</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="#link">NOSOTROS</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="#action/3.1">SERVICIOS</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="#link">UBICACIÓN</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="#action/3.1">CONTACTO</Link>
            </Nav.Link>
          </Nav>
          <div className="nav-right">
            <Link className="a-btn" to="/loginPage">MUTUAL</Link>
          </div>
          {/*           <Form inline>
            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <Button variant="outline-success">Búsqueda</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  ) : ''
}