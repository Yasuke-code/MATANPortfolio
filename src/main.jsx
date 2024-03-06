import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './pages/Hero.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Footer from './components/Footer/Footer.jsx'
import Projects from './pages/Projects.jsx'
import Home from './pages/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <AboutMe />
    <Projects />
    <Footer />
  </React.StrictMode>,
)
