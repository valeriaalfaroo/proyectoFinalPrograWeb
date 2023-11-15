import React from 'react';
import PropTypes from 'prop-types';
import styles from './registro.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Registro = () => (
  <div className={styles.Registro} data-testid="Registro">

<h1>Registro de usuario</h1>

<form>
<TextField required id="standard-basic" label="Nombre" variant="standard" name="nombre" type="text"/>
<br></br>
<TextField required id="standard-basic" label="Apellidos" variant="standard" name="apellidos" type="text"/>
<br></br>
<TextField required id="standard-basic" label="Email" variant="standard" name="email" type="email"/>
<br></br>
<TextField required id="standard-basic" label="Usuario" variant="standard" name="usuario" type="text"/>
<br></br>
<TextField required id="standard-basic" label="Password" variant="standard" name="password" type="password" />
<br></br>
<br></br>
<Button variant="contained" name="btnRegistrar" type="submit">Ingresar</Button>
<Button variant="contained" name="btnCancelarRegistro" type="reset">Cancelar</Button>
<br></br>
<hr></hr>
<h4><p>Si ya tiene una cuenta, haga <a href='./login'>click aquí </a>para ingresar.</p></h4>
<br></br>
</form>
   
   <br></br>
   
  </div>
);

Registro.propTypes = {};

Registro.defaultProps = {};

export default Registro;
