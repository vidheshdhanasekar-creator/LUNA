import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import About from './pages/About'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

export default function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
