//import BookCard from "./BookCard"
import BookCard from "./BookCard";

const ListBookCard = ({ books }) => {
    return (
      <div>
        
            {books ? (
              books.map((bk) => <BookCard key={bk.id} book={bk} />)
            ) : (
              <p>No se encontraron libros</p>
            )}
        
      </div>
    );
  };

export default ListBookCard;