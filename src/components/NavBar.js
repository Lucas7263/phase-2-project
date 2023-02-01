import React from "react";
import { NavLink } from 'react-router-dom'



function NavBar() {
        return (
            <div>
                <nav className='nav'>
                     <ol>
                        <NavLink to="/Home">Home</NavLink>
                        <NavLink  exact to="/MovieList">Movies</NavLink>
                        <NavLink  to="/AddMovie">Add Movie</NavLink>
                    </ol>   
                </nav>
            </div>  
        )
}
        export default NavBar;