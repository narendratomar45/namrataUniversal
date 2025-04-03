import React, { useEffect } from "react";
import about from "../assets/images/about.jpg";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import '../App.css'

const AboutSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="w-full h-auto bg-gray-100 py-10 overflow-hidden">
      <div className="bg-white w-[95%]  mx-auto rounded-xl shadow-lg text-gray-700 py-10 px-6 border border-gray-200">
        <div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
          data-aos="fade-up"
        >
          <div
            className="w-full md:w-1/2 relative group"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="absolute -inset-2 bg-blue-100 rounded-xl opacity-0 group-hover:opacity-10 transition duration-500 rounded-tl-[100px] rounded-br-[100px] rounded-tr-4xl" />
            <img
              src={about}
              alt="about image"
              className="w-full custom-border transition-all duration-500 border border-blue-600  hover:scale-[1.02] "
            />
          </div>

          <div
            style={{ fontFamily: "Fredoka, sans-serif" }}
            className="w-full md:w-1/2 text-center md:text-left space-y-6 "
          >
            <h1
              className="text-5xl max-sm:text-3xl font-bold text-gray-800"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              About <span className="text-blue-500">Our Mission</span>
            </h1>

            <p
              className="text-lg text-start leading-relaxed text-gray-600"
              data-aos="fade-up"
              data-aos-delay="400"
            >
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
              <div
                className="flex items-center gap-3"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400 hover:scale-150 transition-transform" />
                <span className="text-gray-700">Proven industry expertise</span>
              </div>
              <div
                className="flex items-center gap-3"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400 hover:scale-150 transition-transform" />
                <span className="text-gray-700">
                  Customized strategic solutions
                </span>
              </div>
              <div
                className="flex items-center gap-3"
                data-aos="fade-right"
                data-aos-delay="700"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400 hover:scale-150 transition-transform" />
                <span className="text-gray-700">
                  Long-term partnership focus
                </span>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="800">
              <Link to={"/aboutus"}>
                <button className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-400 transition-all duration-300 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg  group hover:scale-[1.03] active:scale-95">
                  <span className="relative z-10 flex items-center gap-2">
                    Read More About Us
                  </span>
                  <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-100 transition duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
