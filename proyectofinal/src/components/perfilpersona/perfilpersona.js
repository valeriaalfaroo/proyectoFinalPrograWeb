import React from 'react';
import PropTypes from 'prop-types';
import styles from './perfilpersona.module.css';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Perfilpersona = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
  <div className={styles.Perfilpersona} data-testid="Perfilpersona">
<div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
      <a href="./perfilpersona">Profile</a>
    </MenuItem>
    <MenuItem onClick={handleClose}>
      <a href="./main">Home</a>
    </MenuItem>
    <MenuItem onClick={handleClose}>
      <a href="./login">Logout</a>
    </MenuItem>
      </Menu>
    </div>

  <h1>Perfil</h1>
  <form>
    <TextField required id="standard-basic" label="Titulo" variant="standard" name="titulo" type="text"/>
    <br/>
    <TextField required id="standard-basic" label="Nota" variant="standard" name="nota" type="text"/>
    <br/>
    <br/>
    <Button variant="contained" name="AgregarNota" type="submit">Agregar</Button>
    <Button variant="contained" name="EditarNota" type="reset">Editar</Button>
    <Button variant="contained" name="EliminarNota" type="reset">Eliminar Nota</Button>
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
