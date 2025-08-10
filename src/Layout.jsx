import "./styles/layout.css"
import {Link} from 'react-router-dom'
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
                <Link to = ""><li>About us</li></Link>
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
            <span className="brand-name">Nike</span>
            <span className="brand-name">North Face</span>
         
        </div>
      </header>
      <main>

      </main>
      <footer>
          

      </footer>
    </>
  )
}

export default Layout
