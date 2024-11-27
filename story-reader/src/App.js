import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Browse from './components/Browse';
import Read from './components/Read';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/browse" element={ <Browse/> } />
        <Route path="/read" element={ <Read/> } />
      </Routes>
    </Router>
  );
}

export default App;
