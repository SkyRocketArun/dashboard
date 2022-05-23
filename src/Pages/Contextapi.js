import React from "react";
import Context from "./Context";

export const UserContext = React.createContext();

export default function Contextapi() {
  return (
    <UserContext.Provider value="Reed">
      <Context />
    </UserContext.Provider>
  );
}
