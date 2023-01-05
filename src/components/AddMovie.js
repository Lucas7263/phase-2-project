import React, { useState } from 'react';

function AddMovie({ newMovie }) {

    console.log(newMovie)
    return(
        // const [movie, SetMovie] = useState({

        // })
        <div className="addmovie">
            <h2>Add New Movie</h2>
            <form >
                <label className="label">
                    Name
                    <input className="input" type="text" placeholder='Name'></input>
                </label>
                <label className="label">
                    Movie Poster
                    <input  className="input" type="text" placeholder='movie poster'></input>
                </label>
                <label className="label">
                    About
                    <input  className="input" type="text" placeholder='Movie Synopsis'></input>
                </label>
                    <button type="submit">Submit</button>
            </form>
           
            
        </div>
        
    )
}

export default AddMovie;