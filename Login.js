import React, { useState, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const Navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            Navigate('/')
        }
    }, []);

    const handleLogin = async () => {
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const results = await result.json();
        console.log(results);
        if (results.auth) {
            localStorage.setItem("user", JSON.stringify(results.user))
            localStorage.setItem("token", JSON.stringify(results.auth))
            alert("Login Successfully");
            Navigate('/')

        } else {
            alert("Please Insert Valid email & Password");
        }

    }
    return (
        <div>
            <div className='login'>
                <h1>Login</h1>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your Email'
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your Password'
                />
                <button className='saveBtn' onClick={handleLogin}>Save</button>
            </div>
        </div>
    )
}

export default Login