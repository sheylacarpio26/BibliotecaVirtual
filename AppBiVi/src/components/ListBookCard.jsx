import BookCard from "./BookCard"

const ListBookCard = ({ books }) => {
    return (
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        gap: '1rem',
      }}>
        
            {books ? (
              books.map((bk) => <BookCard key={bk.id} book={bk} />)
            ) : (
              <p>No se encontraron libros</p>
            )}
        
      </div>
    );
  };

export default ListBookCard;