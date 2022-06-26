import React from "react";
import './SignUpScreen.css';

const SignUpScreen = () => {

    return (
        <div className="signupScreen">
            <form>
                <h1>S'identifier</h1>
                <input type="email" placeholder="Adresse mail" />
                <input type="password" name="" id="" placeholder="Mot de passe" />
                <button type="submit">Connexion</button>
                <h4>
                    <span>
                        Nouveau sur Netflix ? &nbsp;
                    </span>
                    <span className="hover">
                        Inscrivez-vous maintenant
                    </span>
                </h4>
            </form>
        </div>
    );
};
export default SignUpScreen;