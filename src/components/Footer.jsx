const Footer = ()=>{
  return(
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
              <a href="https://bullasoft.vercel.app"><span>Powered by Bullasoft</span></a>
          </div>
          
      </footer>
  )
} 
export default Footer