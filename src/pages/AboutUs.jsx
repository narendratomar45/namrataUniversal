import React from "react";
import about from "../assets/images/about.jpg";
import nuTeam from "../assets/images/nuTeam.jpg";
import ourStory from "../assets/images/ourStory.jpg";
import ourGoal from "../assets/images/ourGoal.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen  space-y-16">
      {/* Header Section */}
      <div className="flex justify-center w-full h-[90vh]">
        <img src={about} alt="about" className="w-full h-full bg-cover" />
      </div>
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
        <p className="text-lg leading-relaxed">
          At{" "}
          <span className="text-blue-400 font-semibold">Namrata Universal</span>
          , we focus on quality, integrity, and long-term partnerships. Our
          experienced professionals understand the evolving IT landscape and
          serve as true partners in your success.
        </p>
      </div>

      <div className="p-8">
        <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-lg p-8">
          <img
            src={nuTeam}
            alt="nuteamlogo"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <div className="md:w-1/2 md:ml-8 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Welcome to the World of Namrata Universal
            </h2>
            <p className="text-lg leading-relaxed">
              Trusted by the world's best organizations for 11 years, we have
              been delivering smiles to IT advisors, developers, and business
              owners. We offer simple solutions for complex IT problems,
              ensuring high availability and efficiency.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-col md:flex-row-reverse items-center bg-gray-800 rounded-lg shadow-lg p-8">
          <img
            src={ourStory}
            alt="our story"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <div className="md:w-1/2 md:mr-8 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Our Story
            </h2>
            <p className="text-lg leading-relaxed">
              The{" "}
              <span className="text-blue-400 font-semibold">Namrata Group</span>{" "}
              has been serving clients for over 14 years across industries
              including healthcare, retail, and travel. Namrata Universal is
              committed to advancing our customers' businesses through
              innovative products and services.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-lg p-8">
          <img
            src={ourGoal}
            alt="our goal"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <div className="md:w-1/2 md:ml-8 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-white mb-4">Our Goal</h2>
            <p className="text-lg leading-relaxed">
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
