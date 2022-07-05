import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ShopState } from "../Context";

function SingleProduct({product}) {

    const {
        state: { cart, targetProducts },
        dispatch,
      } = ShopState();
    
console.log(targetProducts)
  return (
    <div className="product-card">
    <div className="badge">Hot</div>
    <div className="product-tumb">
        <img src={product.image} alt="" />
    </div>
    <div className="product-details">
        <span className="product-catagory">Women,bag</span>
        <h4><a href="">{product.name}</a></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
        <div className="product-bottom-details">
            <div className="product-price"><small>$96.00</small>${product.price}</div>
            <div className="product-links">
                <a href=""><i className="fa fa-heart"></i></a>
                <a href=""><i className="fa fa-shopping-cart"></i></a>
            </div>
        </div>
    </div>

    {cart.some((prod) => prod.id == product.id) ? (
            <Button
              className='remove'
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
           
            className='add'
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
              
            >
            Add to Cart
            </Button>
          )}

    {/* <button className='add'>Add to cart</button>
    <button className='remove'>Remove from cart</button> */}
</div>
   
  );
}

export default SingleProduct;