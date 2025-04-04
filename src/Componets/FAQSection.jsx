import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "What is system software?",
    answer:
      "System software is a type of computer program designed to run a computer's hardware and application programs.",
  },
  {
    question: "What is application software?",
    answer:
      "Application software is designed to perform specific tasks for users, such as word processing, web browsing, or gaming.",
  },
  {
    question: "What is middleware software?",
    answer:
      "Middleware software connects different applications, enabling communication between them.",
  },
  {
    question: "How do I choose the right software?",
    answer:
      "Consider your specific needs, budget, and technical requirements. We can help you evaluate options.",
  },
  {
    question: "What support do you offer?",
    answer:
      "We provide 24/7 technical support, regular updates, and comprehensive documentation for all our solutions.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto py-12 px-4 bg-gray-100" data-aos="fade-up">
      <div className="text-center mb-12">
        <h2
          style={{ fontFamily: "Fredoka, sans-serif" }}
          className="text-5xl max-sm:text-3xl font-bold text-gray-800 mb-2"
          data-aos="fade-down"
        >
          Frequently <span className="text-blue-600">Asked Questions</span>
        </h2>
        <p className="text-lg text-gray-600" data-aos="fade-up">
          Find answers to common questions about our software solutions
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-colors"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <button
              className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-4"
              >
                <ChevronDown
                  className={`w-5 h-5 ${
                    openIndex === index ? "text-blue-500" : "text-gray-500"
                  }`}
                />
              </motion.div>
            </button>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: openIndex === index ? 1 : 0,
                height: openIndex === index ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-2" data-aos="fade-down">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center" data-aos="fade-up">
        <p className="text-gray-600">
          Still have questions?{" "}
          <a
            href="#contact"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Contact our team
          </a>
        </p>
      </div>
    </div>
  );
};

export default FAQSection;
