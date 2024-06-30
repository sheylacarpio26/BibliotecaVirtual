
import {ref,uploadBytes} from "firebase/storage"
import { storage } from "../config/firebase";
import {nameFileUUID} from "../utils/utils"

const uploadFile = async (imagen) => {
  try {
    const nameWithExt = nameFileUUID(imagen.name);
    console.log("Nombre de la imagen en storageService (uploadFile)",{nameWithExt})
    //referencia del archvo a subir
    const refArchivo = ref(storage, nameWithExt);

    const resultado = await uploadBytes(refArchivo, imagen);
    
    console.log("Resultado: ", resultado)

    return resultado;

  } catch (error) {
    console.log(error)
  }
};

//Para obtener dirección de imagen cargada
const _urlImagen = import.meta.env.VITE_PORTADA + import.meta.env.VITE_STORAGE_BUCKET_DIR;//PORTADA
console.log(_urlImagen);

const getUrlImagen = async (nombre_imagen) => {
  try {
    const resultado = await _urlImagen + nombre_imagen+"?alt=media";

    return resultado;
  } catch (error) {
    console.log(error)
  }
};


//Para obtener dirección del archivo
const _urlArchivo = import.meta.env.VITE_PORTADA + import.meta.env.VITE_STORAGE_BUCKET_DIR;//PORTADA
console.log(_urlArchivo);

const getUrlArchivo = async (nombre_archivo) => {
  try {
    const resultado = await _urlArchivo + nombre_archivo+"?alt=media";

    return resultado;
  } catch (error) {
    console.log(error)
  }
};


export {
  uploadFile,
  getUrlImagen,
  getUrlArchivo
}