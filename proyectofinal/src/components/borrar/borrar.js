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
import { useState } from 'react';
import {TextareaAutosize } from '@mui/material' ;
import { renderMatches } from 'react-router-dom';



const Borrar = (props) => {

    const [notes, setNotes] = useState([]);
    const [showNotes, setShowNotes] = useState(false);
    const [deleteMode, setDeleteMode] = useState(false);
    const [deletingNote, setDeletingNote] = useState({ idUser: '', title: '', content: '',userID:'1',noteID:''});

    useEffect(() => {
      const fetchData = async () => {
        try {
          const urlDelApi = "http://localhost:8080/api/note/all";
          const params = {
            idUser: '1',
          };
          const response = await axios.get(urlDelApi, { params });
          setNotes(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      if (showNotes) {
        fetchData();
      }
    }, [showNotes]);

    
    const handleShowNotes = () => {
      setShowNotes(true);
      setDeleteMode(false); 
    };
  
    const handleHideNotes = () => {
      setShowNotes(false);
    };
  
    const handleEnterDeleteMode = (note) => {
      setDeleteMode(true);
      setDeletingNote(note);
    };

    const handleSaveChanges = async () => {
      try {
        const urlDelApi = "http://localhost:8080/api/note/byid";
        
        console.log("deletingNote",deletingNote)
        
        await axios.put(`${urlDelApi}?content=${deletingNote.content}&title=${deletingNote.title}&noteID=${deletingNote.noteID}&userID=${deletingNote.userID}`
        ,null);
        setDeleteMode(false);
      } catch (error) {
        console.error(error);
      }
    };
  
      //UseEffect sirve para cargar las notas cuando el componente cargue
    
    const deleteMockNote = (noteID) => {
        // Se filtra la nota con el NoteID 
        const updatedNotes = notes.filter((note) => note.NoteID !== noteID);
        setNotes(updatedNotes);
      };
      
      const volver = () => {
        window.location.href="/Perfilpersona"
      }
  return(
  <div className={styles.Borrar} data-testid="Borrar">
    
    <Button variant="outlined" onClick={volver}>
        Volver
      </Button>
<h1>Borrar Notas</h1>
    
    
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
