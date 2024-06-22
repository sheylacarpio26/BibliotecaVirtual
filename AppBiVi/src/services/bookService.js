import axios from "axios";
//Necesitamos lo siguiente para acceder a la variable de entorno:import.meta.env.VITE_SOMEKEY;
//const URL = "https://66723b2ee083e62ee43e683b.mockapi.io";
const URL = import.meta.env.VITE_ENDPOINT_BASE;
//const URL = "https://665a7d66003609eda45e0a13.mockapi.io/"

const getBooks = async () => {
  try {
    const respuesta = await axios.get(`${URL}/books`);
    if(respuesta.status === 200){
      return respuesta.data;
    }
    throw new Error("Error al obtener la data");
  } catch (error) {
    throw error;
  }
}

const createBook = async (producto) => {
  try {
    const respuesta = await axios.post(`${URL}/books`, producto);
    console.log(respuesta)
    return respuesta.data
  } catch (error) {
    throw error;
  }
}

const getBookById = async (id) => {
  try {
    const respuesta = await axios.get(`${URL}/books/${id}`);
    console.log("getBookById: ", respuesta);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
}

const updateBook = async (id, producto) => {
  try {
    const respuesta = await axios.put(`${URL}/books/${id}`, producto);
    console.log("updateBook: ", respuesta);
    return respuesta.data
  } catch (error) {
    throw error;
  }
}

const deleteBook = async (id) => {
  try {
    const respuesta = await axios.delete(`${URL}/books/${id}`);
    console.log("deleteBook: ", respuesta);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
}

export {
    getBooks,
    createBook,
    getBookById,
    updateBook,
    deleteBook
}