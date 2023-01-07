import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Similar from '../components/SimilarCard/Similar';
import parse from 'html-react-parser';

const SingleMovie = ({ match }) => {
  const [movieList, setMovieList] = useState({
    isFetched: false,
    data: [],
    error: null
  });
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/'+match.params.id, {
      params: {
        api_key: '6643bf493a4ee7747d5160e845000b20'
      }
    })
    .then(function (response) {
      setMovieList(response.data)
    })
    .catch(e => {console.log(e);}) 
  }, [])

  // 2

  const [moviesList2, setMoviesList2] = useState({
    isFetched: false,
    data: [],
    error: null
  });
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/'+match.params.id+"/credits", {
      params: {
        api_key: '6643bf493a4ee7747d5160e845000b20'
      }
    })
    .then(function (response) {
      setMoviesList2(response.data)
    })
    .catch(e => {console.log(e);}) 
  }, [setMoviesList2])
  // 3
  const [moviesList3, setMoviesList3] = useState({
    isFetched: false,
    data: [],
    error: null
  });
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/'+match.params.id+"/similar", {
      params: {
        api_key: '6643bf493a4ee7747d5160e845000b20'
      }
    })
    .then(function (response) {
      setMoviesList3(response.data)
    })
    .catch(e => {console.log(e);}) 
  }, [setMoviesList3])
  console.log(movieList)
  return (
    <>
      <div className='movie'>
            {!movieList.id ? parse("<center><h3 className='root-secondary'>Loading...</h3></center>") : (
            <div className="movie-in">
              <div className="img">{(
                movieList.backdrop_path ? 
                <img src={`https://image.tmdb.org/t/p/w500/${movieList.backdrop_path}`} alt="" />
                : "Image not found"
              )}
              </div>
              <div className='movieDatas'>
                <h1 className='text-title'>{movieList.original_title}</h1>
                <span className='root-secondary text-grade'>{movieList.vote_average}/10</span>
                <p className='text-desc'>{movieList.overview}</p>
                {movieList.homepage ? (<a href={movieList.homepage}>Homepage</a>) : ""}
              </div>
            </div>
            ) }
        


        <div className="similar">
          <br /><br /><br />
          <br /><br /><br />
          <br /><br /><br />
          <div className="title">
            Actors
          </div>
          <div className="similar-movies">
              {
                moviesList2.cast ? moviesList2.cast.slice(0, 12).map((i, key) => (
                  <a href={`/person/${i.id}`}><Similar key={key}   img={i.profile_path} title={i.name} id={key}/></a>
                )) : parse("<center><h3 className='root-secondary'>Loading...</h1></center>")
              }
          </div>
        </div>

        <div className="similar">
          <br /><br /><br />
          <br /><br /><br />
          <br /><br /><br />
          <div className="title">
            Similar Movies
          </div>
          <div className="similar-movies">
              {
                moviesList3.results ? moviesList3.results.slice(0, 6).map((i, key) => (
                  // console.log(i)
                  <a href={`/movie/${i.id}`} className="similar-link" key={key}><Similar img={i.poster_path} title={i.title} desc={i.overview} id={key}/></a>
                )) : parse("<center><h3 className='root-secondary'>Loading...</h1></center>")
              }
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleMovie;
