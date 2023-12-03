// ParentComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import styles from './ParentComponent.module.css'

const ParentComponent = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const urlDelApi = "http://localhost:8080/api/note/all";
    const params = {
      id: '2',
      // userId: userId, // Suponiendo que el parámetro esperado por la API es userId

    };
    axios
      .get(`${urlDelApi}`,{params},)
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Se ejecuta solo una vez al montar el componente
//}, [userId]); // Se ejecuta cada vez que userId cambia
  return (
    <div className={styles.Registro} data-testid="Registro">
      <h1>Notas de id 1</h1>

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

export default ParentComponent;
