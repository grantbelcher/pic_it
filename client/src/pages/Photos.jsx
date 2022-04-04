import React, { useContext } from "react";
import { Context } from "../context";
import { getClass } from "../utils/index.js";
import Photo from "../components/Photo/Photo";

function Photos() {
  const { photos, toggleFavorite } = useContext(Context);

  const imageElements = photos.map((photo) => {
    const dimension = getClass(photo.id);
    return (
      <Photo
        key={photo.id}
        img={photo}
        className={dimension}
        toggleFavorite={toggleFavorite}
      />
    );
  });
  return <main className="photos">{imageElements}</main>;
}

export default Photos;
