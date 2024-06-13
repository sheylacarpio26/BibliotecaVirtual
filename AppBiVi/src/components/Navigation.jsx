import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


const Navigation = () => {
  return (
    <Navbar className="bg-body-tertiary" expand="lg">
      <Container>
        <Navbar.Brand>BiVi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Link to="/" className="nav-link">Inicio</Link>
              <Link to="/gestionarLibros" className="nav-link">Gestionar Libros</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation; 