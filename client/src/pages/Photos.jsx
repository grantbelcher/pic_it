import React, { useContext } from "react";
import { Context } from "../context";
import { getClass } from "../utils/index.js";
import Photo from "../components/Photo/Photo";

function Photos() {
  console.log(getClass, "function");
  const photoList = useContext(Context);
  const photos = photoList.map((photo) => {
    const dimension = getClass(photo.id);
    return <Photo key={photo.id} img={photo} className={dimension} />;
  });
  return <main className="photos">{photos}</main>;
}

export default Photos;
