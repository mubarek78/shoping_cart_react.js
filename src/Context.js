import { createContext, useContext, useState, useReducer } from "react";
import Data from "./db"; 
import { itemReducer } from "./Reducer";


const shoppingData = createContext();


const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  const productsList = Data.toys.map((data) => data);
  
  const [state, dispatch] = useReducer(itemReducer, {
    productsList: productsList,
    cart: [],
  });

  return (
    <shoppingData.Provider value={{ state, dispatch }}>
      {children}
    </shoppingData.Provider>
  );
};

export const ShopState = () => {
  return useContext(shoppingData);
};

export default Context;