import React from "react";
import { Link } from 'react-router-dom'



function NavBar({onPageChange}) {



function handleLinkClick(e) {
    e.preventDefault();
    onPageChange(e.target.pathname)
}

        return (
            <div>
                <nav className='nav'>
                    
                <Link onClick={handleLinkClick} to="/">Movies</Link>
                <Link onClick={handleLinkClick} to="/AddMovie">Add Movie</Link>
              
            </nav>
         
            </div>
            
        )
}
        export default NavBar;