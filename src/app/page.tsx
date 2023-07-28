import Image from 'next/image'
import Masthead from './components/masthead'
import About from './components/about'
import Projects from './components/projects'


export default function Home() {
  return (
    <>
      <Masthead />
      <About />
      <Projects />
    </>
  )
}
