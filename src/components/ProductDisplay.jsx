import { useContext } from "react"
import { CartContext } from "../Features/ContextProvider"


const ProductDisplay = ({product, i})=> {
    const { dispatch } = useContext(CartContext)
    return (

        <div className ="product-grid">
              <div className ="product-card"
                   key={i}
                  >
                    <div className="img-container">
                        <img className="product-img" src={product.image} alt="product image"/>
                    </div>
                    <div className="card-info">
                        <span>{product.name}</span>
                        <span> R{product.price}</span>
                        
                        <button className="card-button"onClick={()=> dispatch({type:"Add",product:product})}>ADD TO CART</button>
                    </div>


             </div>
        </div>
    )


}
export default ProductDisplay