import React from 'react';
import PropTypes from 'prop-types';
import styles from './editar.module.css';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Note from "../Notes/Notes";
import axios from "axios";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useEffect} from 'react';

import {TextareaAutosize } from '@mui/material' ;
import { renderMatches } from 'react-router-dom';

const Editar = (props) => {

  const [formValues, setFormValues] = React.useState();
  const [authenticated, setAuthenticated] = React.useState();
  const [users, setUsers] = React.useState();
  const [notes, setNotes] = React.useState();
  const [user,setUser]=React.useState(props.user); 

  const urlDelApi = "http://localhost:8080/api/note/byid";
  
  const mockNotes = [
    {
      NoteID: 4,
      UserID: 4,
      Title: "Nota 4",
      Content: "nueva editable",
      CreatedAt: "2023-10-10 15:56:41",
    },
    {
      NoteID: 5,
      UserID: 4,
      Title: "nota 5",
      Content: "This is the content of ToDo 3 for user 2.",
      CreatedAt: "2023-10-10 15:56:41",
    },
    {
      NoteID: 6,
      UserID: 5,
      Title: "nota 6",
      Content: "This is the content of Task 13 for user 15.",
      CreatedAt: "2023-10-10 15:56:41",
    },
  ];

  const onChancheInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(event);
    console.log(name);
    console.log(value);
    
    setFormValues({ ...formValues, [name]: value });
  };

  const callAPINotes = (event) => {
    axios
      .get(`${urlDelApi}/notas`)
      .then(function (response) {
        console.log(response);
        console.log(response.data.records);
        console.log(response.statusText);
        setNotes(response.data.records);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  };

  const callAPMockNotes = (event) => {
    setNotes(mockNotes);
    setNotes([...mockNotes]);
  };

  const clearNotes = (event) => {
    setNotes();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    useEffect(() => {
      callAPMockNotes();
    }, []);

    const editNotes = (noteID) => {
      //requiere conexion a base de datos
    };

  return(
    <div className={styles.Editar} data-testid="Editar">
    
        

    <div>
    <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        DASHBOARD
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
    
  <h2>{user?.usuario} seleccione la nota que desea editar</h2>
        <br/>
        <br/>
        <br/>

    <Card id="card-home" className={styles["card-home"]}>
    <Grid container spacing={4}>
      {notes?.map((nota) =>
      (
         <Grid item xs={6} key={nota.NoteID}> 
            <Note titulo="titulo" note={nota}>  

            </Note>
            <button onClick={() => editNotes(nota.noteID)}>Edit</button>
        </Grid>
        
      ))}
    </Grid>
    
  </Card>

  </div>
  )
};

Editar.propTypes = {};

Editar.defaultProps = {};

export default Editar;
