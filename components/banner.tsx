"use client";

import { motion } from "framer-motion";

export const Banner = () => {
  return (
    <motion.section
      className="bg-cover bg-center text-white p-8 sm:p-12 md:p-16 mb-20 text-center"
      style={{ backgroundImage: "url('/image-1.png')" }}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.p
        className="text-primary text-3xl md:text-5xl lg:text-7xl font-black p-2 rounded-lg inline-block"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          lineHeight: 1.75,
        }}
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeIn" }}
      >
        توصيل مجاني + تخفيض <span className="text-[#B88E2F]">50%</span> الى غاية
        منتصف الليل
      </motion.p>
    </motion.section>
  );
};
