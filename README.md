# Portfolio de fotografía

Sitio de una sola página (React + Vite) para el portfolio de una fotógrafa:
portada, sobre mí, carousel de fotos con visor a pantalla completa, servicios,
testimonios y contacto con redes sociales.

## Cómo correrlo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run preview  # ver el build ya compilado
npm run lint     # ESLint
```

## Cómo cambiar el contenido

Todo el texto, las fotos y los links viven en **`src/data/siteData.js`**.
No hace falta tocar componentes para personalizar el sitio: se edita ese archivo
y el resto se actualiza solo (por ejemplo, los filtros de la galería se generan
a partir de las categorías que aparecen en las fotos).

Para usar fotos propias, guardalas en `public/photos/` y en `siteData.js`
referencialas como `"/photos/mi-foto.jpg"`. Las fotos actuales son
placeholders remotos de `picsum.photos`.

Los colores, tipografías y espaciados están centralizados en
**`src/styles/variables.css`** como variables CSS.

## Estructura

```
src/
├── App.jsx                  Arma el orden de las secciones
├── main.jsx                 Punto de entrada de React
├── index.css                Reset, tipografía base y utilidades (.container, .btn, .section)
├── data/
│   └── siteData.js          TODO el contenido del sitio (textos, fotos, redes)
├── styles/
│   └── variables.css        Design tokens: colores, fuentes, espaciados
├── hooks/
│   └── useScrollSpy.js      Detecta la sección visible (link activo del navbar)
└── components/
    ├── Reveal.jsx           Animación reutilizable de aparición al scrollear
    ├── Navbar/              Header fijo + menú mobile
    ├── Hero/                Portada a pantalla completa
    ├── About/               Sobre mí: retrato, bio y números
    ├── Gallery/             Carousel con filtros
    │   ├── Gallery.jsx
    │   └── Lightbox.jsx     Visor de foto a pantalla completa (teclado + flechas)
    ├── Services/            Grilla de servicios
    ├── Testimonials/        Carousel automático de testimonios
    ├── Contact/             Datos, redes y formulario
    └── Footer/              Pie con navegación y redes
```

Cada componente tiene su `.css` al lado, con clases prefijadas por el nombre
del bloque (`gallery__slide`, `contact__form`) para que no haya colisiones.

## Detalles a tener en cuenta

- **El formulario de contacto no tiene backend**: arma un `mailto:` con los
  datos y lo abre en el cliente de correo. Si más adelante hay servidor, se
  reemplaza el cuerpo de `handleSubmit` en `Contact.jsx`.
- Las secciones se navegan con anclas (`#galeria`, `#contacto`, …). El `id` de
  cada `<section>` tiene que coincidir con el `id` en `navLinks` de `siteData.js`.
- Se respeta `prefers-reduced-motion`: si el sistema pide menos animaciones,
  las transiciones se desactivan.
- Las imágenes de la galería usan `loading="lazy"`.

## Librerías usadas

| Librería        | Para qué                                              |
| --------------- | ----------------------------------------------------- |
| `swiper`        | Carousels de galería y testimonios (touch + teclado)  |
| `framer-motion` | Animaciones de aparición y del visor de fotos         |
| `react-icons`   | Íconos (Instagram, WhatsApp, flechas, etc.)           |
