import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('')
    const signIn = e => {
        e.preventDefault();
        //firebase login
    }
    const register = e => {
        e.preventDefault();
        //firebase register
    }
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
                    <Link to='/loginpassword'>
                        <button type="submit" /* onClick={signIn} */  className="login_signInBtn">Continue</button>
                    </Link>
                </form>
                <p className="login_termsAndConditions">By continuing, you agree to Amazon's FAKE Clone's <a href="">Conditions of Use</a> and <a href="">Privacy Notice</a>. </p>
            </div>
            <p className="login_newToAmazon">New to Amazon?</p>
            <button onClick={register} className="login_createAccountBtn">Create your Amazon account</button>
        </div>
    )
}

export default Login
