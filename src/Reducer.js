export const itemReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
      case "INCREASE":
        let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, qty: cartItem.qty + 1 }
      }
      return cartItem
    })
    return { ...state, cart: tempCart }

    case "DECREASE":
      let tempeCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return (cartItem.qty <= 0) ?  { ...cartItem, qty: cartItem.qty = 0 }: { ...cartItem, qty: cartItem.qty - 1 }
          
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.amount !== 0)
    return { ...state, cart: tempeCart }
  

      default:
        return state;
    }
  };