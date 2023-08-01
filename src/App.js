import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [isVisible, setVisibility] = useState("false");

  const openCart = () => {
    setVisibility(true);
  };

  const closeCart = () => {
    setVisibility(false);
  };

  return (
    <React.Fragment>
      {isVisible && <Cart onclick={closeCart} />}
      <Header onclick={openCart} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
