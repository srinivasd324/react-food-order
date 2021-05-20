import React, {useContext} from "react";
import CartContext from "../../../store/cartContext";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(props.price);
  const addToCart =(amount) => {
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
          <MealItemForm id={props.id} onAddItem={addToCart} />
      </div>
    </li>
  );
};

export default MealItem;
