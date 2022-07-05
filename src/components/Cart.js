import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { ShopState } from "../Context";
import { FaCcVisa, FaCcMastercard, FaPaypal } from 'react-icons/fa';
import {IoMdAddCircle } from 'react-icons/io';
import {HiMinusCircle } from 'react-icons/hi';
import {IoMdArrowRoundBack } from 'react-icons/io';
import {Link}  from "react-router-dom"


const Cart = () => {
  const {
    state: { cart, targetProducts },
    dispatch,
    increase,
    decrease
  } = ShopState();
  const [total, setTotal] = useState(0);
 

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);


  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }

  return ( 
 <>
    
       <div className="container" >
       <div className="item-detail-container">
       {cart.map((prod) => (
       <div key={prod.id} className="item-detail">

               <div className="itemImage">
                   <img src={prod.image} alt={prod.name} />
               </div>
               <p className="prodName">{prod.name}</p>
               <p>{prod.qty}</p>
               <button className="add" onClick={() => increase(prod.id)}><IoMdAddCircle /></button>
               <p className="qty-input">{prod.qty}</p>
               <button className="sub" onClick={() => decrease(prod.id)}><HiMinusCircle /></button>
      
              
               <p>$95</p>
              <button 
              type="button"
                   className="deletBtn"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
              ><AiFillDelete /></button>
           </div>
           ))}
          
         <div className="cartFooter">
         <div className="cartFootersec">
         <Link to="/"><IoMdArrowRoundBack /> Back to shop</Link>
          </div>

          <div className="cartFootersec">
          <p>subtotal:</p>
          <p>$1000</p>
          </div>

         </div>
          </div>
  
           <div className="card-detail">
                   <label className="card">
                       <h5 className="head">Card Details</h5>
                       <label>Select Card Type</label>
                       <ul className="cards-list">
                           <li><FaCcVisa /></li>
                           <li><FaCcMastercard /></li>
                           <li><FaPaypal /></li>
                       </ul>
                       <label>Card Number</label>
                       <input className="cardNumber" type="text" />

                       <div className="payment">
                           <input type="text" className="ccFormatMonitor paymentInput" />
                           <span>/</span>
                           <input className="date paymentInput" type="text"  />
                           <span>/</span>
                           <input className="cvv paymentInput"  />
                       </div>

                       <button className="checkOut">Check Out</button>
                   </label>
               </div>
  
    </div>
    <button
          className='btn clear-btn'
          onClick={() => console.log('clear cart')}
        >
          clear cart
        </button>
    </>

  );
};

export default Cart;