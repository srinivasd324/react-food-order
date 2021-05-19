import React from "react";
import classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onShowCart={props.onShowCart}/>
      </header>
      <div className={ classes['main-image'] }>
          <img src={mealImage} alt="Full Meals"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
