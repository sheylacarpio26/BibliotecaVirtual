import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getBookById } from "../services/bookService";
import EBook from "../components/EBook"

const EBookView = () => {
    
    const [value, setValue] = useState("")
    const { id } = useParams();
    let archivo="";
   
    useEffect(() => {
        const gtBooks = async () => {
            try {
                const resultado = await getBookById(id);
                archivo=resultado.pdf
                setValue(archivo)
            } catch (error) {
                console.log(error)
            }
        }
        gtBooks();
    }, []);
    return (

        <EBook
            value={value}
        />
    )
}

export default EBookView