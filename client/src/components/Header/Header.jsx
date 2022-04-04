import React, { useContext } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { Context } from "../../context";
import styles from "./Header.module.css";

function Header() {
  const { cartItems } = useContext(Context);

  const cartIsFull = cartItems.length > 0;

  const iconClass = cartIsFull
    ? "ri-shopping-cart-fill ri-fw ri-2x"
    : "ri-shopping-cart-line ri-fw ri-2x";

  console.log(iconClass, "header");

  return (
    <header className={styles.background}>
      <Link to="/">
        <h2>Pic It</h2>
      </Link>
      <Link to="/cart">
        <i className={`${iconClass} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}

export default Header;
