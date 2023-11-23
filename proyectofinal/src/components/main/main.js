import React from 'react';
import PropTypes from 'prop-types';
import styles from './main.module.css';
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Note from "../Notes/Notes";
import axios from "axios";

const Main = () => 
  {
  
    const [formValues, setFormValues] = React.useState();
    const [authenticated, setAuthenticated] = React.useState();
    const [users, setUsers] = React.useState();
    const [notes, setNotes] = React.useState();
  
    const urlDelApi = "http://10.17.19.22/api.php/records";
  
  
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
        .get(`${urlDelApi}/Notes`)
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
  
    return (
  
  <div className={styles.Home}>
        <Grid
          container
          spacing={2}
          style={{
            inset: 0,
            margin: "auto",
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          <Grid item xs={12}>
            {/* ... */}
          </Grid>
          <Grid item xs={6}>
            <Button onClick={callAPMockNotes} variant="contained" sx={{ mx: 2 }}>
              Ver notas
            </Button>
            <Button onClick={clearNotes} color="secondary" variant="text">
              Ocultar
            </Button>
          </Grid>
        </Grid>
  <br></br>
  <br></br>
  <br></br>

        <Card id="card-home" className={styles["card-home"]}>
          <Grid container spacing={4}>
            {notes?.map((nota, index) => (
              <Grid item xs={6} key={index}>
                <Note titulo="titulo" note={nota}></Note>
              </Grid>
            ))}
          </Grid>
        </Card>
      </div>
    );
  };
  

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
