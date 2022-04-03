import React, { useContext } from "react";
import { Context } from "../context";

function Cart() {
  const test = useContext(Context);
  console.log(test, "loooooook here");
  return (
    <>
      <h1>Cart Page</h1>
    </>
  );
}

export default Cart;
