import React from 'react'

import { useNavigate } from 'react-router-dom'



const Admin = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigate = useNavigate();





    const collectAdmin = async () => {
        console.log(username, password);
        let result = await fetch('http://localhost:5000/admin', {
            method: 'post',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if (result) {
            navigate('/upload')
        }
    }
    return (
        <div className='admin-login'>


            <div className='signup-container'>
                <div className='register'>
                    <h1>Admin Login</h1>
                    <input className="SignupBox" type="text" placeholder="Enter Admin username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className="SignupBox" type="password" placeholder="Enter Admin password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={collectAdmin} className="btn" type="button">Login</button>
                </div>
                <div className='welcome'>
                    <h1>Hello!</h1>
                    <h1>Admin</h1>
                </div>
            </div>
        </div>
    )
}

export default Admin;