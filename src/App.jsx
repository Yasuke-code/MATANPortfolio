
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'

import AboutMe from './pages/AboutMe.jsx'
import Footer from './components/Footer/Footer.jsx'
import Projects from './pages/Projects.jsx'
import Home from './pages/Home.jsx'

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  )
}

export default App
