import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import IndexView from "./views/IndexView";
import AdmBooksView from "./views/AdmBooksView";
import CustomNavDropdown from "./utils/CustomNavItemHover";
import EditBookView from "./views/EditBookView";
import CreateBookView from "./views/CreateBookView";
import EBookView from "./views/EBookView";
import { AuthContextProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Protected from "./components/Protected";
import Footer from "./components/Footer";
import { SearchProvider } from './context/SearchContext';

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <SearchProvider>
        <Header />
        
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route
            path="home"
            element={
              <Protected>
                <Navigation />
                <IndexView />
              </Protected>
            }
          />
          <Route
            path="/admbooks"
            element={
              <Protected>
                <Navigation />
                <AdmBooksView />
              </Protected>
            }
          />
          <Route
            path="/editbook/:id"
            element={
              <Protected>
                <Navigation />
                <EditBookView />
              </Protected>
            }
          />
          <Route
            path="/createbook"
            element={
              <Protected>
                <CreateBookView />
              </Protected>
            }
          />
          <Route
            path="/ebook/:id"
            element={
              <Protected>
                <EBookView />
              </Protected>
            }
          />
          
        </Routes>
        <Footer />
        </SearchProvider>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
