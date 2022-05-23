import { useAuth } from ".././AuthProvider";
import { useNavigate } from "react-router-dom";
export default function Logout() {
  let history = useNavigate();
  const { auth } = useAuth();
  function logOut() {
    console.log("This is logout page ");
    console.log(auth);
    const logindata = false;
    localStorage.setItem("logindata", JSON.stringify(logindata));
    history("/");
  }

  return (
    <>
      <h1 className="text-center">This is Logout page </h1>
      <button
        onClick={logOut}
        className="block mx-auto border-solid border-2 border-sky-500 p-1"
      >
        Click to Logout
      </button>
    </>
  );
}
