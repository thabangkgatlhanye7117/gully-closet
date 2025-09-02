
import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'

const ProductViewPage = () => {
  const {state, dispatch} = useContext(CartContext);

  
  return (
    <div className="product-view-page">
       <div className="img-slider">
          <img src={state.selectedProduct.image} alt="selected product image" className="slider-img" loading='lazy' />
       </div>
       <div className="viewed-product-info">
           <div className="viewed-product-category">{state.selectedProduct.category}</div>
           <div className="viewed-product-name">{state.selectedProduct.name}</div>
           <div className="viewed-product-price">R{state.selectedProduct.price}</div>
           <div className= "viewed-product-size">{state.selectedProduct.size}</div>
           <div className="viewed-product-condition">{state.selectedProduct.condition}</div>
           <div className="viewed-product-buttons">
              <button onClick={()=> dispatch({type:"Add", product:selectedProduct})}>ADD TO CART</button>
           </div>

       </div>
    </div>
  )
}

export default ProductViewPage