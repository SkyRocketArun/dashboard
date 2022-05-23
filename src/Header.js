import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const Header = () => {
  const { auth } = useAuth();
  return (
    <>
      <div className="container mx-auto flex justify-between">
        <ul>
          {auth ? (
            <li className="cursor-pointer px-4 py-2">
              <NavLink to="/dashboard" activeClassName="active">
                Dashboard
              </NavLink>
            </li>
          ) : null}
        </ul>
        <ul className="flex gap-4 justify-end">
          <li className="cursor-pointer px-4 py-2">
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer px-4 py-2">
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>

          {auth ? (
            <li className="cursor-pointer px-4 py-2">
              <NavLink to="/logout" activeClassName="active">
                Logout
              </NavLink>
            </li>
          ) : (
            <>
              <li className="cursor-pointer px-4 py-2">
                <NavLink to="/login" activeClassName="active">
                  Login
                </NavLink>
              </li>
              <li className="cursor-pointer px-4 py-2">
                <NavLink to="/signup" activeClassName="active">
                  Signup
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Header;
