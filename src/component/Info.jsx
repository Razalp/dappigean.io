import React from 'react';
import { motion } from 'framer-motion';
import BuildingImage from '../assets/Building.png';

const timelineItems = [
  { year: '2001', title: 'Founded', description: 'B&B Concrete was established in New York' },
  { year: '2005', title: 'Expansion', description: 'Expanded operations to New Jersey and Connecticut' },
  { year: '2015', title: 'Innovation', description: 'Implemented BIM and VDC technologies' },
  { year: '2020', title: 'Industry Leader', description: 'Awarded for excellence in concrete solutions' },
  { year: '2025', title: 'Present Day', description: 'Continuing our legacy of quality and precision' },
];

const Info = () => {
  return (
    <div className="relative flex flex-col lg:flex-row bg-blue-900 text-white h-screen font-sans overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-pink-500 via-purple-400 to-blue-500 opacity-60 rounded-full blur-[160px] z-0 pointer-events-none" />
      <div className="absolute top-[30%] left-[70%] w-[400px] h-[400px] bg-gradient-to-br from-blue-500 to-purple-400 opacity-30 rounded-full blur-[120px] z-0 pointer-events-none" />

      {/* Left Side */}
      <motion.div
        className="w-full lg:w-1/2 relative flex flex-col items-center justify-start p-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-center z-10 mb-20 mt-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            B&B Concrete
          </h1>
          <p className="text-xl font-light mt-3 opacity-90 italic">Build Better</p>
        </div>

        <motion.img
          src={BuildingImage}
          alt="Building"
          className="w-full max-w-[330px] object-contain absolute bottom-0 left-1/2 transform -translate-x-1/2 drop-shadow-2xl z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 relative flex flex-col justify-center px-10 py-12 z-10">
        <motion.p
          className="text-lg leading-relaxed max-w-xl font-light drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="font-semibold px-2 py-1 rounded">B&B Concrete</span> delivers premium, durable commercial concrete solutions across New York, Northern New Jersey, Connecticut, and the Hudson Valley. As a union contractor, we leverage BIM and VDC technologies, and implement lean practices to ensure precision, efficiency, and safety.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed max-w-xl font-light drop-shadow-md mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Specializing in concrete superstructures, precision foundations, and comprehensive site work, we serve commercial, industrial, and institutional projects. With over two decades of expertise, B&B Concrete is synonymous with integrity, quality, and a customer-first approach.
        </motion.p>
      </div>

      {/* Timeline Cards with Centered Scroll Animation */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-6xl flex justify-center overflow-x-auto py-4 bg-gradient-to-t from-blue-900/90 to-transparent"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="flex space-x-4 px-4">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-[140px] h-[80px] bg-white rounded-xl overflow-hidden cursor-pointer shadow-xl group flex"
              whileHover={{
                width: 240,
                height: 100,
                transition: { duration: 0.3 },
              }}
              onClick={() => console.log(`Navigate to ${item.year} details`)}
            >
              {/* Left Image Section */}
              <div className="w-[60px] h-full overflow-hidden relative group-hover:w-[120px] transition-all duration-300">
                <motion.img
                  src={BuildingImage}
                  alt="Timeline"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  initial={{ opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-blue-900/70 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-white text-sm font-medium">Navigate</span>
                </motion.div>
              </div>

              {/* Right Text Content */}
              <div className="flex-1 p-2 flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100">
                <h4 className="text-lg font-bold text-blue-900">{item.year}</h4>
                <motion.p
                  className="text-xs text-blue-700"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
