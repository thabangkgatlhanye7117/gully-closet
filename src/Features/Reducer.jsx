import {useNavigate} from "react-router-dom";


export const totalPrice = (state)=>{
     return state.cart.reduce((total, product)=> total + product.price, 0)
}
const Reducer = (state, action)=>{
    switch(action.type){
      case "Add":
        
        const updatedCart = [...state.cart, action.product];
              localStorage.setItem("cart", JSON.stringify(updatedCart))

        return {
                ...state,
                cart: updatedCart
              }

      case "Remove":

        const filteredCart = state.cart.filter( product => product.id !== action.id)
               localStorage.setItem("cart", JSON.stringify(filteredCart))

        return {
                ...state,
                  cart: filteredCart
              }

      case "selectedProduct":
              localStorage.setItem("selectedProduct", JSON.stringify(action.product))
        return {
                 ...state, selectedProduct: action.product
              }

      case "clearSelectedProduct":
             localStorage.removeItem("selectedProduct", )
        return {
                  ...state, selectedProduct: null
              }
             
            

      
      default:
         state;
    }


}
export default Reducer