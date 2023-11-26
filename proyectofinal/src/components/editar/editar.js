import React from 'react';
import PropTypes from 'prop-types';
import styles from './editar.module.css';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {TextareaAutosize } from '@mui/material' ;

const Editar = (props) => (
  <div className="Editar" data-testid="Editar">
    <TextField 
      id="outlined-basic"
      name="usuario"
      defaultValue={props.edit.Title}
      variant="standard"
    /><br></br>

    <TextareaAutosize className={styles["textarea"]}
      id="outlined-basic"
      name="usuario"
      defaultValue={props.edit.Content}
      variant="standard"
    />
     <br />
    <Button color="secondary" variant="text">
      Editar la nota
    </Button>
  </div>
);

Editar.propTypes = {};

Editar.defaultProps = {};

export default Editar;
