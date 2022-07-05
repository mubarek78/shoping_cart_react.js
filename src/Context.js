import { createContext, useContext, useState, useReducer, useEffect } from "react";
import { itemReducer } from "./Reducer";



const shoppingData = createContext();


const Context = ({ children }) => {

    const [targetProducts, settargetProducts] = useState([]);

    useEffect(() => {
      fetch("https://my-shop-products-api.herokuapp.com/toys")
        .then((response) => response.json())
        .then(data => settargetProducts(()=> data))
    }, []);

  
  const [state, dispatch] = useReducer(itemReducer, {
    productsList: targetProducts,
    cart: [],
    // targetProducts: targetProducts
  
  });

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }

  return (
    <shoppingData.Provider value={{ 
      state, 
      dispatch, 
      targetProducts,
      increase,
      decrease
      }}>
      {children}
    </shoppingData.Provider>
  );
};

export const ShopState = () => {
  return useContext(shoppingData);
};

export default Context;