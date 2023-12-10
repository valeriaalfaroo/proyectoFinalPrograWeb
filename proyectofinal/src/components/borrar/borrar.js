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
  

    
      const handleCancelEdit = () => {
        setDeleteMode(false);
        setDeletingNote({ idUser: '', title: '', content: '',userID:'' });
      };
      
      const volver = () => {
        window.location.href="/Perfilpersona"
      }
      return (
        <div className={styles.container}>
          <Button variant="outlined" onClick={volver}>
            Volver
          </Button>
          <h1>Borrar Notas</h1>
          <Button variant="contained" onClick={handleShowNotes}>
            Mostrar Notas
          </Button>
          <Button variant="text" onClick={handleHideNotes} color='secondary'>
            Ocultar Notas
          </Button>
    
          {showNotes && (
            <Grid container spacing={2} className={styles.notesContainer}>
              {notes.map((note) => (
                <Grid item key={note.id} xs={12} sm={6} md={4}>
                  <div className={styles.noteCard}>
                    <h3 className={styles.noteTitle}>{note.title}</h3>
                    <p className={styles.noteContent}>{note.content}</p>
                    {!deleteMode && (
                      <div className={styles.centeredButton}>
                      <Button
                        variant="outlined"
                        onClick={() => handleEnterDeleteMode(note)}
                        className={styles.editBtn}
                      >
                        Borrar
                      </Button>
                    </div>
                    )}
                  </div>
                </Grid>
              ))}
            </Grid>
          )}
    
          {deleteMode && (
            <div className={styles.editForm}>
              <TextField
                label="Nuevo Título"
                value={deletingNote.title}
                onChange={(e) => setDeletingNote({ ...deletingNote, title: e.target.value })}
                className={styles.textField}
              />
              <br></br>
              <br></br>
              <TextField
                label="Nuevo Contenido"
                value={deletingNote.content}
                onChange={(e) => setDeletingNote({ ...deletingNote, content: e.target.value })}
                className={styles.textField}
              />      
              <br></br>
              <br></br>

              
              <Button variant="contained" onClick={handleSaveChanges} className={styles.saveBtn}>
                Guardar Cambios
                
              </Button>
              <br></br>
              <br></br>
              <Button variant="contained" onClick={handleCancelEdit} className={styles.cancelBtn}>
                Cancelar
              </Button>


            </div>// Ese boton guardar cambios y cancelar seran removidos.
          )}
        </div>
      );
};
  
Borrar.propTypes = {};

Borrar.defaultProps = {};

export default Borrar;
