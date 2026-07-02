import { useRef } from 'react'
import { about } from '../../data/content'
import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './About.module.css'

export default function About() {
  const ref = useRef(null)
  useFadeIn(ref)

  return (
    <section className="section" id="about">
      <div ref={ref} className="fade-in sectionInner">
        <h2 className="section-header">About Me</h2>

        <div className={styles.grid}>
          <div className={styles.photoCol}>
            {/* TODO: Replace with actual profile photo — swap div for <img src="..." alt="Nicholas Rodriguez" /> */}
            <div className={styles.photoPlaceholder} aria-label="Profile photo placeholder">
              NR
            </div>
          </div>

          <div className={styles.textCol}>
            <p className={styles.bio}>{about.bio}</p>

            <div className={styles.stats}>
              {about.stats.map(({ icon, label }) => (
                <span key={label} className={styles.stat}>
                  <span aria-hidden="true">{icon}</span> {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
