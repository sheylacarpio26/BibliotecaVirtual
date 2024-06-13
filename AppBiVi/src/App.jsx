import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";
import Navigation from './components/Navigation';
import InicioView from './views/InicioView';
import GestionarLibrosView from './views/GestionarLibrosView';

const App=()=> {
    return (
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element = {<InicioView/>}/>
          <Route path="/gestionarLibros" element={<GestionarLibrosView />} />
        </Routes>
      </Router>
  )
}

export default App
