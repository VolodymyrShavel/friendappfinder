import React from 'react';
import Tag from './Tag';

const Tags = (props) => {
   return (
      <div className="tags">
         <div className="tags_centred">
            <Tag onTagClick={props.onTagClick} name={'Популярные'} />
            <Tag onTagClick={props.onTagClick} name={'Соревновательные'} />
            <Tag onTagClick={props.onTagClick} name={'Мобильные'} />
            <Tag onTagClick={props.onTagClick} name={'Кооперативные'} />
            <Tag onTagClick={props.onTagClick} name={'Онлайн'} />
         </div>
      </div>
   );
};

export default Tags;
