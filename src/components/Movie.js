import React from 'react';



function Movie({movie, deleteMovie}) {
      

    const {name, image, about, id} = movie
    
    function deletesMovie() {
     
        deleteMovie(id)
    }

    // PATCH request should go in this component I think.
    return (
        <div className='movie'>
            <h2>{name}</h2>
            <img src={image} alt={name}></img>
            <p>{about}</p>
            <button className='movieButton' onClick={deletesMovie}>Delete</button>
            <button className='movieButton'>Update</button>
        </div>
    )
}

export default Movie


// this component will build out each individula movie to display on the page.

// https://flxt.tmsimg.com/assets/p9376_p_v10_ae.jpg