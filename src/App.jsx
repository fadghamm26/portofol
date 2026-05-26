import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}
