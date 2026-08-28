import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { profile } from '../../data/siteData'
import './Hero.css'

/** Portada del sitio: foto a pantalla completa + nombre y bajada. */
export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__media">
        <img src={profile.heroImage} alt="" aria-hidden="true" />
      </div>

      <div className="hero__content container">
        <motion.p
          className="hero__role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {profile.role} · {profile.location}
        </motion.p>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          {profile.tagline}
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          {profile.heroSubtitle}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a href="#galeria" className="btn btn--primary">
            Ver galería
          </a>
          <a href="#contacto" className="btn btn--ghost">
            Reservar sesión
          </a>
        </motion.div>
      </div>

      <a href="#sobre-mi" className="hero__scroll" aria-label="Ir a la siguiente sección">
        <span>Scroll</span>
        <FiArrowDown />
      </a>
    </section>
  )
}
