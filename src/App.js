import Header from "./Header";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import { useContext } from "react";

const Auth = useContext();

const Page = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/about" element={<About />} />
      {/* {true &&} */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
function App() {
  return (
    <>
      <Auth.Provider value={"false"}>
        <Header />
        <Page />
      </Auth.Provider>
    </>
  );
}
export default App;
