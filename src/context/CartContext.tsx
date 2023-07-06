import { FC, createContext , useReducer } from "react"
import { v4 as uuid } from "uuid";
import { Props, CartProps, CartContextReducerAction } from "../types/types"
import { getCartFromLocalStorage } from "../api/getCartFromLocalStorage";
import { setItemToLocalStorage } from "../api/setItemToLocalStorage";
import deleteCommandInCart from "../api/deleteCommandInCart";



const CartContext = createContext<{cartState: CartProps[], handleBuy: (idNumber: number, counter: number, user: string) => void, handleDelete: ((commandId: string) => void) }> ({cartState: [], handleBuy: () => {}, handleDelete: () => {} });

const initProductsInCart = getCartFromLocalStorage();

const cartReducer = (state: CartProps[], action: CartContextReducerAction) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return [...state, action.product];
    }
    case 'DELETE_FROM_CART': {
      return action.product;
    }
    default: {
      return state;
    };
  };
};

export const CartProvider: FC<Props> = ({children}) => {
  
  const [cartState, dispatch] = useReducer (cartReducer, initProductsInCart);
  
  const handleBuy = (idNumber: number, counter: number, user: string = "") => {
    const product: CartProps = {
      id: idNumber,
      size: 41,
      quantity: counter,
      user: user,
      commandId: uuid()
    };
    setItemToLocalStorage(product); 
    dispatch({
      type: 'ADD_TO_CART',
      product: product,
    });
  };

  const handleDelete = (commandId: string) => {
    const updatedProducts = deleteCommandInCart(commandId);
    dispatch({
      type: 'DELETE_FROM_CART',
      product: updatedProducts
    });
  };
  
  return (
    <CartContext.Provider value={{cartState, handleBuy, handleDelete}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;