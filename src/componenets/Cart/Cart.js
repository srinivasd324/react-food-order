import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctxData = useContext(CartContext);

  const totalAmount = ctxData.totalAmount.toFixed(2);
  const hasItems = ctxData.items.length;

  const cartItemRemoveHandler = (id) => {
    ctxData.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    ctxData.addItem({...item, amount:1})
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctxData.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems > 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
