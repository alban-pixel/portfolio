import { setLanguage, getLang } from './i18n'

export function initNavbar() {
  const navbar = document.getElementById('navbar')
  const hamburger = document.getElementById('nav-hamburger')
  const navLinks = document.getElementById('nav-links')
  const themeToggle = document.getElementById('theme-toggle')

  if (!navbar || !hamburger || !navLinks || !themeToggle) return

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }

    // Scroll spy
    updateActiveLink()
  })

  // Hamburger menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navLinks.classList.toggle('active')
  })

  // Close menu on link click
  navLinks.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active')
      navLinks.classList.remove('active')
    })
  })

  // Theme toggle
  const savedTheme = localStorage.getItem('theme') || 'dark'
  document.documentElement.setAttribute('data-theme', savedTheme)

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme')
    const next = current === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  })

  // Language toggle
  const langToggle = document.getElementById('lang-toggle')
  const langFlag = document.getElementById('lang-toggle-flag')

  function updateFlag() {
    if (langFlag) {
      langFlag.textContent = getLang() === 'fr' ? '🇫🇷' : '🇬🇧'
    }
  }

  updateFlag()

  langToggle?.addEventListener('click', () => {
    const next = getLang() === 'fr' ? 'en' : 'fr'
    setLanguage(next)
  })

  // Update flag when language changes from other sources (e.g. popup)
  window.addEventListener('languageChanged', updateFlag)

  // Scroll spy function
  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]')
    const scrollPos = window.scrollY + window.innerHeight / 3

    sections.forEach((section) => {
      const sectionEl = section as HTMLElement
      const top = sectionEl.offsetTop
      const height = sectionEl.offsetHeight
      const id = sectionEl.getAttribute('id')

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.querySelectorAll('.nav-link').forEach((link) => {
          link.classList.remove('active')
          if (link.getAttribute('data-section') === id) {
            link.classList.add('active')
          }
        })
      }
    })
  }
}
