import React, {useState} from 'react';
import Header from "./Header";



function App() {

   const [darkMode, setDarkMode] = useState(false);

  //  function changeDark() {
  //   setDarkMode(true)
  //  } function to set the state from the conditional rendering from Header
  // changeDark={changeDark}
    return(
     
        <Header />
       
    )
}

export default App;


