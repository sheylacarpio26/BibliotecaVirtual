
const FormBook = ({ handleValues, handleImage, handleFile,handleSubmit, values, title, nombreBoton }) => {
  console.log("Valor del PDF es: ", values.pdf);
  const archivo = values.pdf;
  console.log("Valor del ARCHIVO es: ", archivo);
  return (
    <div className="container pt-4">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        {/* TÍTULO */}
        <div className="mb-3">
          <label className="form-label" htmlFor="titulo">
            Título:
          </label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            placeholder="Ej. Cien años de soledad"
            name="titulo"
            value={values.titulo}
            onChange={handleValues}
          />
        </div>
        {/* AUTOR */}
        <div className="mb-3">
          <label className="form-label" htmlFor="autor">
            Autor:
          </label>
          <input
            type="text"
            className="form-control"
            id="autor"
            placeholder="Ej. Gabriel García Márquez"
            name="autor"
            value={values.autor}
            onChange={handleValues}
          />
        </div>
        {/* PORTADA */}
        <div className="mb-3">
          <img
             alt="imagen de portada"
             className="img-fluid rounded"
             style={{ maxWidth:'20%', maxHeight: '20%', objectFit: 'cover' }}
            src={values.portada}
          />
          <input type="file" className="form-control" onChange={handleImage}/>
        </div>
        {/* RESUMEN */}
        <div className="mb-3">
          <label className="form-label" htmlFor="resumen">
            Resumen
          </label>
          <textarea
            className="form-control"
            id="resumen"
            name="resumen"
            value={values.resumen}
            onChange={handleValues}
          ></textarea>

          {/* EDITORIAL */}
          <div className="mb-3">
            <label className="form-label" htmlFor="editorial">
              Editorial
            </label>
            <input
              type="text"
              className="form-control"
              id="editorial"
              placeholder="Nombre de la editorial"
              name="editorial"
              value={values.editorial}
              onChange={handleValues}
            />
          </div>
          {/* GENERO */}
          <div className="mb-3">
            <label className="form-label" htmlFor="genero">
              Género:
            </label>
            <input
              type="text"
              className="form-control"
              id="genero"
              placeholder="Ej. Drama"
              name="genero"
              value={values.genero}
              onChange={handleValues}
            />
          </div>
          {/* {PDF} */}
          <div className="mb-3">
            <label className="form-label" htmlFor="pdf">
              PDF:  
            </label>
            <a href={values.pdf}>{values.titulo}
            </a>
            <input type="file" className="form-control" onChange={handleFile} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">
          {nombreBoton}
        </button>
      </form>
    </div>
  );
};
export default FormBook