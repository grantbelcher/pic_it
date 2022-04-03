import React from "react";
import styles from "./Header.css";

function Header() {
  console.log(styles);
  return (
    <header className={styles.background}>
      <h2>Pic It</h2>
    </header>
  );
}

export default Header;
