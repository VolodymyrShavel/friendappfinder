import React from 'react';

const Input = (props) => {
   return (
      <div className="input">
         <div className="input_place">
            <input
               type="text"
               maxLength="20"
               placeholder="Искать игру..."
               onChange={props.onInputChange}
            />
         </div>
      </div>
   );
};

export default Input;
