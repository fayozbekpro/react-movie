import axios from 'axios';
import React, {useState } from 'react'
import parse from "html-react-parser"
import Similar from '../components/SimilarCard/Similar';
export default function Search() {
  const [valueofinput, setvalueofinput] = useState('');
  const [valueofselect, setvalueofselect] = useState('movies');

  const typingVal = (event) => {
    setvalueofinput(event.target.value ? event.target.value : "none")
    search(valueofselect)
  }

  const search = (i) => {
    console.log(i);
    if (i === "movies") {
      axios.get('https://api.themoviedb.org/3/search/movie/', {
      params: {
        api_key: '6643bf493a4ee7747d5160e845000b20',
          query: valueofinput
        }
      })
      .then(function (response) {
        if(!response.data.results) {
          setList("none")
        } else {
          setList(response.data)
        }
      })
      .catch(e => {console.log(e);}) 
    } else{
      axios.get('https://api.themoviedb.org/3/search/person/', {
      params: {
      api_key: '6643bf493a4ee7747d5160e845000b20',
          query: valueofinput
        }
      })
      .then(function (response) {
        if(!response.data.results) {
          setList("none")
        } else {
          setList(response.data)
        }
      })
      .catch(e => {console.log(e);}) 
    }
  }

  const [List, setList] = useState({
    isFetched: false,
    results: [],
    error: null,
  });

  const selectVal = (event) => {
    setvalueofselect(event.target.value)

    search(event.target.value)
  }
  console.log(List);
  return (
    <>
      <div className="search">
        <div className="search-component">
          <select name="select-type" id="select" onChange={selectVal} required>
            <option value="movies">Movies</option>
            <option value="actor">Actor</option>
          </select>
          <input type="text" name='search-input' onChange={typingVal} />
        </div>
        <div className="search-result">
          {valueofinput === "none" ? (
            <>
              <div></div>
            </>
          ) : (
            List.results ? List.results.slice(0, 6).map((i, key) => (
              <a href={valueofselect === "movies" ? `/movie/${i.id}` : "/person/"+i.id}  className="similar-link" key={key}><Similar img={valueofselect === "movies" ? i.poster_path : i.profile_path} title={valueofselect === "movie" ? i.title : i.name} desc={i.overview} id={key}/></a>
            )) : parse("<center><h3 className='root-secondary'>Loading...</h1></center>")
          )}
        </div>
      </div>
    </>
  )
}
