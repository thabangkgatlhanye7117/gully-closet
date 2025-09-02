import ProductDisplay from "../components/ProductDisplay"
import Products from "../products/Products"

const FleecePage = ()=>{
  return(
    
      <section className="products-section">
        <h3>Fleece / Knitweear</h3>
        <div className="products">
          { Products.map((product, i)=>(
                                <ProductDisplay product={product} key={i} />
    
                            ))}
        </div>
      </section>
                            
    
  )
}
export default FleecePage