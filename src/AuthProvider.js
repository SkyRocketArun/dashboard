import { createContext, useState, useContext, useEffect } from "react";

const Context = createContext({});

const AuthProvider = (props) => {
  const LoginValue = JSON.parse(localStorage.getItem("logindata"));
  const [auth, setAuth] = useState(LoginValue);
  const [authentication, setAuthentication] = useState(LoginValue);
  useEffect(() => {
    console.log(auth);
    const logindata = auth;
    localStorage.setItem("logindata", JSON.stringify(logindata));
  });

  const onLogin = ({ username, password }) => {
    console.log("This is onlogin");
    setAuth(true);
    setAuthentication(true);
  };
  return (
    <>
      <Context.Provider value={{ auth, authentication, onLogin }}>
        {props.children}
      </Context.Provider>
    </>
  );
};

const useAuth = (props) => {
  const val = useContext(Context);
  return val;
};

export default AuthProvider;
export { useAuth };
