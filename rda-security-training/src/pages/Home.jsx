import React from 'react'
import AboutMe from '../components/AboutMe'
import BulletPoints from '../components/BulletPoints'
import Carousel from '../components/Carousel'
import CourseBreakdown from '../components/CourseBreakdown'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import Privacy from '../pages/Privacy'
import Contact from '../components/Contact'
import Jotform from './Waiver'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sub from '../components/Sub'
import DoubleButton from '../components/DoubleButton'
import MailMunch from '../components/MailMunch'

function Home() {
  return (
    <>
      <Logo />
      <Sub />
      <Carousel />
      <BulletPoints />
      <CourseBreakdown />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
