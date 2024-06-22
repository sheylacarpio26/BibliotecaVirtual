import { useEffect, useState } from "react";
import ListBook from "../components/ListBook";
import { getBooks } from "../services/bookService";

const AdmBooksView = () => {
  const [data, setBooks] = useState([]);
  const gtBooks = async () => {
    const bks = await getBooks();
    setBooks(bks);
  }

  //la función como argumento en useEffect no puede ser async
  useEffect(() => {
    try {
      gtBooks();
    } catch (error) {
      console.log(error);
    }
    
  }, [])

  return (
    <div>
      <h1 className='mb-4'>Los Libros</h1>
      <ListBook books={data} />
    </div>
  );
};

export default AdmBooksView