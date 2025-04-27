// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg text-[#BD1521]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-8 w-auto md:h-30" src={logo} alt="logo" />
            </Link>
          </div>

          <div className="hidden sm:flex space-x-6 ">
            <NavLink to="/" icon={faHome} text="Home" />
            {isAuthenticated && <NavLink to="/profile" text="Profile" />}
            {isAuthenticated ? (
              <NavLink to="/logout" text="Logout" />
            ) : (
              <>
                <NavLink to="/signup" text="Sign Up" />
                <NavLink to="/login" text="Login" />
              </>
            )}
          </div>

          <div className="flex gap-6">

            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-[#BD1521] focus:outline-none"
              >
                {isOpen ? (
                  <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden bg-white shadow-md`}
      >
        <div className="px-4 pt-2 pb-3 space-y-2">
          <NavLinkMobile to="/" text="Home" onClick={toggleMenu} />
          {isAuthenticated && <NavLinkMobile to="/profile" text="Profile" onClick={toggleMenu} />}
          <NavLinkMobile to="/signup" text="Sign Up" />
          <NavLinkMobile to="/login" text="Login" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
