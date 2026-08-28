import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks, profile } from '../../data/siteData'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import './Navbar.css'

const SECTION_IDS = navLinks.map((link) => link.id)

/**
 * Barra de navegación fija.
 * - Se vuelve opaca al hacer scroll.
 * - Resalta la sección visible (useScrollSpy).
 * - En mobile se abre como menú de pantalla completa.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Evita que el fondo scrollee mientras el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#inicio" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          {profile.name}
        </a>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar__link ${activeId === link.id ? 'is-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  )
}
