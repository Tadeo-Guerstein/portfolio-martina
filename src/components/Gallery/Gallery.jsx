import { useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules'
import { FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi'
import { gallery } from '../../data/siteData'
import Reveal from '../Reveal'
import Lightbox from './Lightbox'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Gallery.css'

const ALL = 'Todas'

/**
 * Carousel de fotos con filtros por categoría.
 * Al hacer click en una foto se abre el visor a pantalla completa.
 */
export default function Gallery() {
  const [filter, setFilter] = useState(ALL)
  const [openIndex, setOpenIndex] = useState(null)

  // Categorías únicas sacadas de los datos, para no repetirlas a mano
  const categories = useMemo(
    () => [ALL, ...new Set(gallery.map((photo) => photo.category))],
    [],
  )

  const photos = useMemo(
    () => (filter === ALL ? gallery : gallery.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="galeria" className="section section--alt gallery">
      <div className="container">
        <Reveal>
          <span className="section-kicker">Galería</span>
          <h2 className="section-title">Trabajos seleccionados</h2>
          <p className="section-lead">
            Un recorte de los últimos años. Arrastrá el carousel o usá las flechas del
            teclado; hacé click en una foto para verla en grande.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="gallery__filters" role="tablist" aria-label="Filtrar por categoría">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={filter === category}
                className={`gallery__filter ${filter === category ? 'is-active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* El carousel sale del contenedor para que las fotos lleguen al borde */}
      <Reveal delay={0.15} className="gallery__carousel">
        <Swiper
          modules={[Navigation, Pagination, Keyboard, A11y]}
          // `key` fuerza a Swiper a recalcularse cuando cambia el filtro
          key={filter}
          spaceBetween={20}
          slidesPerView={1.15}
          centeredSlides
          loop={photos.length > 3}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: '.gallery__arrow--prev',
            nextEl: '.gallery__arrow--next',
          }}
          breakpoints={{
            700: { slidesPerView: 1.8, spaceBetween: 24 },
            1100: { slidesPerView: 2.4, spaceBetween: 32 },
          }}
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={photo.id}>
              <button
                type="button"
                className="gallery__slide"
                onClick={() => setOpenIndex(index)}
              >
                <img src={photo.src} alt={photo.title} loading="lazy" />
                <span className="gallery__zoom" aria-hidden="true">
                  <FiMaximize2 />
                </span>
                <span className="gallery__meta">
                  <strong>{photo.title}</strong>
                  <em>
                    {photo.category} · {photo.year}
                  </em>
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="gallery__arrows">
          <button
            type="button"
            className="gallery__arrow gallery__arrow--prev"
            aria-label="Foto anterior"
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            type="button"
            className="gallery__arrow gallery__arrow--next"
            aria-label="Foto siguiente"
          >
            <FiChevronRight size={22} />
          </button>
        </div>
      </Reveal>

      <Lightbox
        photos={photos}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onChange={setOpenIndex}
      />
    </section>
  )
}
