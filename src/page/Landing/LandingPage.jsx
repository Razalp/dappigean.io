"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Home from "../../component/Home"
import About from "../../component/About"
import Carousel from "../../component/Carousel"
import Info from "../../component/Info"
import Services from "../../component/Services"
import Space from "../../component/Space"
import Serviceses from "../../component/Serviceses"

gsap.registerPlugin(ScrollTrigger)

const LandingPage = () => {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const sectionRefs = useRef([])

  useEffect(() => {
    // Pin the Home section
    ScrollTrigger.create({
      trigger: homeRef.current,
      start: "top top",
      end: "+=100%", // Pin for 100% of the viewport height
      pin: true,
      pinSpacing: false,
    })

    // Special handling for About section - give it more time
    ScrollTrigger.create({
      trigger: aboutRef.current,
      start: "top top",
      end: "+=200%", // Pin for 200% of the viewport height to give more time
      pin: true,
      pinSpacing: true,
      markers: false,
    })

    // Animate other sections (excluding Home and About)
    sectionRefs.current.forEach((section, index) => {
      if (index === 0 || index === 1) return // Skip Home and About sections
      gsap.fromTo(
        section,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <div
        ref={(el) => {
          homeRef.current = el
          sectionRefs.current[0] = el
        }}
      >
        <Home />
      </div>
      <div
        ref={(el) => {
          aboutRef.current = el
          sectionRefs.current[1] = el
        }}
      >
        <About />
      </div>
      <div ref={(el) => (sectionRefs.current[2] = el)}>
        <Carousel />
      </div>
      <div ref={(el) => (sectionRefs.current[3] = el)}>
        <Info />
      </div>
      <div ref={(el) => (sectionRefs.current[4] = el)}>
        <Services />
      </div>
      <div ref={(el) => (sectionRefs.current[4] = el)}>
        <Serviceses />
      </div>
      <div ref={(el) => (sectionRefs.current[5] = el)}>
        <Space />
      </div>
    </div>
  )
}

export default LandingPage

