import React from 'react';
import PropTypes from 'prop-types';
import styles from './borrar.module.css';
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



const Borrar = (props) => {

    const [formValues, setFormValues] = React.useState();
    const [authenticated, setAuthenticated] = React.useState();
    const [users, setUsers] = React.useState();
    const [notes, setNotes] = React.useState();
    const [user,setUser]= React.useState(props.user);

    const urlDelApi = "http://localhost:8080/api/note/all";

    const mockNotes = [
      {
        NoteID: 1,
        UserID: 1,
        Title: "Nota 1",
        Content: "nueva nota",
        CreatedAt: "2023-10-10 15:56:41",
      },
      {
        NoteID: 2,
        UserID: 1,
        Title: "nota 2",
        Content: "This is the content of ToDo 2 for user 1.",
        CreatedAt: "2023-10-10 15:56:41",
      },
      {
        NoteID: 3,
        UserID: 2,
        Title: "nota 3",
        Content: "This is the content of Task 1 for user 2.",
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
        .get(`${urlDelApi}`)
        .then(function (response) {
          // handle success
          console.log(response);
          console.log(response.data.records);
          console.log(response.statusText);
          setNotes(response.data.records);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
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
      //UseEffect sirve para cargar las notas cuando el componente cargue
    
    const deleteMockNote = (noteID) => {
        // Se filtra la nota con el NoteID 
        const updatedNotes = notes.filter((note) => note.NoteID !== noteID);
        setNotes(updatedNotes);
      };

  return(
  <div className={styles.Borrar} data-testid="Borrar">
    
        

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
    
<h2>{user?.usuario} seleccione la nota que desea eliminar</h2>

        <br></br>
        <br></br>
        <br></br>

        <Card id="card-home" className={styles["card-home"]}>
          <Grid container spacing={4}>
            {notes?.map((nota) => //Se cambio esta linea, en vez de usar nota, index ahora solo es nota y key usa nota.NoteID para
            //eliminar correctamente la nota, en caso contrario se eliminaria la nota de abajo primero.
            //Tambien se cambio el key={index} por nota.NoteID para que funcione
            (
  
               <Grid item xs={6} key={nota.NoteID}> 
                  <Note titulo="titulo" note={nota}>  

                  </Note>
                  <button onClick={() => deleteMockNote(nota.NoteID)}>Delete</button>
              </Grid>
              
            ))}
          </Grid>
          
        </Card>          
  </div>
  )
};
  
Borrar.propTypes = {};

Borrar.defaultProps = {};

export default Borrar;
