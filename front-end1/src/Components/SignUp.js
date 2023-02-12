import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Img2 from './img2.jpg'


const SignUp = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const umb = localStorage.getItem('user2');
        if (umb) {
            navigate('/')
        }
    })
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const collectData = async () => {
        // console.warn(name, email, password);
        let result = await fetch('http://localhost:5000/signup', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json();
        console.warn(result);
        localStorage.setItem('user2', JSON.stringify(result));
        if (result) {
            navigate('/');
        }
    }

    return (
        <div className='backgroundimg'>
        
            <div className='signup-container'>

                <div className="register">
                    <h1>Register</h1>
                    <input className="SignupBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                    <input className="SignupBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                    <input className="SignupBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                    <button onClick={collectData} className="btn" type="button">Sign Up</button>
                </div>
                <div className='welcome'>
                    <h1>Welcome</h1>
                    <h3>To</h3>
                    <h1>My PaintingWorld</h1>
                </div>
            </div>
        </div>
    )

}

export default SignUp;