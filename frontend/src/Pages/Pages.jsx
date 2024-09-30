import React from 'react'
import AppNavbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import Skills from '../Components/Skills/Skills'
import Resume from '../Components/Resume/Resume'
import Service from '../Components/Service/Service'
import Works from '../Components/Works/Works'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import Freelance from '../Components/Freelance/Freelance'

const Pages = () => {
  return (
    <div className='overflow-hidden'>
      <AppNavbar/>
      <Home/>
      <About/>
      <Skills/>
      <Resume/>
      <Service/>
      <Works/>
      <Freelance/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Pages
