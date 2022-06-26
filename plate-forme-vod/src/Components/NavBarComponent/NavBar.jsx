import React from "react";
import './NavBar.css';

const NavBar = () => {

    return (
        <div className="nav_contents">
            <img className="nav_logo"
                src="../../../public/img/netflix_logo.png"
                alt="Logo Netflix"
                />
            <div className="nav_avatar">Avatar Netflix</div>
        </div>
    );

};
export default NavBar;