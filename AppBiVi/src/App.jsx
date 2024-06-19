import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";
import Navigation from './components/Navigation';
import IndexView from './views/IndexView';
import AdmBooksView from './views/AdmBooksView';

const App=()=> {
    return (
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element = {<IndexView/>}/>
          <Route path="/admbooks" element={<AdmBooksView />} />
        </Routes>
      </Router>
  )
}

export default App
