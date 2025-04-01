// import React from "react";
// import numainLogo from "../assets/images/numainLogo.png";
// import { BsYoutube, BsArrowRight } from "react-icons/bs";
// import { FaInstagramSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
// import { TfiEmail, TfiHeadphone } from "react-icons/tfi";
// import { motion } from "framer-motion";
// import { FiSend } from "react-icons/fi";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8 px-4">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="flex items-center mb-6">
//               <motion.img
//                 src={numainLogo}
//                 alt="nuLogo"
//                 className="w-full h-12  object-cover mr-3"
//                 whileHover={{ rotate: 10 }}
//                 transition={{ type: "spring" }}
//               />
//               {/* <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
//                 Namrata Universal
//               </h1> */}
//             </div>

//             <p className="text-gray-400 mb-6">
//               Empowering your digital presence with innovative solutions and
//               creative strategies.
//             </p>

//             <div className="mb-6 ">
//               <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center">
//                 <FiSend className="mr-2" /> Join Our Newsletter
//               </h3>
//               <div className="flex ">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="flex-grow w-40 px-2 py-2 bg-gray-700 border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
//                 />
//                 <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity">
//                   <BsArrowRight />
//                 </button>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-gray-300 mb-3">Follow Us</h3>
//               <div className="flex space-x-4">
//                 {[
//                   {
//                     icon: <BsYoutube />,
//                     color: "text-red-500",
//                     href: "https://youtube.com/@namratauniversal6577?feature=shared",
//                   },
//                   {
//                     icon: <FaInstagramSquare />,
//                     color: "text-pink-500",
//                     href: "https://www.instagram.com/namratauniversal",
//                   },
//                   {
//                     icon: <FaFacebook />,
//                     color: "text-blue-400",
//                     href: "https://www.facebook.com/namratauniversal01",
//                   },
//                   {
//                     icon: <FaLinkedin />,
//                     color: "text-blue-300",
//                     href: "https://www.linkedin.com/company/namrata-universal",
//                   },
//                 ].map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`${social.color} text-2xl bg-gray-700 p-2 rounded-full`}
//                     whileHover={{ y: -3, scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     {social.icon}
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <h3 className="text-xl font-bold mb-6 pb-2 border-b border-purple-500 inline-block">
//               Quick Links
//             </h3>
//             <ul className="space-y-3">
//               {[
//                 "Home",
//                 "About Us",
//                 "Services",
//                 "Portfolio",
//                 "Testimonials",
//                 "Team",
//                 "Contact",
//               ].map((item, index) => (
//                 <motion.li
//                   key={index}
//                   whileHover={{ x: 5 }}
//                   transition={{ type: "spring" }}
//                 >
//                   <a
//                     href="#"
//                     className="flex items-center text-gray-400 hover:text-purple-300 transition-colors"
//                   >
//                     <BsArrowRight className="mr-2 text-xs" />
//                     {item}
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <h3 className="text-xl font-bold mb-6 pb-2 border-b border-purple-500 inline-block">
//               Our Services
//             </h3>
//             <ul className="space-y-3">
//               {[
//                 "Web Development",
//                 "Digital Marketing",
//                 "SEO Services",
//                 "Graphic Design",
//                 "App Development",
//                 "Content Writing",
//                 "Social Media Management",
//               ].map((item, index) => (
//                 <motion.li
//                   key={index}
//                   whileHover={{ x: 5 }}
//                   transition={{ type: "spring" }}
//                 >
//                   <a
//                     href="#"
//                     className="flex items-center text-gray-400 hover:text-purple-300 transition-colors"
//                   >
//                     <BsArrowRight className="mr-2 text-xs" />
//                     {item}
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <h3 className="text-xl font-bold mb-6 pb-2 border-b border-purple-500 inline-block">
//               Contact Us
//             </h3>

