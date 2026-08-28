import { about, profile } from '../../data/siteData'
import Reveal from '../Reveal'
import './About.css'

/** Sección "Sobre mí": retrato, biografía y números destacados. */
export default function About() {
  return (
    <section id="sobre-mi" className="section about">
      <div className="container about__grid">
        <Reveal className="about__media">
          <img
            src={profile.portraitImage}
            alt={`Retrato de ${profile.name}`}
            loading="lazy"
          />
          <span className="about__caption">
            {profile.name} · {profile.location}
          </span>
        </Reveal>

        <div className="about__text">
          <Reveal>
            <span className="section-kicker">{about.title}</span>
            <h2 className="section-title">
              La foto empieza cuando la persona se relaja
            </h2>
          </Reveal>

          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={0.08 * (index + 1)}>
              <p className="about__paragraph">{paragraph}</p>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <ul className="about__stats">
              {about.stats.map((stat) => (
                <li key={stat.label} className="about__stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
