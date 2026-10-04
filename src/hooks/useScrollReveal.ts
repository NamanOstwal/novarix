import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1,
    })

    const elements = document.querySelectorAll(
      '[data-section-reveal], [data-scale-reveal], [data-blog-grid] > *'
    )
    elements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])
}
