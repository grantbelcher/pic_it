import React, { useContext } from "react";
import { Context } from "../context";

import Photo from "../components/Photo/Photo";

function Photos() {
  const photoList = useContext(Context);
  const photos = photoList.map(({ id, isFavorite, url }) => {
    return <Photo key={id} isFavorite={isFavorite} url={url} />;
  });
  return <>{photos}</>;
}

export default Photos;
