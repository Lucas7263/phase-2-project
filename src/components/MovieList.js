import React, {useState} from 'react';
import Movie from './Movie';


function Movielist({movieData, deleteMovie}) {

   const movies = movieData.map(movie => {
          return (<Movie key={movie.id} movie={movie} deleteMovie={deleteMovie} />
        
          )
   })  
            
    return (
        <div>
          
            {movies}
            
        </div>
       
    )
}

export default Movielist


//make new movie compenent for each movie
//use movielist component to map through data and destructure