// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { motion } from "framer-motion";
// import client1 from "../assets/images/client-1.webp";
// import client3 from "../assets/images/client-3.webp";
// import client4 from "../assets/images/client-4.webp";
// import client5 from "../assets/images/client-5.webp";
// import client6 from "../assets/images/client-6.webp";
// import client8 from "../assets/images/client-8.webp";
// import client9 from "../assets/images/client-9.webp";
// import client10 from "../assets/images/client-10.webp";
// import client11 from "../assets/images/client-11.webp";
// import client12 from "../assets/images/client-12.webp";
// import client15 from "../assets/images/client-15.webp";
// import client16 from "../assets/images/client-16.webp";
// import client17 from "../assets/images/client-17.webp";
// import client20 from "../assets/images/client-20.webp";
// import client21 from "../assets/images/client-21.webp";
// import client23 from "../assets/images/client-23.webp";
// import client24 from "../assets/images/client-24.webp";
// import client25 from "../assets/images/client-25.webp";
// import client26 from "../assets/images/client-26.webp";

// const OurClients = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       easing: "ease-out-quart",
//     });
//   }, []);

//   const clients = [
//     { id: 1, logo: client1, alt: "Client 1" },
//     { id: 3, logo: client3, alt: "Client 3" },
//     { id: 4, logo: client4, alt: "Client 4" },
//     { id: 5, logo: client5, alt: "Client 5" },
//     { id: 6, logo: client6, alt: "Client 6" },
//     { id: 8, logo: client8, alt: "Client 8" },
//     { id: 9, logo: client9, alt: "Client 9" },
//     { id: 10, logo: client10, alt: "Client 10" },
//     { id: 11, logo: client11, alt: "Client 11" },
//     { id: 12, logo: client12, alt: "Client 12" },
//     { id: 15, logo: client15, alt: "Client 15" },
//     { id: 16, logo: client16, alt: "Client 16" },
//     { id: 17, logo: client17, alt: "Client 17" },
//     { id: 20, logo: client20, alt: "Client 20" },
//     { id: 21, logo: client21, alt: "Client 21" },
//     { id: 23, logo: client23, alt: "Client 23" },
//     { id: 24, logo: client24, alt: "Client 24" },
//     { id: 25, logo: client25, alt: "Client 25" },
//     { id: 26, logo: client26, alt: "Client 26" },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "backOut",
//       },
//     },
//     hover: {
//       y: -5,
//       boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-5">
//         <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
//         <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2
//             className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5"
//             data-aos="fade-up"
//           >
//             Trusted By <span className="text-blue-600">Industry Leaders</span>
//           </h2>
//           <p
//             className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
//             data-aos="fade-up"
//             data-aos-delay="150"
//           >
//             We partner with innovative companies across industries to deliver
//             exceptional results
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
//         >
//           {clients.map((client, index) => (
//             <motion.div
//               key={client.id}
//               variants={itemVariants}
//               whileHover="hover"
//               data-aos="fade-up"
//               data-aos-delay={index * 50}
//               className="bg-white rounded-2xl p-6 flex items-center justify-center transition-all duration-300 border border-gray-200 hover:border-blue-200 relative overflow-hidden group"
//             >
//               {/* Hover effect background */}
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//               <img
//                 src={client.logo}
//                 alt={client.alt}
//                 className="h-14 sm:h-16 w-auto object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
//                 loading="lazy"
//               />
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//           data-aos="fade-up"
//           data-aos-delay="300"
//         >
//           <p className="text-gray-500 text-base sm:text-lg font-medium">
//             Join our growing network of satisfied clients
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-lg shadow-blue-500/20 transition-all duration-300"
//           >
//             Become a Client
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default OurClients;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import client1 from "../assets/images/client-1.webp";
import client3 from "../assets/images/client-3.webp";
import client4 from "../assets/images/client-4.webp";
import client5 from "../assets/images/client-5.webp";
import client6 from "../assets/images/client-6.webp";
import client8 from "../assets/images/client-8.webp";
import client9 from "../assets/images/client-9.webp";
import client10 from "../assets/images/client-10.webp";
import client11 from "../assets/images/client-11.webp";
import client12 from "../assets/images/client-12.webp";
import client15 from "../assets/images/client-15.webp";
import client16 from "../assets/images/client-16.webp";
import client17 from "../assets/images/client-17.webp";
import client20 from "../assets/images/client-20.webp";
import client21 from "../assets/images/client-21.webp";
import client23 from "../assets/images/client-23.webp";
import client24 from "../assets/images/client-24.webp";
import client25 from "../assets/images/client-25.webp";
import client26 from "../assets/images/client-26.webp";

const OurClients = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quart",
    });
  }, []);

  const clients = [
    { id: 1, logo: client1, alt: "Client 1" },
    { id: 3, logo: client3, alt: "Client 3" },
    { id: 4, logo: client4, alt: "Client 4" },
    { id: 5, logo: client5, alt: "Client 5" },
    { id: 6, logo: client6, alt: "Client 6" },
    { id: 8, logo: client8, alt: "Client 8" },
    { id: 9, logo: client9, alt: "Client 9" },
    { id: 10, logo: client10, alt: "Client 10" },
    { id: 11, logo: client11, alt: "Client 11" },
    { id: 12, logo: client12, alt: "Client 12" },
    { id: 15, logo: client15, alt: "Client 15" },
    { id: 16, logo: client16, alt: "Client 16" },
    { id: 17, logo: client17, alt: "Client 17" },
    { id: 20, logo: client20, alt: "Client 20" },
    { id: 21, logo: client21, alt: "Client 21" },
    { id: 23, logo: client23, alt: "Client 23" },
    { id: 24, logo: client24, alt: "Client 24" },
    { id: 25, logo: client25, alt: "Client 25" },
    { id: 26, logo: client26, alt: "Client 26" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-10 sm:py-20 lg:py-10">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5"
            data-aos="fade-up"
          >
            Trusted By <span className="text-blue-600">Industry Leaders</span>
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            We partner with innovative companies across industries to deliver
            exceptional results
          </p>
        </motion.div>

        <Slider {...settings} className="client-carousel">
          {clients.map((client) => (
            <motion.div
              key={client.id}
              whileHover={{ scale: 1.1 }}
              className="p-6 flex items-center justify-center"
              data-aos="fade-up"
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="h-14 sm:h-16 w-auto object-contain "
              />
            </motion.div>
          ))}
        </Slider>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
          data-aos="fade-up"
        >
          <p className="text-gray-500 text-base sm:text-lg font-medium">
            Join our growing network of satisfied clients
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-lg shadow-blue-500/20 transition-all duration-300"
          >
            Become a Client
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;
