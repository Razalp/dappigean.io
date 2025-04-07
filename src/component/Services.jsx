import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import About1 from '../assets/About2.jpg';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: 'Concrete Foundations',
      description:
        'R&R Concrete provides design and high-quality solutions, focusing on ensuring structural stability for commercial, industrial, and residential buildings.',
      imageUrl: About1,
    },
    {
      id: 2,
      title: 'Superstructures & Vertical Construction',
      description:
        'Expert design and implementation of advanced vertical building systems with quality materials and innovative techniques.',
      imageUrl: About1,
    },
    {
      id: 3,
      title: 'Elevated Slab Decks & Structural Concrete',
      description:
        'Specialized in creating durable, high-performance elevated concrete structures with precision engineering.',
      imageUrl: About1,
    },
    {
      id: 4,
      title: 'Seismic Retrofitting',
      description:
        'Modernizing existing structures to meet current seismic safety standards and improve structural integrity.',
      imageUrl: About1,
    },
  ];

  const visibleServices = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - visibleServices : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - visibleServices ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="h-screen py-16 bg-gray-50 flex items-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-blue-900">Services</h2>
            <div className="mt-1 w-20 h-1 bg-blue-500"></div>
            <h3 className="mt-2 text-gray-600">Foundations & Structural Concrete</h3>
          </div>
          <a
            href="/services"
            className="text-blue-600 hover:text-blue-800 flex items-center group"
          >
            SEE ALL SERVICES
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {services
            .slice(currentIndex, currentIndex + visibleServices)
            .map((service) => (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-lg transition-all duration-500 group"
              >
                {/* Image with Overlay */}
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-96 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <div className="absolute top-4 left-4 bg-white/90 w-12 h-12 rounded-full flex items-center justify-center font-bold text-3xl z-20 transition-opacity duration-300 group-hover:opacity-0">
                    {service.id}
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2 transition-opacity duration-300 group-hover:opacity-0">
                    {service.title}
                  </h3>
                  <p className="text-white text-sm transition-opacity duration-300 group-hover:opacity-100">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="mt-6 flex justify-between items-center"
>
  {/* Left side: Pagination dots */}
  <div className="flex space-x-2">
    {Array.from({ length: services.length }).map((_, index) => (
      <motion.div
        key={index}
        className={`h-2 w-2 rounded-full ${
          index >= currentIndex && index < currentIndex + visibleServices
            ? 'bg-blue-600'
            : 'bg-gray-300'
        }`}
      />
    ))}
  </div>

  {/* Right side: Navigation buttons */}
  <div className="flex space-x-2">
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={handlePrev}
      className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
    >
      <ChevronLeft className="text-gray-600 w-4 h-4" />
    </motion.button>
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={handleNext}
      className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center hover:bg-blue-800"
    >
      <ChevronRight className="text-white w-4 h-4" />
    </motion.button>
  </div>
</motion.div>

      </div>
    </div>
  );
};

export default Services;