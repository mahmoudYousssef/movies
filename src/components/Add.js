import React, { useEffect, useState } from "react";
import "./Add.css";
import axios from "axios";
import ResultCard from "./ResultCard";
const Add = () => {
  const [searchValue,setSearchValue]= useState("");
  const [movies ,setMovies] = useState([]);
  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=a6cfbbd2`)
    .then((response)=>{
      if(response.data.Search){
        setMovies(response.data.Search);
      }
      return
    } );
  
  }, [searchValue]);
  return (

    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-container">
            <input type="text" placeholder="Search for a movie" 
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}/>
          </div>
          { movies.length > 0 && (<ul className="results">
{movies.map((movie) => (
            <li key={movie.imdbID}>
              
            {<ResultCard movie={movie}/>}
            </li>
          ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
