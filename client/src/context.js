import React from "react";

const Context = React.createContext();

function ContextProvider(props) {
  console.log(props, "from context provider");
  return (
    <Context.Provider value={{ test: 1 }}>{props.children}</Context.Provider>
  );
}

export { ContextProvider, Context };
