import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-black text-white text-center px-6"
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-semibold mb-4"
        >
          GLOXE Interiors
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-lg md:text-2xl text-gray-300"
        >
          Elevate your spaces with luxury.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
