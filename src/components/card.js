import './card.css'

const Card = ({movie}) => {
    return (
       <div className='fullcard'>
       <div className="card">
        {movie.map((movie) =>(
            <div className="card-body">
                <img src={movie.cardImg} width={310} />
            </div>
        ))}
       </div> </div>
    );
}

export default Card;
