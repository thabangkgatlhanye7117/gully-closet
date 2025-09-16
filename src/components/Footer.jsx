import { useState } from "react"


const Footer = ()=>{

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);


  const toggleContact = ()=>{
    
      setIsContactOpen( prev => !prev)
  };
  const togglePayment = ()=>{
    
      setIsPaymentOpen( prev => !prev)
  };
  const toggleShipping = ()=>{
    
      setIsShippingOpen( prev => !prev)
  };
  const toggleTerms = ()=>{
    
      setIsTermsOpen( prev => !prev)
  };



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
              <li className="footer-policy" onClick={toggleContact}>
                Contact Information
              </li>
              {isContactOpen && (
                <div className="footer-contact">
                    <div>
                         <i className="ri-mail-line"></i>
                         
                    </div>
                </div>
              )}
              <li className="footer-policy" onClick={togglePayment}>
                Payment Policy
              </li>
               {isPaymentOpen && (
                <div className="footer-payment">

                </div>
              )}
              <li className="footer-policy" onClick={toggleShipping}>
                Shipping Policy
              </li>
               {isShippingOpen && (
                <div className="footer-shipping">

                </div>
              )}
              <li className="footer-policy" onClick={toggleTerms}>
                Terms and Conditions
              </li>
               {isTermsOpen && (
                <div className="footer-terms">

                </div>
              )}
          </ul>
          <div className="copy-rights">
              <span>&copy; 2025 Gully Closet</span>
              <a href="https://bullasoft.vercel.app"><span>Powered by Bullasoft</span></a>
          </div>
          
      </footer>
  )
} 
export default Footer