const Card = ({card}) => {
   return (
      <div className="card">
         <img src={card.image} alt="" />
         <h3>{card.name}</h3>
      </div>
   );
};

export default Card;
