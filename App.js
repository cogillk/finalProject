import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import { Form } from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/profile"> Profile </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
      <div> 
      </div>
    </Router>
  );
}

export default App;
