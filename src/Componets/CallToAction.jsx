import React from "react";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import support from "../assets/images/support.png";

const CallToAction = () => {
  const stats = [
    { value: "56", label: "Our Staff" },
    { value: "5200+", label: "Our Clients" },
    { value: "3811+", label: "Completed Projects" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-400"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
        >
          <div className="md:flex">
            <div className="md:w-2/3 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Have Any Questions?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our team of experts is ready to help you with any queries about
                our IT services. Contact us today and let's discuss how we can
                help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="tel:+918506922777"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <FiPhone className="text-xl" />
                  Call Now: +91 8506922777
                </motion.a>
                <motion.a
                  href="mailto:namratauniversal@gmail.com"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Email Us
                </motion.a>
              </div>
            </div>
            <div className="hidden md:block md:w-1/3 bg-gradient-to-br from-blue-100 to-blue-50">
              <div className="h-full flex items-center justify-center p-4">
                <img
                  src={support}
                  alt="Support team"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;
