import { useEffect, useState } from 'react'

/**
 * Devuelve el id de la sección que el usuario está viendo.
 * Se usa en el Navbar para resaltar el link activo.
 *
 * @param {string[]} sectionIds ids de las <section> a observar
 * @returns {string} id de la sección visible
 */
export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        // Entre todas las secciones visibles nos queda la que ocupa más pantalla
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActiveId(visible.target.id)
      },
      // La "franja" de detección es el centro de la ventana
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
