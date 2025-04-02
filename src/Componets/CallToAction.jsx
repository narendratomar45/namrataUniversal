import React, { useEffect } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import support from "../assets/images/support.png";
import AOS from "aos";
import "aos/dist/aos.css";

const CallToAction = () => {
  const stats = [
    { value: "56", label: "Our Staff" },
    { value: "5200+", label: "Our Clients" },
    { value: "3811+", label: "Completed Projects" },
    { value: "24/7", label: "Support" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <h2
        style={{ fontFamily: "Fredoka, sans-serif" }}
        className=" text-gray-800 text-center font-bold text-5xl max-sm:text-3xl mb-8"
      >
        Call <span className="text-blue-600">To Action</span>
      </h2>
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          data-aos="fade-up"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 100}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-600 rounded-tl-[50px] rounded-br-[50px] "
            >
              <div
                data-aos="zoom-in"
                data-aos-delay={index * 100 + 300}
                className="text-4xl font-bold text-blue-600 mb-2"
              >
                {stat.value}
              </div>
              <div className="text-lg text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
        >
          <div className="md:flex">
            <div className="md:w-2/3 p-8 md:p-8">
              <h2
                data-aos="fade-right"
                data-aos-delay="300"
                className="text-3xl max-sm:text-2xl max-sm:text-center  font-bold text-gray-800 mb-4"
              >
                Have Any Questions?
              </h2>
              <p
                data-aos="fade-right"
                data-aos-delay="400"
                className="text-lg text-gray-600 mb-6"
              >
                Our team of experts is ready to help you with any queries about
                our IT services. Contact us today and let's discuss how we can
                help your business grow.
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="tel:+918506922777"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-400 transition-all duration-300 text-white font-medium rounded-lg shadow-sm hover:shadow-md "
                >
                  <FiPhone className="text-xl max-sm:text-lg" />
                  Call Now: +91 8506922777
                </a>
                <a
                  href="mailto:namratauniversal@gmail.com"
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <FiMail className="text-xl" />
                  Email Us
                </a>
              </div>
            </div>
            <div className="hidden md:block md:w-1/3 bg-gradient-to-br from-blue-100 to-blue-50 relative overflow-hidden">
              <div
                data-aos="fade-left"
                data-aos-delay="600"
                className="h-full flex items-center justify-center p-4"
              >
                <img
                  src={support}
                  alt="Support team"
                  className="w-full h-auto object-contain"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                />
              </div>
              <div
                className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-blue-400 opacity-10"
                data-aos="fade"
                data-aos-delay="800"
              />
              <div
                className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-blue-300 opacity-10"
                data-aos="fade"
                data-aos-delay="900"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
