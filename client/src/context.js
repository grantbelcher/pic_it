import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [photos, setPhotos] = useState([]);

  const [cartItems, setCartItems] = useState([]);

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

    console.log(targetPhoto.isFavorite);

    let updatedPhoto = {
      ...targetPhoto,
      isFavorite: !targetPhoto.isFavorite,
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

  const toggleCartStatus = (photo) => {
    // find in cart array
    let indexInCart;
    const alreadyInCart = cartItems.find((item, index) => {
      indexInCart = index;
      return item.id === photo.id;
    });
    // add to cart array if photo is not in cartItems
    if (alreadyInCart) {
      // remove from cartItems
      console.log(indexInCart, "INDEX IN CART");
      let cartItemsCopy = [...cartItems];
      cartItemsCopy.splice(indexInCart, 1);
      setCartItems(cartItemsCopy);
    } else {
      const updatedCart = [...cartItems, photo];
      setCartItems(updatedCart);
    }
  };

  return (
    <Context.Provider
      value={{ photos, cartItems, toggleFavorite, toggleCartStatus }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
