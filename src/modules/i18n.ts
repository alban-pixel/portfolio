export type Lang = 'fr' | 'en'

// ─── Static HTML translations (keyed by data-i18n attributes) ───

const translations: Record<Lang, Record<string, string>> = {
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.projects': 'Projets',
    'nav.learning': 'Apprentissage',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge': 'Disponible pour des projets',
    'hero.titleLine1': 'Alban, Développeur',
    'hero.description': '',
    'hero.descriptionHTML': `Je conçois des expériences numériques innovantes à l'intersection du <strong>développement fullstack</strong>, de la <strong>robotique</strong> et du <strong>machine learning</strong>.`,
    'hero.cta.projects': 'Voir mes projets',
    'hero.cta.contact': 'Me contacter',
    'hero.stat.projects': 'Projets',
    'hero.stat.technologies': 'Technologies',
    'hero.stat.domains': 'Domaines',

    // About
    'about.tag': 'À Propos',
    'about.title': 'Passionné par la <span class="gradient-text">technologie</span>',
    'about.subtitle': 'Une approche multidisciplinaire qui combine code, hardware et intelligence artificielle.',
    'about.p1': "Développeur fullstack passionné, j'explore les frontières entre le monde numérique et physique. Mon parcours m'a amené à travailler sur des projets variés, allant des applications web modernes aux systèmes robotiques intelligents.",
    'about.p2': 'Ma spécialité ? Créer des ponts entre le <strong>développement logiciel</strong>, la <strong>robotique</strong> et le <strong>machine learning</strong> pour construire des solutions innovantes et complètes.',
    'about.highlight.fullstack.title': 'Fullstack',
    'about.highlight.fullstack.desc': 'Applications web & mobile complètes',
    'about.highlight.robotics.title': 'Robotique',
    'about.highlight.robotics.desc': 'Systèmes embarqués & automatisation',
    'about.highlight.ml.title': 'Machine Learning',
    'about.highlight.ml.desc': 'Vision par ordinateur & IA appliquée',
    'about.techStack': 'Stack Technologique',

    // Projects
    'projects.tag': 'Projets',
    'projects.title': 'Mes <span class="gradient-text">réalisations</span>',
    'projects.subtitle': 'Une sélection de projets qui démontrent mon expertise dans différents domaines.',
    'projects.filterAll': 'Tous',
    'projects.filterFullstack': 'Fullstack',
    'projects.filterRobotics': 'Robotique',
    'projects.filterML': 'Machine Learning',
    'projects.viewDetails': 'Voir les détails →',
    'projects.sourceCode': 'Code Source',
    'projects.viewDemo': 'Voir la Demo',

    // Learning
    'learning.tag': 'Apprentissage',
    'learning.title': 'Projets <span class="gradient-text">d\'exploration</span>',
    'learning.subtitle': 'Expérimentations et apprentissages continus pour repousser mes limites.',
    'learning.badgeLearning': '📚 Learning',
    'learning.badgeExperiment': '🧪 Experiment',

    // Skills
    'skills.tag': 'Compétences',
    'skills.title': 'Mon <span class="gradient-text">expertise</span>',
    'skills.subtitle': "L'ensemble de mes compétences diversifié couvrant le développement, la robotique et l'IA.",

    // Contact
    'contact.tag': 'Contact',
    'contact.title': 'Travaillons <span class="gradient-text">ensemble</span>',
    'contact.subtitle': "Vous avez un projet en tête ? N'hésitez pas à me contacter.",
    'contact.email': 'Mon Email',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedinLink': 'Mon profil LinkedIn',
    'contact.github': 'GitHub',
    'contact.githubLink': 'Mon GitHub',

    // Footer
    'footer.home': 'Accueil',
    'footer.about': 'À Propos',
    'footer.projects': 'Projets',
    'footer.skills': 'Compétences',
    'footer.contact': 'Contact',
    'footer.built': 'Built with ❤️ and code — ',
  },

  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.learning': 'Learning',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge': 'Available for projects',
    'hero.titleLine1': 'Alban, Developer',
    'hero.description': '',
    'hero.descriptionHTML': `I craft innovative digital experiences at the intersection of <strong>fullstack development</strong>, <strong>robotics</strong> and <strong>machine learning</strong>.`,
    'hero.cta.projects': 'View my projects',
    'hero.cta.contact': 'Get in touch',
    'hero.stat.projects': 'Projects',
    'hero.stat.technologies': 'Technologies',
    'hero.stat.domains': 'Domains',

    // About
    'about.tag': 'About',
    'about.title': 'Passionate about <span class="gradient-text">technology</span>',
    'about.subtitle': 'A multidisciplinary approach that combines code, hardware and artificial intelligence.',
    'about.p1': "Passionate fullstack developer, I explore the boundaries between the digital and physical worlds. My journey has led me to work on varied projects, ranging from modern web applications to intelligent robotic systems.",
    'about.p2': 'My specialty? Building bridges between <strong>software development</strong>, <strong>robotics</strong> and <strong>machine learning</strong> to create innovative and complete solutions.',
    'about.highlight.fullstack.title': 'Fullstack',
    'about.highlight.fullstack.desc': 'Complete web & mobile applications',
    'about.highlight.robotics.title': 'Robotics',
    'about.highlight.robotics.desc': 'Embedded systems & automation',
    'about.highlight.ml.title': 'Machine Learning',
    'about.highlight.ml.desc': 'Computer vision & applied AI',
    'about.techStack': 'Tech Stack',

    // Projects
    'projects.tag': 'Projects',
    'projects.title': 'My <span class="gradient-text">work</span>',
    'projects.subtitle': 'A selection of projects that demonstrate my expertise across different domains.',
    'projects.filterAll': 'All',
    'projects.filterFullstack': 'Fullstack',
    'projects.filterRobotics': 'Robotics',
    'projects.filterML': 'Machine Learning',
    'projects.viewDetails': 'View details →',
    'projects.sourceCode': 'Source Code',
    'projects.viewDemo': 'View Demo',

    // Learning
    'learning.tag': 'Learning',
    'learning.title': '<span class="gradient-text">Exploration</span> projects',
    'learning.subtitle': 'Continuous experimentation and learning to push my boundaries.',
    'learning.badgeLearning': '📚 Learning',
    'learning.badgeExperiment': '🧪 Experiment',

    // Skills
    'skills.tag': 'Skills',
    'skills.title': 'My <span class="gradient-text">expertise</span>',
    'skills.subtitle': 'My diverse skill set covering development, robotics and AI.',

    // Contact
    'contact.tag': 'Contact',
    'contact.title': "Let's work <span class=\"gradient-text\">together</span>",
    'contact.subtitle': 'Have a project in mind? Feel free to reach out.',
    'contact.email': 'My Email',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedinLink': 'My LinkedIn profile',
    'contact.github': 'GitHub',
    'contact.githubLink': 'My GitHub',

    // Footer
    'footer.home': 'Home',
    'footer.about': 'About',
    'footer.projects': 'Projects',
    'footer.skills': 'Skills',
    'footer.contact': 'Contact',
    'footer.built': 'Built with ❤️ and code — ',
  },
}

