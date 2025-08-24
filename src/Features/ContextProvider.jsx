import React, { createContext, useReducer } from 'react'
import CartReducer from './CartReducer'
import newArrivals from '../products/newArrivals'


export const CartContext = createContext()

const ContextProvider = ({children}) => {
    const allProducts = newArrivals
    const [cart, dispatch] = useReducer(CartReducer,[])

  return (
    <CartContext.Provider value ={{cart, dispatch, allProducts}}>
        {children}
    </CartContext.Provider>
  )
}

export default ContextProvider