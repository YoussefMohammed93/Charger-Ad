"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);

  return (
    <motion.div
      className="bg-[#FAEEDF] mb-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div className="flex justify-center mt-12 py-28">
        <video
          ref={videoRef}
          src="/vid.mp4"
          className="object-cover w-full max-w-7xl h-[400px] sm:h-[500px]"
          autoPlay
          loop
          muted
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </motion.div>
  );
};
