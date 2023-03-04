import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error,setError]=useState(false)
  const Navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      Navigate('/')
    }
  },[]);

  const saveData = async () => {
    
    let result = await fetch('http://localhost:5000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const results = await result.json();
    console.log(results);
    localStorage.setItem("user", JSON.stringify(results.result))
    localStorage.setItem("token", JSON.stringify(results.auth))
    if (results) {
      Navigate('/')
    }
  }
  return (
    <div className='signup'>
      <h1>Register</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter Name'
      />
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
      <button className='saveBtn' onClick={saveData}>Save</button>
    </div>
  )
}

export default Register