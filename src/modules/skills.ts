import { getLang, skillCategoryTranslations } from './i18n'

interface SkillCategory {
  name: string
  icon: string
  skills: { name: string; level: number }[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'Three.js / WebGL', level: 70 },
    ],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'Python / FastAPI', level: 85 },
      { name: 'PostgreSQL / MongoDB', level: 80 },
      { name: 'GraphQL / REST', level: 82 },
    ],
  },
  {
    name: 'Robotique',
    icon: '🤖',
    skills: [
      { name: 'ROS / ROS2', level: 78 },
      { name: 'Arduino / Embedded C', level: 82 },
      { name: 'Raspberry Pi / Linux', level: 85 },
      { name: 'CAO / Impression 3D', level: 70 },
    ],
  },
  {
    name: 'Machine Learning',
    icon: '🧠',
    skills: [
      { name: 'PyTorch / TensorFlow', level: 80 },
      { name: 'OpenCV / Vision', level: 75 },
      { name: 'scikit-learn / Pandas', level: 82 },
      { name: 'MLOps / Déploiement', level: 68 },
    ],
  },
  {
    name: 'DevOps & Outils',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Docker / K8s', level: 75 },
      { name: 'CI/CD Pipelines', level: 72 },
      { name: 'Linux / Shell', level: 85 },
    ],
  },
]

function translateSkillName(name: string): string {
  const lang = getLang()
  const map = skillCategoryTranslations[lang]
  return map[name] || name
}

function render() {
  const grid = document.getElementById('skills-grid')
  if (!grid) return

  grid.innerHTML = ''
  skillCategories.forEach((category) => {
    const card = document.createElement('div')
    card.className = 'skill-category'
    card.innerHTML = `
      <div class="skill-category-header">
        <div class="skill-category-icon">${category.icon}</div>
        <h3>${translateSkillName(category.name)}</h3>
      </div>
      <div class="skill-list">
        ${category.skills
          .map(
            (skill) => `
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">${translateSkillName(skill.name)}</span>
              <span class="skill-percentage">${skill.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" data-width="${skill.level}"></div>
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    `
    grid.appendChild(card)
  })

  // Notify animations to re-bind skill bars
  window.dispatchEvent(new CustomEvent('skillsRendered'))
}

export function initSkills() {
  render()
  window.addEventListener('languageChanged', render)
}
