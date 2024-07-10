import React, { useState } from 'react';
import './Header.css';
import { RiMenu4Fill } from 'react-icons/ri';
import { HStack, Heading, Image } from '@chakra-ui/react';
import Logo from '../../../assets/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  return (
    <>
      <div className="box">
        <nav id="desktop-nav">
          <div className="logo">
            <HStack>
              <Image src={Logo} h={90} />
              <Heading children="VIBHAGIYA" className="glow" />
            </HStack>
          </div>
          <div>
            <ul className="nav-links">
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#categories">Categories</a>
              </li>
              <li>
                <a href="#customer">Customer</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
        </nav>
        <nav id="hamburger-nav">
          <div className="hamburger-menu">
            <div
              className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
            >
              <RiMenu4Fill />
            </div>
            <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
              <li>
                <a href="#services" onClick={toggleMenu}>
                  Services
                </a>
              </li>
              <li>
                <a href="#categories" onClick={toggleMenu}>
                  Categories
                </a>
              </li>
              <li>
                <a href="#customer" onClick={toggleMenu}>
                  Customer
                </a>
              </li>
              <li>
                <a href="#about" onClick={toggleMenu} style={{ padding: 0 }}>
                  About
                </a>
              </li>
            </div>
          </div>
          <div className="logo">
            <Image src={Logo} h={90} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
