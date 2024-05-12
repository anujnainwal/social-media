"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  let { user, successStatus } = useSelector((state) => state.login);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {}, [user]);
  const getInitials = (name) => {
    const parts = name.split(" ");
    const initials = parts.map((part) => part.charAt(0)).join("");
    return initials.toUpperCase();
  };
  return (
    <header>
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
      >
        <div>
          <Link href="/">Social Login</Link>
        </div>

        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                Customers
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                Blog
              </a>
            </li>
          </ul>
          <div className="hidden md:flex items-center space-x-4">
            <span className="p-2 bg-red-600 text-cyan-50 rounded">
              {getInitials(user.fullname)}
            </span>
            <div className="relative">
              <button
                className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md focus:outline-none"
                onClick={toggleMenu}
              >
                <span className="mr-2">{user.fullname}</span>
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                  <ul className="py-2">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
