import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

const BookCard = ({ book }) => {
  const { id, titulo, autor, resumen, portada, editorial, genero, pdf } = book;
  // console.log ("PEPITO BOOK",book);
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "10px",
        minWidth: "250px",
        maxWidth: "300px",
      }}
    >
      <Card>
        <Card.Title as="h5" className="text-center">
          {titulo}
        </Card.Title>
        <Card.Img
          variant="top"
          src={portada}
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
          <Card.Text> {resumen}</Card.Text>
          <Card.Text>Autor: {autor}</Card.Text>
          <Card.Text>Editorial: {editorial}</Card.Text>
          <Card.Text>Género: {genero}</Card.Text>
          <a href={pdf}>
            <Card.Text>{pdf}</Card.Text>
          </a>
          <Button variant="primary" target="_blank" to={`/libros/${id}`}>
            ver PDF
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookCard;
