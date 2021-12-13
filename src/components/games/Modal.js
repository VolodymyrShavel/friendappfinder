import classes from './Modal.module.css';
import React from 'react';

function Modal(props) {
   return (
      <div className={classes.modal}>
         <p>Are you sure?</p>
         <button className={classes.btn} onClick={props.onCancel}>
            Оставить заявку
         </button>
      </div>
   );
}

export default Modal;
