export function initAbout() {
  const techGrid = document.getElementById('tech-grid')
  if (!techGrid) return

  const techs = [
    { icon: '⚛️', name: 'React' },
    { icon: '🟢', name: 'Node.js' },
    { icon: '🐍', name: 'Python' },
    { icon: '📘', name: 'TypeScript' },
    { icon: '🔥', name: 'Next.js' },
    { icon: '🗄️', name: 'PostgreSQL' },
    { icon: '🤖', name: 'ROS' },
    { icon: '🧠', name: 'TensorFlow' },
    { icon: '🔦', name: 'PyTorch' },
    { icon: '👁️', name: 'OpenCV' },
    { icon: '🔌', name: 'Arduino' },
    { icon: '🐧', name: 'Linux' },
    { icon: '🐳', name: 'Docker' },
    { icon: '📦', name: 'Git' },
    { icon: '☁️', name: 'AWS' },
    { icon: '🎨', name: 'Three.js' },
  ]

  techs.forEach((tech) => {
    const item = document.createElement('div')
    item.className = 'tech-item'
    item.innerHTML = `
      <span class="tech-icon">${tech.icon}</span>
      <span>${tech.name}</span>
    `
    techGrid.appendChild(item)
  })
}
