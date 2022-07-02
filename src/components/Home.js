import React from 'react'
import { ShopState } from "../Context";
import SingleProduct from './SingleProduct';
import {Col, Container, Row} from "react-bootstrap"

function Home() {
    const { state : {productsList}, targetProducts} = ShopState();
    console.log(targetProducts)
  return (
    <>
    <div>Products</div>
    <Container xs={4} className="mt-3" >
    <Col >
    <Row>
    {targetProducts.map((product) => <SingleProduct key={product.id} product={product}/>
    )
    }
    </Row>
    </Col>
    </Container>
    </>
  )
}

export default Home