import { useEffect, useState } from "react";
import ListBook from "../components/ListBook";
import ListBookCard from "../components/ListBookCard";
import { getBooks } from "../services/bookService";
//BUSQUEDA:
import { SearchContext } from '../context/SearchContext';
import React, { useContext } from 'react';
const IndexView = () => {
  const [data, setBooks] = useState([]);
  //BUSQUEDA inicio
  const { searchText } = useContext(SearchContext);
  //BUSQUEDA fin
  const gtBooks = async () => {
    const bks = await getBooks();
    //busqueda inicio
    if (data==0) {
      setBooks(bks);
    }
    //busqueda fin
  }

  //la función como argumento en useEffect no puede ser async
  useEffect(() => {
    try {
      gtBooks();
    } catch (error) {
      console.log(error);
    }

  }, [])
  const constfilteredBooks = data;
  //BUSQUEDA inicio

  const filteredBooks = constfilteredBooks.filter(book =>
    book.titulo.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log("***VALOR de la filteredBooks", filteredBooks)
  //BUSQUEDA fin


  return (
    <div>
      <h2 className='mb-4'>Bienvenido a "ViBi Libros"</h2>
      <ListBookCard books={filteredBooks} />
    </div>
  );
};

export default IndexView;