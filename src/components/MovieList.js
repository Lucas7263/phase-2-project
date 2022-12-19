import React from 'react';
import Movie from './Movie';


function Movielist({movieData}) {
    console.log()
   const movies = movieData.map(movie => {
          return (<Movie movie={movie}/>
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