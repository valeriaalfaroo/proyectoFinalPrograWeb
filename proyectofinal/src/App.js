import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Login from './components/login/login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Registro from './components/registro/registro';
import Main from './components/main/main';
import Perfilpersona from './components/perfilpersona/perfilpersona';
import Borrar from './components/borrar/borrar';
import Editar from './components/editar/editar';

function App() {
  return (
    <div className="App">
      

      <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Perfilpersona" element={<Perfilpersona />} />
        <Route path="/Borrar" element={<Borrar />} />
        <Route path="/Editar" element={<Editar />} />
        <Route path="/" element={<InitialRedirect />} />
      </Routes>
    </Router>

    </div>
  );
}
function InitialRedirect() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/Registro');
  }, [navigate]);

  return null; 
}


export default App;
