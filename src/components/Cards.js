import Card from './Card';

const Cards = ({cards}) => {
   return (
      <>
         {cards.map((card) => (
            <Card key={card.uri} card={card} />
         ))}
      </>
   );
};

export default Cards;
