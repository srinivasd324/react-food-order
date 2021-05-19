import { Fragment } from "react";

import classes from "./HeaderCart.module.css";
import CartIcon from "../Cart/CartIcon";
const HeaderCartButton = (props) => {
  return (
    <Fragment>
      <button className={classes.button} onClick={props.onShowCart}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            3
        </span>
      </button>
    </Fragment>
  );
};
export default HeaderCartButton;
