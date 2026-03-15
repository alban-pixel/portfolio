import './style.css'
import { initLangPopup } from './modules/langPopup'
import { initHero } from './modules/hero'
import { initNavbar } from './modules/navbar'
import { initAbout } from './modules/about'
import { initProjects } from './modules/projects'
import { initLearning } from './modules/learning'
import { initSkills } from './modules/skills'
import { initContact } from './modules/contact'
import { initAnimations } from './modules/animations'

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  // Language popup first (sets language before rendering)
  initLangPopup()

  initNavbar()
  initHero()
  initAbout()
  initProjects()
  initLearning()
  initSkills()
  initContact()
  initAnimations()

  // Set current year
  const yearEl = document.getElementById('current-year')
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString()
})
