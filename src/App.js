import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import {useState} from 'react';
import {getGames} from './components/games';

function App() {
   let games = getGames();

   const [cards, setCards] = useState(games.filter((game) => game));

   return (
      <div className="App">
         <Header />
         <h1>Hello from friends!</h1>
         <Cards cards={cards} />
      </div>
   );
}

export default App;
