import React, {useState, useEffect} from 'react';
import Header from "./Header";
import MovieList from './MovieList';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
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
    
    // toggleDarkMode={toggleDarkMode}
    // <Header darkMode={darkMode} handleClick={handleClick}/>
    return (
            <div className={darkMode ? "App" : "App-light"}>
               <button className="darkmodebutton" onClick={handleClick}>{buttonTextContent}</button>
                <Header />
                
               {/* <MovieList movieData={movieData}/> */}
              
                 
                  <NavBar onPageChange={setPage} />
                 
                    <Routes>
                        <Route path="AddMovie" element={<AddMovie />}  />
                        <Route path={page} element={<MovieList movieData={movieData}/>} />
                    </Routes>       
                  
                  
                </div>
                              
       
    )
}

export default App;


 

                // json-server --watch movieData.json --port 8000
                //command for watching my server