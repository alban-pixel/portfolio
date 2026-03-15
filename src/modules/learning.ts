import { getLang, t, learningTranslations } from './i18n'

interface LearningProject {
  tech: string
  type: 'learning' | 'experiment'
  emoji: string
  link: string
}

const learningProjects: LearningProject[] = [
  { tech: 'JavaScript / Canvas', type: 'learning', emoji: '📊', link: '#' },
  { tech: 'Python / GPIO', type: 'experiment', emoji: '🔊', link: '#' },
  { tech: 'Python / NumPy', type: 'learning', emoji: '🧮', link: '#' },
  { tech: 'Node.js / Express', type: 'learning', emoji: '🔗', link: '#' },
  { tech: 'Arduino / C++', type: 'experiment', emoji: '🏎️', link: '#' },
  { tech: 'PyTorch / CUDA', type: 'experiment', emoji: '🎨', link: '#' },
  { tech: 'React / Storybook', type: 'learning', emoji: '🧩', link: '#' },
  { tech: 'Python / OpenCV', type: 'experiment', emoji: '🚁', link: '#' },
]

function render() {
  const grid = document.getElementById('learning-grid')
  if (!grid) return

  const lang = getLang()
  const texts = learningTranslations[lang]

  grid.innerHTML = ''
  learningProjects.forEach((project, i) => {
    const text = texts[i]
    const card = document.createElement('div')
    card.className = 'learning-card'
    card.innerHTML = `
      <div class="learning-card-header">
        <span class="learning-badge ${project.type}">${project.type === 'learning' ? t('learning.badgeLearning') : t('learning.badgeExperiment')}</span>
        <span class="learning-card-icon">${project.emoji}</span>
      </div>
      <h3>${text.title}</h3>
      <p>${text.description}</p>
      <div class="learning-card-footer">
        <span class="learning-card-tech">${project.tech}</span>
      </div>
    `
    grid.appendChild(card)
  })
}

export function initLearning() {
  render()
  window.addEventListener('languageChanged', render)
}
