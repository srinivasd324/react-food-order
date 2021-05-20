import { useReducer } from "react";

import CartContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type == "ADD_ITEM") {
    const existItemIndex = state.items.findIndex((item) => item.id === action.item.id);
 
    const existingItem = state.items[existItemIndex];
    let updateItem;
    let updateItems;

    if(existingItem){
      updateItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount
      }
      updateItems =  [...state.items];
      updateItems[existItemIndex]= updateItem;
    }else{
      updateItems = state.items.concat(action.item);;
    }
    const totalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updateItems,
      totalAmount: totalAmount,
    };
  }else if(action.type == "Remove_ITEM"){
    const existItemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingItem = state.items[existItemIndex];
    const totalAmount = state.totalAmount - existingItem.price;
    let updateItem;
    let updateItems;
    if(existingItem.amount === 1){
        updateItems = state.items.filter(item => item.id !== action.id);
    }else{
      updateItem = {
        ...existingItem,
        amount: existingItem.amount - 1
      }
      updateItems =  [...state.items];
      updateItems[existItemIndex]= updateItem;
    }return {
      items: updateItems,
      totalAmount: totalAmount,
    };

  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item: item,
    });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({
        type: "Remove_ITEM",
        id: id,
      });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
