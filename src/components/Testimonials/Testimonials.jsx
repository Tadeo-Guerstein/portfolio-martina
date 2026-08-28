import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, A11y } from 'swiper/modules'
import { FiMessageSquare } from 'react-icons/fi'
import { testimonials } from '../../data/siteData'
import Reveal from '../Reveal'

import 'swiper/css'
import 'swiper/css/pagination'
import './Testimonials.css'

/** Carousel automático con lo que dijeron clientes y medios. */
export default function Testimonials() {
  return (
    <section className="section section--alt testimonials">
      <div className="container">
        <Reveal>
          <span className="section-kicker">Testimonios</span>
          <h2 className="section-title">Lo que dicen</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Swiper
            modules={[Autoplay, Pagination, A11y]}
            spaceBetween={32}
            slidesPerView={1}
            loop
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="testimonials__swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.author}>
                <blockquote className="testimonials__quote">
                  <FiMessageSquare className="testimonials__icon" size={26} />
                  <p>{testimonial.quote}</p>
                  <footer>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.context}</span>
                  </footer>
                </blockquote>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  )
}
