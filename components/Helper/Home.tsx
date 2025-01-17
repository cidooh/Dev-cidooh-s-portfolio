import React from 'react'
import Hero from "./Home/Hero/Hero"
import About from './Home/About/About'
import Projects from './Home/Projects/Projects'
import Skills from './Home/Skills/Skills'
import Contact from './Home/Contact/Contact'
import Footer from './Home/Footer/Footer'

const Home = () => {
  return (
    <div className="">
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
        </div>
  )
}

export default Home