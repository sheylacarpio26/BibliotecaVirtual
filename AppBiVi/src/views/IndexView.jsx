import { useEffect, useState } from "react";
import ListBook from "../components/ListBook";
import ListBookCard from "../components/ListBookCard";
import { getBooks } from "../services/bookService";

const IndexView = () => {
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
      <h2 className='mb-4'>Bienvenido a "ViBi Libros"</h2>
      <ListBookCard books={data} />
      {/* AÑADIR AQUI COMPONENTE PARA MOSTRAR LAS CARTAS DE LIBROS */}
      {/* POR DEFECTO MUESTRE TODO, PERO QUE INCLUYA FILTRO POR GÉNERO*/}
    </div>
  );
};

export default IndexView;