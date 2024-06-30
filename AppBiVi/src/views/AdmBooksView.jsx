import { useEffect, useState } from "react";
import ListBook from "../components/ListBook";
import { getBooks, getBookById, updateBook, deleteBook } from "../services/bookService";

const AdmBooksView = () => {
  //LISTAR PRODUCTOS INICIO
  const [data, setBooks] = useState([]);
  const gtBooks = async () => {
    const bks = await getBooks();
    setBooks(bks);
  }
  

  useEffect(() => {
    try {
      gtBooks();
    } catch (error) {
      console.log(error);
    }
    
  }, [])

  //LISTAR PRODUCTOS FIN

  return (
    <div>
      <h1 className='mb-4'>Los Libros</h1>
      <ListBook books={data} />
    </div>
  );
};

export default AdmBooksView