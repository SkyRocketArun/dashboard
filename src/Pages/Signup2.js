import React, { useState } from "react";
import {storageKeys} from '../util'

const Signup2 = () => {
  const id = new Date();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [keyid, setKyeid] = useState(id);

  function savedata() {
    let arraydata = [];
    let SaveInfo = {
      key: keyid,
      name: name,
      email: email,
      password: pswd,
    };

    if(localStorage.getItem(storageKeys.saveInfo)){
      const arr1 = JSON.parse(localStorage.getItem(storageKeys.saveInfo));

      arr1.filter()

      if(){
        arr1.filter

      }else{
        const newuser ={

        }
        arr1.push({})
      }

    }

    arraydata.push(SaveInfo);
    localStorage.setItem("SaveInfo", JSON.stringify(SaveInfo));
  }

  return (
    <>
      <div className="w-96 mx-auto bg-gray-100 mt-20 py-10">
        <h1 className="text-center p-4">Create new account</h1>
        <div className="p-4 w-80 mx-auto">
          <label htmlFor="name">Enter name </label>
          <input
            type="text"
            className="border-black border-2 "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="p-4 w-80 mx-auto">
          <label htmlFor="email">Email @</label>
          <input
            type="email"
            className="border-black border-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="p-4 w-80 mx-auto">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="border-black border-2"
            value={pswd}
            onChange={(e) => setPswd(e.target.value)}
          />
        </div>
        <button
          onClick={savedata}
          className="border-2 border-black px-2 block m-auto"
        >
          Signup
        </button>
      </div>
    </>
  );
};

export default Signup2;
