import {useNavigate} from "react-router-dom";


export const totalPrice = (state)=>{
     return state.cart.reduce((total, product)=> total + product.price, 0)
}
const Reducer = (state, action)=>{
    switch(action.type){
      case "Add":
        return {
                ...state,
                cart:[...state.cart, action.product]
              }

      case "Remove":
        return {
                ...state,
                  cart: state.cart.filter( product => product.id !== action.id)
              }

      case "selectedProduct":
        return {
                 ...state, selectedProduct: action.product
              }

      case "clearSelectedProduct":
        return {
                  ...state, selectedProduct: null
              }
             
            

      
      default:
         state;
    }


}
export default Reducer