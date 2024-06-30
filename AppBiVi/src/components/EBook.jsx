import React from 'react';
//import EpubReader from './EpubReader';
import EBookRead from './EBookRead';
const epubUrl = "https://firebasestorage.googleapis.com/v0/b/proyecto-bivi.appspot.com/o/epubs%2F1984%20trad%20Maria%20Jose%20Martin%20Pinto%20-%20George%20Orwell.epub"; // Cambia esto por la URL de tu archivo EPUB
const EBook = ({ value}) => {
  return (
    <div className="App">
      <EBookRead value={epubUrl} />
    </div>
  );
};

  export default EBook