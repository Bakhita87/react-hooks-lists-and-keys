import React from "react";

function NavBar(){
    return(
        <nav>
            <div className="home">
              
            <a href="#home">home</a>
            <p>This is my home</p>
            </div>
            <div className="About">
            <a href="#about">About</a>
            <p>This is where i grew up</p>
            </div>
            <div className="contact">
            <a href="#contact">Contat</a>
            <p>Contact me here</p>
             </div>
        </nav>
    )
}

export default NavBar;