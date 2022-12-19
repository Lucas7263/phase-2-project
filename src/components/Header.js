import React, {useEffect, useState} from "react";

function Header({darkMode, toggleDarkMode}) {
  
 function Clock() {
        const [time, setTime] = useState(new Date());
      
        useEffect(() => {
          setInterval(() => {
            setTime(new Date());
          }, 1000);
        }, []);
      
        return <div>{time.toString()}</div>;
      }
      
      const buttonTextContent = darkMode ? "Light Mode" : "Dark Mode"
      const handleClick = () => toggleDarkMode()
    return (
        <div>
            <h1 className="title">Luke's Favorite Movies</h1>
            <button className="darkmodebutton" onClick={handleClick}>{buttonTextContent}</button>
            <div className="time">{Clock()}</div>
           
        </div>
    )
}


export default Header