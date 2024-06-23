import { useContext } from "react"; //para poder acceder a un contexto
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BookCard = ({ book }) => {
  const { id, titulo, autor, resumen, portada, editorial, genero, pdf } = book;
// console.log ("PEPITO BOOK",book);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg" alt={titulo} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{resumen}</Card.Text>
          <Card.Text>{autor}</Card.Text>
          <Card.Text>{editorial}</Card.Text>
          <Card.Text>{genero}</Card.Text>
          <Card.Text>{pdf}</Card.Text>
          {/* href={pdf}  */}
          <Button variant="primary" target="_blank" to={`/libros/${id}`}>
            ver PDF
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookCard;
