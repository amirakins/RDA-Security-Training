import React from "react";
import AboutMe from "../components/AboutMe";
import BulletPoints from "../components/BulletPoints";
import Carousel from "../components/Carousel";
import CourseBreakdown from "../components/CourseBreakdown";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Privacy from "../pages/Privacy";
import Contact from "../components/Contact";
import Jotform from "./Waiver";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sub from "../components/Sub";
import DoubleButton from "../components/DoubleButton";
import BookClass from "../components/BookClass";
import CourseCard from "../components/CourseCard";
import Glock from "../assets/glock.jpg";
import Ar15 from "../assets/ar15.jpg"
import EBook from "../components/EBook";
import PayPal from "../components/PayPal";

function Home() {
  return (
    <>
      <Logo />
      <Carousel />
      <EBook />
      <BookClass />
      <BulletPoints />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
