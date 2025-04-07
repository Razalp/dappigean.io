import React from 'react';
import { motion } from 'framer-motion';
import HomeImage from '../assets/HomeImage.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: { scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } },
};

const Home = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden text-white font-sans home-section">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HomeImage})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-950/80 to-blue-90/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col h-full px-6 py-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex justify-between items-center mb-12" variants={textVariants}>
          <h1 className="text-2xl font-extrabold tracking-wider text-white drop-shadow-md">
            B&B CONCRETE{' '}
            <motion.span
              className="text-xs bg-gradient-to-r from-red-600 to-red-700 text-white px-2 py-1 rounded-full ml-2 shadow-md"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              BUILD WITH US
            </motion.span>
          </h1>
          <motion.button
            className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-2 rounded-lg text-sm font-semibold shadow-lg"
            variants={buttonVariants}
            whileHover="hover"
          >
            CONTACT US
          </motion.button>
        </motion.div>

        <motion.div className="flex flex-1 items-center justify-start" variants={containerVariants}>
          <div className="max-w-3xl">
            <motion.h2
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8 tracking-tight text-white drop-shadow-lg"
              variants={textVariants}
            >
              Building Strength,<br />
              <motion.span
                className="text-red-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                One Foundation
              </motion.span>{' '}
              at a Time
            </motion.h2>
            <motion.div className="flex flex-col sm:flex-row gap-6" variants={containerVariants}>
              <motion.button
                className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 rounded-lg font-semibold text-white shadow-xl"
                variants={buttonVariants}
                whileHover="hover"
              >
                GET A FREE CONSULTATION
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold text-white shadow-md"
                variants={buttonVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transition: { duration: 0.3 },
                }}
              >
                EXPLORE OUR PROJECTS
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;