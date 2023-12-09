import React, { useState } from 'react';
import styles from './registro.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const Registro = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastnames: '',
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const reset = () => {
    setFormData({
      name: '',
      lastnames: '',
      email: '',
      username: '',
      password: '',
    });
  };
  

  const urlDelApi = "http://localhost:8080/api/user";
  const handleSubmit = (e) => {
    axios
      .post(
        `${urlDelApi}?name=${formData.name}&lastnames=${formData.lastnames}&email=${formData.email}&username=${formData.username}&password=${formData.password}`,
        null, // pass null as the second parameter for a GET request with parameters in the URL
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        console.log(formData);
        window.location.href = "../Login/";
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        // Any cleanup or additional logic
      });
  };

  
  return (
    <div className={styles.Registro} data-testid="Registro">
      <h1>Registro de usuario</h1>
      <form>
        <TextField
          required
          id="name-input"
          label="Nombre"
          variant="standard"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        <br></br>
        <TextField
          required
          id="lastname-input"
          label="Apellidos"
          variant="standard"
          name="lastnames"
          type="text"
          value={formData.lastnames}
          onChange={handleChange}
        />
        <br></br>
        <TextField
          required
          id="email-input"
          label="Email"
          variant="standard"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br></br>
        <TextField
          required
          id="user-input"
          label="Usuario"
          variant="standard"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
        />
        <br></br>
        <TextField
          required
          id="passw-input"
          label="Password"
          variant="standard"
      name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br></br>
        <Button variant="contained" name="btnRegistrar" onClick={handleSubmit}>
          Registrar
        </Button>
        <Button variant="contained" name="btnCancelarRegistro" onClick={reset}>
          Cancelar
        </Button>
        <hr></hr>
        <h4>
          <p>
            Si ya tiene una cuenta, haga <a href="./login">click aquí</a> para ingresar.
          </p>
        </h4>
      </form>
    </div>
  );
};

export default Registro;
