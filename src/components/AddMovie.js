import React, { useState } from 'react';

function AddMovie({ newMovie }) {

    console.log(newMovie)
    return(
        // const [movie, SetMovie] = useState({

        // })
        <div className="addmovie">
            <h2>Add New Movie</h2>
            <form >
                <label>
                    Name
                    <input type="text" placeholder='Name'></input>
                </label>
                <label>
                    Movie Poster
                    <input type="text" placeholder='movie poster'></input>
                </label>
                <label>
                    About
                    <input type="text" placeholder='Movie Synopsis'></input>
                </label>
          
            </form>
           
            
        </div>
        
    )
}

export default AddMovie;