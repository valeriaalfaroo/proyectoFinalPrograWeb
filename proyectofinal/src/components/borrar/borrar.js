import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from 'axios';
import styles from './borrar.module.css';
import { useEffect } from 'react';


const Borrar = () => {
    const [notes, setNotes] = useState([]);
    const [showNotes, setShowNotes] = useState(false);
    const [deleteMode, setDeleteMode] = useState(false);
    const [deletingNote, setDeletingNote] = useState({ id: 0 });
    let storedUser = JSON.parse(localStorage.getItem("user"));

    const fetchNotes = async () => {
        try {
            const url = "http://localhost:8080/api/note/all";
            const params = {
                idUsuarioSesion: storedUser.userID,
                token: storedUser.jwt
            };
            const response = await axios.get(url, { params });
            if (response.status !== 200) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            setNotes(response.data);
        } catch (error) {
            console.log(`Fetch failed: ${error.message}`);
        }
    };
    const handleShowNotes = () => {
        fetchNotes();
        setShowNotes(true);
    };

    const handleHideNotes = () => {
        setShowNotes(false);
    };

    const handleEnterDeleteMode = (note) => {
        setDeletingNote(note);
        setDeleteMode(true);
    };


    const handleSaveChanges = async () => {
        try {

            const urlDelApi = "http://localhost:8080/api/note";


            const params = {
                id: deletingNote.noteID,
                idUsuarioSesion: storedUser.userID,
                token: storedUser.jwt
            };

        ;
            await axios.delete(urlDelApi, { params });
            setDeleteMode(false);
            fetchNotes();

        } catch (error) {
            console.error(error);
        }

    };

    const handleCancelEdit = () => {
        setDeleteMode(false);
    };

    const volver = () => {
        window.location.href = "/Perfilpersona"
    }

    const handleConfirmDelete = () => {
        if (window.confirm('Estas seguro de eliminar esta nota?')) {
            handleSaveChanges();
        } else {
            setDeleteMode(false);
        }
    }

    return (
        <div className={styles.container} data-testid="Borrar">
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
                        <Grid item key={note.noteID} xs={12} sm={6} md={4}>
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
                    <Button variant="contained" onClick={handleConfirmDelete} className={styles.saveBtn}>
                        Confirmar
                    </Button>
                    <br></br>
                    <br></br>
                    <Button variant="contained" onClick={handleCancelEdit} className={styles.cancelBtn}>
                        Cancelar
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Borrar;