//             <div className="space-y-4">
//               <div className="flex items-start">
//                 <div className="bg-purple-500 p-2 rounded-full mr-3 mt-1">
//                   <TfiHeadphone className="text-white" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-purple-300">Call Us</h4>
//                   <p className="text-gray-400">+91 8506922777</p>
//                   <p className="text-gray-400">+91 8506944777</p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="bg-pink-500 p-2 rounded-full mr-3 mt-1">
//                   <TfiEmail className="text-white" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-purple-300">Email Us</h4>
//                   <p className="text-gray-400">namratauniversal@gmail.com</p>
//                   <p className="text-gray-400">info@namratauniversal.com</p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="bg-blue-500 p-2 rounded-full mr-3 mt-1">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-white"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-purple-300">Our Offices</h4>
//                   <p className="text-gray-400 text-sm">
//                     3C, A1 Sector 10, Noida, UP
//                   </p>
//                   <p className="text-gray-400 text-sm">
//                     2nd Floor, Plot No-64 Block-F, Sector-8, Noida
//                   </p>
//                   <p className="text-gray-400 text-sm">
//                     Plot No-827, Shalimar Garden, Ghaziabad
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="pt-8 mt-8 border-t border-gray-800 text-center"
//         >
//           <p className="text-gray-500 text-sm">
//             © {new Date().getFullYear()} Namrata Universal. All rights reserved.
//           </p>
//           <div className="flex justify-center space-x-6 mt-4">
//             {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
//               (item, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="text-gray-500 hover:text-purple-300 text-xs transition-colors"
//                 >
//                   {item}
//                 </a>
//               )
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import numainLogo from "../assets/images/numainLogo.png";
import { BsYoutube, BsArrowRight } from "react-icons/bs";
import { FaInstagramSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import { TfiEmail, TfiHeadphone } from "react-icons/tfi";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 pt-16 pb-8 px-4 border-t border-gray-200">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <motion.img
                src={numainLogo}
                alt="nuLogo"
                className="h-12 object-cover mr-3"
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring" }}
              />
            </div>

            <p className="text-gray-600 mb-6">
              Empowering your digital presence with innovative solutions and
              creative strategies.
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center">
                <FiSend className="mr-2" /> Join Our Newsletter
              </h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                  <BsArrowRight />
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-gray-700 mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  {
                    icon: <BsYoutube />,
                    color: "text-red-600",
                    href: "https://youtube.com/@namratauniversal6577?feature=shared",
                  },
                  {
                    icon: <FaInstagramSquare />,
                    color: "text-pink-600",
                    href: "https://www.instagram.com/namratauniversal",
                  },
                  {
                    icon: <FaFacebook />,
                    color: "text-blue-600",
                    href: "https://www.facebook.com/namratauniversal01",
                  },
                  {
                    icon: <FaLinkedin />,
                    color: "text-blue-700",
                    href: "https://www.linkedin.com/company/namrata-universal",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-2xl bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow`}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-500 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Services",
                "Portfolio",
                "Testimonials",
                "Team",
                "Contact",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring" }}
                >
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <BsArrowRight className="mr-2 text-xs" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-500 inline-block">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Digital Marketing",
                "SEO Services",
                "Graphic Design",
                "App Development",
                "Content Writing",
                "Social Media Management",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring" }}
                >
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <BsArrowRight className="mr-2 text-xs" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-500 inline-block">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <TfiHeadphone className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-blue-600">Call Us</h4>
                  <p className="text-gray-600">+91 8506922777</p>
                  <p className="text-gray-600">+91 8506944777</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <TfiEmail className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-blue-600">Email Us</h4>
                  <p className="text-gray-600">namratauniversal@gmail.com</p>
                  <p className="text-gray-600">info@namratauniversal.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-blue-600">Our Offices</h4>
                  <p className="text-gray-600 text-sm">
                    3C, A1 Sector 10, Noida, UP
                  </p>
                  <p className="text-gray-600 text-sm">
                    2nd Floor, Plot No-64 Block-F, Sector-8, Noida
                  </p>
                  <p className="text-gray-600 text-sm">
                    Plot No-827, Shalimar Garden, Ghaziabad
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="pt-8 mt-8 border-t border-gray-200 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Namrata Universal. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-500 hover:text-blue-600 text-xs transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
