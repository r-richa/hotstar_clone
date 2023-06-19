import { Link } from 'react-router-dom';
import './card.css'

const Card = ({movie}) => {
    return (
       <div className='fullcard'>
       <div className="card">
        {movie.map((movie) =>(
            <Link to={`/movie/${movie.id}`} style={{textDecoration: 'none', color: 'white'}}>
            <div className='cardwhole'>
                <div className="card-body">
                    <img src={movie.cardImg} width={310} />
                </div>
                <div className='card-hover'>
                    <h2>{movie.title}</h2>
                    <p>{movie.subTitle}</p>

                </div>

            </div>
            </Link>
        ))}
       </div> </div>
    );
}

export default Card;
