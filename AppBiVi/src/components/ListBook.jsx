import { getBookById, deleteBook, getBooks } from "../services/bookService";
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ListBook = ({ books }) => {
    const navigate = useNavigate();
    //EDITAR LIBRO INICIO
    const handleGetBookById = async (id) => {
        try {
            const result = await getBookById(id);
            navigate(`/editbook/${id}`);


        } catch (error) {
            // notify(firebaseErrorsInSpanish[error.code], {type: "error"});
            await Swal.fire({
                title: "Error",
                text: error.code,
                icon: "error"
            })
        }
    }
    const navigateToCreateBook = () => {
        try {
            navigate(`/createbook/`);

        } catch (error) {
            // notify(firebaseErrorsInSpanish[error.code], {type: "error"});
             Swal.fire({
                title: "Error",
                text: error.code,
                icon: "error"
            })
        }
    };
    //ELIMINAR LIBRO
    const handleDelete = async (id) => {
        // console.log("handleDelete", id);
        const resultadoUsuario = await Swal.fire({
            title: 'Desea eliminar el libro?',
            text: 'Esta acción es irreversible!',
            confirmButtonText: 'Si, deseo eliminarlo',
            showCancelButton: true,
            cancelButtonText: 'No, no deseo eliminarlo',
        });

        const { isConfirmed, isDismissed } = resultadoUsuario;

        if (isConfirmed) {
            const resultadoEliminar = await deleteBook(id);

            await Swal.fire({
                title: "Libro Eliminado",
                text: "Se elimino exitosamente",
                icon: "success"
            })
            //después de eliminar vuelvo a pedir los productos
            getBooks();
            navigate(`/admbooks/`);

        }
    }
    return (
        <>
            <div>
                <Button  variant="success" size="lg" onClick={() => { navigateToCreateBook()}}>Nuevo Libro  
                    {/* <i className="fa-solid fa-book"></i> */}
                </Button >
                {/* renderizado condicional */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Resumen</th>
                            {/* <th>Portada</th> */}
                            <th>Editorial</th>
                            <th>Género</th>
                            <th>pdf</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books ? (
                            // books.map((bk) => <BookCard key={bk.id} book={bk} />)
                            books.map(
                                ({ id, titulo, autor, resumen, portada, editorial, genero, pdf }) => (
                                    <tr key={id}>
                                        <td>{titulo}</td>
                                        <td>{autor}</td>
                                        <td>{resumen}</td>
                                        {/* <td>"portada a cambiar"</td> */}
                                        <td>{editorial}</td>
                                        <td>{genero}</td>
                                        <td>"PDF"</td>
                                        <td className="d-flex">
                                            {/* <Link className="btn btn-primary btn-sm" to={`/editbook/${id}`}>
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </Link> */}
                                            <button onClick={() => { handleGetBookById(id) }}>
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </button>
                                            <button onClick={() => { handleDelete(id) }}>
                                                <i className="fa-solid fa-trash-can"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            )
                        ) : (
                            <p>No se encontraron libros</p>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListBook