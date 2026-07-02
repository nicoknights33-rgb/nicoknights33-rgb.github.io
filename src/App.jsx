import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useActiveSection } from './hooks/useActiveSection'
import { navLinks } from './data/content'
import styles from './App.module.css'

const sectionIds = navLinks.map((l) => l.id)

export default function App() {
  const activeId = useActiveSection(sectionIds)

  return (
    <div className={styles.app}>
      <Navbar activeId={activeId} />
      <main className={styles.main}>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