// ─── Dynamic content translations (projects, learning, skills) ───

export interface ProjectTranslation {
  title: string
  description: string
  longDescription: string
}

export const projectTranslations: Record<Lang, ProjectTranslation[]> = {
  fr: [
    { title: 'Maltos.dev (Agence Web)', description: 'Site vitrine moderne pour une agence de développement web avec animations immersives, tarification et formulaire de contact.', longDescription: "Site d'agence de développement web conçu avec Next.js 13 et Framer Motion. Inclut des sections interactives pour les services, la tarification, le portfolio de réalisations, l'équipe et une FAQ. Animations fluides avec Framer Motion, design responsive avec Tailwind CSS, formulaire de contact fonctionnel via EmailJS, et mode sombre/clair avec next-themes." },
    { title: 'Robot Autonome de Cartographie', description: 'Robot mobile autonome capable de cartographier un environnement inconnu avec SLAM et navigation intelligente.', longDescription: "Robot autonome construit sur une base ROS2. Utilise un LiDAR pour la cartographie SLAM (Simultaneous Localization and Mapping), une caméra stéréo pour la détection d'obstacles, et un algorithme de navigation A* pour le path planning. Interface web de visualisation en temps réel." },
    { title: "Détection d'Objets en Temps Réel", description: "Système de vision par ordinateur pour la détection et classification d'objets en temps réel sur flux vidéo.", longDescription: "Pipeline de vision par ordinateur utilisant YOLOv8 pour la détection d'objets en temps réel. Entraîné sur un dataset personnalisé pour la détection de composants électroniques. Déployé sur NVIDIA Jetson pour l'inférence embedded. Interface web avec WebSocket pour le streaming des résultats." },
    { title: 'Dashboard Analytics SaaS', description: 'Application SaaS de visualisation de données avec graphiques interactifs et rapports automatisés.', longDescription: 'Dashboard SaaS développé avec React et D3.js pour la visualisation de données en temps réel. Backend Node.js avec API GraphQL, authentification multi-tenant, exports PDF/CSV automatisés. Déploiement containerisé avec Docker et Kubernetes.' },
    { title: "Tracker d'habitudes gamifié (hackathon winner)", description: "Tracker d'habitudes gamifié avec récompenses et défis fait dans le cadre du hackathon HackDécouverte de 2025", longDescription: "🐜 TrakAnt — Transformez votre productivité en jeu. Une application Android (Jetpack Compose) où chaque habitude fait grandir votre colonie de fourmis. Développée pour HackDécouverte 2025. " },
    { title: 'Modèle NLP Sentiment Analysis', description: "Modèle de traitement du langage naturel pour l'analyse de sentiment multi-langue à grande échelle.", longDescription: "Modèle Transformer fine-tuné sur BERT pour l'analyse de sentiment multi-langue (FR, EN, ES). Pipeline MLOps complet avec DVC pour le versioning des données, MLflow pour le tracking des expériences, et déploiement via FastAPI avec monitoring Prometheus/Grafana." },
  ],
  en: [
    { title: 'Maltos.dev (Web Agency)', description: 'Modern showcase site for a web development agency with immersive animations, pricing, and contact form.', longDescription: 'Web development agency site built with Next.js 13 and Framer Motion. Features interactive sections for services, pricing plans, project portfolio, team, and FAQ. Smooth animations with Framer Motion, responsive design with Tailwind CSS, functional contact form via EmailJS, and dark/light mode with next-themes.' },
    { title: 'Autonomous Mapping Robot', description: 'Autonomous mobile robot capable of mapping unknown environments with SLAM and smart navigation.', longDescription: 'Autonomous robot built on ROS2. Uses LiDAR for SLAM mapping (Simultaneous Localization and Mapping), a stereo camera for obstacle detection, and an A* navigation algorithm for path planning. Real-time web visualization interface.' },
    { title: 'Real-Time Object Detection', description: 'Computer vision system for real-time object detection and classification on video streams.', longDescription: 'Computer vision pipeline using YOLOv8 for real-time object detection. Trained on a custom dataset for electronic component detection. Deployed on NVIDIA Jetson for embedded inference. Web interface with WebSocket for result streaming.' },
    { title: 'SaaS Analytics Dashboard', description: 'SaaS data visualization app with interactive charts and automated reports.', longDescription: 'SaaS dashboard built with React and D3.js for real-time data visualization. Node.js backend with GraphQL API, multi-tenant authentication, automated PDF/CSV exports. Containerized deployment with Docker and Kubernetes.' },
    { title: 'Gamified Habit Tracker (hackathon winner)', description: 'Gamified habit tracker with rewards and challenges built during the HackDécouverte 2025 hackathon', longDescription: '🐜 TrakAnt — Turn your productivity into a game. An Android app (Jetpack Compose) where every habit grows your ant colony. Developed for HackDécouverte 2025.' },
    { title: 'NLP Sentiment Analysis Model', description: 'Natural language processing model for large-scale multi-language sentiment analysis.', longDescription: 'Transformer model fine-tuned on BERT for multi-language sentiment analysis (FR, EN, ES). Complete MLOps pipeline with DVC for data versioning, MLflow for experiment tracking, and deployment via FastAPI with Prometheus/Grafana monitoring.' },
  ],
}

