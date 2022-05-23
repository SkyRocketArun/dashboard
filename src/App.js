import Header from "./Header";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Contextapi from "./Pages/Contextapi";
import AuthProvider from "./AuthProvider";
import Page404 from "./Pages/Page404";
import { useAuth } from "./AuthProvider";
import Logout from "./Pages/Logout";
const Page = () => {
  const { auth } = useAuth();
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {auth ? <Route path="/dashboard" element={<Dashboard />} /> : null}
      <Route path="/contextapi" element={<Contextapi />} />
      <Route path="/auth" element={<AuthProvider />} />
      <Route path="*" element={<Page404 />} />
      {auth ? (
        <Route path="/logout" element={<Logout />} />
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </>
      )}
    </Routes>
  );
};
function App() {
  return (
    <>
      {/* <AuthProvider> */}
      <Header />
      <Page />
      {/* </AuthProvider> */}
    </>
  );
}
export default App;
