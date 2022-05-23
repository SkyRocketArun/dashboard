import { useContext } from "react";
import { UserContext } from "./Contextapi";
export default function Context() {
  const val = useContext(UserContext);

  return <h1>This is {val}</h1>;
}
