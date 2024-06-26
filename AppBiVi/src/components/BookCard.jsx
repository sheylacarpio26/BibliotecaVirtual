import { useContext } from "react"; //para poder acceder a un contexto
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const BookCard = ({ book }) => {
  const { id, titulo, autor, resumen, portada, editorial, genero, pdf } = book;
  // console.log ("PEPITO BOOK",book);
  return (
    <div className="container">
      <h1 className="text-center my-5">Lista de Libros</h1>
      <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg"
                alt={titulo}
                style={{
                  maxWidth: "50%",
                  maxHeight: "100%",
                  objectFit: "cover",
                  alignItems: "center",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{resumen}</Card.Text>
                <Card.Text>{autor}</Card.Text>
                <Card.Text>{editorial}</Card.Text>
                <Card.Text>{genero}</Card.Text>
                <Card.Text>{pdf}</Card.Text>
                <Button variant="primary" target="_blank" to={`/libros/${id}`}>
                  ver PDF
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BookCard;
