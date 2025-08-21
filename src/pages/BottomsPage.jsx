import ProductDisplay from "../components/ProductDisplay"
import newArrivals from "../products/newArrivals" /*change import */

const BottomsPage = ()=>{
  return(
    
      <section className="products-section">
        <h3>Bottoms</h3>
        <div className="products">
          { newArrivals.map((product, i)=>(
                                <ProductDisplay product={product} key={i} />
    
                            ))}
        </div>
      </section>
                            
    
  )
}
export default BottomsPage