import { useContext } from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const { id, titulo, autor, resumen, editorial, genero } = book;
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Resumen</th>
                        <th>Portada</th>
                        <th>Editorial</th>
                        <th>Género</th>
                    </tr>
                </thead>
                <tbody>
                    {/* desestructurando directamente en los argumentos */}

                    <tr key={id}>
                        <td>{titulo}</td>
                        <td>{autor}</td>
                        <td>{resumen}</td>
                        <td>"portada a cambiar"</td>
                        <td>{editorial}</td>
                        <td>{genero}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BookCard;