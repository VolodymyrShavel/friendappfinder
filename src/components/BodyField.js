import Input from './Input';
import Tags from './Tags';
import Cards from './Cards';
import {useState} from 'react';
import {getGames} from './games';

function BodyField(props) {
   let games = getGames();

   const [tagState, setTagState] = useState('Популярные');
   const [inputValue, setInputValue] = useState('');
   const [cards, setCards] = useState(games.filter((game) => game));

   function onTagClick(e) {
      console.log(e.target.innerHTML);
      setTagState(e.target.innerHTML);
   }

   // console.log(inputValue);

   const filteredRegex = new RegExp(
      [...inputValue].join(String.raw`(\w*[\s\-\.'\+:])*?`),
      'ig'
   );
   const sortingRegex = new RegExp(
      [...inputValue].join(String.raw`\w*[\s\-\.'\+:]`),
      'ig'
   );

   const filteredGames = cards
      .filter((game) => {
         if (!inputValue) {
            return game;
         } else if (game.name.match(filteredRegex)) {
            return game;
         }
      })
      .sort((a, b) => {
         const aMatch = (a = filteredRegex);
         const bMatch = (b = sortingRegex);
         if (aMatch && !bMatch) return -1;
         else if (bMatch && !aMatch) return 1;
         return 0;
      });
   const filteredTags = cards.filter((game) => {
      if (game.tag.includes(tagState)) {
         return game;
      }
   });

   return (
      <>
         <Tags onTagClick={onTagClick} />
         <Input onInputChange={(event) => setInputValue(event.target.value)} />
         <Cards cards={inputValue ? filteredGames : filteredTags} />
      </>
   );
}

export default BodyField;
