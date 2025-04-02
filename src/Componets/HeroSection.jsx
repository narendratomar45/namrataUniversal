import { motion } from "framer-motion";
import {
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
  FaChrome,
  FaReact,
} from "react-icons/fa";
// import heroImage from "../assets/images/heroImage.jpg";
import heroVideo from "../assets/images/heroVideo.mp4";

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
    <div className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 h-[90vh] md:h-screen max-sm:h-[60vh]">
      <div className="absolute w-full h-full max-sm:h-[60vh]">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bg-black opacity-60 w-full h-full max-sm:h-[60vh]"></div>

      <div className="absolute px-4 w-full max-w-6xl mx-auto">
        <motion.h1
          style={{ fontFamily: "Fredoka, sans-serif" }}
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 z-50 drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block  overflow-hidden whitespace-nowrap border-r-2 border-white max-sm:top-1/2  max-sm:-translate-x-[20px] max-sm:-translate-y-1/4 max-sm:text-2xl"
            initial={{ width: 0 }}
            animate={{ width: `${text.length}ch` }}
            transition={{ duration: 2, ease: "linear" }}
          >
            {text}
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-white text-base sm:text-lg md:text-xl z-50 max-w-2xl mx-auto"
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
          className="absolute opacity-70 hidden sm:block"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
            color: color,
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        >
          <Icon className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSection;
