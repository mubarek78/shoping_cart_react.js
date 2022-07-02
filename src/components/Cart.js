import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { ShopState } from "../Context";
import { FaCcVisa, FaCcMastercard, FaPaypal } from 'react-icons/fa';
import {IoMdAddCircle } from 'react-icons/io';
import {HiMinusCircle } from 'react-icons/hi';


const Cart = () => {
  const {
    state: { cart, targetProducts },
    dispatch,
  } = ShopState();
  const [total, setTotal] = useState();
 

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);


  function handelSubmit(e){
    e.priventDefault();

  }
  console.log(targetProducts)
  return ( 
 <>
    
       <div className="container" >
       <div className="item-detail-container">
       {cart.map((prod) => (
       <div key={prod.id} className="item-detail">

               <div className="itemImage">
                   <img src={prod.image} alt={prod.name} />
               </div>
               <p>Color</p>
               <p>{prod.qty}</p>
               <div className="Btns">
               <form onSubmit={handelSubmit}>
                <input className="qty-input" type="text" value={prod.qty} 
                     onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                />
                   <button className="add"><IoMdAddCircle /></button>
                   <button className="sub"><HiMinusCircle /></button>
                </form>
               </div>
               <p>{prod.price}</p>
           </div>
           ))}
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
                           <input type="text" className="ccFormatMonitor paymentInput" placeholder="Card Number" />
                           <span>/</span>
                           <input className="date paymentInput" type="text" placeholder="MM / YY" />
                           <span>/</span>
                           <input className="cvv paymentInput" placeholder="CVV" />
                       </div>

                       <h3 className="checkOut">Check Out</h3>
                   </label>
               </div>
      
    </div>
    
    </>

  );
};

export default Cart;