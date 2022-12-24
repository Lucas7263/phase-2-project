import React from 'react';



function Movie({movie}) {
    const {name, image, about, id} = movie
    
    
    return (
        <div>
            <h2>{name}</h2>
            <p>{about}</p>
            <img src={image} alt={name}></img>
            <button>Delete</button>
        </div>
    )
}

export default Movie


// this component will build out each individula movie to display on the page.

// https://flxt.tmsimg.com/assets/p9376_p_v10_ae.jpg