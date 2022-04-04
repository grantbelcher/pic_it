import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.background}>
      <Link to="/">
        <h2>Pic It</h2>
      </Link>
      <Link to="/cart">
        <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
      </Link>
    </header>
  );
}

export default Header;
