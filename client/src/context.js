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

    // add photos to context state
    setPhotos((prevState) => {
      console.log(prevState, "Previous state");
      return {
        ...prevState,
        photos: ["new photos"],
      };
    });
  };

  return <Context.Provider value={photos}>{props.children}</Context.Provider>;
}

export { ContextProvider, Context };
