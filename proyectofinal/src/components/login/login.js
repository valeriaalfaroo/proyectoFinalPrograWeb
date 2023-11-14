import React from 'react';
import PropTypes from 'prop-types';
import styles from './login.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => (
  <div className={styles.Login} data-testid="Login">
<h1> Bienvenido al Blog de Notas</h1>
<form>
<TextField id="standard-basic" label="Usuario" variant="standard" name="usuario" type="text"/>
<br></br>
<TextField id="standard-basic" label="Password" variant="standard" name="password" type="password" />
<br></br>
<br></br>
<Button variant="contained" name="btnIngresar" type="submit">Ingresar</Button>
<Button variant="contained" name="btnCancelar" type="reset">Cancelar</Button>
</form>
   
   <br></br>
   
  </div>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
