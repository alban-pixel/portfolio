interface LearningProject {
  title: string
  description: string
  tech: string
  type: 'learning' | 'experiment'
  emoji: string
  link: string
}

const learningProjects: LearningProject[] = [
  {
    title: 'Algorithmes de Tri Visualisés',
    description: 'Visualisation interactive de différents algorithmes de tri avec animations step-by-step.',
    tech: 'JavaScript / Canvas',
    type: 'learning',
    emoji: '📊',
    link: '#',
  },
  {
    title: 'Chat Bot avec Raspberry Pi',
    description: 'Assistant vocal embarqué sur Raspberry Pi avec reconnaissance vocale et synthèse TTS.',
    tech: 'Python / GPIO',
    type: 'experiment',
    emoji: '🔊',
    link: '#',
  },
  {
    title: 'Réseau de Neurones from Scratch',
    description: 'Implémentation complète d\'un MLP en Python pur, sans frameworks, pour comprendre le backpropagation.',
    tech: 'Python / NumPy',
    type: 'learning',
    emoji: '🧮',
    link: '#',
  },
  {
    title: 'API REST avec Express',
    description: 'API CRUD complète avec authentification JWT, validation, rate limiting et documentation Swagger.',
    tech: 'Node.js / Express',
    type: 'learning',
    emoji: '🔗',
    link: '#',
  },
  {
    title: 'Suiveur de Ligne Arduino',
    description: 'Robot suiveur de ligne avec capteurs IR, PID controller et calibration automatique.',
    tech: 'Arduino / C++',
    type: 'experiment',
    emoji: '🏎️',
    link: '#',
  },
  {
    title: 'GAN - Génération d\'Images',
    description: 'Expérimentation avec les GANs pour la génération d\'images de paysages artificiels.',
    tech: 'PyTorch / CUDA',
    type: 'experiment',
    emoji: '🎨',
    link: '#',
  },
  {
    title: 'Composants React Custom',
    description: 'Bibliothèque de composants React réutilisables avec Storybook et tests unitaires.',
    tech: 'React / Storybook',
    type: 'learning',
    emoji: '🧩',
    link: '#',
  },
  {
    title: 'Contrôle de Drone par OpenCV',
    description: 'Contrôle autonome d\'un drone Tello via détection de gestes avec OpenCV et MediaPipe.',
    tech: 'Python / OpenCV',
    type: 'experiment',
    emoji: '🚁',
    link: '#',
  },
]

export function initLearning() {
  const grid = document.getElementById('learning-grid')
  if (!grid) return

  learningProjects.forEach((project) => {
    const card = document.createElement('div')
    card.className = 'learning-card'
    card.innerHTML = `
      <div class="learning-card-header">
        <span class="learning-badge ${project.type}">${project.type === 'learning' ? '📚 Learning' : '🧪 Experiment'}</span>
        <span class="learning-card-icon">${project.emoji}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="learning-card-footer">
        <span class="learning-card-tech">${project.tech}</span>
        <a href="${project.link}" class="learning-card-link" target="_blank">
          Voir
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </a>
      </div>
    `
    grid.appendChild(card)
  })
}
