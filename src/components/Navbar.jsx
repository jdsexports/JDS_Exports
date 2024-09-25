import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-brown200 py-3 px-5 md:px-16 lg:px-32">
      {/* Hamburger Button */}
      <div className="flex justify-between items-center lg:hidden">
        <Link to="/">
          <h1 className="font-bold text-xl text-brown900 flex items-center">
            <img
              src="/images/logo.png"
              alt="JDS exports"
              className="h-12 w-12 mr-2"
            />
            JDS International Exports
          </h1>
        </Link>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          type="button"
          className={`inline-flex items-center p-2 justify-center text-sm rounded-lg transition-transform duration-300 ${
            isOpen ? "transform rotate-90" : ""
          }`}
          aria-controls="dropdown"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              className="h-6 w-6 text-brown900 transition-colors duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 text-brown900 transition-colors duration-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu */}
      <div
        className={`lg:flex items-center justify-between container mx-auto transition-all ease-in-out duration-700 overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        } lg:max-h-full lg:overflow-visible`}
      >
        <Link to={"/"}>
          <h1 className="font-bold lg:text-xl xl:text-2xl text-brown900 items-center hidden lg:flex">
            <img src="/images/logo.png" alt="JDS exports" className="mr-3" />
            JDS International Exports
          </h1>
        </Link>
        <ul className="mt-3 lg:mt-0 flex flex-col lg:flex-row space-y-4 md:space-y-3 lg:space-y-0 lg:space-x-8 text-lg font-medium">
          <li>
            <NavLink to="/" className="active-nav" aria-current="page">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" className="active-nav" aria-current="page">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="active-nav" aria-current="page">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactus" className="active-nav" aria-current="page">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center text-brown900 pr-4 md:pr-0 mt-4 lg:ml-5 xl:ml-0 lg:mt-0">
          <img
            src="/icons/Call.svg"
            alt="Phone Icon"
            className="h-6 w-6 mr-2"
          />
          <a href="tel:+91 75020 12602">+91 75020 12602</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
