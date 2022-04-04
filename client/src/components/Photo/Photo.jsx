import React from "react";

function Photo({ id, url, isFavorite }) {
  return (
    <div>
      <img src={url} />
    </div>
  );
}

export default Photo;
