import React from 'react';
import PropTypes from 'prop-types';
import styles from './perfilpersona.module.css';
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";


const Perfilpersona = () => {
 
  return (
  <div className={styles.Perfilpersona} data-testid="Perfilpersona">

  <h1>Perfil de Estudiante</h1>
  <form>
    <TextField required id="standard-basic" label="Estudiante" variant="standard" name="student" type="text"/>
    <br/>
    <TextField required id="standard-basic" label="Clase" variant="standard" name="class" type="text"/>
    <br/>
    <TextField required id="standard-basic" label="Nota" variant="standard" name="grade" type="number"/>
    <br/>
    <br/>
    <Button variant="contained" name="AgregarNota" type="submit">Agregar</Button><a>│</a>
    <Button variant="contained" name="EditarNota" type="reset">Editar</Button><a>│</a>
    <Button variant="contained" name="EliminarNota" type="reset">EliminarNota</Button><a>│</a>
    <br/>
    <Button variant="contained" name="Cancelar" type="reset">Cancelar</Button>
    <br/>
  </form>
  </div>
  );
};


Perfilpersona.propTypes = {};

Perfilpersona.defaultProps = {};

export default Perfilpersona;
