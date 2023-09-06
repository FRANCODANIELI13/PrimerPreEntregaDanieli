import React from "react";
import Cartwidget from "../cartwidget";
export const Navbar = () =>{
    return(
        <div className="Container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#">Joyeria Ruiz </a> 
                </div>
                <ul className="nav__list">
                    <li>
                        <a className="nav__link" href="#"> <Cartwidget/></a>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
}
export default Navbar;