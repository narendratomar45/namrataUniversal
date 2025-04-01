import { motion } from "framer-motion";
import { useState } from "react";
import systemSoftware from "../assets/images/systemSoftware.jpg";
import softwareDevelopment from "../assets/images/softwareDevlopment.avif";
import crmSoftware from "../assets/images/crmSoftware.jpg";
import sapSoftware from "../assets/images/sapSoftware.jpg";
import erpSoftware from "../assets/images/erpSoftware.jpg";
import securitySoftware from "../assets/images/securitySoftware.jpg";
import embaddedSoftware from "../assets/images/embaddedSoftware.jpg";
import aiSoftware from "../assets/images/aiSoftware.jpg";
import gamingSoftware from "../assets/images/gamingSoftware.jpeg";

const softwareCategories = [
  {
    title: "System Software",
    description: "Software that provides a platform for other software to run.",
    image: systemSoftware,
  },
  {
    title: "Development Software",
    description: "Tools used by programmers to build applications.",
    image: softwareDevelopment,
  },
  {
    title: "CRM Software",
    description:
      "Software designed to manage customer relationships, sales, and marketing processes.",
    image: crmSoftware,
  },
  {
    title: "SAP Software",
    description:
      "Enterprise software that helps businesses manage operations, finance, supply chain, and customer relationships efficiently.",
    image: sapSoftware,
  },
  {
    title: "ERP Software",
    description:
      "Software that integrates core business processes like finance, supply chain, and human resources into a unified system.",
    image: erpSoftware,
  },
  {
    title: "Security Software",
    description: "Software used to protect systems and data.",
    image: securitySoftware,
  },
  {
    title: "Embedded Software",
    description: "Software designed to control machines or devices.",
    image: embaddedSoftware,
  },
  {
    title: "AI Software",
    description: "Software that enables AI and machine learning applications.",
    image: aiSoftware,
  },
  {
    title: "Gaming Software",
    description: "Software designed for entertainment and gaming.",
    image: gamingSoftware,
  },
];

const SoftwareCategories = () => {
  const [more, setMore] = useState(false);
  const handleCategory = () => {
    setMore(!more);
  };

  return (
    <div className="bg-gray-100 text-gray-800 py-16 px-6 md:px-20">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Software Solutions
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {softwareCategories
          .slice(0, more ? softwareCategories.length : 3)
          .map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 hover:border-blue-500"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <motion.img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {category.description}
              </p>
              <motion.div
                className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50 text-blue-600 font-medium border border-blue-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More →
              </motion.div>
            </motion.div>
          ))}
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <button
          onClick={handleCategory}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 transition-all duration-300 text-white font-semibold rounded-lg shadow-md hover:shadow-lg"
        >
          {more ? "Show Less" : "Show More Categories"}
        </button>
      </motion.div>
    </div>
  );
};

export default SoftwareCategories;
