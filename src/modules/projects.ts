import { getLang, t, projectTranslations, categoryLabels, type Lang } from './i18n'

interface Project {
  id: number
  category: string
  tags: string[]
  emoji: string
  github: string
  demo: string
}

const projects: Project[] = [
  {
    id: 1,
    category: 'fullstack',
    tags: ['Next.js 13', 'React', 'Framer Motion', 'Tailwind CSS', 'EmailJS'],
    emoji: '🌐',
    github: '#',
    demo: 'https://maltos.dev',
  },
  {
    id: 2,
    category: 'robotics',
    tags: ['ROS2', 'Python', 'SLAM', 'LiDAR', 'Raspberry Pi'],
    emoji: '🤖',
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    category: 'ml',
    tags: ['YOLOv8', 'PyTorch', 'OpenCV', 'NVIDIA Jetson', 'WebSocket'],
    emoji: '👁️',
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    category: 'fullstack',
    tags: ['React', 'D3.js', 'GraphQL', 'Docker', 'K8s'],
    emoji: '📊',
    github: '#',
    demo: '#',
  },
  {
    id: 5,
    category: 'fullstack',
    tags: ['Android', 'Jetpack Compose', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    emoji: '🐜',
    github: 'https://github.com/floragel/Trakant',
    demo: 'https://github.com/floragel/Trakant',
  },
  {
    id: 6,
    category: 'ml',
    tags: ['Transformers', 'BERT', 'FastAPI', 'MLflow', 'Docker'],
    emoji: '💬',
    github: '#',
    demo: '#',
  },
]

export function initProjects() {
  const grid = document.getElementById('projects-grid')
  const filters = document.getElementById('project-filters')
  const modal = document.getElementById('project-modal')
  const modalContent = document.getElementById('modal-content')
  const modalClose = document.getElementById('modal-close')

  if (!grid || !filters || !modal || !modalContent || !modalClose) return

  function renderProjects(filter = 'all') {
    const lang = getLang()
    const texts = projectTranslations[lang]
    const labels = categoryLabels[lang]
    const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

    grid.innerHTML = ''
    filtered.forEach((project) => {
      const idx = projects.indexOf(project)
      const text = texts[idx]
      const card = document.createElement('div')
      card.className = 'project-card'
      card.innerHTML = `
        <div class="project-card-image">
          <div class="project-placeholder">${project.emoji}</div>
          <div class="project-card-overlay">
            <span>${t('projects.viewDetails')}</span>
          </div>
        </div>
        <div class="project-card-body">
          <div class="project-card-category">${labels[project.category] || project.category}</div>
          <h3 class="project-card-title">${text.title}</h3>
          <p class="project-card-desc">${text.description}</p>
          <div class="project-card-tags">
            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      `

      card.addEventListener('click', () => openModal(project, idx))
      grid.appendChild(card)
    })

    // Animate cards in with stagger
    import('gsap').then(({ gsap }) => {
      gsap.fromTo(
        grid.querySelectorAll('.project-card'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' }
      )
    })
  }

  // Filters
  filters.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'))
      btn.classList.add('active')
      const filter = btn.getAttribute('data-filter') || 'all'
      renderProjects(filter)
    })
  })

  // Modal
  function openModal(project: Project, idx: number) {
    const lang = getLang()
    const text = projectTranslations[lang][idx]
    const labels = categoryLabels[lang]

    modalContent.innerHTML = `
      <div class="project-placeholder modal-image" style="display:flex;align-items:center;justify-content:center;font-size:4rem;">${project.emoji}</div>
      <div class="project-card-category">${labels[project.category] || project.category}</div>
      <h2>${text.title}</h2>
      <p>${text.longDescription}</p>
      <div class="project-card-tags">
        ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="project-card-links">
        ${project.github !== '#' ? `
        <a href="${project.github}" class="project-link" target="_blank">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          ${t('projects.sourceCode')}
        </a>` : ''}
        ${project.demo !== '#' ? `
        <a href="${project.demo}" class="project-link" target="_blank">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          ${t('projects.viewDemo')}
        </a>` : ''}
      </div>
    `
    modal.classList.add('active')
    document.body.style.overflow = 'hidden'
  }

  modalClose.addEventListener('click', closeModal)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal()
  })

  function closeModal() {
    modal.classList.remove('active')
    document.body.style.overflow = ''
  }

  // ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal()
  })

  renderProjects()

  // Re-render on language change
  window.addEventListener('languageChanged', () => {
    const activeFilter = filters.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all'
    renderProjects(activeFilter)
  })
}
