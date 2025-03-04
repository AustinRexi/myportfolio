"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Add this import

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Experience", link: "/experience" },
    { name: "Skills", link: "/skills" },
    { name: "Projects", link: "/project" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-red-700 to-red-800 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">DevFolio</Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-red-700 md:bg-transparent md:items-center md:space-x-6 p-4 md:p-0 transition-all duration-300 ease-in-out z-40`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className={`block py-2 hover:text-gray-200 md:hover:bg-transparent transition-colors ${
                pathname === item.link ? " text-gray-400" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
