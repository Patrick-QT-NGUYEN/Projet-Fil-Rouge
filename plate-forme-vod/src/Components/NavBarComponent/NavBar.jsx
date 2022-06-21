import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Home from '../../views/HomeView/Home';
import Signin from '../../views/SigninView/Signin';
import Signup from '../../views/SignupView/Signup';

import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <BrowserRouter>
                <div id="navbar">
                    <button className='bouton'>
                        <Link to="/">Home</Link>
                    </button>
                    <button className='bouton'>
                        <Link to="/Signin">Connexion</Link>
                    </button>
                    <button className='bouton'>
                        <Link to="/Signup">Inscription</Link>
                    </button>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Signin" element={<Signin />} />
                    <Route path="/Signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default NavBar;
