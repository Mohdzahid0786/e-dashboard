import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../App.css';

function Header() {
  const auth = localStorage.getItem('user');
  const Navigate = useNavigate()
  const logout = () => {
    localStorage.clear();
    Navigate('/signup')
  }
  return (
    <div>
      <img src={require('../logo/logo1.png')}
      className='logo'
      />
      {
        auth ? <ul className='header-ul'>
          <li><Link to="/">Products</Link></li>
          <li><Link to="/add">Add Product</Link></li>
          <li><Link to="/update">Update Product</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/signup" onClick={logout}>Logout ({JSON.parse(auth).name})</Link></li>
        </ul>
          :
          <ul className='header-ul header-right'>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
      }
    </div>
  )
}

export default Header