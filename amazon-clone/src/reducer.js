export const initialState = {
    basket: [],
    user: null
  };
  
  // Selector
  export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state, //The basket before
          basket: [...state.basket, action.item], //Adds item to basket
        };
      
      case 'EMPTY_BASKET':
        return {
          ...state,
          basket: []
        }
  
      case "REMOVE_FROM_BASKET":
        //Going through the basket items to see if any of the ids matches
        //Finds first match
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        //Creates temp basket to work with
        let newBasket = [...state.basket];
        
        if (index >= 0) { //If found an item
          newBasket.splice(index, 1); //Removes the item
  
        } else { //If didn't find an item
          console.warn(
            `Product (id: ${action.id}) is not in basket`
          )
        }
  
        return { //Lets the new basket be the old basket
          ...state,
          basket: newBasket
        }
      
      case "SET_USER":
        return {
          ...state,
          user: action.user
        }
  
      default:
        return state;
    }
  };
  
  export default reducer;