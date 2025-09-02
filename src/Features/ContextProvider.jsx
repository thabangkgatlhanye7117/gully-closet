import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'
import Products from '../products/Products'


export const CartContext = createContext()

const initialState = {
  products:[],
  selectedProducts: null,
  cart:[]
}

const ContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <CartContext.Provider value ={{state, dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default ContextProvider