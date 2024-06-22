import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, options ={method:'get', data:null}) => {
    const [data, setData]=useState(null);//datos
    const [error, setError]=useState(null);//errores
    const [loading, setLoading]=useState(false);//para saber el estado de la petición


    const fetchData = async () => {
        try {
          setLoading(true); //esta cargando
          const response = await axios({ url, ...options }); //peticion
          setData(response.data); //axios me da la info en response.data
        } catch (error) {
          setError(error);
        } finally { //que se va ejecutar siempre si o si ya sea la petición tenga éxito o no
          setLoading(false);
        }
      }
    
      useEffect(() => {
        const startFetch = async () => {
          fetchData()
        }
        startFetch();
      }, [url, options.method, options.data])
    
      return { data, error, loading }
    }
    
    export default useAxios;