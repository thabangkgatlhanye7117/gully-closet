import "./styles/layout.css"
import ScrollToTop from './components/ScrollToTop'
import {Link, Outlet} from 'react-router-dom'
import Footer from "./components/Footer"
import { useContext, useState } from "react"
import { CartContext } from "./Features/ContextProvider"



  const Layout = () => {

    const {cart} = useContext(CartContext)

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(prev => !prev);
    }
    const closeMenu = () => {
        setMenuVisible(false)
    }

    
  

  return (
    <>
      <ScrollToTop/>
      <header className = "header">
        <nav>
          <div className="logo-name">GULLYCLOSET.</div>

          <div className= {`nav-menu ${menuVisible ? "show-menu": ""}`}>

              <i className="ri-close-line close-menu" onClick={closeMenu}></i>
              <ul className="nav-links">
                <Link to = "/"><li onClick={closeMenu}>Home</li></Link>
                <Link to = "products"><li onClick={closeMenu}>All Products</li></Link>
                <Link to = "about" onClick={closeMenu}><li>About us</li></Link>
                <a href=""><li onClick={closeMenu}>Categories</li></a>
              </ul>

              <ul className="category-links">

                  <div className="category-link">
                        <i className="ri-arrow-right-s-fill"></i>
                        <Link to = "jackets" onClick={closeMenu}>
                            <li>Jackets / Hoodies</li>
                        </Link>
                  </div>
                   <div className="category-link">
                        <i className="ri-arrow-right-s-fill"></i>
                        <Link to = "bottoms" onClick={closeMenu}>
                            <li>Bottoms</li>
                        </Link>
                  </div>
                   <div className="category-link">
                        <i className="ri-arrow-right-s-fill"></i>
                        <Link to = "sweaters" onClick={closeMenu}>
                            <li>Sweatshirts</li>
                        </Link>
                  </div>
                   <div className="category-link">
                        <i className="ri-arrow-right-s-fill"></i>
                        <Link to = "tshirts" onClick={closeMenu}>
                            <li>T-shirts / Tops</li>
                        </Link>
                  </div>
                   <div className="category-link">
                        <i className="ri-arrow-right-s-fill"></i>
                        <Link to = "fleece"  onClick={closeMenu} >
                            <li>Fleece / Knitwear</li>
                        </Link>
                  </div>
                   <div className="category-link">
                        <i className="ri-arrow-right-s-fill"></i>
                        <Link to = "caps"  onClick={closeMenu}>
                            <li>Head Gear</li>
                        </Link>
                  </div>
                  
                    
              </ul>
              <Footer/>
              
          </div>
          <div className="toggle-buttons">

             <Link to="cart">
                <button className="cart-button">
                  <i className="ri-shopping-bag-fill"></i>
                  <span>{cart.length}</span>
                </button>
              </Link>
              <div className="toggle-menu" onClick={toggleMenu}>
                  <i className="ri-menu-line"></i>
              </div>

          </div>
        </nav>
        <div className="brand-names">
            <span className="brand-name">Daily x Paper</span>
            <span className="brand-name">Stussy</span>
            <span className="brand-name">Vetements</span>
            <span className="brand-name">Bape</span>
            <span className="brand-name">Carhartt</span>
            <span className="brand-name">Nike</span>
            <span className="brand-name">North Face</span>
            <span className="brand-name">Comme des Garcons</span>
            <span className="brand-name">Air Jordan</span>
            <span className="brand-name">Daily x Paper</span>
            <span className="brand-name">Stussy</span>
            <span className="brand-name">Vetements</span>
            <span className="brand-name">Bape</span>
            <span className="brand-name">Carhartt</span>
            <span className="brand-name">Nike</span>
            <span className="brand-name">North Face</span>
            <span className="brand-name">Comme des Garcons</span>
            <span className="brand-name">Air Jordan</span>
         
        </div>
      </header>
      <main>
          <Outlet/>
      </main>
      
      <Footer/>
    </>
  )
}

export default Layout
