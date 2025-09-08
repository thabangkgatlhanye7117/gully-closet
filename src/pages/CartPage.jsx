import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'
import { totalPrice } from '../Features/Reducer'
import { Link } from 'react-router-dom'



 const CartPage = () => {
  const {state, dispatch} = useContext(CartContext)

  return (
    <div  className='cart-page'>

        <div className="cart-heading">
            <div>
            <h2>Cart</h2>
            <span className='cart-amount-items'>{state.cart.length}</span>
            </div>
            <div>
            <h2>Total</h2>
            <span className='total-amount'>R{totalPrice(state)}</span>
            </div>
        </div>
        <div className="selected-products">

          {state.cart.map((product, i)=>(
                <div className="cart-card" key={i} >
                  <div className="selected-product-img-container">
                    <img loading='lazy' src={product.image} className='selected-product-img' alt='selected product'/>
                  </div>
                  <div className="selected-product-info">
                      <div className="selected-product-heading">
                        <span className='selected-product-name'><b>{product.name}</b></span>
                        <span>R{product.price}</span>
                      </div>
                      <span>Size: {product.size}</span>
                      <span>Condition: {product.condition}</span>
                      <button className='remove-button' onClick={()=>dispatch({type: "Remove", id: product.id })}>remove item</button>
                  </div>
                </div>

          ))}
           <Link to="/checkout"><button className='checkout-btn'>CHECKOUT</button></Link>
        </div>  


    </div>
  )
}
export default CartPage
