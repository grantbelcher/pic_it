import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [photos, setPhotos] = useState({
    photos: [],
  });

  useEffect(() => {
    console.log("getting photos");
    getPhotos();
  }, []);

  const getPhotos = () => {
    // fetch photos
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) =>
        setPhotos((prevState) => ({
          ...prevState,
          photos: data,
        }))
      );
  };

  return <Context.Provider value={photos}>{props.children}</Context.Provider>;
}

export { ContextProvider, Context };
