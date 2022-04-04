import React, { useContext } from "react";
import { Context } from "../context";

function Cart() {
  const photos = useContext(Context);
  return (
    <main className="cart-page">
      <h1>Cart Page</h1>
    </main>
  );
}

export default Cart;
