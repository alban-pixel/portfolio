export function initContact() {
  const form = document.getElementById('contact-form') as HTMLFormElement
  if (!form) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement
    const originalContent = btn.innerHTML

    // Show loading state
    btn.innerHTML = `
      <span>Envoi en cours...</span>
      <svg class="spinning" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    `
    btn.disabled = true

    // Simulate form submission (replace with Formspree/EmailJS in production)
    setTimeout(() => {
      btn.innerHTML = `
        <span>Message envoyé !</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      `
      btn.style.background = 'linear-gradient(135deg, #00d4aa 0%, #00b894 100%)'

      form.reset()

      setTimeout(() => {
        btn.innerHTML = originalContent
        btn.style.background = ''
        btn.disabled = false
      }, 3000)
    }, 1500)
  })
}
