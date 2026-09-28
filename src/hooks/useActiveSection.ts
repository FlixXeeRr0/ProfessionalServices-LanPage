import { useEffect, useState } from 'react'

/**
 * Tracks which of the given section ids is currently most visible in the
 * viewport, so the nav can reflect scroll position without a scroll-event
 * listener (uses IntersectionObserver instead).
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const visibleSections = new Map<string, IntersectionObserverEntry>()

    const updateActiveSection = () => {
      // Si estamos en la parte superior de la página, forzamos la primera sección
      if (window.scrollY < 50 && sectionIds.length > 0) {
        setActiveId(sectionIds[0])
        return
      }

      // Si estamos en la parte inferior de la página, forzamos la última sección
      if (
        window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50 &&
        sectionIds.length > 0
      ) {
        setActiveId(sectionIds[sectionIds.length - 1])
        return
      }

      if (visibleSections.size > 0) {
        const visible = Array.from(visibleSections.values()).sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        )[0]

        if (visible) setActiveId(visible.target.id)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry)
          } else {
            visibleSections.delete(entry.target.id)
          }
        })
        updateActiveSection()
      },
      { rootMargin: '-20% 0px -40% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    const handleScroll = () => {
      updateActiveSection()
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionIds])

  return activeId
}
