import styles from './Hero.module.css'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.blob} aria-hidden="true" />

      <span className={`${styles.tag} ${styles.tag1}`} aria-hidden="true">&lt;h1&gt;</span>
      <span className={`${styles.tag} ${styles.tag2}`} aria-hidden="true">&lt;p&gt;</span>
      <span className={`${styles.tag} ${styles.tag3}`} aria-hidden="true">&lt;/html&gt;</span>
      <span className={`${styles.tag} ${styles.tag4}`} aria-hidden="true">&lt;div&gt;</span>

      <div className={styles.content}>
        <p className={styles.greeting}>Hi, I&apos;m</p>
        <h1 className={styles.title}>
          <span className={styles.accent}>N</span>icholas Rodriguez,
        </h1>
        <h1 className={styles.title}>IT Professional.</h1>
        <p className={styles.subtitle}>
          IT Support Specialist / Recent Graduate / Navy OCS Training
        </p>

        <div className={styles.ctas}>
          <button className="btn btn-primary" onClick={() => scrollTo('experience')}>
            View My Work
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}
