import React from "react";

function NavBar({onPageChange})

function handleLinkClick(e) {
    e.preventDefault();
    onPageChange(e.target.pathname)
}

        return (
            <nav>
                <a onClick={handleLinkClick} href="/">Movie List</a>
                {/* <a onClick={handleLinkClick} href="/" */}
            </nav>
        )