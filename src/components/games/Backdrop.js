import classes from './Backdrop.module.css';
import React from 'react';

function Backdrop(props) {
   return <div className={classes.backdrop} onClick={props.onCancel} />;
}

export default Backdrop;
