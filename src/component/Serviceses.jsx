// AnimatedTestimonials.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import About1 from '../assets/About2.jpg';

const testimonials = [
  {
    quote: "I was impressed by the food — every dish is bursting with flavor! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive, going the extra mile. I'll definitely be back for more!",
    name: "Tamar Mendelson",
    designation: "Restaurant Critic",
    src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond to ensure a fantastic visit. I'll definitely keep returning for more exceptional dining experience.",
    name: "Joe Charlescraft",
    designation: "Frequent Visitor",
    src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
  {
    quote: "Shining Yam is a hidden gem! From the moment I walked in, I knew I was in for a treat. The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
    name: "Martina Edelweist",
    designation: "Satisfied Customer",
    src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
];

const Serviceses = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const imageContainerRef = useRef(null);
  const nameRef = useRef(null);
  const designationRef = useRef(null);
  const quoteRef = useRef(null);
  const autoplayRef = useRef(null);

  const calculateGap = (width) => {
    const minWidth = 1024;
    const maxWidth = 1456;
    const minGap = 60;
    const maxGap = 86;

    if (width <= minWidth) return minGap;
    if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
    return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
  };

  const updateTestimonial = (direction) => {
    const newIndex = (activeIndex + direction + testimonials.length) % testimonials.length;
    setActiveIndex(newIndex);

    const containerWidth = imageContainerRef.current.offsetWidth;
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;

    testimonials.forEach((_, index) => {
      const img = imageContainerRef.current.children[index];
      const offset = (index - newIndex + testimonials.length) % testimonials.length;
      const zIndex = testimonials.length - Math.abs(offset);
      const opacity = index === newIndex ? 1 : 1;
      const scale = index === newIndex ? 1 : 0.85;

      let translateX, translateY, rotateY;
      if (offset === 0) {
        translateX = '0%';
        translateY = '0%';
        rotateY = 0;
      } else if (offset === 1 || offset === -2) {
        translateX = '20%';
        translateY = `-${maxStickUp / img.offsetHeight * 100}%`;
        rotateY = -15;
      } else {
        translateX = '-20%';
        translateY = `-${maxStickUp / img.offsetHeight * 100}%`;
        rotateY = 15;
      }

      gsap.to(img, {
        zIndex,
        opacity,
        scale,
        x: translateX,
        y: translateY,
        rotateY,
        duration: 0.8,
        ease: "power3.out"
      });
    });

    gsap.to([nameRef.current, designationRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        gsap.to([nameRef.current, designationRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });

    gsap.to(quoteRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        gsap.to(quoteRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            gsap.from('.word', {
              opacity: 0,
              y: 10,
              stagger: 0.02,
              duration: 0.2,
              ease: "power2.out"
            });
          }
        });
      }
    });
  };

  useEffect(() => {
    updateTestimonial(0);
    autoplayRef.current = setInterval(() => updateTestimonial(1), 5000);

    const handleResize = () => updateTestimonial(0);
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(autoplayRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleInteraction = (direction) => {
    clearInterval(autoplayRef.current);
    updateTestimonial(direction);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="w-full max-w-7xl p-8">
        <div className="grid gap-20 md:grid-cols-2">
          <div ref={imageContainerRef} className="relative w-full h-96 perspective-1000">
            {testimonials.map((testimonial, index) => (
              <img
                key={index}
                src={testimonial.src}
                alt={testimonial.name}
                className="absolute w-full h-full object-cover rounded-3xl shadow-lg"
              />
            ))}
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 ref={nameRef} className="text-2xl font-bold text-black mb-1">
                {testimonials[activeIndex].name}
              </h3>
              <p ref={designationRef} className="text-sm text-gray-500 mb-8">
                {testimonials[activeIndex].designation}
              </p>
              <p ref={quoteRef} className="text-lg text-gray-600 leading-relaxed">
                {testimonials[activeIndex].quote.split(' ').map((word, i) => (
                  <span key={i} className="word inline-block mr-1">{word}</span>
                ))}
              </p>
            </div>
            <div className="flex gap-4 pt-12 md:pt-0">
              <button
                onClick={() => handleInteraction(-1)}
                className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <svg className="w-5 h-5 fill-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button
                onClick={() => handleInteraction(1)}
                className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <svg className="w-5 h-5 fill-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serviceses;