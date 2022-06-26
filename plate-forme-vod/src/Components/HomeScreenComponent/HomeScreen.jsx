import React from "react";
import './HomeScreen.css';
import NavBar from '../NavBarComponent/NavBar';
import Banner from '../BannerComponent/Banner';


const HomeScreen=()=>{

    return(
        <div>
            <NavBar/>
            <Banner/>
        </div>
    );

};

export default HomeScreen;