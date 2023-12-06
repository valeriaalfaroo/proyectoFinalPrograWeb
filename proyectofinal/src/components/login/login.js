import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './login.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';


const Login = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    password: '',
  });


  const mockUser = {
    usuario: 'admin',
    password:'admin',
    };

  

  const callAPMockUsers = (event) => {
    setFormData(mockUser);
    setFormData([...mockUser]);

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const urlDelApi = "http://localhost:8080/api/login";

  const callAPIAuthenticate = (event) => {
    const data = formData;
    console.log("data");
    axios
      .post(
        `${urlDelApi,formData.usuario,formData.password,
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
       }`
      
        )
      .then(function (response) {
        // handle success
        console.log("data", response.data.records);
       localStorage.setItem("user",JSON.stringify(response.data.records[0]));
       window.location.href="../main/"
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
       
      });
  };

  const onClickBtn = () => {
    console.log("click", formData);

    if (
      mockUser.usuario === formData.usuario &&
      mockUser.password === formData.password
    ) {
      console.log("Usuario correcto");
      
     window.location.href="../main/"
    } else {
      console.log("Usuario incorrecto");
      alert("Ingrese un usuario y contraseña validos para continuar")
    }
    
  };

  const reset = () =>{
    setFormData(''); 
  }


  return (
    <div className={styles.Login} data-testid="Login">
      <h1> Bienvenido al Blog de Notas</h1>
      <form>
        <TextField
          required
          id="standard-basic"
          label="Usuario"
          variant="standard"
          name="usuario"
          type="text"
          value={formData.usuario}
          onChange={handleChange}
        />
        <br></br>
        <TextField
          required
          id="standard-basic"
          label="Password"
          variant="standard"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" name="btnIngresar" onClick={callAPIAuthenticate}>
          Ingresar
        </Button>
        <Button variant="contained" name="btnCancelar" type="reset" onClick={reset}>
          Cancelar
        </Button>
        <br></br>
        <br></br>
        <hr></hr>
        <h4>
          <p>
            Si no tiene una cuenta, haga <a href="./Registro">click aquí </a>para registrarse.
          </p>
        </h4>
      </form>
      <br></br>
    </div>
  );
};

Login.propTypes = {};

export default Login;
