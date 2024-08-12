import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const openMenu = () => {
    setMenu(true);
    if (menuRef.current) {
      menuRef.current.style.right = '0';
    }
  };

  const closeMenu = () => {
    setMenu(false);
    if (menuRef.current) {
      menuRef.current.style.right = '-350px';
    }
  };

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setMenu(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && !menuButtonRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt='Logo' />
      <img
        src={menu_open}
        onClick={openMenu}
        alt='Open Menu'
        className='nav-mob-open'
        ref={menuButtonRef}
        aria-expanded={menu}
      />
      <ul ref={menuRef} className={`nav-menu ${menu ? 'active' : ''}`}>
        <img src={menu_close} onClick={closeMenu} alt='Close Menu' className='nav-mob-close' />
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => handleMenuClick('home')}>Home</p>
          </AnchorLink>
          {activeMenu === 'home' && <img src={underline} alt='Underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => handleMenuClick('about')}>About Me</p>
          </AnchorLink>
          {activeMenu === 'about' && <img src={underline} alt='Underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => handleMenuClick('services')}>Services</p>
          </AnchorLink>
          {activeMenu === 'services' && <img src={underline} alt='Underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#mywork'>
            <p onClick={() => handleMenuClick('work')}>Portfolio</p>
          </AnchorLink>
          {activeMenu === 'work' && <img src={underline} alt='Underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => handleMenuClick('contact')}>Contact</p>
          </AnchorLink>
          {activeMenu === 'contact' && <img src={underline} alt='Underline' />}
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
