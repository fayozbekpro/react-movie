import { Link } from 'react-router-dom';

const MovieCard = ({imgLink, title, id, lang, avg}) => {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500/${imgLink}`} alt="" className="card-img"/>
      <h2 className="card-title"><span>{title}</span></h2>
      <h3 className="card-title">Original language: <span>{lang}</span> </h3>
      <h3 className="card-title">Vote average: <span>{avg}/10</span> </h3>
      <Link to={`/movie/${id}`} className="card-btn">More Info</Link> 
    </div>
  )
}

export default MovieCard;