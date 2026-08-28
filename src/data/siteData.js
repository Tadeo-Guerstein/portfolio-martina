/**
 * ============================================================
 *  DATOS DEL SITIO — Único archivo a editar para personalizar
 * ============================================================
 * Acá vive todo el contenido del portfolio (textos, fotos, links).
 * Los componentes solo se encargan de mostrar esta información,
 * así se puede cambiar el sitio sin tocar código de React.
 *
 * Para usar fotos propias: guardalas en `public/photos/` y
 * referencialas como "/photos/mi-foto.jpg".
 */

import {
  FiInstagram,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCamera,
  FiHeart,
  FiSun,
  FiUsers,
} from 'react-icons/fi'
import { FaWhatsapp, FaBehance, FaPinterestP } from 'react-icons/fa'

/* ---------------------------- Perfil ---------------------------- */

export const profile = {
  name: 'Martina Sanchez',
  role: 'Fotógrafa documental y de retrato',
  location: 'Mar del Plata, Argentina',
  tagline: 'Fotografío la luz que se escapa',
  heroSubtitle:
    'Retratos, bodas y ensayos documentales. Busco esos gestos mínimos que cuentan una historia entera.',
  heroImage: 'https://picsum.photos/seed/martina-hero/1600/2000',
  portraitImage: 'https://picsum.photos/seed/martina-retrato/900/1100',
}

/* --------------------------- Sobre mí --------------------------- */

export const about = {
  title: 'Sobre mí',
  paragraphs: [
    'Empecé a sacar fotos a los quince años con una cámara analógica que encontré en el placard de mi abuela. Todavía hoy, cada vez que levanto la cámara, busco lo mismo: el momento en que alguien se olvida de que lo están mirando.',
    'Trabajo hace más de diez años con luz natural, tiempos largos y muy pocas indicaciones. Prefiero acompañar antes que dirigir: mis sesiones son charlas que, en algún momento, se convierten en imágenes.',
    'Publiqué en revistas independientes de Latinoamérica y expuse dos muestras individuales. Cuando no estoy trabajando, viajo con una cámara chica y sin plan.',
  ],
  stats: [
    { value: '10+', label: 'Años de oficio' },
    { value: '240', label: 'Sesiones realizadas' },
    { value: '18', label: 'Publicaciones' },
    { value: '2', label: 'Muestras individuales' },
  ],
}

/* ------------------- Galería / carousel de fotos ------------------ */
/**
 * `category` se usa para los filtros de la galería:
 * las categorías se calculan automáticamente desde esta lista.
 */
export const gallery = [
  {
    id: 1,
    src: 'https://picsum.photos/seed/retrato-01/1400/1000',
    title: 'Ana, tarde de invierno',
    category: 'Retrato',
    year: '2025',
  },
  {
    id: 2,
    src: 'https://picsum.photos/seed/boda-01/1400/1000',
    title: 'Julia y Martín',
    category: 'Bodas',
    year: '2025',
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/documental-01/1400/1000',
    title: 'Feria del puerto',
    category: 'Documental',
    year: '2024',
  },
  {
    id: 4,
    src: 'https://picsum.photos/seed/retrato-02/1400/1000',
    title: 'Manos de oficio',
    category: 'Retrato',
    year: '2024',
  },
  {
    id: 5,
    src: 'https://picsum.photos/seed/paisaje-01/1400/1000',
    title: 'Ruta 40, al amanecer',
    category: 'Paisaje',
    year: '2024',
  },
  {
    id: 6,
    src: 'https://picsum.photos/seed/boda-02/1400/1000',
    title: 'El primer baile',
    category: 'Bodas',
    year: '2023',
  },
  {
    id: 7,
    src: 'https://picsum.photos/seed/documental-02/1400/1000',
    title: 'Asamblea de barrio',
    category: 'Documental',
    year: '2023',
  },
  {
    id: 8,
    src: 'https://picsum.photos/seed/paisaje-02/1400/1000',
    title: 'Niebla en Traful',
    category: 'Paisaje',
    year: '2023',
  },
]

/* --------------------------- Servicios -------------------------- */

export const services = [
  {
    icon: FiCamera,
    title: 'Retrato personal',
    description:
      'Sesión de dos horas en exterior o en tu casa. Nos tomamos el tiempo necesario hasta que la cámara deje de incomodar.',
  },
  {
    icon: FiHeart,
    title: 'Bodas y civiles',
    description:
      'Cobertura documental de la jornada completa, sin poses armadas. Incluye una selección editada de 300 fotos.',
  },
  {
    icon: FiUsers,
    title: 'Familia y embarazo',
    description:
      'Un rato juntos, en el lugar donde se sientan cómodos. Ideal con luz de tarde y muy poca producción.',
  },
  {
    icon: FiSun,
    title: 'Ensayo documental',
    description:
      'Proyectos de autor por encargo para revistas, ONGs y marcas. El alcance se define según la duración y el uso de las imágenes.',
  },
]

/* ------------------------- Testimonios -------------------------- */

export const testimonials = [
  {
    quote:
      'Nunca me sentí observada. Al ver las fotos entendí que había estado trabajando todo el tiempo y yo ni cuenta me di.',
    author: 'Ana Belén',
    context: 'Retrato personal',
  },
  {
    quote:
      'Buscábamos alguien que no nos hiciera actuar nuestra propia boda. Martina hizo exactamente eso.',
    author: 'Julia y Martín',
    context: 'Boda en Chapadmalal',
  },
  {
    quote:
      'Su ensayo sobre la feria fue la nota más leída del año. Tiene una mirada que no necesita explicación.',
    author: 'Revista Contraluz',
    context: 'Encargo editorial',
  },
]

/* --------------------------- Contacto --------------------------- */

export const contact = {
  title: 'Trabajemos juntos',
  intro:
    'Contame qué tenés en mente: fecha, lugar y qué te gustaría recordar de ese día. Respondo todos los mensajes en menos de 48 horas.',
  email: 'hola@martinasanchez.com',
  phone: '+54 9 11 5555 1234',
  city: 'Mar del Plata · Disponible para viajar',
}

/**
 * Redes sociales. `label` se muestra al lado del ícono y
 * `handle` es el texto secundario (usuario, número, etc.).
 */
export const socials = [
  {
    label: 'Instagram',
    handle: '@ph.signemartina',
    href: 'https://www.instagram.com/ph.signemartina',
    icon: FiInstagram,
  },
  {
    label: 'WhatsApp',
    handle: '+54 9 11 5555 1234',
    href: 'https://wa.me/5491155551234',
    icon: FaWhatsapp,
  },
  {
    label: 'Email',
    handle: 'hola@martinasanchez.com',
    href: 'mailto:hola@martinasanchez.com',
    icon: FiMail,
  },
  {
    label: 'Behance',
    handle: '/martinasanchez',
    href: 'https://behance.net/',
    icon: FaBehance,
  },
  {
    label: 'Pinterest',
    handle: '/martinasanchez',
    href: 'https://pinterest.com/',
    icon: FaPinterestP,
  },
]

/* Íconos reutilizados por el bloque de datos de contacto */
export const contactIcons = { FiMail, FiPhone, FiMapPin }

/* --------------------------- Navegación ------------------------- */
/** El `id` debe coincidir con el id de la <section> correspondiente. */
export const navLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'galeria', label: 'Galería' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'contacto', label: 'Contacto' },
]
