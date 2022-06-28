import React from 'react'
import { ShopState } from "../Context";

function Home() {
    const { state } = ShopState();
    console.log(state)
  return (
    <div>Home</div>
  )
}

export default Home