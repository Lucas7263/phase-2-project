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
   const [page, setPage] = useState("/");
  
   function toggleDarkMode() {
    setDarkMode(!darkMode)
   }; 
   
   const handleClick = () => toggleDarkMode();
   const buttonTextContent = darkMode ? "Light Mode" : "Dark Mode";
  
    useEffect(() => {
      fetch( 'http://localhost:8000/movies')
      .then(res => res.json())
      .then(data => setMovieData(data))

    }, []);
    

    function addMovie(formData) {
      fetch('http://localhost:8000/movies', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((newMovie) => setMovieData(movies => [...movies, newMovie]))
    }; 
    
    function handleDeleteMovie(id) {
      const updatedMovies = movieData.filter((movie) => movie.id !== id)
          setMovieData(updatedMovies)    
    };
  


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
                            <MovieList movieData={movieData} deleteMovie={handleDeleteMovie}/>
                        </Route> 
                    </Switch>       
              
                  
                </div>
                              
       //make a home page for last navbar
    )
}

export default App;


 

                // json-server --watch movieData.json --port 8000
                //command for watching my server

  


    // Starhip Troopers info
    // Starship Troopers
    
    // https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Starship_Troopers_-_movie_poster.jpg/220px-Starship_Troopers_-_movie_poster.jpg

    // Humans in a fascist, militaristic future wage war with giant alien bugs.



    // Predator
    // https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Predator_Movie.jpg/220px-Predator_Movie.jpg
    // A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.
    //
    //

    // Ghostbusters
    // https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Ghostbusters_%281984%29_theatrical_poster.png/220px-Ghostbusters_%281984%29_theatrical_poster.png
    // Three parapsychologists forced out of their university funding set up shop as a unique ghost removal service in New York City, attracting frightened yet skeptical customers.