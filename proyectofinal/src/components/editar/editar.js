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
import { useState } from 'react';
import {TextareaAutosize } from '@mui/material' ;
import { renderMatches } from 'react-router-dom';

const Editar = (props) => {
  const [notes, setNotes] = useState([]);
  const [showNotes, setShowNotes] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingNote, setEditingNote] = useState({ id: '', title: '', content: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlDelApi = "http://localhost:8080/api/note/all";
        const params = {
          id: '1',
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
    setEditMode(false); 
  };

  const handleHideNotes = () => {
    setShowNotes(false);
  };

  const handleEnterEditMode = (note) => {
    setEditMode(true);
    setEditingNote(note);
  };

  const handleSaveChanges = async () => {
    try {
      const urlDelApi = "http://localhost:8080/api/note/byid";
      const { id, title, content } = editingNote;
      const params = {
        id: '1',
      };
      await axios.put(urlDelApi, editingNote,params);
      setEditMode(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditingNote({ id: '', title: '', content: '' });
  };

  const volver = () => {
    window.location.href="/Perfilpersona"
  }

  return (
    <div className={styles.container}>
      <Button variant="outlined" onClick={volver}>
        Volver
      </Button>
      <h1>Editar Notas</h1>
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
                {!editMode && (
                  <div className={styles.centeredButton}>
                  <Button
                    variant="outlined"
                    onClick={() => handleEnterEditMode(note)}
                    className={styles.editBtn}
                  >
                    Editar
                  </Button>
                </div>
                )}
              </div>
            </Grid>
          ))}
        </Grid>
      )}

      {editMode && (
        <div className={styles.editForm}>
          <TextField
            label="Nuevo Título"
            value={editingNote.title}
            onChange={(e) => setEditingNote({ ...editingNote, title: e.target.value })}
            className={styles.textField}
          />
          <br></br>
          <br></br>
          <TextField
            label="Nuevo Contenido"
            value={editingNote.content}
            onChange={(e) => setEditingNote({ ...editingNote, content: e.target.value })}
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
            Cancelar Edición
          </Button>
        </div>
      )}
    </div>
  );
};

export default Editar;
