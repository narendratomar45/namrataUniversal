import React, { useEffect, useState } from "react";
import numainLogo from "../assets/images/numainLogo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { MdOutlinePhoneCallback } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  // const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [prevScrollPos]);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/aboutus", name: "About Us" },
    { path: "/software", name: "Software" },
    { path: "/contactus", name: "Contact Us" },
  ];

  return (
    <>
      <div className="">
        <div></div>
        <div></div>
        <div>
          <MdOutlinePhoneCallback />
          +918506944777
        </div>
      </div>

      <nav
        className={`bg-orange-50 bg-opacity-60 backdrop-blur-sm py-2 px-4 font-medium sm:px-8 lg:px-12 shadow-sm fixed top-0 left-0 right-0 z-50 transition-transform duration-300`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="w-40 h-14">
              <Link to="/" className="flex items-center mt-2">
                <img
                  src={numainLogo}
                  alt="Namrata Universal Logo"
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.path}
                  className="relative text-gray-700 hover:text-indigo-600 transition-colors duration-300 group"
                >
                  {link.name}
                  <motion.span
                    className="absolute left-0 bottom-0 h-0.5 bg-indigo-500 w-0 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg py-4 px-6 border-t border-gray-100"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 rounded transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
