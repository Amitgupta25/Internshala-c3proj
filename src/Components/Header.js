import React from 'react'
import logo from '../img/logo.png'

function Header(props) {
    return (
        <div>

                <header className="top">

                    <div className="logo">
                        <a href="#">
                            <img src= {logo} alt=""/>
                        </a>
                        <a href="#" class="logovalue"> BRILLIANT</a>
                    </div>

                    <nav className="navigation">
                        <a href="#">TODAY</a>
                        <a href="#">COURSES</a>
                        <a href="#">PRACTICE</a>
                    </nav>

                    <div class="details">
                        <button class="topleftbutton" onClick = {props.showmodal}>Log In</button>
                        <button class="toprightbutton" onClick = {props.showmodal}>Sign Up</button>
                    </div>
               </header>
            
        </div>
    )
}

export default Header

