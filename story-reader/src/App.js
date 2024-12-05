import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Browse from './components/Browse';
import Read from './components/Read';
import Write from './components/Write';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Update from './components/Update';
import Settings from './components/ThemeOption';
import { ThemeProvider } from './context/ThemeContext';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div id="app" data-theme="dark">
      <ThemeProvider>
      <div className="container">
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/read/:id" element={<Read />} />
            <Route path="/write" element={<Write />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
    </div>
    
  );
}

export default App;
