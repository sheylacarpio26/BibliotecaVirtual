import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  return (
    /*<Navbar className="bg-body-tertiary" expand="lg">
      <Container>
        <Navbar.Brand>BiVi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Link to="/" className="nav-link">Inicio</Link>
              <Link to="/admbooks" className="nav-link">Gestionar Libros</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
*/
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Bivi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            <Link to="/admbooks" className="nav-link">
              Gestionar Libros
            </Link>

            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#cat/3.1">Cuentos</NavDropdown.Item>
              <NavDropdown.Item href="#cat/3.2">Artes</NavDropdown.Item>
              <NavDropdown.Item href="#cat/3.3">Derecho</NavDropdown.Item>
              <NavDropdown.Item href="#cat/3.4">
                Programación y Tecnología
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">Mangas</NavDropdown.Item>
            </NavDropdown>
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
