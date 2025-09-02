import ProductDisplay from "../components/ProductDisplay"
import Products from "../products/Products"

const CapsPage = ()=>{
  return(
    
      <section className="products-section">
        <h3>Head gear</h3>
        <div className="products">
          { Products.map((product, i)=>(
                                <ProductDisplay product={product} key={i} />
    
                            ))}
        </div>
      </section>
                            
    
  )
}
export default CapsPage