import * as THREE from 'three'
import { gsap } from 'gsap'

export function initHero() {
  initThreeScene()
  initTypingEffect()
  initHeroAnimations()
}

function initThreeScene() {
  const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement
  if (!canvas) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))

  // Neural network nodes
  const nodeCount = 50
  const nodeGeometry = new THREE.SphereGeometry(0.04, 6, 6)

  const positions: THREE.Vector3[] = []
  const nodes: THREE.Mesh[] = []
  const nodeGroup = new THREE.Group()

  // Share a single material for better perf
  const nodeMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color().setHSL(0.75, 0.8, 0.6),
    transparent: true,
    opacity: 0.8,
  })

  for (let i = 0; i < nodeCount; i++) {
    const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
    const pos = new THREE.Vector3(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 6
    )
    node.position.copy(pos)
    positions.push(pos)
    nodes.push(node)
    nodeGroup.add(node)
  }

  scene.add(nodeGroup)

  // Connections
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x6c63ff,
    transparent: true,
    opacity: 0.12,
  })

  const connectionThreshold = 2.8
  const lines: THREE.Line[] = []

  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      const dist = positions[i].distanceTo(positions[j])
      if (dist < connectionThreshold) {
        const geometry = new THREE.BufferGeometry().setFromPoints([positions[i], positions[j]])
        const line = new THREE.Line(geometry, lineMaterial)
        lines.push(line)
        scene.add(line)
      }
    }
  }

  // Floating particles
  const particleCount = 100
  const particleGeometry = new THREE.BufferGeometry()
  const particlePositions = new Float32Array(particleCount * 3)
  const particleSpeeds = new Float32Array(particleCount)

  for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3] = (Math.random() - 0.5) * 20
    particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 15
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10
    particleSpeeds[i] = Math.random() * 0.005 + 0.002
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))

  const particleMaterial = new THREE.PointsMaterial({
    color: 0x00d4aa,
    size: 0.03,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
  })

  const particles = new THREE.Points(particleGeometry, particleMaterial)
  scene.add(particles)

  camera.position.z = 5

  // Mouse interaction
  const mouse = { x: 0, y: 0 }
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
  })

  // Animation loop
  let time = 0
  function animate() {
    requestAnimationFrame(animate)
    time += 0.004

    // Rotate network slightly
    nodeGroup.rotation.y = time * 0.3 + mouse.x * 0.3
    nodeGroup.rotation.x = Math.sin(time * 0.5) * 0.1 + mouse.y * 0.2

    // Pulse nodes (every other frame for perf)
    if (Math.round(time * 1000) % 2 === 0) {
      nodes.forEach((node, i) => {
        const scale = 1 + Math.sin(time * 3 + i * 0.5) * 0.3
        node.scale.setScalar(scale)
      })
    }

    // Float particles
    const posArr = particleGeometry.attributes.position.array as Float32Array
    for (let i = 0; i < particleCount; i++) {
      posArr[i * 3 + 1] += particleSpeeds[i]
      if (posArr[i * 3 + 1] > 7.5) posArr[i * 3 + 1] = -7.5
    }
    particleGeometry.attributes.position.needsUpdate = true

    // Gentle camera movement
    camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.02
    camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.02

    renderer.render(scene, camera)
  }

  animate()

  // Resize handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
}

function initTypingEffect() {
  const el = document.getElementById('typing-text')
  if (!el) return

  const titles = ['Fullstack', 'Robotique', 'Machine Learning']
  let currentIndex = 0

  function typeTitle() {
    const title = titles[currentIndex]
    el.innerHTML = '\u00A0' // non-breaking space to reserve line height

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.delayedCall(1.5, () => {
          deleteTitle(title.length)
        })
      },
    })

    for (let i = 0; i < title.length; i++) {
      tl.to(el, {
        duration: 0.06,
        onComplete: () => {
          el.textContent = title.substring(0, i + 1)
        },
      }, i * 0.06)
    }

    // Add blinking cursor
    tl.set(el, { className: '+=typing-cursor' })
  }

  function deleteTitle(length: number) {
    const tl = gsap.timeline({
      onComplete: () => {
        currentIndex = (currentIndex + 1) % titles.length
        el.classList.remove('typing-cursor')
        gsap.delayedCall(0.3, typeTitle)
      },
    })

    for (let i = length; i >= 0; i--) {
      tl.to(el, {
        duration: 0.04,
        onComplete: () => {
          el.textContent = el.textContent!.substring(0, i) || '\u00A0'
        },
      }, (length - i) * 0.04)
    }
  }

  // Start after hero animation
  gsap.delayedCall(1.5, typeTitle)
}

function initHeroAnimations() {
  const tl = gsap.timeline({ delay: 0.3 })

  tl.to('.hero-badge', {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
  })
  .to('.title-line', {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.2,
  }, '-=0.4')
  .to('.hero-description', {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
  }, '-=0.4')
  .to('.hero-cta', {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
  }, '-=0.4')
  .to('.hero-stats', {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
  }, '-=0.4')

  // Animate counter numbers
  document.querySelectorAll('.stat-number').forEach((el) => {
    const target = parseInt(el.getAttribute('data-target') || '0')
    gsap.to(el, {
      textContent: target,
      duration: 2,
      delay: 1.5,
      ease: 'power2.out',
      snap: { textContent: 1 },
    })
  })
}
