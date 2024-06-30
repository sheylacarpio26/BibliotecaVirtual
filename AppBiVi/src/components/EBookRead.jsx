import React from 'react'
import { ReactReader } from 'react-reader';

const EBookRead = ({ value}) => {
    console.log("El valor del archivo: ",{value});
    const handleLocationChanged = (epubcfi) => {
      console.log(`Location changed: ${epubcfi}`);

    };
    //const url = "https://firebasestorage.googleapis.com/v0/b/proyecto-bivi.appspot.com/o/epubs%2F1984%20trad%20Maria%20Jose%20Martin%20Pinto%20-%20George%20Orwell.epub"
  //  const url ="https://firebasestorage.googleapis.com/v0/b/proyecto-bivi.appspot.com/o/pdf%2F1984%20trad%20Maria%20Jose%20Martin%20Pinto%20-%20George%20Orwell.pdf?alt=media&token=97281f2d-bc93-4604-a7b7-6672eb183628"
  const url="https://firebasestorage.googleapis.com/v0/b/proyecto-bivi.appspot.com/o/epubs%2F1984%20trad%20Maria%20Jose%20Martin%20Pinto%20-%20George%20Orwell.epub?alt=media&token=672200a0-9c43-4e4e-8b67-cdc097f980d9";
    return (
      <div style={{ position: 'relative', height: '100vh' }}>
        <ReactReader
          url={url}
          title={"My EPUB Reader"}
          locationChanged={(epubcifi) => console.log(epubcifi)}
        />
      </div>
    );
  };

export default EBookRead