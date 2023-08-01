import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isVisible, setVisibility] = useState(false);

  const openCart = () => {
    setVisibility(true);
  };

  const closeCart = () => {
    setVisibility(false);
  };

  console.log(isVisible);

  return (
    <CartProvider>
      {isVisible && <Cart onclick={closeCart} />}
      <Header onclick={openCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
