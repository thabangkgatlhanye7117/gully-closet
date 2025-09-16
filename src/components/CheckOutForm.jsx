import React, { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../Features/ContextProvider';
import { totalPrice } from '../Features/Reducer';




const CheckOutForm = () => {

  const {state} = useContext(CartContext);
  const amount = totalPrice(state);
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name:"",
    surname:"",
    phone:"",
    email:"",
    delivery:"",
    delivery_method:"",
    delivery_info: {
      street: "",
      city:"",
      province:"",
      postalCode:"",
      pepStore:"",
      pudoLocker:"",
    },
  });

  //handle input change

  const handleChange = (e) => {
     const {name, value} = e.target;

     if(
      ["street", "city", "province", "postalCode", "pepStore", "pudoLocker"].includes(name)
     ) {
      setFormData({
        ...formData,
        delivery_info: {
          ...formData.delivery_info, [name]: value,
        },
      })
     } else {
     setFormData({ ...formData, [name]: value});
     }
  };

  //validate form before submition
  const validateFormData = () => {
  //  required fields from formData
  const { name, surname, email, phone, delivery } = formData;

  // Check if any of them are empty
  const allFilled = Object.values({ name, surname, email, phone, delivery })
    .every(value => value.trim() !== "");

  if (!allFilled) {
    alert("Please fill in all required fields");
    return false;
  }

  return true;
};

  //handle pay now 
  const handlePayNow = ()=>{
    
   if (!validateFormData()) return;
    
    //clean cart without images
    const cleanCart = state.cart.map((product)=>({
      id: product.id,
      name: product.name,
      price: product.price,
    }))

    const orderData = {
      ...formData,
      products: cleanCart,
      amount : amount,
      
      
    }
    //toggle payment options
    setIsOpen(prev => !prev);
    //save to supabase
    console.log("Order submitted:", orderData)
    // save to supabase
  };





  return (
     <div className= "shipping-delivery">
        <h3>Customer information</h3>
        <span>
             Please fill in the following:
        </span>
        <form className='checkout-form' action="post">
          <input
             type="text"
             name='name'
             placeholder='Name'
             value= {formData.name}
             onChange={handleChange}
             required
             autoComplete="given-name"
          />

          <input
             type="text"
             name='surname'
             placeholder='Surname'
             value= {formData.surname}
             onChange={handleChange}
             autoComplete='family-name'
             required
          />
          <input
             type="tel"
             name='phone'
             placeholder='Phone'
             value={formData.phone}
             onChange={handleChange}
             autoComplete="tel"
             required
          />
          <input
             type="email"
             name='email'
             placeholder='Email'
             value={formData.email}
             onChange={handleChange}
             autoComplete='email'
             required
          />

          <div className="shipping-form-radio">
              <div>
                    <label htmlFor='delivery'>
                      <b>Delivery</b>
                    </label>
                    <input 
                        type="radio"
                        name='delivery'
                        id='delivery'
                        value="delivery"
                        checked={formData.delivery === "delivery"}
                        onChange={handleChange}
                    />
                  
              </div>
              <div>
                    <label htmlFor="collect">
                      <b>Collection</b>
                    </label>
                    <input
                        type="radio"
                        name="delivery"
                        id="collect"
                        value="collect"
                        checked={formData.delivery ==="collect"}
                        onChange={handleChange}
                    />
                  
              </div>
          </div>
          {/*view address  if collect is picked */}
          {formData.delivery === "collect" &&(
            <div className='collection-address-div'>
                <span><b>Collection Address</b></span>
                <span>XXX Fox street Johannesburg, GP</span>
                <span>Open 11am - 16pm Call prior to collection.</span>
            </div>
          )}
          {/*view delivery methods if delivery is picked */}
          {formData.delivery === "delivery" && (

              <div className="delivery-method-div">
                <div>
                <div className='delivery-fee-banner'><span>Delivery fee will be added R200. 3-5 DAYS ETA</span></div>
                 <select 
                    className='delivery-methods'
                    name="delivery_method"
                    value={formData.delivery_method}
                    onChange={handleChange}
                 >
                    <option value="">--Choose Delivery Method--</option>
                    <option value="home">Home Delivery</option>
                    <option value="paxi">Pep PAXI Delivery</option>
                    <option value="pudo">PUDO Locker Delivery</option>
                 </select>

                </div>
                 {/* view input according to selected delivery method/option*/}

                 {formData.delivery_method === "home" && (
                    <div className='home-address-form'>
                      <input
                         placeholder="Street"
                         type="text"
                         name="street"
                         value={formData.delivery_info.street}
                         onChange={handleChange}
                         autoComplete="street-address"
                         required
                       />
                        <input
                         placeholder="City"
                         type="text"
                         name="city"
                         value={formData.delivery_info.city}
                         onChange={handleChange}
                         autoComplete="address-level2"
                         required
                       />
                        <input
                         placeholder="Province"
                         type="text"
                         name="province"
                         value={formData.delivery_info.province}
                         onChange={handleChange}
                         autoComplete="address-level1"
                         required
                       />
                        <input
                         placeholder="Postal Code"
                         type="text"
                         name="postalCode"
                         value={formData.delivery_info.postalCode}
                         onChange={handleChange}
                         autoComplete="postal-code"
                         required
                       />

                    </div>


                  )}

                  {formData.delivery_method === "paxi" && (
                    <input 
                        placeholder="Please enter Pep Store near you."
                        name="pepStore"
                        type="text"
                        value={formData.delivery_info.pepStore}
                        onChange={handleChange}
                        required
                    />
                  )}

                  {formData.delivery_method === "pudo" && (
                    <input 
                        placeholder="Please enter Pudo Locker near you."
                        name="pudoLocker"
                        type="text"
                        value={formData.delivery_info.pudoLocker}
                        onChange={handleChange}
                        required
                    />
                  )}
              </div>
          )}
          <div className='payment-methods'>
              <div className='pay-toggle' onClick={handlePayNow}>Pay Now</div>
              {isOpen && (
                <div className='payment-options'>
                    <div>Paystack</div>
                    <div>Paypal</div>
                </div>
              )}
          </div>
          
        </form>

      </div>
      
  )
}

export default CheckOutForm