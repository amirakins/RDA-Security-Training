import './App.css'
import AboutMe from './components/AboutMe'
import BulletPoints from './components/BulletPoints'
import Carousel from './components/Carousel'
import CourseBreakdown from './components/CourseBreakdown'
import Logo from './components/Logo'
import Footer from './components/Footer'
import Privacy from './pages/Privacy'
import Contact from './components/Contact'
import Waiver from './pages/Waiver'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Payment from './pages/Payment'

function App() {

  return (
    <>
    <HashRouter>
      <Routes> 
        <Route index element={<Home />}  />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/waiver" element={<Waiver />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </HashRouter>
      
    </>
  )
}

export default App
