import React, { useEffect } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import support from "../assets/images/support.png";
import AOS from "aos";
import "aos/dist/aos.css";
import contactVideo from "../assets/images/contactVideo.mp4";

const CallToAction = () => {
  const stats = [
    { value: "56", label: "Our Staff", icon: "👨‍💻" },
    { value: "5200+", label: "Our Clients", icon: "🤝" },
    { value: "3811+", label: "Completed Projects", icon: "✅" },
    { value: "24/7", label: "Support", icon: "🛎️" },
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
    <div className="w-full relative overflow-hidden">
      {/* Background Video */}
      <div className="w-full h-full absolute inset-0  overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={contactVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative bg-gray-50/95 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2
              style={{ fontFamily: "Fredoka, sans-serif" }}
              className="text-gray-800 font-bold text-5xl max-sm:text-3xl mb-4"
            >
              Ready To <span className="text-blue-600">Get Started?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied clients who trust us with their IT
              solutions
            </p>
          </div>

          {/* Stats Grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            data-aos="fade-up"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                data-aos="flip-left"
                data-aos-delay={index * 100}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-blue-600/20 hover:border-blue-600/40 rounded-tl-[50px] rounded-br-[50px] group"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div
                  data-aos="zoom-in"
                  data-aos-delay={index * 100 + 300}
                  className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors"
                >
                  {stat.value}
                </div>
                <div className="text-lg text-gray-600 group-hover:text-gray-800 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="md:flex">
              <div className="md:w-2/3 p-8 md:p-10">
                <h2
                  data-aos="fade-right"
                  data-aos-delay="300"
                  className="text-3xl max-sm:text-2xl font-bold text-gray-800 mb-4"
                >
                  Have Any Questions?
                </h2>
                <p
                  data-aos="fade-right"
                  data-aos-delay="400"
                  className="text-lg text-gray-600 mb-8"
                >
                  Our team of experts is ready to help you with any queries
                  about our IT services. Contact us today and let's discuss how
                  we can help your business grow.
                </p>

                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <a
                    href="tel:+918506922777"
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-white font-medium rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1"
                  >
                    <FiPhone className="text-xl" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="mailto:namratauniversal@gmail.com"
                    className="flex items-center justify-center gap-3 px-6 py-4 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all hover:-translate-y-1"
                  >
                    <FiMail className="text-xl" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>

              {/* Support Image */}
              <div className="hidden md:block md:w-1/3 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
                <div
                  data-aos="fade-left"
                  data-aos-delay="600"
                  className="h-full flex items-center justify-center p-6"
                >
                  <img
                    src={support}
                    alt="Support team"
                    className="w-full h-auto object-contain max-h-64"
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
    </div>
  );
};

export default CallToAction;
