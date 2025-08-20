const ProductDisplay = ({product, i})=> {
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
                        <span>Price: {product.price}</span>
                        <span>Size: {product.size}</span>
                        <span>Condition: {product.condition}</span>
                        <button>add to cart</button>
                    </div>


             </div>
        </div>
    )


}
export default ProductDisplay