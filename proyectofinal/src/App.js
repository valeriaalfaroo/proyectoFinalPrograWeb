import logo from './logo.svg';
import './App.css';
import  Login from './components/login/login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      

      <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
