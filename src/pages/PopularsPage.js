import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import MovieViewCard from '../components/MovieViewCard/MovieViewCard';
const PopularsPage = () => {
  const [moviesList, setMoviesList] = useState({
    isFetched: false,
    data: [],
    error: null
  });
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?page=1', {
      params: {
        api_key: '6643bf493a4ee7747d5160e845000b20'
      }
    })
    .then(function (response) {
      setMoviesList(response.data)
    })
    .catch(e => {console.log(e);}) 
  }, [setMoviesList])

  console.log(moviesList);

  return (
    <>
      <section>
        <div className="title">
          most popular
        </div>

        <div className='cards'>
          {
            moviesList.results ? moviesList.results.map((i, key) => (
              <MovieViewCard img={i.poster_path} title={i.title} id={i.id} desc={i.overview} grade={i.vote_average}/>
            )) : "<span>Loading...</span>"
          }
        </div>
      </section>

      {/* <div className='bigContainer'>
        {
          moviesList.results ? moviesList.results.map((i, key) => (
            <MovieCard imgLink={i.poster_path} title={i.original_title} id={i.id} lang={i.original_language} avg={i.vote_average}/>
          )) : "Loading..."
        }
      </div> */}
    </>
  )
}

export default PopularsPage;