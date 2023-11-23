import logo from './logo.svg';
import './App.css';
import  Login from './components/login/login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registro from './components/registro/registro';
import Main from './components/main/main';
function App() {
  return (
    <div className="App">
      

      <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
