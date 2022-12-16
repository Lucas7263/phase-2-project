import React, {useEffect, useState} from "react";

function Header() {
  

      
    function Clock() {
        const [time, setTime] = useState(new Date());
      
        useEffect(() => {
          setInterval(() => {
            setTime(new Date());
          }, 1000);
        }, []);
      
        return <div>{time.toString()}</div>;
      }
    

    return (
        <div>
            <h1 class="title">Luke's Favorite Movies</h1>
            <button class="darkmode">Dark Mode</button>
            <div class="time">{Clock()}</div>
           
        </div>
    )
}


export default Header