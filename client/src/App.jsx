import React from "react";
import Header from "./components/Header/Header";
import { Switch, Route, Routes } from "react-router-dom";

import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route exact path="/" element={<Photos />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </div>
);

export default App;
