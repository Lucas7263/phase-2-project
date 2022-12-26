import React from 'react';



function Movie({movie}) {
    const {name, image, about, id} = movie
    
    
    return (
        <div className='movie'>
            <h2>{name}</h2>
            <img src={image} alt={name}></img>
            <p>{about}</p>
            <button className='movieButton'>Delete</button>
            <button className='movieButton'>Update</button>
        </div>
    )
}

export default Movie


// this component will build out each individula movie to display on the page.

// https://flxt.tmsimg.com/assets/p9376_p_v10_ae.jpg