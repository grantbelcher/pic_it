import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [photos, setPhotos] = useState([]);

  // const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("getting photos");
    getPhotos();
  }, []);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  const getPhotos = () => {
    // fetch photos
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  };

  const toggleFavorite = (id) => {
    // Find out if photo is favorited
    let targetPhoto = photos.find((photo) => {
      return photo.id === id;
    });

    let updatedPhoto = {
      ...targetPhoto,
      isFavorite: !targetPhoto.isFavorited,
    };

    const updatedPhotoList = photos.map((photo) => {
      if (photo.id === id) {
        return updatedPhoto;
      } else {
        return photo;
      }
    });

    setPhotos(updatedPhotoList);
  };

  return (
    <Context.Provider value={{ photos, toggleFavorite }}>
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
