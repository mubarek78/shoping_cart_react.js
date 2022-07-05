import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { CgShoppingCart } from 'react-icons/cg';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Badge from 'react-bootstrap/Badge';
import { ShopState } from "../Context";
import {Link}  from "react-router-dom"



function Header() {
    const {
        state: { cart },
        dispatch,
      } = ShopState();
    
  return (
    <section id="screen1">

    {/* <p>Scroll down</p> */}
  
    <nav>
       
    <Link to="/">Shopping Cart</Link>
    <Link to="/cart">
    {/* <Button style={{ width: "95%", margin: "0 10px" }}>
      Go To Cart
    </Button> */}
    <CgShoppingCart />{cart.length}
    </Link>
           
       
    </nav>
  
  </section>
  
  // <section id="screen2"></section>
  // <section id="screen3"></section>
  )
}

export default Header