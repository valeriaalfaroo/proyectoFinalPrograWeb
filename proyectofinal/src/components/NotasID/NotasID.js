import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './NotasID.module.css';

const NotasId = () => {
  const [notes, setNotes] = useState([]);
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlDelApi = "http://localhost:8080/api/note/all";
        const params = {
          id: '1',   // userId: userId, // Suponiendo que el parámetro esperado por la API es userId
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
  };

  const handleHideNotes = () => {
    setShowNotes(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
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
      <h1>Notas por id de usuario</h1>

      <Button variant="contained" onClick={handleShowNotes}>
        Mostrar Notas
      </Button>
      <Button variant="contained" onClick={handleHideNotes}>
        Ocultar Notas
      </Button>

      {showNotes && (
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
      )}
    </div>
  );
};
export default NotasId;
