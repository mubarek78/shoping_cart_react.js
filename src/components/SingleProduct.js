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
    <Card style={{ width: '18rem' }} className="shadow-lg">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {cart.some((prod) => prod.id == product.id) ? (
            <Button
              variant="danger"
              className="m-2"
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
            variant="success"
            className="m-2"
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
      </Card.Body>
    </Card>
  );
}

export default SingleProduct;