export interface LearningTranslation {
  title: string
  description: string
}

export const learningTranslations: Record<Lang, LearningTranslation[]> = {
  fr: [
    { title: 'Algorithmes de Tri Visualisés', description: "Visualisation interactive de différents algorithmes de tri avec animations step-by-step." },
    { title: 'Chat Bot avec Raspberry Pi', description: "Assistant vocal embarqué sur Raspberry Pi avec reconnaissance vocale et synthèse TTS." },
    { title: 'Réseau de Neurones from Scratch', description: "Implémentation complète d'un MLP en Python pur, sans frameworks, pour comprendre le backpropagation." },
    { title: 'API REST avec Express', description: "API CRUD complète avec authentification JWT, validation, rate limiting et documentation Swagger." },
    { title: 'Suiveur de Ligne Arduino', description: "Robot suiveur de ligne avec capteurs IR, PID controller et calibration automatique." },
    { title: "GAN - Génération d'Images", description: "Expérimentation avec les GANs pour la génération d'images de paysages artificiels." },
    { title: 'Composants React Custom', description: "Bibliothèque de composants React réutilisables avec Storybook et tests unitaires." },
    { title: "Contrôle de Drone par OpenCV", description: "Contrôle autonome d'un drone Tello via détection de gestes avec OpenCV et MediaPipe." },
  ],
  en: [
    { title: 'Visualized Sorting Algorithms', description: 'Interactive visualization of different sorting algorithms with step-by-step animations.' },
    { title: 'Raspberry Pi Chat Bot', description: 'Embedded voice assistant on Raspberry Pi with speech recognition and TTS.' },
    { title: 'Neural Network from Scratch', description: 'Complete MLP implementation in pure Python, without frameworks, to understand backpropagation.' },
    { title: 'REST API with Express', description: 'Complete CRUD API with JWT authentication, validation, rate limiting and Swagger documentation.' },
    { title: 'Arduino Line Follower', description: 'Line follower robot with IR sensors, PID controller and automatic calibration.' },
    { title: 'GAN - Image Generation', description: 'Experimentation with GANs for generating artificial landscape images.' },
    { title: 'Custom React Components', description: 'Reusable React component library with Storybook and unit tests.' },
    { title: 'Drone Control with OpenCV', description: 'Autonomous Tello drone control via gesture detection with OpenCV and MediaPipe.' },
  ],
}

