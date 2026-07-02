import { useRef } from 'react'
import { education } from '../../data/content'
import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './Education.module.css'

export default function Education() {
  const ref = useRef(null)
  useFadeIn(ref)

  return (
    <section className="section" id="education">
      <div ref={ref} className="fade-in sectionInner">
        <h2 className="section-header">Education</h2>

        <article className={`card ${styles.card}`}>
          <h3 className={styles.school}>{education.school}</h3>
          <p className={styles.degree}>{education.degree}</p>
          <div className={styles.details}>
            <span>Graduated: {education.graduated}</span>
            <span>GPA: {education.gpa}</span>
          </div>
        </article>
      </div>
    </section>
  )
}
