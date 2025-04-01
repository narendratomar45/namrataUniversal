import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mapLocation =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.41809200449!2d77.33415957495878!3d28.686328181636732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb002858866f%3A0x74eb6484c3004ae3!2sNamrata%20Universal%20Branch%20office!5e1!3m2!1sen!2sin!4v1743242971569!5m2!1sen!2sin";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-12 px-6 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Contact <span className="text-blue-500">Us</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          If you have any queries or doubts regarding IT Services, you can
          contact us by filling out the details below. We'll respond as soon as
          possible.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-6 mb-12">
        {[
          {
            icon: <FiMail className="text-2xl" />,
            title: "Email Us",
            content: "namratauniversal@gmail.com",
            color: "bg-blue-100 border border-blue-200",
            textColor: "text-blue-600",
          },
          {
            icon: <FiPhone className="text-2xl" />,
            title: "Call Us",
            content: "+918506922777/+918506944777",
            color: "bg-green-100 border border-green-200",
            textColor: "text-green-600",
          },
          {
            icon: <FiMapPin className="text-2xl" />,
            title: "Visit Us",
            content:
              "Plot No-827 1st Floor Shalimar Garden Extension-1 Ghaziabad, UP",
            color: "bg-purple-100 border border-purple-200",
            textColor: "text-purple-600",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`${item.color} p-6 rounded-xl shadow-sm w-full sm:w-72`}
          >
            <div className="flex items-center mb-4">
              <div className={`p-3 ${item.textColor} rounded-full mr-4`}>
                {item.icon}
              </div>
              <h3 className={`text-xl font-semibold ${item.textColor}`}>
                {item.title}
              </h3>
            </div>
            <p className="text-gray-700">{item.content}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row w-full px-6 pb-16 gap-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex items-center justify-center"
        >
          <div className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2 text-gray-800">
                Get In Touch
              </h2>
              <p className="text-gray-600">We'd love to hear from you!</p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Your message has been sent successfully. We'll contact you
                  soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {Object.keys(formData).map((entry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <label
                      htmlFor={entry}
                      className="block text-sm font-medium capitalize text-gray-700 mb-1"
                    >
                      {entry}
                    </label>
                    {entry === "message" ? (
                      <textarea
                        name={entry}
                        value={formData[entry]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 mt-1 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition duration-300"
                        rows="5"
                        placeholder={`Enter your ${entry}`}
                        required
                      />
                    ) : (
                      <input
                        type={entry === "email" ? "email" : "text"}
                        name={entry}
                        value={formData[entry]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 mt-1 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition duration-300"
                        placeholder={`Enter your ${entry}`}
                        required
                      />
                    )}
                  </motion.div>
                ))}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white font-semibold shadow-sm transition duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            )}

            <div className="mt-6 text-center text-gray-500 text-sm">
              <p>Or reach us directly at: namratauniversal@gmail.com</p>
            </div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200"
        >
          <iframe
            src={mapLocation}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            frameBorder="0"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
            className="rounded-xl"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
