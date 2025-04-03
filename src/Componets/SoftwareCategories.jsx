import { useState, useEffect } from "react";
import systemSoftware from "../assets/images/systemSoftware.jpg";
import softwareDevelopment from "../assets/images/softwareDevelopment.jpg";
import crmSoftware from "../assets/images/crmSoftware.jpg";
import sapSoftware from "../assets/images/sapSoftware.jpg";
import erpSoftware from "../assets/images/erpSoftware.jpg";
import securitySoftware from "../assets/images/securitySoftware.jpg";
import embaddedSoftware from "../assets/images/embaddedSoftware.jpg";
import aiSoftware from "../assets/images/aiSoftware.jpg";
import gamingSoftware from "../assets/images/gamingSoftware.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../App.css";

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

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const handleCategory = () => {
    setMore(!more);
  };

  return (
    <div className="w-full bg-gray-50 text-gray-800 py-10 px-6 md:px-20">
      <h2
        className="text-5xl max-sm:text-3xl font-bold text-center mb-10 tracking-wide"
        data-aos="fade-down"
      >
        <span
          style={{ fontFamily: "Fredoka, sans-serif" }}
          className=" bg-clip-text text-gray-800"
        >
          Software <span className="text-blue-500">Solutions</span>
        </span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {softwareCategories
          .slice(0, more ? softwareCategories.length : 3)
          .map((category, index) => (
            <Link
              to={`/software/${category.title}`}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white  shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer  hover:border-blue-500 group custom-border border border-blue-400 "
            >
              <div className="overflow-hidden rounded-lg mb-4 custom-border  ">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-56 object-cover  group-hover:scale-105 transition-transform duration-500  custom-border  "
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 ml-5 text-gray-800">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-4 ml-5 leading-relaxed">
                {category.description}
              </p>
              <div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50 text-blue-600 font-medium border border-blue-200 hover:scale-[1.03] active:scale-95 transition-transform ml-10 mb-5">
                Learn More →
              </div>
            </Link>
          ))}
      </div>
      <div
        className="text-center mt-12"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <button
          onClick={handleCategory}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 transition-all duration-300 text-white font-semibold rounded-lg shadow-md hover:shadow-lg"
        >
          {more ? "Show Less" : "Show More Categories"}
        </button>
      </div>
    </div>
  );
};

export default SoftwareCategories;
