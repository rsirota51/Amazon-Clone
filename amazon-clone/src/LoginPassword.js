import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from '@material-ui/core';
import './LoginPassword.css';

function LoginPassword() {
    const [password, setPassword] = useState('')
    const signIn = e => {
        e.preventDefault();
        //firebase
    }
    const [checked, setChecked] = React.useState(true);
    const handleChange = (e) => {
        setChecked(e.target.checked);
    };
    return (
        <div className="loginpassword">
            <Link to='/'>
                <div className="loginpassword_logo"></div>
                
            </Link>
            <div className="loginpassword_container">
                <h1 className="loginpassword_signinName">Sign-In</h1>
                <form>
                    <h5 className="loginpassword_passwordName">Password</h5>
                    <input className="login_password" type="text" value={password} 
                    onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" onClick={signIn} className="loginpassword_signInBtn">Sign-In</button>
                </form>
                <Checkbox 
                    checked={checked}
                    onChange={handleChange}
                    label="Keep me signed in. Details"
                />
            </div>
        </div>
    )
}

export default LoginPassword
