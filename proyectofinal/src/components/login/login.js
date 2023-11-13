import React from 'react';
import PropTypes from 'prop-types';
import styles from './login.module.css';
import TextField from '@mui/material/TextField';


const Login = () => (
  <div className={styles.Login} data-testid="Login">


          <TextField id="standard-basic" label="Standard" variant="standard" />
   <br></br>
    Login Component (test1 Vale) 
    Login Component (test2 Eduardo) 
    Login Component (test3 Nacho)
    Login Component (test4 Fabian) 


  </div>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
