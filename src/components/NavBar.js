import React from "react";
import { NavLink } from 'react-router-dom'



function NavBar() {




        return (
            <div>
                <nav className='nav'>
                    
                <NavLink  exact to="/Movies">Movies</NavLink>
                <NavLink  to="/AddMovie">Add Movie</NavLink>
                </nav>
         
            </div>
            
        )
}
        export default NavBar;