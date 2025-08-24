import { useContext } from "react"
import { CartContext } from "../Features/ContextProvider"
import { Link } from "react-router-dom"


const ProductDisplay = ({product, i})=> {
    const { dispatch } = useContext(CartContext)
    return (

        <div className ="product-grid">
              <div className ="product-card"
                   key={i}
                  >
                   
                    <div className="img-container">
                        <img className="product-img" src={product.image} alt="product image" loading="lazy"/>
                    </div>
                    <div className="card-info">
                        <span>{product.name}</span>
                        <span> R{product.price}</span>
                    </div>
                    <div className="card-buttons">
                         <Link to="product-view"><button className="view-item-button">View Item</button></Link>
                         <button className="card-button"onClick={()=> dispatch({type:"Add",product:product})}>Add to cart</button>
                    </div>


             </div>
        </div>
    )


}
export default ProductDisplay