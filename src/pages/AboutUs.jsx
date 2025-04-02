import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import about from "../assets/images/about.jpg";
import nuTeam from "../assets/images/nuTeam.jpg";
import ourStory from "../assets/images/ourStory.jpg";
import ourGoal from "../assets/images/ourGoal.jpg";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-700 min-h-screen space-y-16">
      <div className="relative w-full h-[90vh]" data-aos="fade-down">
        <img src={about} alt="about" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent flex items-end justify-center pb-16">
          <div className="text-center max-w-3xl px-4">
            <h1
              className="text-5xl font-bold text-blue-500 mb-4"
              data-aos="zoom-in"
            >
              About Us
            </h1>
            <p
              className="text-lg leading-relaxed text-gray-600 bg-white bg-opacity-80 p-6 rounded-lg shadow-sm"
              data-aos="fade-up"
            >
              At{" "}
              <span className="text-blue-600 font-semibold">
                Namrata Universal
              </span>
              , we focus on quality, integrity, and long-term partnerships. Our
              experienced professionals understand the evolving IT landscape and
              serve as true partners in your success.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 max-w-7xl mx-auto" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <img
            src={nuTeam}
            alt="Our team"
            className="w-full md:w-1/2 rounded-lg shadow-sm object-cover h-96"
            data-aos="zoom-in"
          />
          <div className="md:w-1/2 md:ml-8 text-center md:text-left mt-6 md:mt-0">
            <h2
              className="text-3xl font-semibold text-gray-800 mb-4"
              data-aos="fade-right"
            >
              Welcome to the World of Namrata Universal
            </h2>
            <p
              className="text-lg leading-relaxed text-gray-600"
              data-aos="fade-left"
            >
              Trusted by the world's best organizations for 11 years, we have
              been delivering smiles to IT advisors, developers, and business
              owners. We offer simple solutions for complex IT problems,
              ensuring high availability and efficiency.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 max-w-7xl mx-auto" data-aos="fade-up">
        <div className="flex flex-col md:flex-row-reverse items-center bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <img
            src={ourStory}
            alt="Our story"
            className="w-full md:w-1/2 rounded-lg shadow-sm object-cover h-96"
            data-aos="zoom-in"
          />
          <div className="md:w-1/2 md:mr-8 text-center md:text-left mt-6 md:mt-0">
            <h2
              className="text-3xl font-semibold text-gray-800 mb-4"
              data-aos="fade-right"
            >
              Our Story
            </h2>
            <p
              className="text-lg leading-relaxed text-gray-600"
              data-aos="fade-left"
            >
              The{" "}
              <span className="text-blue-600 font-semibold">Namrata Group</span>{" "}
              has been serving clients for over 14 years across industries
              including healthcare, retail, and travel. Namrata Universal is
              committed to advancing our customers' businesses through
              innovative products and services.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 max-w-7xl mx-auto mb-16" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <img
            src={ourGoal}
            alt="Our goal"
            className="w-full md:w-1/2 rounded-lg shadow-sm object-cover h-96"
            data-aos="zoom-in"
          />
          <div className="md:w-1/2 md:ml-8 text-center md:text-left mt-6 md:mt-0">
            <h2
              className="text-3xl font-semibold text-gray-800 mb-4"
              data-aos="fade-right"
            >
              Our Goal
            </h2>
            <p
              className="text-lg leading-relaxed text-gray-600"
              data-aos="fade-left"
            >
              We strive to improve efficiency and enhance experiences through
              our IT solutions. Trusted by global organizations, we simplify
              complex IT problems and provide seamless solutions worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
