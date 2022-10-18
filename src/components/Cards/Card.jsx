import './Card.sass';

const Card = ({ name, image, quote }) => {
  return (
    <div className="card">
      <img src={image} alt={`${name}`} title={`${name}`} />
      <div className='description'>
        <h3>{name}</h3>
        <p>{quote}</p>
      </div>
    </div>
  );
}

export default Card;