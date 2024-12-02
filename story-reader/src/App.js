import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Browse from './components/Browse';
import Read from './components/Read';
import Write from './components/Write';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/browse" element={ <Browse/> } />
        <Route path="/read/:id" element={ <Read/> } />
        <Route path="/write" element={ <Write/> } />
      </Routes>
    </Router>
  );
}

export default App;
