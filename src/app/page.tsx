import Image from 'next/image'
import Masthead from './components/masthead'
import About from './components/about'
import Projects from './components/projects'
import Experiences from './components/experiences'



export default function Home() {
  return (
    <>
      <Masthead />
      <About />
      <Projects />
      <Experiences />
    </>
  )
}