export const skillCategoryTranslations: Record<Lang, Record<string, string>> = {
  fr: {
    'Robotique': 'Robotique',
    'DevOps & Outils': 'DevOps & Outils',
    'CAO / Impression 3D': 'CAO / Impression 3D',
    'MLOps / Déploiement': 'MLOps / Déploiement',
  },
  en: {
    'Robotique': 'Robotics',
    'DevOps & Outils': 'DevOps & Tools',
    'CAO / Impression 3D': 'CAD / 3D Printing',
    'MLOps / Déploiement': 'MLOps / Deployment',
  },
}

export const typingTitles: Record<Lang, string[]> = {
  fr: ['Fullstack', 'Robotique', 'Machine Learning'],
  en: ['Fullstack', 'Robotics', 'Machine Learning'],
}

export const categoryLabels: Record<Lang, Record<string, string>> = {
  fr: {
    fullstack: '🌐 Fullstack',
    robotics: '🤖 Robotique',
    ml: '🧠 Machine Learning',
  },
  en: {
    fullstack: '🌐 Fullstack',
    robotics: '🤖 Robotics',
    ml: '🧠 Machine Learning',
  },
}

// ─── Core i18n functions ───

let currentLang: Lang = 'fr'

export function getLang(): Lang {
  return currentLang
}

export function t(key: string): string {
  return translations[currentLang][key] || key
}

export function setLanguage(lang: Lang) {
  currentLang = lang
  localStorage.setItem('lang', lang)
  document.documentElement.lang = lang

  // Update all static elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')!
    const value = translations[lang][key]
    if (value !== undefined) {
      // Use innerHTML for keys that contain HTML (titles with spans, descriptions with strong tags)
      if (value.includes('<')) {
        el.innerHTML = value
      } else {
        el.textContent = value
      }
    }
  })

  // Dispatch event for dynamic modules
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }))
}

export function initLang() {
  const saved = localStorage.getItem('lang') as Lang | null
  if (saved && (saved === 'fr' || saved === 'en')) {
    currentLang = saved
    document.documentElement.lang = saved
  }
}
