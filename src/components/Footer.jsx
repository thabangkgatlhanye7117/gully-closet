import { useState } from "react"


const Footer = ()=>{

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(true);


  const toggleContact = ()=>{
      setIsContactOpen( prev => !prev)
  };

  const closeContactInfo = ()=>{
      setIsContactOpen(false)
  };


  const togglePayment = ()=>{
      setIsPaymentOpen( prev => !prev)
  };

  const closePaymentPolicy = ()=>{
      setIsPaymentOpen(false)
  };

  const toggleShipping = ()=>{
      setIsShippingOpen( prev => !prev)
  };

  const closeShippingPolicy = ()=>{
      setIsShippingOpen(false)
  };


  const toggleTerms = ()=>{
      setIsTermsOpen( prev => !prev)
  };
  const closeTermsPolicy = ()=>{
      setIsTermsOpen(false)
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
                    
                         <i className="ri-close-line close-policy-icon" onClick={closeContactInfo}></i>
                         <div className="contact-info">
                            <h2>Contact Information</h2>
                            <p>
                              For questions regarding Gully Closet's 
                              terms and conditions, payment or shipping policies and any general information,
                              contact us at:
                            </p>
                            <div>
                              <span className="contact-email">Email:</span>
                              <span>gullycloset1@gmail.com</span>
                            </div>
                            <div>
                              <span className="contact-phone">Phone:</span>
                              <span>0653353678</span>
                            </div>
                         
                         </div>
                </div>
              )}
              <li className="footer-policy" onClick={togglePayment}>
                Payment Policy
              </li>
               {isPaymentOpen && (
                <div className="footer-payment">
                        <i className="ri-close-line close-policy-icon" onClick={closePaymentPolicy}></i>
                        <div className="payment-policy">
                          <h2>Payment Policy</h2>
                          <p>
                            At Gully Closet, we value your trust and want to ensure a smooth and secure shopping
                            experience. Please read our payment policy carefully before making a purchase.
                            <br/>
                            <br/>

                            <b>1. Accepted Payment Methods</b>
                            <br/>
                            <br/>

                            We accept the following secure payment methods:
                            <br/>
                            <br/>
                            - Credit/Debit Cards: Visa, MasterCard etc.
                            <br/>
                            - Digital Wallets: PayPay, Apple Pay, Google Pay.
                            <br/>
                            - Mobile Money Payments: Payshap, Yoco.
                            <br/>
                            <br/>

                            All transactions are processed in ZAR, and prices displayed include applicable taxes.
                            <br/>
                            <br/>
                            <b>2. Payment Terms</b>
                            <br/>
                            <br/>
                            - Full payment is required at checkout before an order is processed and shipped.
                            <br/>
                            - Order will not be shipped until payment has been confirmed.
                            <br/>
                            Payment confirmation will be sent via email or sms once transaction is successful.
                            <br/>
                            <br/>
                            <b>3. Pricing and Currency</b>
                            <br/>
                            <br/>
                            All prices are listed in ZAR and are subject to change without notice.
                            <br/>
                            <br/>
                            <b>4. Security</b>
                            <br/>
                            <br/>
                            We use secure payment gateways to ensure that your financial information is encrypted and protected.
                            Gully Closet does not store any card or banking details.
                            <br/>
                            <br/>
                            <b>5. Failed or Declined Payments</b>
                            <br/>
                            If payment is declined:
                            <br/>
                            - Verify your payment details or try an alternative payment method.
                            <br/>
                            - Contact your bank or payment provider if the issue persists
                            <br/>
                            <br/>
                            <b>6. Refunds & Returns</b>
                            <br/>
                            Refunds, exchanges, or store credit are only issued in accordance with our Return & Refund policy.
                            Please review it before making a purchase.

                          </p>
                        </div>

                </div>
              )}
              <li className="footer-policy" onClick={toggleShipping}>
                Shipping Policy
              </li>
               {isShippingOpen && (
                <div className="footer-shipping">
                        <i className="ri-close-line close-policy-icon" onClick={closeShippingPolicy}></i>
                        <div className="shipping-policy">
                          <h2>Shipping Policy</h2>
                          <p>
                            At Gully Closet, we want to make sure your items reach you safely and on time. 
                            Please read our shipping policy carefully before placing your order.
                            
                            <br/>
                            <br/>

                            <b>1. Processing Time</b>
                            <br/>
                            <br/>
                            - Orders are processed within 1-4 business days after payment is confirmed.
                            <br/>
                            Orders placed on weekends or public holidays will be processed on the next business days
                            <br/>
                            <br/>
                            <b>2. Shipping Methods & Rates</b>
                            <br/>
                            <br/>
                             We offer the following shipping options:
                            <br/>
                            - Standard Shipping: Delivery within 2-4 business days.
                            <br/>
                            - Express Shipping: Delivery within 1-2 business days.
                            <br/>
                            - Local Pickup: Available for customers in Johannesburg free of charge.
                            <br/>
                            <br/>
                            Shipping Fees are calculated at checkout based on delivery method
                            <br/>
                            <br/>
                            <b>3. Delivery Areas</b>
                            <br/>
                            <br/>
                            - We currently ship Nationwide
                            <br/>
                            
                            -International shipping may be available upon request; additional charges and
                            charges and customs fees may apply
                            <br/>
                            <br/>
                            <b>4. Tracking Your Order</b>
                            <br/>
                            <br/>
                            Once your order is shipped, you will receive a tracking number via email/SMS
                            so you can monitor the delivery progress.
                            <br/>
                            <br/>
                            <b>5. Delivery Timeframes</b>
                            <br/>
                            <br/>
                            Delivery times are estimates and may be affected by:
                            <br/>
                            - Weather conditions
                            <br/>
                            - Courier delays
                            <br/>
                            - Public holidays
                            <br/>
                            - Customs clearance - for international orders
                            <br/>
                            <br/>
                            <b>6. Lost or Damaged Packages</b>
                            <br/>
                            <br/>
                            We are not responsible for:
                            <br/>
                            - Lost or Stolen packages after delivery confirmation
                            <br/>
                            - Delays caused by the courier service
                            <br/>
                            <br/>
                            If your order arrives damaged, please contact us within 2 business days with
                            photos so  we can assist you.
                            <br/>
                            <br/>
                            <b>7. Shipping Costs</b>
                            <br/>
                            <br/>
                            Shipping costs are non-refundable unless the return or refund is due to an error on our shipped

                          </p>
                        </div>
                </div>
              )}
              <li className="footer-policy" onClick={toggleTerms}>
                Terms and Conditions
              </li>
               {isTermsOpen && (
                <div className="footer-terms">

                        <i className="ri-close-line close-policy-icon" onClick={closeTermsPolicy}></i>
                        
                        <div className="terms-policy">
                          <h2>Terms and Conditions</h2>
                          <p>
                            Welcome to Gully Closet, these Terms and Conditions govern your use of our
                            website, product, and services. By accessing or purchasing from our store,
                            you agree to these terms. 
                            <br/>
                            <br/>
                            <br/>

                            <b>1. General Information</b>
                            <br/>
                            <br/>
                            - Gully Closet sells pre-owned, thrift, and vintage items unless otherwise stated
                            <br/>
                            - All items are sold as-is with detailed descriptions and images provided to the best
                            of our ability
                            <br/>
                            - We reserve the right to refuse service to anyone for any reason at any time
                            <br/>
                            <br/>
                             <b>2. Accuracy of Product information</b>
                            <br/>
                            <br/>
                            - We strive to ensure all product descriptions, pricing, and availability details
                            are accurate
                            <br/>
                            - However, slight variation in color, size, or condition may occur due to the nature
                            of secondhand items.
                            <br/>
                            <br/>

                            <b>3. Pricing & Payments</b>
                            <br/>
                            <br/>
                             - Prices are listed in ZAR and include applicable taxes unless otherwise stated
                            <br/>
                            - Full payment is required at checkout before orders are processed or shipped.
                            <br/>
                            - We accept various secure payment methods as outlined in our Payment Policy
                            <br/>
                            <br/>
                            <b>4. Shipping & Delivery</b>
                            <br/>
                            <br/>
                             - Orders are processed and shipped according to our Shipping Policy
                            <br/>
                            - Delivery times are estimated and may vary depending on location, courier
                             delays, or circumstances beyond our control
                            <br/>
                            <br/>
                            <b>5. Return & Refunds</b>
                            <br/>
                            <br/>
                             - Due to the sceondhand nature of our products, all sells are generally financial
                             unless otherwise stated in our Return and Refunds Policy
                            <br/>      
                            - Refunds or exchanges are only issued in cases of incorrect or defective items
                            as outlined in the policy
                            <br/>
                            <br/>
                            <b>6. Limitation of liability</b>
                            <br/>
                            <br/>
                             Gully Closet is not liable for any damages, losses, or delays once the productis handed
                             over to the shipping carrier.
                            <br/>
                            - We are also not responsible for miuse, allergic reactions, or wear and tear of
                            items after purchase.
                            <br/>
                            <br/>
                            <b>7. Intellectual Property</b>
                            <br/>
                            <br/>
                            - All website content, including images, logos, and product descriptions, is
                            the property of Gully Closet and may not be used without permission.
                            <br/>
                            <br/>
                            <b>8. Privacy Policy</b>
                            <br/>
                            <br/>
                            - We value your privacy. Personal information collected during checkout is used
                            only forprocessing orders and as outlined in our Privacy Policy.
                            <br/>
                            <br/>
                            <b>9. Changes to Terms</b>
                            <br/>
                            <br/>
                             - Gully Closet reserves the right to update or modify these Terms & Conditions at any 
                             time without prior notice.
                             <br/>
                             - Continued use of the website after changes indicates acceptance of the new terms.

                          </p>
                        </div>
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