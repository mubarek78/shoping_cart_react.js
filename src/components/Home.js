import React from 'react'
import { ShopState } from "../Context";
import SingleProduct from './SingleProduct';
import {Col, Container, Row} from "react-bootstrap"

function Home() {
    const { state : {productsList}, targetProducts} = ShopState();
    console.log(targetProducts)
  return (
    <div className='card-container'>
    
    {targetProducts.map((product) => <SingleProduct key={product.id} product={product}/>
    )
    }
  
    </div>
  )
}

export default Home