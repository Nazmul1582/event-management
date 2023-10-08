import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <header className="bg-base-100">
      <div className="navbar px-0 container mx-auto">
        <div className="navbar-start gap-3 lg:gap-0">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-warning lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-warning normal-case text-xl">E-Management</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-3">
          <label tabIndex={0} className="btn btn-warning btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-250nw-1714666150.jpg" alt="profle image" />
            </div>
          </label>
          <Link to="/login" className="btn btn-warning">Logout</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
