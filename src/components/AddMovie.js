import React, { useState } from 'react';

function AddMovie({ addMovie }) {
   const [name, setName] = useState("");
   const [image, setImage] = useState("");
   const [about, setAbout] = useState("");
  
   function handleNameChange(e) {
    setName(e.target.value)
   }
   
   function handleImageChange(e) {
    setImage(e.target.value)
   }

   function handleAboutChange(e){
    setAbout(e.target.value)
   }
   
   function handleSubmit(e) {
    e.preventDefault()
    console.log("submited")
    addMovie({
        name,
        image,
        about
    })

    
   }
    return(
      
        <div className="addmovie">
            <h2>Add New Movie</h2>
            <form onSubmit={handleSubmit}>
                <label className="label">
                    <h3>Movie Title</h3>
                    </label>
                    <input className="input" type="text" placeholder='Title' onChange={handleNameChange} value={name}></input>
                
                <label className="label">
                    Movie Poster
                    <input  className="input" type="text" placeholder='movie poster' onChange={handleImageChange} value={image}></input>
                </label>
                <label className="label">
                    Blurb
                    <input  className="input" type="text" placeholder='Write a blurb' onChange={handleAboutChange} value={about}></input>
                </label>
                <button type="submit">Submit</button>
                </form>

                    
            
           
            
        </div>
        
    )
}

export default AddMovie;