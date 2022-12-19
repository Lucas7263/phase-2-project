import React, {useState, useEffect} from 'react';
import Header from "./Header";
import MovieList from './MovieList';


// sudo sh -c "echo nameserver 8.8.8.8 > /etc/resolv.conf"
//terminal code for host error

function App() {
   const [darkMode, setDarkMode] = useState(true);
  const [movieData, setMovieData] = useState([]);
   function toggleDarkMode() {
    setDarkMode(!darkMode)
    
   } 
  
    useEffect(() => {
      fetch( 'http://localhost:8000/movies')
      .then(res => res.json())
      .then(data => setMovieData(data))

    }, [])
    console.log(movieData)
    // const movieData = (data) => {
    //    return  data.map(movie => {
    //       // console.log(movie)
    //       return movie
    //     })
        
    // } 
    
    return(
            <div className={darkMode ? "App" : "App-light"}>
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                
               <MovieList movieData={movieData}/>
       
            </div>
            
       
    )
}

export default App;


 {/* {movieData.map(movie => {
        return (
            <div className="box">
              <MovieList title={movie.title} image={movie.image} about={movie.about}/>  
                
            </div>
        )
    })}    */}
                {/* <MovieList movieData={movieData}/> */}

                // json-server --watch movieData.json --port 8000
                //command for watching my server