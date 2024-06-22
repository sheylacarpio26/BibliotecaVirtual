//import BookCard from "./BookCard"
const ListBook = ({ books }) => {
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