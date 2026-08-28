import { motion } from 'framer-motion'

/**
 * Envoltorio de animación reutilizable: el contenido aparece
 * suavemente la primera vez que entra en pantalla.
 *
 * Uso: <Reveal delay={0.1}><h2>Hola</h2></Reveal>
 */
export default function Reveal({ children, delay = 0, y = 24, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
