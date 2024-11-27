import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import Browse from './components/Browse';
import Read from './components/Read';

function App() {
  return (
    <div>
      <Home></Home>
      <NavigationBar></NavigationBar>
      <Read></Read>
      <Browse></Browse>
    </div>
    /*
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/read" element={<h1> Component</h1>} />
        <Route path="/create" element={<h1>Create Component</h1>} />
      </Routes>
    </Router>
    */
  );
}

export default App;
