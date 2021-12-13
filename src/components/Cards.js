import Card from './Card';
import {Link} from 'react-router-dom';

const Cards = ({cards}) => {
   return (
      <div className="cards">
         <div className="cards_place">
            {cards.map((card) => (
               <Link
                  to={`/games/${card.uri}`}
                  key={card.uri}
                  style={{textDecoration: 'none'}}
               >
                  <Card card={card} />
               </Link>
            ))}
         </div>
      </div>
   );
};

export default Cards;
