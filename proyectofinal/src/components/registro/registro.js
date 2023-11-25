import React, { useState } from 'react';
import styles from './registro.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    usuario: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const reset = () =>{
    setFormData(''); 
  }

  const urlDelApi = "http://10.17.19.22/api.php/records";
  const handleSubmit = (e) => {

    axios
      .post('URL_DEL_API', formData) 
      .then((response) => {
       
        console.log(response.data);
       
      })
      .catch((error) => {
       
        console.error(error);
       
      })
      .finally(() => {
       
      });
  };

  return (
    <div className={styles.Registro} data-testid="Registro">
      <h1>Registro de usuario</h1>
      <form>
        <TextField
          required
          id="standard-basic"
          label="Nombre"
          variant="standard"
          name="nombre"
          type="text"
          value={formData.nombre}
          onChange={handleChange}
        />
        <br></br>
        <TextField
          required
          id="standard-basic"
          label="Apellidos"
          variant="standard"
          name="apellidos"
          type="text"
          value={formData.apellidos}
          onChange={handleChange}
        />
        <br></br>
        <TextField
          required
          id="standard-basic"
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
