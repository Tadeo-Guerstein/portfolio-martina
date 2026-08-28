import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './Lightbox.css'

/**
 * Visor de foto a pantalla completa.
 *
 * @param {object[]} photos    lista completa que se está mirando
 * @param {number|null} index  índice de la foto abierta (null = cerrado)
 * @param {Function} onClose   cerrar el visor
 * @param {Function} onChange  moverse a otro índice
 */
export default function Lightbox({ photos, index, onClose, onChange }) {
  const isOpen = index !== null
  const photo = isOpen ? photos[index] : null

  // Navegación con teclado: Escape cierra, flechas cambian de foto
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onChange((index + 1) % photos.length)
      if (event.key === 'ArrowLeft') onChange((index - 1 + photos.length) % photos.length)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, index, photos.length, onClose, onChange])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={photo.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <button type="button" className="lightbox__close" aria-label="Cerrar">
            <FiX size={26} />
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Foto anterior"
            onClick={(event) => {
              event.stopPropagation()
              onChange((index - 1 + photos.length) % photos.length)
            }}
          >
            <FiChevronLeft size={30} />
          </button>

          {/* stopPropagation para que el click sobre la foto no cierre el visor */}
          <motion.figure
            className="lightbox__figure"
            key={photo.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
          >
            <img src={photo.src} alt={photo.title} />
            <figcaption>
              <strong>{photo.title}</strong>
              <span>
                {photo.category} · {photo.year} · {index + 1}/{photos.length}
              </span>
            </figcaption>
          </motion.figure>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label="Foto siguiente"
            onClick={(event) => {
              event.stopPropagation()
              onChange((index + 1) % photos.length)
            }}
          >
            <FiChevronRight size={30} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
