import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initAnimations() {
  initRevealAnimations()
  initParallax()
  initCustomCursor()
  initSkillBarAnimations()
  initSectionTransitions()
}

function initRevealAnimations() {
  // Use IntersectionObserver for reveal animations (lighter than GSAP for many elements)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

  // Re-observe dynamically added elements periodically
  setInterval(() => {
    document.querySelectorAll('.reveal:not(.revealed)').forEach((el) => observer.observe(el))
  }, 1000)
}

function initParallax() {
  // Section headers parallax
  gsap.utils.toArray('.section-header').forEach((header: any) => {
    gsap.from(header.querySelector('.section-tag'), {
      scrollTrigger: {
        trigger: header,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1,
      },
      y: 30,
      opacity: 0,
    })

    gsap.from(header.querySelector('.section-title'), {
      scrollTrigger: {
        trigger: header,
        start: 'top 80%',
        end: 'top 40%',
        scrub: 1,
      },
      y: 50,
      opacity: 0,
    })

    gsap.from(header.querySelector('.section-subtitle'), {
      scrollTrigger: {
        trigger: header,
        start: 'top 75%',
        end: 'top 35%',
        scrub: 1,
      },
      y: 30,
      opacity: 0,
    })
  })

  // About highlights stagger
  gsap.fromTo('.highlight',
    { opacity: 0, x: -50 },
    {
      scrollTrigger: {
        trigger: '.about-highlights',
        start: 'top 80%',
      },
      opacity: 1, x: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    }
  )
}

function initCustomCursor() {
  const cursor = document.getElementById('cursor')
  const follower = document.getElementById('cursor-follower')

  if (!cursor || !follower) return

  // Check for touch devices
  if ('ontouchstart' in window) {
    cursor.style.display = 'none'
    follower.style.display = 'none'
    return
  }

  // Cursor follows mouse instantly — zero delay
  let followerX = 0
  let followerY = 0
  let mouseX = 0
  let mouseY = 0

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    // Instant cursor position via transform (no delay)
    cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
  })

  // Only the follower ring uses animation for a subtle trail
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.15
    followerY += (mouseY - followerY) * 0.15
    follower.style.transform = `translate(${followerX - 18}px, ${followerY - 18}px)`
    requestAnimationFrame(animateFollower)
  }
  animateFollower()

  // Hover effects on interactive elements
  const interactiveEls = document.querySelectorAll('a, button, .project-card, .tech-item, .highlight, .learning-card')
  interactiveEls.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hovering')
      follower.classList.add('hovering')
    })
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovering')
      follower.classList.remove('hovering')
    })
  })
}

function initSkillBarAnimations() {
  // Animate skill bars on scroll
  gsap.utils.toArray('.skill-progress').forEach((bar: any) => {
    const width = bar.getAttribute('data-width')
    ScrollTrigger.create({
      trigger: bar,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(bar, {
          width: width + '%',
          duration: 1.5,
          ease: 'power3.out',
        })
      },
      once: true,
    })
  })
}

function initSectionTransitions() {
  // Tech grid stagger
  ScrollTrigger.create({
    trigger: '.tech-grid',
    start: 'top 80%',
    onEnter: () => {
      gsap.fromTo('.tech-item',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out' }
      )
    },
    once: true,
  })

  // Fade in learning cards
  ScrollTrigger.create({
    trigger: '.learning-grid',
    start: 'top 80%',
    onEnter: () => {
      gsap.fromTo('.learning-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      )
    },
    once: true,
  })

  // Fade in skill categories
  ScrollTrigger.create({
    trigger: '.skills-grid',
    start: 'top 80%',
    onEnter: () => {
      gsap.fromTo('.skill-category',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' }
      )
    },
    once: true,
  })

  // Contact section
  ScrollTrigger.create({
    trigger: '.contact-grid',
    start: 'top 80%',
    onEnter: () => {
      gsap.fromTo('.contact-card',
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out' }
      )
      gsap.fromTo('.contact-form',
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
      )
    },
    once: true,
  })

  // Hide scroll indicator on scroll
  ScrollTrigger.create({
    trigger: '#about',
    start: 'top 90%',
    onEnter: () => {
      gsap.to('#scroll-indicator', { opacity: 0, duration: 0.5 })
    },
  })
}
