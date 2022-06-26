import React from "react";
import './NavBar.css';

const NavBar = () => {

    return (
        <div className="nav_contents">
            <img className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/640px-Netflix_2015_logo.svg.png"
                alt="Logo Netflix"
                />
            <div className="nav_avatar">Avatar Netflix</div>
        </div>
    );

};
export default NavBar;