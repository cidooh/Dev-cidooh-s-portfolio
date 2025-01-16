import React from 'react'
import Hero from "./Home/Hero/Hero"
import About from './Home/About/About'
import Projects from './Home/Projects/Projects'
import Skills from './Home/Skills/Skills'

const Home = () => {
  return (
    <div className="">
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        </div>
  )
}

export default Home