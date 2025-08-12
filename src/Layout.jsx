import "./styles/layout.css"
import {Link, Outlet} from 'react-router-dom'
import { useState } from "react"


  const Layout = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(prev => !prev);
    }
    const closeMenu = () => {
        setMenuVisible(false)
    }

    
  

  return (
    <>
      <header className = "header">
        <nav>
          <div className="logo-name">GULLYCLOSET.</div>

          <div className= {`nav-menu ${menuVisible ? "show-menu": ""}`}>

              <i className="ri-close-line close-menu"onClick={closeMenu}></i>
              <ul className="nav-links">
                <Link to = "/"><li>Home</li></Link>
                <Link to = ""><li>All Products</li></Link>
                <Link to = "about"><li>About us</li></Link>
                <a href=""><li>Categories</li></a>
              </ul>

              <ul className="category-links">

                  <div className="category-link">
                        <i className="ri-arrow-right-s-fill"></i>
                        <Link to = "">
                            <li>Jackets / Hoodies</li>
                        </Link>
                  </div>
                   <div className="category-link">
                        <i className="ri-arrow-right-s-fill"></i>
                        <Link to = "">
                            <li>Bottoms</li>
                        </Link>
                  </div>
                   <div className="category-link">
                        <i className="ri-arrow-right-s-fill"></i>
                        <Link to = "">
                            <li>Sweatshirts</li>
                        </Link>
                  </div>
                   <div className="category-link">
                        <i className="ri-arrow-right-s-fill"></i>
                        <Link to = "">
                            <li>T-shirts / Tops</li>
                        </Link>
                  </div>
                   <div className="category-link">
                        <i className="ri-arrow-right-s-fill"></i>
                        <Link to = "">
                            <li>Fleece / Knitwear</li>
                        </Link>
                  </div>
                   <div className="category-link">
                        <i className="ri-arrow-right-s-fill"></i>
                        <Link to = "">
                            <li>Footwear / Caps</li>
                        </Link>
                  </div>
                  
                    
              </ul>
              
          </div>
          <div className="toggle-menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
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
      
      <footer>
          <div className="footer-info">
              <h3>Join the club</h3> 
              <span>Get early access to our latest products and sales</span>
              <div className="footer-email"> 
                  <input type="email" id="email" name="email" placeholder="Email Address:" />
                  <button className="send-email-address">
                      <i className="ri-arrow-right-fill"></i>
                  </button>
              </div> 
          </div>
          <ul className="footer-menu">
              <li className="footer-policy">
                Contact Information
              </li>
              <li className="footer-policy">
                Payment Policy
              </li>
              <li className="footer-policy">
                Shipping Policy
              </li>
              <li className="footer-policy">
                Terms and Conditions
              </li>
          </ul>
          <div className="copy-rights">
              <span>&copy; 2025 Gully Closet</span>
          </div>
          
      </footer>
    </>
  )
}

export default Layout
