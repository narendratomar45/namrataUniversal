// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/pagination";
// import user from "../assets/images/user1.jpeg";

// const testimonials = [
//   {
//     name: "Narendra Tomar",
//     review:
//       "This software showcase is amazing! I love the animations and smooth UI.",
//     image: user,
//     rating: 5,
//   },
//   {
//     name: "Rohit Rajput",
//     review:
//       "A fantastic experience! The parallax and hover effects make it really engaging.",
//     image: user,
//     rating: 4,
//   },
//   {
//     name: "Nitish Kumar",
//     review:
//       "I love the dark mode and category animations. It feels very modern and smooth.",
//     image: user,
//     rating: 5,
//   },
//   {
//     name: "Anjali Sharma",
//     review:
//       "The UI is intuitive, and the animations are seamless. Great job!",
//     image: user,
//     rating: 4,
//   },
//   {
//     name: "Vikas Yadav",
//     review:
//       "Impressive work! The responsiveness and transitions are top-notch.",
//     image: user,
//     rating: 5,
//   },
//   {
//     name: "Pooja Singh",
//     review:
//       "I appreciate the clean design and interactive elements. Well done!",
//     image: user,
//     rating: 4,
//   },
// ];

// const TestimonialsSection = () => {
//   return (
//     <section className="py-12 bg-gray-100 dark:bg-gray-900">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
//           What Our Users Say
//         </h2>
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={20}
//           loop={true}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//           modules={[Autoplay, Pagination]}
//           className="mySwiper"
//         >
//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               <motion.div
//                 className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <motion.img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-20 h-20 mx-auto rounded-full mb-4"
//                   whileHover={{ scale: 1.1 }}
//                 />
//                 <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
//                   {testimonial.name}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400 mt-2">
//                   {testimonial.review}
//                 </p>
//                 <motion.div
//                   className="flex justify-center mt-3"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <motion.span
//                       key={i}
//                       className="text-yellow-400 text-xl mx-1"
//                       whileHover={{ scale: 1.2, rotate: 10 }}
//                     >
//                       ★
//                     </motion.span>
//                   ))}
//                 </motion.div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import user from "../assets/images/user1.jpeg";

const testimonials = [
  {
    name: "Narendra Tomar",
    review:
      "This software showcase is amazing! I love the animations and smooth UI.",
    image: user,
    rating: 5,
    role: "CTO, Tech Solutions Inc.",
  },
  {
    name: "Rohit Rajput",
    review:
      "A fantastic experience! The parallax and hover effects make it really engaging.",
    image: user,
    rating: 4,
    role: "Product Manager",
  },
  {
    name: "Nitish Kumar",
    review:
      "I love the dark mode and category animations. It feels very modern and smooth.",
    image: user,
    rating: 5,
    role: "UX Designer",
  },
  {
    name: "Anjali Sharma",
    review: "The UI is intuitive, and the animations are seamless. Great job!",
    image: user,
    rating: 4,
    role: "Software Engineer",
  },
  {
    name: "Vikas Yadav",
    review:
      "Impressive work! The responsiveness and transitions are top-notch.",
    image: user,
    rating: 5,
    role: "Digital Marketing Lead",
  },
  {
    name: "Pooja Singh",
    review:
      "I appreciate the clean design and interactive elements. Well done!",
    image: user,
    rating: 4,
    role: "IT Consultant",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Trusted by <span className="text-blue-500">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our clients say about our software solutions and services
          </p>
        </motion.div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Autoplay, Pagination]}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <motion.div className="relative" whileHover={{ rotate: 5 }}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {testimonial.rating}
                    </div>
                  </motion.div>
                  <div className="ml-4 text-left">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-blue-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic relative pl-4 border-l-2 border-blue-200">
                  "{testimonial.review}"
                </p>
                <div className="flex justify-start">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      className={`text-xl ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      whileHover={{ scale: 1.3 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
