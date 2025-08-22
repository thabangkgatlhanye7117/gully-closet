export const totalPrice = (cart)=>{
     return cart.reduce((total, product)=> total + product.price, 0)
}
const CartReducer = (state, action)=>{
    switch(action.type){
      case "Add":
        return [...state, action.product]

      case "Remove":
        return state.filter( product => product.id !== action.id)
      
      default:
         state;
    }


}
export default CartReducer