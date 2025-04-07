"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import About1 from "../assets/About1.jpg"
import About2 from "../assets/About2.jpg"
import About3 from "../assets/About3.jpg"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { title: "2001", subtitle: "Year Founded" },
  { title: "500+", subtitle: "Projects" },
  { title: "$120 Million", subtitle: "Total Project Value" },
]

const images = [
  {
    src: About1,
    title: "Our History",
    description: "Founded in 2001, we've been delivering excellence for over two decades.",
    stat: stats[0],
  },
  {
    src: About2,
    title: "Our Team",
    description: "A dedicated team of professionals committed to quality and innovation.",
    stat: stats[1],
  },
  {
    src: About3,
    title: "Our Vision",
    description: "Building a sustainable future through innovative construction solutions.",
    stat: stats[2],
  },
]

const About = () => {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if the screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkMobile()
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle mobile navigation
  const nextImage = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (isMobile) {
      // Mobile animation
      const ctx = gsap.context(() => {
        cardRefs.current.forEach((card, index) => {
          gsap.set(card, { 
            opacity: index === activeIndex ? 1 : 0,
            scale: index === activeIndex ? 1 : 0.9,
            display: index === activeIndex ? 'block' : 'none'
          })
        })

        gsap.to(cardRefs.current[activeIndex], {
          opacity: 1,
          scale: 1,
          display: 'block',
          duration: 0.5,
          ease: "power2.out",
        })
      }, sectionRef)

      return () => ctx.revert()
    } else {
      // Desktop animation
      const ctx = gsap.context(() => {
        // Create a timeline for the cards
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1.5,
            markers: false,
          },
        })

        // Hide all cards initially
        gsap.set(cardRefs.current, { opacity: 0, y: 100, scale: 0.9 })

        // Add each card to the timeline with spacing
        cardRefs.current.forEach((card, index) => {
          tl.to(
            card,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
            },
            index * 0.3
          )
        })
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [isMobile, activeIndex])

  return (
    <section ref={sectionRef} className="w-screen min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden">
      <div className="absolute top-10 md:top-20 left-0 md:left-10 text-4xl md:text-6xl font-bold text-white drop-shadow-lg z-10 p-4 md:p-0">
        About Us
      </div>
      
      {/* Mobile View */}
      {isMobile && (
        <div className="w-full h-screen relative overflow-hidden">
          {images.map((image, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`w-full h-full absolute top-0 left-0 ${activeIndex === idx ? 'block' : 'hidden'}`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={`About${idx + 1}`}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-blue-900 opacity-30 text-white px-6 py-5 flex flex-col items-center text-center space-y-2">
                <h4 className="text-3xl font-bold">{image.stat.title}</h4>
                <p className="text-sm uppercase tracking-wide">{image.stat.subtitle}</p>
              </div>
            </div>
          ))}
          
          {/* Mobile Navigation Controls */}
          <div className="absolute bottom-24 left-0 right-0 flex justify-center space-x-4 z-20">
            <button
              onClick={prevImage}
              className="bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full shadow-lg"
            >
              &#10094;
            </button>
            <div className="flex space-x-2">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    activeIndex === idx ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                  onClick={() => setActiveIndex(idx)}
                />
              ))}
            </div>
            <button
              onClick={nextImage}
              className="bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full shadow-lg"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
      
      {/* Desktop View */}
      {!isMobile && 
        images.map((image, idx) => (
          <div key={idx} ref={(el) => (cardRefs.current[idx] = el)} className="w-1/3 h-screen relative overflow-hidden">
            <img
              src={image.src || "/placeholder.svg"}
              alt={`About${idx + 1}`}
              className="w-full h-full object-cover border-r border-white filter grayscale hover:grayscale-0 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-blue-900 opacity-30 text-white px-6 py-5 flex flex-col items-center text-center space-y-2">
              <h4 className="text-3xl font-bold">{image.stat.title}</h4>
              <p className="text-sm uppercase tracking-wide">{image.stat.subtitle}</p>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default About