import { motion } from "framer-motion";

const Contact = () => {
  const container = (delay) => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: delay },
    },
  });

  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 lg:px-20">
      <motion.h2
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className="text-4xl font-semibold text-center mb-6"
      >
        Contact Me
      </motion.h2>
      <motion.div
        variants={container(0.2)}
        initial="hidden"
        animate="visible"
        className="bg-gradient-to-r from-pink-500 to-green-500 text-white py-3 px-6 rounded-lg hover:opacity-90"
      >
        workforyourlife9shalini@gmail.com
      </motion.div>
    </div>
  );
};

export default Contact;
