import React, { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../Features/ContextProvider';
import { totalPrice } from '../Features/Reducer';




const CheckOutForm = () => {

  const {state} = useContext(CartContext);

  const [formData, setFormData] = useState({
    name:"",
    surname:"",
    phone:"",
    email:"",
    delivery:"collect",
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

  //handle pay now 
  const handlePayNow = ()=>{

    //clean cart without images
    const cleanCart = state.cart.map((product)=>({
      id: product.id,
      name: product.name,
      price: product.price,
    }))

    const orderData = {
      ...formData,
      products: cleanCart
      
    }
    console.log("Order submitted:", orderData)
    // save to supabase
  };



  return (
     <div className= "shipping-delivery">
        <h3>Shipping information</h3>
        <span>
             Please fill in shipping info
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
          />
          <input
             type="tel"
             name='phone'
             placeholder='Phone'
             value={formData.phone}
             onChange={handleChange}
             autoComplete="tel"
          />
          <input
             type="email"
             name='email'
             placeholder='Email'
             value={formData.email}
             onChange={handleChange}
             autoComplete='email'
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
          {/*view delivery methods if delivery is picked */}
          {formData.delivery === "delivery" && (

              <div className="delivery-method-div">

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
                       />
                        <input
                         placeholder="City"
                         type="text"
                         name="city"
                         value={formData.delivery_info.city}
                         onChange={handleChange}
                         autoComplete="address-level2"
                       />
                        <input
                         placeholder="Province"
                         type="text"
                         name="province"
                         value={formData.delivery_info.province}
                         onChange={handleChange}
                         autoComplete="address-level1"
                       />
                        <input
                         placeholder="Postal Code"
                         type="text"
                         name="postalCode"
                         value={formData.delivery_info.postalCode}
                         onChange={handleChange}
                         autoComplete="postal-code"
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
                    />
                  )}

                  {formData.delivery_method === "pudo" && (
                    <input 
                        placeholder="Please enter Pudo Locker near you."
                        name="pudoLocker"
                        type="text"
                        value={formData.delivery_info.pudoLocker}
                        onChange={handleChange}
                    />
                  )}
              </div>
          )}
         
          <div 
              className='pay-toggle'
              onClick={handlePayNow}
          >Pay Now</div>
        </form>

      </div>
      
  )
}

export default CheckOutForm