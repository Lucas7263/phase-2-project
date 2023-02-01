import React from 'react';



function Movie({movie, deleteMovie}) {
      

    const {name, image, about, id} = movie
    
    function deletesMovie() {
     
        fetch(`http://localhost:8000/movies/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then(() =>  deleteMovie(id))
       
    }
   
    return (
        <div className='movie'>
            <h2>{name}</h2>
            <img src={image} alt={name}></img>
            <p className='movietext'>{about}</p>
            <button className='movieButton' onClick={deletesMovie}>Delete</button>
        </div>
    )
}

export default Movie


// this component will build out each individula movie to display on the page.

// https://flxt.tmsimg.com/assets/p9376_p_v10_ae.jpg