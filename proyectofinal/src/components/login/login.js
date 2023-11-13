import React from 'react';
import PropTypes from 'prop-types';
import styles from './login.module.css';

const Login = () => (
  <div className={styles.Login} data-testid="Login">
    Login Component (test1 Vale) 
    Login Component (test2 Eduardo) 
    Login Component (test2 Nacho)
  </div>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
