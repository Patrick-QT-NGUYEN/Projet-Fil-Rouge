import React, { useState } from "react";
import './LoginScreen.css';
import SignUpScreen from '../SignUpScreenComponent/SignUpScreen';

const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className=".loginScreen">
            <img className="loginScreen_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/640px-Netflix_2015_logo.svg.png"
                alt="Logo Netflix"
            />
            <button className="loginScreen_button"
                onClick={(e) => {
                    e.preventDefault()
                    setSignIn(true)
                }}>
                Connexion
            </button>
            <div className="loginScreen_gradient">
            </div>
            <div className="loginScreen_body">
                {
                    signIn ? (
                        <SignUpScreen />
                    )
                        :
                        (
                            <div>
                                <h1>Films, séries TV et bien plus en illimité.</h1>
                                <h2>Où que vous soyez. Annulez à tout moment</h2>
                                <h3>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h3>
                                <div className="loginScreen_input">
                                    <form>
                                        <input type="email" placeholder="Adresse email"/>
                                        <button className="" 
                                        onClick={(e)=>{
                                            e.preventDefault()
                                            setSignIn(true)
                                        }}>
                                            Commencez
                                        </button>
                                    </form>
                                </div>
                            </div>

                        )
                }

            </div>

        </div>
    );
};
export default LoginScreen;