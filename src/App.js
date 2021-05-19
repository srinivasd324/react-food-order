import React, { Fragment, useState } from "react";
import Cart from "./componenets/Cart/Cart";
import Header from "./componenets/Layout/Header";
import Meals from "./componenets/Meals/Meals";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}  />
      <main >
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
