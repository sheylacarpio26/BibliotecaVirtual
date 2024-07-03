import React from 'react'
import { ReactReader } from 'react-reader';

const EBookRead = ({ value}) => {
 
  const url=value
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