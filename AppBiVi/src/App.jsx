import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";
import Navigation from './components/Navigation';
import IndexView from './views/IndexView';
import AdmBooksView from './views/AdmBooksView';
import CustomNavDropdown from "./utils/CustomNavItemHover";
import EditBookView from "./views/EditBookView";
import CreateBookView from "./views/CreateBookView";
import EBookView from "./views/EBookView";

const App=()=> {
    return (
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element = {<IndexView/>}/>
          <Route path="/admbooks" element={<AdmBooksView />} />
          <Route path="/editbook/:id" element={<EditBookView />} />
          <Route path="/createbook" element={<CreateBookView />} />
          <Route path="/ebook/:id" element={<EBookView />} />
        </Routes>
      </Router>
  )
}

export default App
