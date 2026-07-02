import { useState, useEffect } from 'react'
import { navLinks } from '../../data/content'
import styles from './Navbar.module.css'

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar({ activeId }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (id) => {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <>
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        <div className={styles.brand}>
          <span className={styles.initial}>N</span>
          <span className={styles.name}>Nicholas Rodriguez</span>
          <span className={styles.subtitle}>IT Professional</span>
        </div>

        <ul className={styles.links}>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`${styles.link} ${activeId === id ? styles.linkActive : ''}`}
                onClick={() => handleNavClick(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
