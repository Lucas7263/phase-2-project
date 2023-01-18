import React, {useState, useEffect} from 'react';
import Header from "./Header";
import MovieList from './MovieList';
import NavBar from './NavBar';
import { Switch, Route} from "react-router-dom";
import AddMovie from './AddMovie';




// sudo sh -c "echo nameserver 8.8.8.8 > /etc/resolv.conf"
//terminal code for host error

function App() {
   const [darkMode, setDarkMode] = useState(true);
  const [movieData, setMovieData] = useState([]);
   const [page, setPage] = useState("/")
  function toggleDarkMode() {
    setDarkMode(!darkMode)
    
   } 
   const handleClick = () => toggleDarkMode()
   const buttonTextContent = darkMode ? "Light Mode" : "Dark Mode"
  
    useEffect(() => {
      fetch( 'http://localhost:8000/movies')
      .then(res => res.json())
      .then(data => setMovieData(data))

    }, [])
    

    function addMovie(newMovie) {
      // fetch('http://localhost:8000/movies', {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(newMovie),
      // })
      //   .then((res) => res.json())
      //   .then((newItem) => console.log(newItem))
           

      setMovieData(movie => [...movie, newMovie])
    } //next step is to add the new movie from the form to the movieData json database. Do a POST request.
    
    return (
            <div className={darkMode ? "App" : "App-light"}>
               <button className="darkmodebutton" onClick={handleClick}>{buttonTextContent}</button>
                <Header />
                
               
              
                 
                  <NavBar onPageChange={setPage} />
                 
                    <Switch>
                        <Route path="/AddMovie">
                            <AddMovie  addMovie={addMovie}/>
                        </Route>
                     
                        <Route path={page}>
                            <MovieList movieData={movieData}/>
                        </Route> 
                    </Switch>       
                  
                  
                </div>
                              
       
    )
}

export default App;


 

                // json-server --watch movieData.json --port 8000
                //command for watching my server

                // toggleDarkMode={toggleDarkMode}
    // <Header darkMode={darkMode} handleClick={handleClick}/>


    // Starhip Troopers info
    // Starship Troopers
    
    // https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Starship_Troopers_-_movie_poster.jpg/220px-Starship_Troopers_-_movie_poster.jpg

    // Humans in a fascist, militaristic future wage war with giant alien bugs.
