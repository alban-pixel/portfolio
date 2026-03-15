import { setLanguage, initLang, getLang, type Lang } from './i18n'

export function initLangPopup() {
  initLang()

  const saved = localStorage.getItem('lang')

  if (saved === 'fr' || saved === 'en') {
    // Language already chosen — apply silently
    setLanguage(saved as Lang)
    return
  }

  // Show language popup
  const overlay = document.getElementById('lang-popup-overlay')
  if (!overlay) return

  overlay.classList.add('active')
  document.body.style.overflow = 'hidden'

  const btnFr = document.getElementById('lang-btn-fr')
  const btnEn = document.getElementById('lang-btn-en')

  function chooseLang(lang: Lang) {
    setLanguage(lang)
    overlay.classList.add('closing')

    setTimeout(() => {
      overlay.classList.remove('active', 'closing')
      document.body.style.overflow = ''
    }, 400)
  }

  btnFr?.addEventListener('click', () => chooseLang('fr'))
  btnEn?.addEventListener('click', () => chooseLang('en'))
}
