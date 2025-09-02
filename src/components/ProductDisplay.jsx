import { useContext } from "react"
import { CartContext } from "../Features/ContextProvider"
import { useNavigate } from "react-router-dom"


const ProductDisplay = ({product, i})=> {
    const { dispatch } = useContext(CartContext)
    const navigate = useNavigate();

    const handleViewItem = (product)=>{
         dispatch({type: "selectedProduct", product:product}),
         navigate("/product-view")
    }
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
                         
                        <button className="view-item-button" onClick={()=>{handleViewItem(product)}}>View Item</button>
                         
                         <button className="card-button"onClick={() => dispatch({ type:"Add", product:product})}>Add to cart</button>
                    </div>


             </div>
        </div>
    )


}
export default ProductDisplay