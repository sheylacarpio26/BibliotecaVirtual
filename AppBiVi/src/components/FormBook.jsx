
const FormBook = ({ handleValues, handleImage, handleSubmit, values, title }) => {
  return (
    <div className="container pt-4">
      <h1 className="mb-4">{values.titulo}</h1>
      <form onSubmit={handleSubmit}>
        {/* AUTOR */}
        <div className="mb-3">
          <label className="form-label" htmlFor="nombre">
            Autor:
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Ej. Vestido Azul"
            name="nombre"
            value={values.autor}
            onChange={handleValues}
          />
        </div>
              {/* PORTADA */}
              <div className="mb-3">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={values.portada}
            />
            <input type="file" className="form-control" onChange={handleImage} />
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
              placeholder="100"
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
              placeholder="Jeans"
              name="genero"
              value={values.genero}
              onChange={handleValues}
            />
          </div>
          {/* {PDF} */}
          <div className="mb-3">
            <label className="form-label" htmlFor="pdf">
              PDF
            </label>
            {/* <input type="file" className="form-control" onChange={handleImage} /> */}
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">
          Crear
        </button>
      </form>
    </div>
  );
};
export default FormBook