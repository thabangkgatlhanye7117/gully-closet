import React, {useState} from "react"
import ProductDisplay from "../components/ProductDisplay"
import Products from "../products/Products"

const ProductsPage = ()=>{
  const [products, setProducts] = useState(newArrivals.products)
  return(
    
      <section className="products-section">
        <h3>Shop</h3>
        <div className="products">
          { Products.map((product, i)=>(
                                <ProductDisplay product={product} key={i} />
    
                            ))}
        </div>
      </section>
                            
    
  )
}
export default ProductsPage
