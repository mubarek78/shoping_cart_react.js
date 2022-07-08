import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../data';
import { CgShoppingCart } from 'react-icons/cg';
import { HiShoppingCart } from 'react-icons/hi';
import { ShopState } from "../Context";
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  const {
    state: { cart },
    dispatch,
  } = ShopState();

  const [count, setCount] = useState(0);


  useEffect(() => {
    setCount(
      cart.reduce((acc, curr) => acc + curr.qty, 0)
    );
  }, [cart]);



  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to="/"> <img src={logo} className='logo' alt='logo' /></Link>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='cart-icon'>
         <Link to="/cart"> <HiShoppingCart /><p className='badge'>{count}</p></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
