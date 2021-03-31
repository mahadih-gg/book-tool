import React, { useContext } from 'react';
import './Login.css'
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import googleLogo from '../../images/google.png';
import facebookLogo from '../../images/facebook.png'
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {

    const [user, setUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const credential = result.credential;
                const token = credential.accessToken;
                const user = result.user;
                setUser(user)
                history.replace(from);
                console.log(user);

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }

    const handleFacebookLogin = () => {

    }

    return (
        <div className="container">
            <h1 className="text-center mt-5">Log In With your Account</h1>
            <div className=" d-flex justify-content-center">
                <div className="log-in p-5 w-50 mt-5">
                    <div className="mb-3">
                        <button onClick={handleGoogleLogIn} className="btn mb-3 m-auto d-block google"><img src={googleLogo} alt="" /> Login with Google</button>
                    </div>

                    <div>
                        <button onClick={handleFacebookLogin} className="btn m-auto d-block facebook"><img src={facebookLogo} alt="" /> Login with FaceBook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;