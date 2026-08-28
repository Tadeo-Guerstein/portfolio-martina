import { useState } from 'react'
import { contact, contactIcons, socials } from '../../data/siteData'
import Reveal from '../Reveal'
import './Contact.css'

const { FiMail, FiPhone, FiMapPin } = contactIcons

const EMPTY_FORM = { name: '', email: '', message: '' }

/**
 * Sección de contacto: datos directos, redes sociales y formulario.
 *
 * El formulario no tiene backend: arma un `mailto:` con los datos
 * y lo abre en el cliente de correo. Si más adelante hay servidor,
 * solo hay que reemplazar el cuerpo de `handleSubmit`.
 */
export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Consulta de ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nResponder a: ${form.email}`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`

    setSent(true)
    setForm(EMPTY_FORM)
  }

  return (
    <section id="contacto" className="section contact">
      <div className="container contact__grid">
        <div>
          <Reveal>
            <span className="section-kicker">Contacto</span>
            <h2 className="section-title">{contact.title}</h2>
            <p className="section-lead">{contact.intro}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="contact__details">
              <li>
                <FiMail />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <FiPhone />
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              </li>
              <li>
                <FiMapPin />
                <span>{contact.city}</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="contact__socials">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="contact__social"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="contact__social-icon">
                      <Icon size={20} />
                    </span>
                    <span className="contact__social-text">
                      <strong>{social.label}</strong>
                      <em>{social.handle}</em>
                    </span>
                  </a>
                )
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="contact__field">
              <span>Nombre</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Cómo te llamás"
                required
              />
            </label>

            <label className="contact__field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
              />
            </label>

            <label className="contact__field">
              <span>Mensaje</span>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Fecha, lugar y qué tipo de sesión te interesa"
                required
              />
            </label>

            <button type="submit" className="btn btn--primary">
              Enviar mensaje
            </button>

            {sent && (
              <p className="contact__feedback" role="status">
                Se abrió tu cliente de correo con el mensaje listo para enviar.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
