import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import MiDropdown from "../utils/CustomNavItemHover";
const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-success">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/public/lectura.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="BiVi logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            <Link to="/admbooks" className="nav-link">
              Gestionar Libros
            </Link>
            {/* Inicio NavDropdown con hover personalizado */}
            <MiDropdown />
            {/* Fin NavDropdown con hover personalizado */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar libro virtual"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar Libros</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
