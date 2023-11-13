import React from 'react';
import PropTypes from 'prop-types';
import styles from './login.module.css';
import TextField from '@mui/material/TextField';


const Login = () => (
  <div className={styles.Login} data-testid="Login">

          <TextField id="standard-basic" label="Standard" variant="standard" />

  </div>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
