import React, { useState } from "react";

function Photo({ img, className }) {
  const [hovering, setHovering] = useState(false);

  const toggleHover = (isHovering) => {
    setHovering(isHovering);
  };

  const heartIcon = hovering && <i className="ri-heart-line favorite"></i>;
  const cartIcon = hovering && <i className="ri-add-circle-line cart"></i>;

  return (
    <div
      className={`${className} image-container`}
      onMouseOver={() => toggleHover(true)}
      onMouseOut={() => toggleHover(false)}
    >
      {heartIcon}
      {cartIcon}
      <img src={img.url} className="image-grid" />
    </div>
  );
}

export default Photo;
