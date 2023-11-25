import React from 'react';
import PropTypes from 'prop-types';
import styles from './editar.module.css';
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
const Editar = (props) => (
  <div className="Editar" data-testid="Editar">
    <TextField 
      id="outlined-basic"
      name="usuario"
      defaultValue={props.edit.Title}
      variant="standard"
    /><br></br>
    <TextField
      id="outlined-basic"
      name="usuario"
      defaultValue={props.edit.Content}
      variant="standard"
    />
     <br />
    <Button color="secondary" variant="text">
      Ver Mis Notas
    </Button>
  </div>
);

Editar.propTypes = {};

Editar.defaultProps = {};

export default Editar;
