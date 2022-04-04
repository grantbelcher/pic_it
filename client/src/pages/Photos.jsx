import React, { useContext } from "react";
import { Context } from "../context";
import { getClass } from "../utils/index.js";
import Photo from "../components/Photo/Photo";

function Photos() {
  const { photos, cartItems, toggleFavorite, toggleCartStatus } =
    useContext(Context);

  const imageElements = photos.map((photo) => {
    const dimension = getClass(photo.id);
    const indexInCart = cartItems.findIndex(
      (element) => element.id === photo.id
    );
    const inCart = indexInCart > -1;
    console.log(indexInCart, inCart);
    return (
      <Photo
        key={photo.id}
        img={photo}
        className={dimension}
        toggleFavorite={toggleFavorite}
        inCart={inCart}
        toggleCartStatus={toggleCartStatus}
      />
    );
  });
  return <main className="photos">{imageElements}</main>;
}

export default Photos;
