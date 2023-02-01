import React from 'react';
import Movie from './Movie';


function Movielist({movieData, deleteMovie}) {

   const movies = movieData.map(movie => {
          return (<Movie  key={movie.id} movie={movie} deleteMovie={deleteMovie} />
                 
          )     
   });  
   
//    key={movie.id} 
    return (
        
        <div >
           
            { movies }
          
            
       
            
        </div>
       
    )
}

export default Movielist


