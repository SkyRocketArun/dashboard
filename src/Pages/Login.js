import React, { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [pass, setPassword] = useState();
  const item = localStorage.getItem("arraydata");
  function OnLogin() {
    const parsedItem = JSON.parse(item);

    const checkedUser = parsedItem.filter(
      (i) => i.name === name && i.password === pass
    )[0];

    console.log(checkedUser);
    if (checkedUser.name === name) {
      console.log("user found");
    } else if (parsedItem.name === name && parsedItem.password !== pass) {
      console.log("Password is incorrect ");
    } else if (parsedItem.name !== name && parsedItem.password === pass) {
      console.log("username is incorrect ");
    } else if (parsedItem.name !== name && parsedItem.password !== pass) {
      console.log("reset username and password  ");
    } else {
      console.log("user not found");
    }
  }

  return (
    <>
      <div className="w-96 mx-auto bg-gray-100 mt-20 py-10">
        <h1 className="text-center p-4">Login to your account</h1>
        <div className="p-4 w-80 mx-auto">
          <label>User name </label>
          <br />
          <input
            type="text"
            className="border-black border-2 "
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="p-4 w-80 mx-auto">
          <label>Password</label>
          <br />
          <input
            type="password"
            className="border-black border-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={OnLogin}
          className="border-2 border-black px-2 block m-auto"
        >
          Login
        </button>
      </div>
    </>
  );
}
