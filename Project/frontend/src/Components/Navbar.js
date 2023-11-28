import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaCrown } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 911) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
  
    // Define a cleanup function as a function, not an object
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);
  


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
            <FaCrown className='navbar-icon' />
              CrownTrade 
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/trending-stocks'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Trending Stocks
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/recent-news'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Recent News
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/our-Team'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Our Team
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;