import { Fragment, useContext, useEffect, useState } from "react";

import classes from "./HeaderCart.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cartContext";
const HeaderCartButton = (props) => {
  const [btnHighlight, setbtnHiHighlight] = useState(false);
  const ctxData = useContext(CartContext);
  const { items } = ctxData;

  const cartItems = items.reduce((index, item) => {
    return index + item.amount;
  }, 0);

  const btnClasses = `${classes.button}  ${btnHighlight ? classes.bump: ''}`;
  useEffect(( ) => {
    if(items.length === 0){
      return;
    }
    setbtnHiHighlight(true);
    const timer = setTimeout(()=>{
      setbtnHiHighlight(false);
    },300);
    return () => {
      clearTimeout(timer);
    };
  },[items]);
  return (
    <Fragment>
      <button className={btnClasses} onClick={props.onShowCart}>
        <span className={classes.icon}>
          <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartItems}</span>
      </button>
    </Fragment>
  );
};
export default HeaderCartButton;
