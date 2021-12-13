import React from 'react';

const Tag = (props) => {
   return (
      <div>
         <button className="button" onClick={props.onTagClick}>
            {props.name}
         </button>
      </div>
   );
};

export default Tag;
