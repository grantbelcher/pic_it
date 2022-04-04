import React, { useState } from "react";

function Photo({ img, className, toggleFavorite, toggleCartStatus }) {
  const [hovering, setHovering] = useState(false);

  const toggleHover = (isHovering) => {
    setHovering(isHovering);
  };

  const heartFullIcon = (
    <i
      className="ri-heart-fill favorite"
      onClick={() => {
        toggleFavorite(img.id);
      }}
    ></i>
  );

  // IF HOVERING then RETURN EMPTY HEART, otherwise display nothing
  const heartEmptyIcon = hovering && (
    <i
      className="ri-heart-line favorite"
      onClick={() => {
        toggleFavorite(img.id);
      }}
    ></i>
  );

  const cartIcon = hovering && (
    <i
      className="ri-add-circle-line cart"
      onClick={() => toggleCartStatus(img)}
    ></i>
  );

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      {img.isFavorite ? heartFullIcon : heartEmptyIcon}
      {cartIcon}
      <img src={img.url} className="image-grid" />
    </div>
  );
}

export default Photo;
