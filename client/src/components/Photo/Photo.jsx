import React, { useState } from "react";

function Photo({ img, className }) {
  const [hovering, setHovering] = useState(false);

  const toggleHover = (isHovering) => {
    setHovering(isHovering);
  };

  return (
    <div
      className={`${className} image-container`}
      onMouseOver={() => toggleHover(true)}
      onMouseOut={() => toggleHover(false)}
    >
      {hovering ? <i className="ri-heart-line favorite"></i> : null}
      {hovering ? <i className="ri-add-circle-line cart"></i> : null}
      <img src={img.url} className="image-grid" />
    </div>
  );
}

export default Photo;
