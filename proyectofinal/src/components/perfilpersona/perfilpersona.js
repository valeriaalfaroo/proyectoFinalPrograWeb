import React from 'react';
import PropTypes from 'prop-types';
import styles from './perfilpersona.module.css';
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";


const Perfilpersona = () => {
 
  return (
  <div className={styles.Perfilpersona} data-testid="Perfilpersona">

  <h1>Perfil</h1>
  <form>
    <TextField required id="standard-basic" label="Titulo" variant="standard" name="titulo" type="text"/>
    <br/>
    <TextField required id="standard-basic" label="Nota" variant="standard" name="nota" type="text"/>
    <br/>
    <br/>
    <Button variant="contained" name="AgregarNota" type="submit" href="./agregarNota">Agregar</Button><a>│</a>
    <Button variant="contained" name="EditarNota" type="reset">Editar</Button><a>│</a>
    <Button variant="contained" name="EliminarNota" type="reset">Eliminar Nota</Button><a>│</a>
    <br/>
    <Button variant="contained" name="Cancelar" type="reset">Cancelar</Button>
    <br/>
  </form>

  <br></br>
  </div>
  );

};




Perfilpersona.propTypes = {};

Perfilpersona.defaultProps = {};

export default Perfilpersona;
