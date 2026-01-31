'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])
}

export function useTextReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.text-reveal')
    
    reveals.forEach((element) => {
      const content = element.querySelector('.text-reveal-content')
      if (!content) return

      gsap.fromTo(content, 
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            once: true,
          },
        }
      )
    })
  }, [])
}

export function useFadeInUp() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-up')
    
    elements.forEach((element) => {
      gsap.fromTo(element,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        }
      )
    })
  }, [])
}

export function useParallax() {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.parallax')
    
    parallaxElements.forEach((element) => {
      gsap.fromTo(element,
        {
          yPercent: -20,
        },
        {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      )
    })
  }, [])
}