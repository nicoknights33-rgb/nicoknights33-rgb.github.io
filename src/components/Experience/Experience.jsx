import { useRef } from 'react'
import { experience } from '../../data/content'
import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './Experience.module.css'

export default function Experience() {
  const ref = useRef(null)
  useFadeIn(ref)

  return (
    <section className="section" id="experience">
      <div ref={ref} className="fade-in sectionInner">
        <h2 className="section-header">Professional Experience</h2>

        <div className={styles.cards}>
          {experience.map((job) => (
            <article key={job.role} className={`card ${styles.card}`}>
              <h3 className={styles.role}>{job.role}</h3>
              <p className={styles.company}>{job.company}</p>
              {job.location && <p className={styles.meta}>{job.location}</p>}
              <p className={styles.meta}>{job.duration}</p>
              <ul className={styles.bullets}>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
