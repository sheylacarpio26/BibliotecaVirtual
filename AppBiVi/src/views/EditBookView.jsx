import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { uploadFile, getUrlImagen } from "../services/storageService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FormBook from "../components/FormBook";
import { getBookById, updateBook } from "../services/bookService";

let imagen; //si no tiene nada es undefined
let archivo; //si no tiene nada es undefined
const EditBookView = () => {
      //Definiendo la estructura del libro
      const [values, setValues] = useState({
        titulo: "",
        autor: "",
        resumen: "",
        portada: "",
        editorial: "",
        genero: "",
        pdf: ""
      })
      const { id } = useParams();
      const navigate = useNavigate();
            
      const handleValues = (ev) => {
        console.log(ev.target.name);
        const nombrePropiedad = ev.target.name;
        const valorPropiedad = ev.target.value;
        const newBook = {
          ...values,
          [nombrePropiedad]: valorPropiedad,
        };
        setValues(newBook);
      };

      //Gestionar la foto de portada (ARCHIVO LOCAL)
      const handleImage = (ev) => {
        imagen = ev.target.files[0];
      };
      //Gestionar archivo PDF
      const handleFile = (ev) => {
        archivo = ev.target.files[0];
      };

      const handleSubmit = async (ev) => {
            // prevenir la acción por defecto
            ev.preventDefault();
            const { autor, resumen, editorial, genero } = values;
            //validando el formulario
            if (titulo===""|| autor === "" || resumen === "" || editorial === "" || genero ==="") {
              Swal.fire({
                title: "Faltan campos por llenar",
                text: "Verifique el formulario",
                icon: "error",
              });
              return;
            }
            
            const loading = Swal.fire({
              title: "Actualizando datos del libro",
              text: "Espere por favor...",
              icon: "info",
            });
          //subimos la imagen
            let urlImagen = "";

            if (imagen !== undefined) {
              //si el usuario selecciono una imagen se subirá la imagen seleccionada en el FIREBASE
              urlImagen = await uploadFile(imagen);
            }
            //Subimos el archivo pdf
            let urlArchivo="";
            if (archivo !== undefined) {
              console.log("LLEGUE AQUI");
              //si el usuario selecciono un archivo se subirá la imagen seleccionada en el FIREBASE
              urlArchivo = await uploadFile(archivo);
            }
            console.log("Nombre del archivo pdf cargado: ",archivo)
            //hacemos una copia del libro, con la info a partir del formulario
            let libroActualizado = {
              ...values,
            };
            //si es que se subio, modifico la propiedad foto en la copia
            //if (urlImagen !== "" && imagen !== undefined) {
              if (imagen !== undefined) {
              libroActualizado.portada=await getUrlImagen(urlImagen.metadata.name);
             
            }

            if (archivo !== undefined) {
              libroActualizado.pdf=await getUrlImagen(urlArchivo.metadata.name);
              console.log ("Valor del PDF cargado: ",libroActualizado.pdf );
            }

            //Se crea el libro con la URL de la imagen súbida a firebase
            const resultado = await updateBook(id, libroActualizado);
            loading.close();

            //En el mensaje se muestra solo el botón (OK)
            await Swal.fire({
              title: "Libro Actualizado",
              text: `${values.titulo} se actualizo exitosamente`,
              icon: "success",
            });
            // navegacion
            navigate("/");
      };
      useEffect(() => {
        const gtBooks = async () => {
          try {
            const resultado = await getBookById(id);
            setValues(resultado)
            console.log("Resultado de obtener el valor del libro: ",resultado)
          } catch (error) {
            console.log(error)
          }
        }
        gtBooks();
      }, []);
      
      return (

        <FormBook
        handleValues={handleValues}
        handleImage={handleImage}
        handleFile={handleFile}
        handleSubmit={handleSubmit}
        values={values}
        title="Editar Libro"
        nombreBoton="Actualizar"
        />
      )
}

export default EditBookView