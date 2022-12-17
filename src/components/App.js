import React, {useState} from 'react';
import Header from "./Header";
import MovieList from './MovieList';
import movieData from '../movieData.json';



function App() {

   const [darkMode, setDarkMode] = useState(false);

  //  function changeDark() {
  //   setDarkMode(true)
  //  } function to set the state from the conditional rendering from Header
  // changeDark={changeDark}
    return(
            <div>
                <Header darkMode={darkMode}/>
                <MovieList movieData={movieData}/>
            </div>
            
       
    )
}

export default App;


