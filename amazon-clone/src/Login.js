import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <Link to='/'>
                <img src="https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIBaseCSS-sprite_2x-a3d92a134e6afaec4974bceac0812b73d0b635c1._V2_.png" className="login_logo"></img>
            </Link>
        </div>
    )
}

export default Login
