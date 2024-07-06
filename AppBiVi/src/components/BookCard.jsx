import { Card } from "react-bootstrap";
import Swal from "sweetalert2";
import firebaseErrorsInSpanish from "../utils/firebaseErrorMessages";
import { Link } from "react-router-dom";
import { truncateText } from "../utils/textUtils";

const BookCard = ({ book }) => {
  const { id, titulo, autor, resumen, portada, editorial, genero, pdf } = book;

  const navigateToEBook = () => {
    try {
      navigate(`/ebook/${id}`);

    } catch (error) {

      Swal.fire({
        title: "Error",
        text: firebaseErrorsInSpanish[error.code],
        icon: "error"
      })
    }
  };


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
        <a href={`/ebook/${id}`}>
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
        </a>
        
        <Card.Body>
          <Card.Text> {truncateText(resumen, 150)}</Card.Text>
          <Card.Text>Autor: {autor}</Card.Text>
          <Card.Text>Editorial: {editorial}</Card.Text>
          <Card.Text>Género: {genero}</Card.Text>
          <Link className="btn btn-primary btn-sm d-flex align-items-center justify-content-center" to={`/ebook/${id}`}> 
          <p className="mb-1">Ver</p>
            <i className="fa-solid fa-eye ml-3" ></i>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookCard;
