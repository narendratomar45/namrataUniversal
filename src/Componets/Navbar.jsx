// import React, { useState } from "react";
// import numainLogo from "../assets/images/numainLogo.png";
// import { Link } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import { MdOutlinePhoneCallback } from "react-icons/md";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navLinks = [
//     { path: "/", name: "Home" },
//     { path: "/aboutus", name: "About Us" },
//     { path: "/software", name: "Software" },
//     { path: "/contactus", name: "Contact Us" },
//   ];

//   return (
//     <div>
//       <div>
//         <span>add</span>
//         <span>email</span>
//         <span>contact</span>
//       </div>
//       <nav className="bg-orange-50 bg-opacity-60 backdrop-blur-sm py-2 px-4 font-medium shadow-sm ">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="flex items-center">
//             <div className="w-40 h-14">
//               <Link to="/" className="flex items-center mt-2">
//                 <img
//                   src={numainLogo}
//                   alt="Namrata Universal Logo"
//                   className="w-full h-full object-cover"
//                 />
//               </Link>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link, index) => (
//               <div key={index} className="group">
//                 <Link
//                   to={link.path}
//                   className="relative text-gray-700 hover:text-indigo-600 transition-colors duration-300"
//                 >
//                   {link.name}
//                   <span className="absolute left-0 bottom-0 h-0.5 bg-indigo-500 w-0 group-hover:w-full transition-all duration-300" />
//                 </Link>
//               </div>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-600 hover:text-indigo-600 focus:outline-none"
//             >
//               {isOpen ? (
//                 <FiX className="h-6 w-6" />
//               ) : (
//                 <FiMenu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden bg-white shadow-lg py-4 px-6 border-t border-gray-100">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link, index) => (
//                 <Link
//                   key={index}
//                   to={link.path}
//                   onClick={() => setIsOpen(false)}
//                   className="block py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 rounded transition-colors duration-300"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };
// export default Navbar;

// import React, { useState, useEffect } from "react";
// import numainLogo from "../assets/images/numainLogo.png";
// import { Link } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import { MdOutlinePhoneCallback, MdEmail } from "react-icons/md";
// import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [visible, setVisible] = useState(true);
//   const [scrolled, setScrolled] = useState(false);

//   const navLinks = [
//     { path: "/", name: "Home" },
//     { path: "/aboutus", name: "About Us" },
//     { path: "/software", name: "Software" },
//     { path: "/contactus", name: "Contact Us" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }

//       // Only control visibility if not in mobile menu
//       if (!isOpen) {
//         if (currentScrollY > lastScrollY && currentScrollY > 100) {
//           // Scrolling down
//           setVisible(false);
//         } else {
//           // Scrolling up
//           setVisible(true);
//         }
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY, isOpen]);

