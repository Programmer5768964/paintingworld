import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user2');
        if (auth) {
            navigate('/')
        }
    })
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const collectData = async () => {
        console.log(email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.log(result);
        if (result.name) {
            localStorage.setItem('user2', JSON.stringify(result));
            navigate('/');
        } else {
            alert("Incorrect username or password")
        }


    }
    return (
        <div className='signup-container'>
            <div className='register'>
                <h1>Login</h1>
                <input className="SignupBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                <input className="SignupBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                <button onClick={collectData} className="btn" type="button">Login</button>
            </div>
            <div className='welcome'>
                <h1>Welcome !</h1>
                <h1>Back</h1>
            </div>
        </div>
    )
}
export default Login;