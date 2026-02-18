import React, {useState} from 'react';
import './Navbar.css';
import Logo from '../images/logo.png';
import {FaBars, FaTimes} from 'react-icons/fa';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={Logo} alt='logo' />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'><a>Home</a></li>
            <li className='nav-item'><a>About</a></li>
            <li className='nav-item'><a>FAQ</a></li>
            <li className='nav-item'><a>Contact</a></li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes  size={30} style={{color: '#fff'}} />) : (<FaBars size={30} style={{color: '#fff'}} />)}
            
        </div>
    </div>
  )
}

export default Navbar