import { services } from '../../data/siteData'
import Reveal from '../Reveal'
import './Services.css'

/** Grilla de servicios con ícono, descripción y precio orientativo. */
export default function Services() {
  return (
    <section id="servicios" className="section services">
      <div className="container">
        <Reveal>
          <span className="section-kicker">Servicios</span>
          <h2 className="section-title">Cómo podemos trabajar</h2>
          <p className="section-lead">
            Todas las sesiones incluyen la edición completa, la entrega en galería
            online y una reunión previa para definir el tono de las fotos. Escribime
            contando lo que necesitás y armamos algo a tu medida.
          </p>
        </Reveal>

        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={0.08 * index}>
                <article className="services__card">
                  <span className="services__icon">
                    <Icon size={22} />
                  </span>
                  <h3 className="services__title">{service.title}</h3>
                  <p className="services__description">{service.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
