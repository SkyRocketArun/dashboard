import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="container mx-auto flex justify-between">
        <ul>
          <li className="cursor-pointer px-4 py-2">
            <NavLink to="/dashboard" activeClassName="active">
              Dashboard
            </NavLink>
          </li>
        </ul>
        <ul className="flex gap-4 justify-end">
          <li className="cursor-pointer px-4 py-2">
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
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
        </ul>
      </div>
    </>
  );
};

export default Header;
