"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.div
      className="bg-[#FAEEDF] mb-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="flex justify-center mt-12 py-28"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.video
          src="/vid.mp4"
          className="object-cover w-full max-w-7xl h-[400px] sm:h-[500px]"
          controls
          autoPlay
          loop
          muted
          transition={{ duration: 0.3 }}
        >
          Your browser does not support the video tag.
        </motion.video>
      </motion.div>
    </motion.div>
  );
};
