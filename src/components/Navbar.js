import React from 'react';
import './Navbar.css';
import Logo from '../images/logo.png';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={Logo} alt='logo' />
        </div>
        <ul></ul>
    </div>
  )
}

export default Navbar