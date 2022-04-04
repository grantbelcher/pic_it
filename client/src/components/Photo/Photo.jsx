import React from "react";

function Photo({ img, className }) {
  console.log(className, "className");
  return (
    <div className={`${className} image-container`}>
      <img src={img.url} className="image-grid" />
    </div>
  );
}

export default Photo;
