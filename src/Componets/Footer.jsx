import React from "react";
import numainLogo from "../assets/images/numainLogo.png";
import { BsYoutube, BsArrowRight } from "react-icons/bs";
import { FaInstagramSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import { TfiEmail, TfiHeadphone } from "react-icons/tfi";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import footerVideo from "../assets/images/footerVideo.mp4";

const Footer = () => {
  return (
    <div className="relative w-full bg-gray-100">
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-20"
        >
          <source src={footerVideo} type="video/mp4" />
        </video>
      </div>

      <footer className="relative z-10 pt-16 pb-8 text-gray-900 border-t border-gray-200">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="w-full flex flex-col md:flex-row flex-wrap gap-8 md:gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-4rem)]"
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

              <p className="text-black mb-6 text-sm sm:text-base">
                Empowering your digital presence with innovative solutions and
                creative strategies.
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                  <FiSend className="mr-2" /> Join Our Newsletter
                </h3>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-grow px-4 py-2 bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-sm sm:text-base"
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
                      className={`${social.color} text-xl sm:text-2xl bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow`}
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full sm:w-[calc(50%-2rem)] md:w-[calc(25%-4rem)]"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-6 pb-2 border-b border-blue-500 inline-block">
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-3">
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
                      className="flex items-center text-black hover:text-blue-600 transition-colors text-sm sm:text-base"
                    >
                      <BsArrowRight className="mr-2 text-xs" />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full sm:w-[calc(50%-2rem)] md:w-[calc(25%-4rem)]"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-6 pb-2 border-b border-blue-500 inline-block">
                Our Services
              </h3>
              <ul className="space-y-2 sm:space-y-3">
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
                      className="flex items-center text-black hover:text-blue-600 transition-colors text-sm sm:text-base"
                    >
                      <BsArrowRight className="mr-2 text-xs" />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full sm:w-[calc(50%-2rem)] md:w-[calc(25%-4rem)]"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-6 pb-2 border-b border-blue-500 inline-block">
                Contact Us
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <TfiHeadphone className="text-blue-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-600 text-sm sm:text-base">
                      Call Us
                    </h4>
                    <p className="text-black text-xs sm:text-sm">
                      +91 8506922777
                    </p>
                    <p className="text-black text-xs sm:text-sm">
                      +91 8506944777
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <TfiEmail className="text-blue-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-600 text-sm sm:text-base">
                      Email Us
                    </h4>
                    <p className="text-black text-xs sm:text-sm">
                      namratauniversal@gmail.com
                    </p>
                    <p className="text-black text-xs sm:text-sm">
                      info@namratauniversal.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600"
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
                    <h4 className="font-medium text-blue-600 text-sm sm:text-base">
                      Our Offices
                    </h4>
                    <p className="text-black text-xs sm:text-sm">
                      3C, A1 Sector 10, Noida, UP
                    </p>
                    <p className="text-black text-xs sm:text-sm">
                      2nd Floor, Plot No-64 Block-F, Sector-8, Noida
                    </p>
                    <p className="text-black text-xs sm:text-sm">
                      Plot No-827, Shalimar Garden, Ghaziabad
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-8 mt-8 border-t border-gray-200 text-center"
          >
            <p className="text-black text-xs sm:text-sm">
              © {new Date().getFullYear()} Namrata Universal. All rights
              reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-3 sm:mt-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-black hover:text-blue-600 text-xs sm:text-sm transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
