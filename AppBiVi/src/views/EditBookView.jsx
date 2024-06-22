import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FormBook from "../components/FormBook";
import { getBookById } from "../services/bookService";
const EditBookView = () => {
    //Definiendo la estructura del libro
    const [values, setValues] = useState({
        titulo: "",
        autor: "",
        resumen:"",
        portada: "",
        editorial: "",
        genero: "",
        pdf: ""
      })
    

  //si es que esto es un objeto, lo podemos desestructurar
  const { id } = useParams();

  const navigate = useNavigate();

//   const handleValues = (ev) => {
//     console.log(ev.target.name);
//     const nombrePropiedad = ev.target.name;
//     const valorPropiedad = ev.target.value;
//     const newBook = {
//       ...values,
//       [nombrePropiedad]: valorPropiedad,
//     };
//     setValues(newBook);
//   };

  useEffect(() => {
    const gtBooks = async () => {
      try {
        const resultado = await getBookById(id);
        setValues(resultado)
      } catch (error) {
        console.log(error)
      }
    }
    gtBooks();
  }, []);

  return (
 
    <FormBook
    values={values}
  />
  )
}

export default EditBookView