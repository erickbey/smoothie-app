import React from 'react';
import './NavBar.css';
import logo from '../../assets/CactusJuiceSmoothies.png';

export default function NavBar() {
  return (
    <div className='navbar__container'>

      <div className="logo__container">
        <img src={logo} alt="" className='logo'/>
      </div>

      <ul className='nav__items'>
        <li>ORDER</li>
        <li>CATERING</li>
        <li>REWARDS</li>
        <li>OUR VALUES</li>
        <li>NUTRITION</li>
      </ul>
    </div>
  )
}
