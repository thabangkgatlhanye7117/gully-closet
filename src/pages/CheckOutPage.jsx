import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'
import { totalPrice } from '../Features/Reducer';
import CheckOutForm from '../components/CheckOutForm';





const CheckOutPage = () => {

   const {state} = useContext(CartContext);


  return (
    <div className="checkout-page">
        <h2>Checkout</h2>
        <div className="checkout-summary">
            <h3>Checkout Summary</h3>
            {state.cart.map((product, i)=>(
              <div className="cart-summary-card"key={i}>
                  <span>{product.name}</span>
                  <span>R{product.price}</span>
              </div>
            ))}
            <div className='total-price-div'>
                <span><b>Total Amount:</b></span>
                <span><b>R{totalPrice(state)}</b></span>
            </div>
        </div>
        <CheckOutForm/>
    </div>
  )
}

export default CheckOutPage