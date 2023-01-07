import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../assets/styles/Person.scss"
import Similar from '../components/SimilarCard/Similar';
import parse from 'html-react-parser'
export default function Person({match}) {
    const [person, setperson] = useState({
        isFetched: false,
        data: [],
        error: null
      });
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/person/'+match.params.id, {
          params: {
            api_key: '6643bf493a4ee7747d5160e845000b20'
          }
        })
        .then(function (response) {
          setperson(response.data)
        })
        .catch(e => {console.log(e);}) 
      }, [])


      const [cast, setcast] = useState({
        isFetched: false,
        data: [],
        error: null
      });
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/person/'+match.params.id+"/movie_credits", {
          params: {
            api_key: '6643bf493a4ee7747d5160e845000b20'
          }
        })
        .then(function (response) {
          setcast(response.data)
        })
        .catch(e => {console.log(e);}) 
      }, [])
  return (
    <div className='person'>
        {!person.name ? (
            <>
                <center>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 className='root-secondary'>Not found</h1>
                </center>
            </>
        ) : (
            <>
                <div className="person-main">
                    <div className="person-img">
                        <img src={"https://image.tmdb.org/t/p/w500" + person.profile_path} alt="" />
                    </div>
                    <div className="person-datas">
                        <div className="name">{person.name}</div>
                        <div className="bio">{person.biography}</div>
                        <div className="birth">{person.birthday}</div>
                    </div>
                </div>

                
                <div className="movie-credits">
                    <div className="title">
                        {cast.crew && cast.crew.length > 0 ? person.name+" MOVIE CREDITS" : ''}       
                    </div>
                    <div className="movies">
                        {
                            cast.crew ? cast.crew.slice(0, 18).map((ii, key) => (
                                <a href={`/movie/${ii.id}`} className="similar-link" key={key}><Similar img={ii.poster_path} title={ii.title} desc={ii.overview} id={key}/></a>
                            )) : parse("<center><h3 className='root-secondary'>Loading...</h1></center>")
                        }
                    </div>
                </div>
            </>
        )}
    </div>
  )
}
