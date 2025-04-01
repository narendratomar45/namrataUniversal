import { easeInOut, motion } from "framer-motion";
import {
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
  FaChrome,
  FaReact,
} from "react-icons/fa";
import heroImage from "../assets/images/heroImage.jpg";

const HeroSection = () => {
  const text = "Explore the World of Software";

  const floatingIcons = [
    { Icon: FaWindows, color: "#00a4ef" },
    { Icon: FaApple, color: "#a2aaad" },
    { Icon: FaLinux, color: "#fcc624" },
    { Icon: FaAndroid, color: "#3ddc84" },
    { Icon: FaChrome, color: "#4285f4" },
    { Icon: FaReact, color: "#61dafb" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 h-[90vh]">
      <div className="absolute w-full h-[90vh] ">
        <img src={heroImage} alt="" className="  bg-cover w-full h-full" />
      </div>
      <div className="absolute bg-black  opacity-60  w-full h-[90vh]"></div>
      <div className=" absolute   right-50 top-1/3  mt-5 px-3">
        {/* <motion.h1
          className="text-white text-5xl font-bold mb-4 z-50 drop-shadow-lg  "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Explore the World of Software
        </motion.h1> */}
        <motion.h1
          className="text-white text-5xl font-bold mb-4 z-50 drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-white pr-1"
            initial={{ width: 0 }}
            animate={{ width: `${text.length}ch` }}
            transition={{ duration: 2, ease: "linear" }}
          >
            {text}
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-white text-lg z-50 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover different types of software and how they impact our digital
          lives.
        </motion.p>
      </div>
      {floatingIcons.map(({ Icon, color }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-70"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            color: color,
          }}
          animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        >
          <Icon size={80} />
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSection;