//   return (
//     <div
//       className={`fixed w-full z-50 transition-transform duration-300 ${
//         visible ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       {/* Top info bar */}
//       <div
//         className={`bg-gray-800 text-white transition-all duration-300 ${
//           scrolled ? "py-1" : "py-2"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
//           <div className="flex items-center space-x-4">
//             <a
//               href="tel:+1234567890"
//               className="flex items-center hover:text-orange-300 transition-colors"
//             >
//               <MdOutlinePhoneCallback className="mr-1" /> +123 456 7890
//             </a>
//             <a
//               href="mailto:info@numain.com"
//               className="flex items-center hover:text-orange-300 transition-colors"
//             >
//               <MdEmail className="mr-1" /> info@numain.com
//             </a>
//           </div>
//           <div className="flex items-center space-x-3">
//             <a href="#" className="hover:text-orange-300 transition-colors">
//               <FaFacebook />
//             </a>
//             <a href="#" className="hover:text-orange-300 transition-colors">
//               <FaLinkedin />
//             </a>
//             <a href="#" className="hover:text-orange-300 transition-colors">
//               <FaInstagram />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main navigation */}
//       <nav
//         className={`bg-orange-50 bg-opacity-60 backdrop-blur-sm ${
//           scrolled ? "py-1" : "py-2"
//         } px-4 font-medium shadow-sm transition-all duration-300`}
//       >
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="flex items-center">
//             <div
//               className={`transition-all duration-300 ${
//                 scrolled ? "w-32 h-10" : "w-40 h-14"
//               }`}
//             >
//               <Link to="/" className="flex items-center">
//                 <img
//                   src={numainLogo}
//                   alt="Namrata Universal Logo"
//                   className="w-full h-full object-cover"
//                 />
//               </Link>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link, index) => (
//               <div key={index} className="group">
//                 <Link
//                   to={link.path}
//                   className="relative text-gray-700 hover:text-indigo-600 transition-colors duration-300"
//                 >
//                   {link.name}
//                   <span className="absolute left-0 bottom-0 h-0.5 bg-indigo-500 w-0 group-hover:w-full transition-all duration-300" />
//                 </Link>
//               </div>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-600 hover:text-indigo-600 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? (
//                 <FiX className="h-6 w-6" />
//               ) : (
//                 <FiMenu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden bg-white bg-opacity-95 backdrop-blur-sm shadow-lg py-4 px-6 border-t border-gray-100">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link, index) => (
//                 <Link
//                   key={index}
//                   to={link.path}
//                   onClick={() => setIsOpen(false)}
//                   className="block py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 rounded transition-colors duration-300"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import numainLogo from "../assets/images/numainLogo.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { MdOutlinePhoneCallback, MdEmail } from "react-icons/md";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/aboutus", name: "About Us" },
    { path: "/software", name: "Software" },
    { path: "/contactus", name: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (!isOpen) {
        setVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  return (
    <motion.div
      className={`fixed w-full z-50`}
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      {/* Top info bar with gradient */}
      <div
        className={`bg-gradient-to-r from-blue-600 to-indigo-700 text-white ${
          scrolled ? "py-1 h-8" : "py-2 h-10"
        } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4 md:space-x-6">
            <a
              href="tel:+918506944777"
              className="flex items-center hover:text-amber-300 transition-colors group"
            >
              <MdOutlinePhoneCallback className="mr-1 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">+918506944777</span>
            </a>
            <a
              href="mailto:info@namratauniversal.com"
              className="flex items-center hover:text-amber-300 transition-colors group"
            >
              <MdEmail className="mr-1 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">
                info@namratauniversal.com
              </span>
            </a>
          </div>
          <div className="flex items-center space-x-3 md:space-x-4">
            <a
              href="https://www.facebook.com/namratauniversal01"
              className="hover:text-amber-300 transition-colors hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/company/namrata-universal"
              className="hover:text-amber-300 transition-colors hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/namratauniversal"
              className="hover:text-amber-300 transition-colors hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-amber-300 transition-colors hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation with glass morphism effect */}
      <nav
        className={`bg-white bg-opacity-80 backdrop-blur-lg border-b border-gray-100 ${
          scrolled ? "py-1" : "py-3"
        } px-4 font-medium shadow-sm transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              className={`transition-all duration-300 ${
                scrolled ? "w-32 h-10" : "w-40 h-14"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <Link to="/" className="flex items-center">
                <img
                  src={numainLogo}
                  alt="Namrata Universal Logo"
                  className="w-full h-full object-contain"
                />
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                className="group relative"
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={link.path}
                  className={`relative px-2 py-1 text-gray-800 transition-colors duration-300 ${
                    activeLink === link.name
                      ? "text-indigo-600 font-semibold"
                      : "hover:text-indigo-600"
                  }`}
                  onClick={() => setActiveLink(link.name)}
                >
                  {link.name}
                  {activeLink === link.name && (
                    <motion.span
                      className="absolute left-0 bottom-0 h-0.5 bg-indigo-600 w-full"
                      layoutId="activeLink"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <FiX className="h-7 w-7" />
              ) : (
                <FiMenu className="h-7 w-7" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation with animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-white bg-opacity-95 backdrop-blur-lg shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-2 px-6 py-4">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => {
                        setIsOpen(false);
                        setActiveLink(link.name);
                      }}
                      className={`block py-3 px-4 rounded-lg transition-colors duration-300 ${
                        activeLink === link.name
                          ? "bg-indigo-50 text-indigo-600 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Navbar;
