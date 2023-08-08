'use client'
import Image from 'next/image'
import { useRef } from 'react'
import Masthead from './components/masthead'
import About from './components/about'
import Projects from './components/projects'
import Experiences from './components/experiences'
import Contact from './components/contact'
import { ScrollToTopButton } from './components/ui/scrollToTop'



export default function Home() {
  const containerRef = useRef(null)

  return (
    <div ref={containerRef}>
      <ScrollToTopButton containerRef={containerRef} />
      <Masthead />
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </div>
  )
}
