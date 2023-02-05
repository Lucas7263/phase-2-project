import React from "react";
import { NavLink } from 'react-router-dom'



function NavBar() {
        return (
            <div>
                <nav className='nav'>
                     <ul className="list">
                        <ol><NavLink to="/Home">Home</NavLink></ol>
                        <ol><NavLink  exact to="/MovieList">Movies</NavLink></ol>
                        <ol><NavLink  to="/AddMovie">Add Movie</NavLink></ol>
                    </ul>   
                </nav>
            </div>  
        )
}
        export default NavBar;