import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <Link to='/'>
                <div className="login_logo"></div>
                
            </Link>
        </div>
    )
}

export default Login
