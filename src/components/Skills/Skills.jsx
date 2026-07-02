import { useRef } from 'react'
import { technicalSkills, softSkills } from '../../data/content'
import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './Skills.module.css'

function SkillGroup({ title, skills }) {
  return (
    <div className={styles.group}>
      <h3 className={styles.groupTitle}>{title}</h3>
      <div className={styles.pills}>
        {skills.map((skill) => (
          <span key={skill} className={styles.pill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  useFadeIn(ref)

  return (
    <section className="section" id="skills">
      <div ref={ref} className="fade-in sectionInner">
        <h2 className="section-header">Skills</h2>

        <div className={styles.groups}>
          <SkillGroup title="Technical Skills" skills={technicalSkills} />
          <SkillGroup title="Soft Skills / Other" skills={softSkills} />
        </div>
      </div>
    </section>
  )
}
