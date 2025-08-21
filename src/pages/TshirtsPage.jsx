import ProductDisplay from "../components/ProductDisplay"
import newArrivals from "../products/newArrivals" /*change import */

const TshirtsPage = ()=>{
  return(
    
      <section className="products-section">
        <h3>T-shirts / Tops</h3>
        <div className="products">
          { newArrivals.map((product, i)=>(
                                <ProductDisplay product={product} key={i} />
    
                            ))}
        </div>
      </section>
                            
    
  )
}
export default TshirtsPage