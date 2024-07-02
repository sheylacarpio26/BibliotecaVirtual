import React from 'react'
import { ReactReader } from 'react-reader';

const EBookRead = ({ value}) => {
    console.log("El valor del archivo: ",{value});
    const handleLocationChanged = (epubcfi) => {
      console.log(`Location changed: ${epubcfi}`);

    };
  
  const url="https://firebasestorage.googleapis.com/v0/b/proyecto-bivi.appspot.com/o/epubs%2F1984%20trad%20Maria%20Jose%20Martin%20Pinto%20-%20George%20Orwell.epub?alt=media";
    return (
      <div style={{ position: 'relative', height: '100vh' }}>
        <ReactReader
          url={url}
          locationChanged={(epubcifi) => console.log(epubcifi)}
          title={"VISTA DE LECTURA VIBI - libro name"}
          
        />
      </div>
    );
  };

export default EBookRead