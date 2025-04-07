import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/icons/Image1.png";
import Image2 from "../assets/icons/Image2.webp";

// Carousel images
const images = [Image, Image2, Image, Image2];

// Floating bubble colors
const bubbleColors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#A66DD4"];

// Bubble animation variant
const bubbleFloat = {
  animate: {
    y: [0, -30, 0],
    x: [0, 10, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Carousel = () => {
  return (
    <div className="relative w-full overflow-hidden py-6 bg-transparent">
      {/* Background Bubbles */}
      {Array.from({ length: 10 }).map((_, idx) => (
        <motion.div
          key={idx}
          variants={bubbleFloat}
          animate="animate"
          className="absolute rounded-full opacity-30 blur-sm"
          style={{
            backgroundColor: bubbleColors[idx % bubbleColors.length],
            width: `${20 + Math.random() * 30}px`,
            height: `${20 + Math.random() * 30}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            zIndex: 1,
          }}
        />
      ))}

      {/* Image Carousel */}
      <motion.div
        className="flex gap-12 w-max z-10 relative"
        animate={{ x: ["100%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((img, idx) => (
          <motion.div
            key={idx}
            className="w-32 h-16 flex items-center justify-center object-cover"
          >
            <img
              src={img}
              alt={`carousel-${idx}`}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
