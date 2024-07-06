  // Función para recortar el texto si es necesario
const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';  // Agrega puntos suspensivos al final del texto truncado
    } else {
      return text;
    }
  };

    export {
       
        truncateText
    }
    