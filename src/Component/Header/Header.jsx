import React from 'react';
import logo from '../../Assets/Images/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className='header-main'>
      <img src={logo} className='app-logo' alt='logo' />

      <nav className='header-nav-main'>
        <span className='nav-title'>Blogs</span>
        <span className='nav-title'>About</span>
        <span className='nav-title'>Contact</span>
      </nav>
    </header>
  );
};

export default Header;
