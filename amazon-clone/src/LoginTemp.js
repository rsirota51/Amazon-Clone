import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './Firebase';
import './Login.css';

function LoginTemp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(error => alert(error.message))
        //firebase login
    };
    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //new user was created
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        //firebase register
    };
    return (
        <div className="login">
            <Link to='/'>
                <div className="login_logo"></div>
                
            </Link>
            <div className="login_container">
                <h1 className="login_signinName">Sign-In</h1>
                <form>
                    <h5 className="login_emailName">Email or mobile phone number</h5>
                    <input className="login_email" type="text" value={email} 
                    onChange={e => setEmail(e.target.value)}/>
                    <h5 className="login_emailName">Password</h5>
                    <input className="login_email" type='password' value={password} 
                    onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn} className="login_signInBtn">Sign In</button>
                </form>
                <p className="login_termsAndConditions">By continuing, you agree to Amazon's FAKE Clone's <a href="">Conditions of Use</a> and <a href="">Privacy Notice</a>. </p>
            </div>
            <p className="login_newToAmazon">New to Amazon?</p>
            <button onClick={register} className="login_createAccountBtn">Create your Amazon account</button>
        </div>
    )
}

export default LoginTemp
