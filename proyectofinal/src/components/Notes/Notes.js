import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notes.module.css';
import TextField from "@mui/material/TextField";
import {TextareaAutosize } from '@mui/material' ;
import Button from "@mui/material/Button";
const Notes = (props) => (
  <div className="Note" data-testid="Note">

    <TextField 
      id="outlined-basic"
      name="usuario"
      // label="Outlined"
      defaultValue={props.note.Title}
      // onChange={onChancheInput}
      variant="standard"
    />
    <br></br>

    <TextareaAutosize className={styles["textarea"]}


      id="textarea"
      name="usuario"
      // label="Outlined"
      defaultValue={props.note.Content}
      // onChange={onChancheInput}
      
      variant="standard"

    />
    
  </div>
  
);

Notes.propTypes = {};

Notes.defaultProps = {};

export default Notes;
