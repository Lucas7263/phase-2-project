import React from 'react';
import Movie from './Movie';


function Movielist({movieData}) {
  
   const movies = movieData.map(movie => {
          return (<Movie key={movie.id} movie={movie}/>
          )
   })  
  
    return (
        <div>
            
            <h3>{movies}</h3>
            
        </div>
       
    )
}

export default Movielist


//make new movie compenent for each movie
//use movielist component to map through data and destructure