import { getBookById } from "../services/bookService";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ListBook = ({ books }) => {
    const navigate = useNavigate();
    //EDITAR PRODUCTO INICIO
    const handleGetBookById = async (id) => {
        try {
            const result = await getBookById(id);
            navigate("./");
            //console.log("handleEditProduct", result)

        } catch (error) {
            // notify(firebaseErrorsInSpanish[error.code], {type: "error"});
            await Swal.fire({
                title: "Error",
                text: error.code,
                icon: "error"
            })
        }
    }
    //EDITAR PRODUCTO FIN

    return (
        <>
            <div>
                {/* renderizado condicional */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Resumen</th>
                            <th>Portada</th>
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
                                        <td>"portada a cambiar"</td>
                                        <td>{editorial}</td>
                                        <td>{genero}</td>
                                        <td>"PDF"</td>
                                        <td className="d-flex">
                                            <Link className="btn btn-primary btn-sm" to={`/editbook/${id}`}>
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </Link>

                                             {/* <button className="btn btn-sm ms-2" onClick={() => { handleGetBookById(id) }}>
                                                <i className="fa-solid"></i>
                                            </button> */}
                                            {/* <button className="btn btn-danger btn-sm ms-2" onClick={() => { handleEliminar(id) }}>
                                                <i className="fa-solid fa-trash"></i>
                                            </button> */}
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