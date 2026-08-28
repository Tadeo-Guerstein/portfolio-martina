import { FiArrowUp } from 'react-icons/fi'
import { navLinks, profile, socials } from '../../data/siteData'
import './Footer.css'

/** Pie de página con navegación secundaria, redes y volver arriba. */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">{profile.name}</span>
          <span className="footer__role">{profile.role}</span>
        </div>

        <nav className="footer__nav" aria-label="Navegación del pie">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                title={social.label}
                target="_blank"
                rel="noreferrer"
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>
      </div>

      <div className="container footer__bottom">
        <small>
          © {new Date().getFullYear()} {profile.name}. Todas las imágenes están
          protegidas por derecho de autor.
        </small>
        <a href="#inicio" className="footer__top">
          Volver arriba <FiArrowUp />
        </a>
      </div>
    </footer>
  )
}
