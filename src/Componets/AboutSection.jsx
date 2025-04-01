// import React from "react";
// import about from "../assets/images/about.jpg";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const AboutSection = () => {
//   return (
//     <div className="w-full h-auto bg-gray-900">
//       <div className="bg-gray-800 w-[90%] mx-auto rounded-lg shadow-xl text-gray-300 py-16 px-6">
//         <motion.div
//           className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           {/* Image Section */}
//           <motion.div
//             className="w-full md:w-1/2"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <img
//               src={about}
//               alt="about image"
//               className="w-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
//             />
//           </motion.div>

//           {/* Text Section */}
//           <motion.div
//             className="w-full md:w-1/2 text-center md:text-left space-y-6"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//           >
//             <h1 className="text-5xl font-bold text-white">
//               About <span className="text-blue-400">Us</span>
//             </h1>
//             <p className="text-lg leading-relaxed">
//               At{" "}
//               <span className="text-blue-400 font-semibold">
//                 Namrata Universal
//               </span>
//               , we focus on quality, integrity, and long-term partnerships. Our
//               experienced professionals understand the evolving IT landscape and
//               serve as true partners in your success.
//             </p>

//             <Link to={"/aboutus"}>
//               <motion.button
//                 className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 Learn More
//               </motion.button>
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;

import React from "react";
import about from "../assets/images/about.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="w-full h-auto bg-gray-200 py-20">
      <div className="bg-white w-[90%] mx-auto rounded-xl shadow-lg text-gray-700 py-16 px-8 border border-gray-200">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 relative"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute -inset-2 bg-blue-100 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <img
              src={about}
              alt="about image"
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-all duration-500 border border-gray-200"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <h1 className="text-5xl font-bold text-gray-800">
              About <span className="text-blue-500">Our Mission</span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-600">
              At{" "}
              <span className="font-semibold text-blue-500">
                Namrata Universal
              </span>
              , we combine innovation with integrity to create technology
              solutions that drive meaningful progress. Our approach is built on
              understanding your unique needs and delivering exceptional
              results.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-gray-700">Proven industry expertise</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-gray-700">
                  Customized strategic solutions
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-gray-700">
                  Long-term partnership focus
                </span>
              </div>
            </div>

            <Link to={"/aboutus"}>
              <motion.button
                className="relative overflow-hidden bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px -5px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-100 transition duration-300"></span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
