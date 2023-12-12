import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './main.module.css';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Note from "../Notes/Notes";
import axios from "axios";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {TextareaAutosize } from '@mui/material' ;
import { useState } from 'react';


const Main = (props) => {
  const [notes, setNotes] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleTest = () => {
    let storedUser = JSON.parse(localStorage.getItem("user"));
    console.log(storedUser);
  }

  let storedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlDelApi = "http://localhost:8080/api/notes";
        
       
        const queryParams = new URLSearchParams({
          idUsuarioSesion: storedUser.userID,
          token: storedUser.jwt
        });
  
        const requestURL = `${urlDelApi}?${queryParams.toString()}`;
        
        const response = await axios.get(requestURL);
        setNotes(response.data);
      } catch (error) {
        console.error("2", error);
      }
    };
  
    fetchData();
  
  }, []);
  // La dependencia está vacía, por lo que se ejecutará solo una vez al montar el componente

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <div className={styles.Registro} data-testid="Registro">
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
            <a href="../perfilpersona">Profile</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="../main">Home</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="../login">Logout</a>
          </MenuItem>
        </Menu>
      </div>
      <h1>Bienvenid@ {storedUser.name}</h1>

      <Button onClick={handleTest}>Test 1</Button>

      <Grid container spacing={2}>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} sm={6} md={4}>
            <div>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Main;