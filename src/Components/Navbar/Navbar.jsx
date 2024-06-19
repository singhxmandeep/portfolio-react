import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState(false); // Use boolean state to track menu open/close
  const menuRef = useRef(null); // Initialize useRef with null

  const openMenu = () => {
    setMenu(true); // Update state to open menu
    if (menuRef.current) {
      menuRef.current.style.right = '0'; // Slide menu in from right
    }
  };

  const closeMenu = () => {
    setMenu(false); // Update state to close menu
    if (menuRef.current) {
      menuRef.current.style.right = '-350px'; // Slide menu out to the right
    }
  };

  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt='Logo' />
      <img src={menu_open} onClick={openMenu} alt='Open Menu' className='nav-mob-open' />
      <ul ref={menuRef} className={`nav-menu ${menu ? 'active' : ''}`}>
        <img src={menu_close} onClick={closeMenu} alt='Close Menu' className='nav-mob-close' />
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => setMenu(false)}>Home</p>
          </AnchorLink>
          {menu === 'home' ? <img src={underline} alt='' /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu(false)}>About Me</p>
          </AnchorLink>
          {menu === 'about' ? <img src={underline} alt='' /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => setMenu(false)}>Services</p>
          </AnchorLink>
          {menu === 'services' ? <img src={underline} alt='' /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#mywork'>
            <p onClick={() => setMenu(false)}>Portfolio</p>
          </AnchorLink>
          {menu === 'work' ? <img src={underline} alt='' /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu(false)}>Contact</p>
          </AnchorLink>
          {menu === 'contact' ? <img src={underline} alt='' /> : null}
        </li>
      </ul>
      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
