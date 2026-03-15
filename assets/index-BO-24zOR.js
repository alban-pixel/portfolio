(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const _d={fr:{"nav.home":"Accueil","nav.about":"À Propos","nav.projects":"Projets","nav.learning":"Apprentissage","nav.skills":"Compétences","nav.contact":"Contact","hero.badge":"Disponible pour des projets","hero.titleLine1":"Alban, Développeur","hero.description":"","hero.descriptionHTML":"Je conçois des expériences numériques innovantes à l'intersection du <strong>développement fullstack</strong>, de la <strong>robotique</strong> et du <strong>machine learning</strong>.","hero.cta.projects":"Voir mes projets","hero.cta.contact":"Me contacter","hero.stat.projects":"Projets","hero.stat.technologies":"Technologies","hero.stat.domains":"Domaines","about.tag":"À Propos","about.title":'Passionné par la <span class="gradient-text">technologie</span>',"about.subtitle":"Une approche multidisciplinaire qui combine code, hardware et intelligence artificielle.","about.p1":"Développeur fullstack passionné, j'explore les frontières entre le monde numérique et physique. Mon parcours m'a amené à travailler sur des projets variés, allant des applications web modernes aux systèmes robotiques intelligents.","about.p2":"Ma spécialité ? Créer des ponts entre le <strong>développement logiciel</strong>, la <strong>robotique</strong> et le <strong>machine learning</strong> pour construire des solutions innovantes et complètes.","about.highlight.fullstack.title":"Fullstack","about.highlight.fullstack.desc":"Applications web & mobile complètes","about.highlight.robotics.title":"Robotique","about.highlight.robotics.desc":"Systèmes embarqués & automatisation","about.highlight.ml.title":"Machine Learning","about.highlight.ml.desc":"Vision par ordinateur & IA appliquée","about.techStack":"Stack Technologique","projects.tag":"Projets","projects.title":'Mes <span class="gradient-text">réalisations</span>',"projects.subtitle":"Une sélection de projets qui démontrent mon expertise dans différents domaines.","projects.filterAll":"Tous","projects.filterFullstack":"Fullstack","projects.filterRobotics":"Robotique","projects.filterML":"Machine Learning","projects.viewDetails":"Voir les détails →","projects.sourceCode":"Code Source","projects.viewDemo":"Voir la Demo","learning.tag":"Apprentissage","learning.title":`Projets <span class="gradient-text">d'exploration</span>`,"learning.subtitle":"Expérimentations et apprentissages continus pour repousser mes limites.","learning.badgeLearning":"📚 Learning","learning.badgeExperiment":"🧪 Experiment","skills.tag":"Compétences","skills.title":'Mon <span class="gradient-text">expertise</span>',"skills.subtitle":"L'ensemble de mes compétences diversifié couvrant le développement, la robotique et l'IA.","contact.tag":"Contact","contact.title":'Travaillons <span class="gradient-text">ensemble</span>',"contact.subtitle":"Vous avez un projet en tête ? N'hésitez pas à me contacter.","contact.email":"Mon Email","contact.linkedin":"LinkedIn","contact.linkedinLink":"Mon profil LinkedIn","contact.github":"GitHub","contact.githubLink":"Mon GitHub","footer.home":"Accueil","footer.about":"À Propos","footer.projects":"Projets","footer.skills":"Compétences","footer.contact":"Contact","footer.built":"Built with ❤️ and code — "},en:{"nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.learning":"Learning","nav.skills":"Skills","nav.contact":"Contact","hero.badge":"Available for projects","hero.titleLine1":"Alban, Developer","hero.description":"","hero.descriptionHTML":"I craft innovative digital experiences at the intersection of <strong>fullstack development</strong>, <strong>robotics</strong> and <strong>machine learning</strong>.","hero.cta.projects":"View my projects","hero.cta.contact":"Get in touch","hero.stat.projects":"Projects","hero.stat.technologies":"Technologies","hero.stat.domains":"Domains","about.tag":"About","about.title":'Passionate about <span class="gradient-text">technology</span>',"about.subtitle":"A multidisciplinary approach that combines code, hardware and artificial intelligence.","about.p1":"Passionate fullstack developer, I explore the boundaries between the digital and physical worlds. My journey has led me to work on varied projects, ranging from modern web applications to intelligent robotic systems.","about.p2":"My specialty? Building bridges between <strong>software development</strong>, <strong>robotics</strong> and <strong>machine learning</strong> to create innovative and complete solutions.","about.highlight.fullstack.title":"Fullstack","about.highlight.fullstack.desc":"Complete web & mobile applications","about.highlight.robotics.title":"Robotics","about.highlight.robotics.desc":"Embedded systems & automation","about.highlight.ml.title":"Machine Learning","about.highlight.ml.desc":"Computer vision & applied AI","about.techStack":"Tech Stack","projects.tag":"Projects","projects.title":'My <span class="gradient-text">work</span>',"projects.subtitle":"A selection of projects that demonstrate my expertise across different domains.","projects.filterAll":"All","projects.filterFullstack":"Fullstack","projects.filterRobotics":"Robotics","projects.filterML":"Machine Learning","projects.viewDetails":"View details →","projects.sourceCode":"Source Code","projects.viewDemo":"View Demo","learning.tag":"Learning","learning.title":'<span class="gradient-text">Exploration</span> projects',"learning.subtitle":"Continuous experimentation and learning to push my boundaries.","learning.badgeLearning":"📚 Learning","learning.badgeExperiment":"🧪 Experiment","skills.tag":"Skills","skills.title":'My <span class="gradient-text">expertise</span>',"skills.subtitle":"My diverse skill set covering development, robotics and AI.","contact.tag":"Contact","contact.title":`Let's work <span class="gradient-text">together</span>`,"contact.subtitle":"Have a project in mind? Feel free to reach out.","contact.email":"My Email","contact.linkedin":"LinkedIn","contact.linkedinLink":"My LinkedIn profile","contact.github":"GitHub","contact.githubLink":"My GitHub","footer.home":"Home","footer.about":"About","footer.projects":"Projects","footer.skills":"Skills","footer.contact":"Contact","footer.built":"Built with ❤️ and code — "}},Cf={fr:[{title:"Maltos.dev (Agence Web)",description:"Site vitrine moderne pour une agence de développement web avec animations immersives, tarification et formulaire de contact.",longDescription:"Site d'agence de développement web conçu avec Next.js 13 et Framer Motion. Inclut des sections interactives pour les services, la tarification, le portfolio de réalisations, l'équipe et une FAQ. Animations fluides avec Framer Motion, design responsive avec Tailwind CSS, formulaire de contact fonctionnel via EmailJS, et mode sombre/clair avec next-themes."},{title:"Robot Autonome de Cartographie",description:"Robot mobile autonome capable de cartographier un environnement inconnu avec SLAM et navigation intelligente.",longDescription:"Robot autonome construit sur une base ROS2. Utilise un LiDAR pour la cartographie SLAM (Simultaneous Localization and Mapping), une caméra stéréo pour la détection d'obstacles, et un algorithme de navigation A* pour le path planning. Interface web de visualisation en temps réel."},{title:"Détection d'Objets en Temps Réel",description:"Système de vision par ordinateur pour la détection et classification d'objets en temps réel sur flux vidéo.",longDescription:"Pipeline de vision par ordinateur utilisant YOLOv8 pour la détection d'objets en temps réel. Entraîné sur un dataset personnalisé pour la détection de composants électroniques. Déployé sur NVIDIA Jetson pour l'inférence embedded. Interface web avec WebSocket pour le streaming des résultats."},{title:"Dashboard Analytics SaaS",description:"Application SaaS de visualisation de données avec graphiques interactifs et rapports automatisés.",longDescription:"Dashboard SaaS développé avec React et D3.js pour la visualisation de données en temps réel. Backend Node.js avec API GraphQL, authentification multi-tenant, exports PDF/CSV automatisés. Déploiement containerisé avec Docker et Kubernetes."},{title:"Tracker d'habitudes gamifié (hackathon winner)",description:"Tracker d'habitudes gamifié avec récompenses et défis fait dans le cadre du hackathon HackDécouverte de 2025",longDescription:"🐜 TrakAnt — Transformez votre productivité en jeu. Une application Android (Jetpack Compose) où chaque habitude fait grandir votre colonie de fourmis. Développée pour HackDécouverte 2025. "},{title:"Modèle NLP Sentiment Analysis",description:"Modèle de traitement du langage naturel pour l'analyse de sentiment multi-langue à grande échelle.",longDescription:"Modèle Transformer fine-tuné sur BERT pour l'analyse de sentiment multi-langue (FR, EN, ES). Pipeline MLOps complet avec DVC pour le versioning des données, MLflow pour le tracking des expériences, et déploiement via FastAPI avec monitoring Prometheus/Grafana."}],en:[{title:"Maltos.dev (Web Agency)",description:"Modern showcase site for a web development agency with immersive animations, pricing, and contact form.",longDescription:"Web development agency site built with Next.js 13 and Framer Motion. Features interactive sections for services, pricing plans, project portfolio, team, and FAQ. Smooth animations with Framer Motion, responsive design with Tailwind CSS, functional contact form via EmailJS, and dark/light mode with next-themes."},{title:"Autonomous Mapping Robot",description:"Autonomous mobile robot capable of mapping unknown environments with SLAM and smart navigation.",longDescription:"Autonomous robot built on ROS2. Uses LiDAR for SLAM mapping (Simultaneous Localization and Mapping), a stereo camera for obstacle detection, and an A* navigation algorithm for path planning. Real-time web visualization interface."},{title:"Real-Time Object Detection",description:"Computer vision system for real-time object detection and classification on video streams.",longDescription:"Computer vision pipeline using YOLOv8 for real-time object detection. Trained on a custom dataset for electronic component detection. Deployed on NVIDIA Jetson for embedded inference. Web interface with WebSocket for result streaming."},{title:"SaaS Analytics Dashboard",description:"SaaS data visualization app with interactive charts and automated reports.",longDescription:"SaaS dashboard built with React and D3.js for real-time data visualization. Node.js backend with GraphQL API, multi-tenant authentication, automated PDF/CSV exports. Containerized deployment with Docker and Kubernetes."},{title:"Gamified Habit Tracker (hackathon winner)",description:"Gamified habit tracker with rewards and challenges built during the HackDécouverte 2025 hackathon",longDescription:"🐜 TrakAnt — Turn your productivity into a game. An Android app (Jetpack Compose) where every habit grows your ant colony. Developed for HackDécouverte 2025."},{title:"NLP Sentiment Analysis Model",description:"Natural language processing model for large-scale multi-language sentiment analysis.",longDescription:"Transformer model fine-tuned on BERT for multi-language sentiment analysis (FR, EN, ES). Complete MLOps pipeline with DVC for data versioning, MLflow for experiment tracking, and deployment via FastAPI with Prometheus/Grafana monitoring."}]},Sm={fr:[{title:"Algorithmes de Tri Visualisés",description:"Visualisation interactive de différents algorithmes de tri avec animations step-by-step."},{title:"Chat Bot avec Raspberry Pi",description:"Assistant vocal embarqué sur Raspberry Pi avec reconnaissance vocale et synthèse TTS."},{title:"Réseau de Neurones from Scratch",description:"Implémentation complète d'un MLP en Python pur, sans frameworks, pour comprendre le backpropagation."},{title:"API REST avec Express",description:"API CRUD complète avec authentification JWT, validation, rate limiting et documentation Swagger."},{title:"Suiveur de Ligne Arduino",description:"Robot suiveur de ligne avec capteurs IR, PID controller et calibration automatique."},{title:"GAN - Génération d'Images",description:"Expérimentation avec les GANs pour la génération d'images de paysages artificiels."},{title:"Composants React Custom",description:"Bibliothèque de composants React réutilisables avec Storybook et tests unitaires."},{title:"Contrôle de Drone par OpenCV",description:"Contrôle autonome d'un drone Tello via détection de gestes avec OpenCV et MediaPipe."}],en:[{title:"Visualized Sorting Algorithms",description:"Interactive visualization of different sorting algorithms with step-by-step animations."},{title:"Raspberry Pi Chat Bot",description:"Embedded voice assistant on Raspberry Pi with speech recognition and TTS."},{title:"Neural Network from Scratch",description:"Complete MLP implementation in pure Python, without frameworks, to understand backpropagation."},{title:"REST API with Express",description:"Complete CRUD API with JWT authentication, validation, rate limiting and Swagger documentation."},{title:"Arduino Line Follower",description:"Line follower robot with IR sensors, PID controller and automatic calibration."},{title:"GAN - Image Generation",description:"Experimentation with GANs for generating artificial landscape images."},{title:"Custom React Components",description:"Reusable React component library with Storybook and unit tests."},{title:"Drone Control with OpenCV",description:"Autonomous Tello drone control via gesture detection with OpenCV and MediaPipe."}]},ym={fr:{Robotique:"Robotique","DevOps & Outils":"DevOps & Outils","CAO / Impression 3D":"CAO / Impression 3D","MLOps / Déploiement":"MLOps / Déploiement"},en:{Robotique:"Robotics","DevOps & Outils":"DevOps & Tools","CAO / Impression 3D":"CAD / 3D Printing","MLOps / Déploiement":"MLOps / Deployment"}},Rf={fr:["Fullstack","Robotique","Machine Learning"],en:["Fullstack","Robotics","Machine Learning"]},Pf={fr:{fullstack:"🌐 Fullstack",robotics:"🤖 Robotique",ml:"🧠 Machine Learning"},en:{fullstack:"🌐 Fullstack",robotics:"🤖 Robotics",ml:"🧠 Machine Learning"}};let _l="fr";function Sr(){return _l}function Sa(r){return _d[_l][r]||r}function Sc(r){_l=r,localStorage.setItem("lang",r),document.documentElement.lang=r,document.querySelectorAll("[data-i18n]").forEach(e=>{const t=e.getAttribute("data-i18n"),n=_d[r][t];n!==void 0&&(n.includes("<")?e.innerHTML=n:e.textContent=n)}),window.dispatchEvent(new CustomEvent("languageChanged",{detail:{lang:r}}))}function Em(){const r=localStorage.getItem("lang");r&&(r==="fr"||r==="en")&&(_l=r,document.documentElement.lang=r)}function bm(){Em();const r=localStorage.getItem("lang");if(r==="fr"||r==="en"){Sc(r);return}const e=document.getElementById("lang-popup-overlay");if(!e)return;e.classList.add("active"),document.body.style.overflow="hidden";const t=document.getElementById("lang-btn-fr"),n=document.getElementById("lang-btn-en");function i(s){Sc(s),e.classList.add("closing"),setTimeout(()=>{e.classList.remove("active","closing"),document.body.style.overflow=""},400)}t?.addEventListener("click",()=>i("fr")),n?.addEventListener("click",()=>i("en"))}const zu="183",Tm=0,Df=1,Am=2,Bo=1,wm=2,fa=3,yr=0,Dn=1,Wi=2,$i=0,Ps=1,yc=2,Lf=3,If=4,Cm=5,Vr=100,Rm=101,Pm=102,Dm=103,Lm=104,Im=200,Um=201,Nm=202,Fm=203,Ec=204,bc=205,Om=206,Bm=207,km=208,zm=209,Vm=210,Gm=211,Hm=212,Wm=213,Xm=214,Tc=0,Ac=1,wc=2,Bs=3,Cc=4,Rc=5,Pc=6,Dc=7,gd=0,qm=1,Ym=2,Ri=0,vd=1,xd=2,Md=3,Sd=4,yd=5,Ed=6,bd=7,Td=300,es=301,ks=302,Tl=303,Al=304,gl=306,Lc=1e3,qi=1001,Ic=1002,an=1003,$m=1004,Ja=1005,vn=1006,wl=1007,Hr=1008,ai=1009,Ad=1010,wd=1011,Na=1012,Vu=1013,Li=1014,Ti=1015,Zi=1016,Gu=1017,Hu=1018,Fa=1020,Cd=35902,Rd=35899,Pd=1021,Dd=1022,_i=1023,Ji=1026,Wr=1027,Ld=1028,Wu=1029,zs=1030,Xu=1031,qu=1033,ko=33776,zo=33777,Vo=33778,Go=33779,Uc=35840,Nc=35841,Fc=35842,Oc=35843,Bc=36196,kc=37492,zc=37496,Vc=37488,Gc=37489,Hc=37490,Wc=37491,Xc=37808,qc=37809,Yc=37810,$c=37811,jc=37812,Kc=37813,Zc=37814,Jc=37815,Qc=37816,eu=37817,tu=37818,nu=37819,iu=37820,ru=37821,su=36492,au=36494,ou=36495,lu=36283,cu=36284,uu=36285,fu=36286,jm=3200,Km=0,Zm=1,fr="",ni="srgb",Vs="srgb-linear",Qo="linear",gt="srgb",ls=7680,Uf=519,Jm=512,Qm=513,e_=514,Yu=515,t_=516,n_=517,$u=518,i_=519,Nf=35044,Ff="300 es",Ai=2e3,el=2001;function r_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function tl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function s_(){const r=tl("canvas");return r.style.display="block",r}const Of={};function Bf(...r){const e="THREE."+r.shift();console.log(e,...r)}function Id(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Xe(...r){r=Id(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ft(...r){r=Id(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function nl(...r){const e=r.join(" ");e in Of||(Of[e]=!0,Xe(...r))}function a_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const o_={[Tc]:Ac,[wc]:Pc,[Cc]:Dc,[Bs]:Rc,[Ac]:Tc,[Pc]:wc,[Dc]:Cc,[Rc]:Bs};class Ks{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cl=Math.PI/180,hu=180/Math.PI;function Ya(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function st(r,e,t){return Math.max(e,Math.min(t,r))}function l_(r,e){return(r%e+e)%e}function Rl(r,e,t){return(1-t)*r+t*e}function ea(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(e=0,t=0){Mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],f=s[a+0],h=s[a+1],_=s[a+2],g=s[a+3];if(d!==g||l!==f||c!==h||u!==_){let p=l*f+c*h+u*_+d*g;p<0&&(f=-f,h=-h,_=-_,g=-g,p=-p);let m=1-o;if(p<.9995){const M=Math.acos(p),b=Math.sin(M);m=Math.sin(m*M)/b,o=Math.sin(o*M)/b,l=l*m+f*o,c=c*m+h*o,u=u*m+_*o,d=d*m+g*o}else{l=l*m+f*o,c=c*m+h*o,u=u*m+_*o,d=d*m+g*o;const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],f=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+u*d+l*h-c*f,e[t+1]=l*_+u*f+c*d-o*h,e[t+2]=c*_+u*h+o*f-l*d,e[t+3]=u*_-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),f=l(n/2),h=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-i)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pl.copy(this).projectOnVector(e),this.sub(Pl)}reflect(e){return this.sub(Pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pl=new X,kf=new Zs;class Je{constructor(e,t,n,i,s,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],_=n[8],g=i[0],p=i[3],m=i[6],M=i[1],b=i[4],S=i[7],T=i[2],A=i[5],w=i[8];return s[0]=a*g+o*M+l*T,s[3]=a*p+o*b+l*A,s[6]=a*m+o*S+l*w,s[1]=c*g+u*M+d*T,s[4]=c*p+u*b+d*A,s[7]=c*m+u*S+d*w,s[2]=f*g+h*M+_*T,s[5]=f*p+h*b+_*A,s[8]=f*m+h*S+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,_=t*d+n*f+i*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=h*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Dl.makeScale(e,t)),this}rotate(e){return this.premultiply(Dl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dl=new Je,zf=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vf=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function c_(){const r={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===gt&&(i.r=ji(i.r),i.g=ji(i.g),i.b=ji(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(i.r=Ds(i.r),i.g=Ds(i.g),i.b=Ds(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fr?Qo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return nl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return nl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Vs]:{primaries:e,whitePoint:n,transfer:Qo,toXYZ:zf,fromXYZ:Vf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:zf,fromXYZ:Vf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),r}const lt=c_();function ji(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ds(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let cs;class u_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{cs===void 0&&(cs=tl("canvas")),cs.width=e.width,cs.height=e.height;const i=cs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=cs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ji(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let f_=0;class ju{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=Ya(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ll(i[a].image)):s.push(Ll(i[a]))}else s=Ll(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ll(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?u_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let h_=0;const Il=new X;class wn extends Ks{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,n=qi,i=qi,s=vn,a=Hr,o=_i,l=ai,c=wn.DEFAULT_ANISOTROPY,u=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=Ya(),this.name="",this.source=new ju(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Il).x}get height(){return this.source.getSize(Il).y}get depth(){return this.source.getSize(Il).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Td)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lc:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case Ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lc:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case Ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Td;wn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,n=0,i=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(h+1)/2,T=(m+1)/2,A=(u+f)/4,w=(d+g)/4,v=(_+p)/4;return b>S&&b>T?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=A/n,s=w/n):S>T?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=v/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=w/s,i=v/s),this.set(n,i,s,t),this}let M=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(d-g)/M,this.z=(f-u)/M,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class d_ extends Ks{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new wn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ju(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends d_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ud extends wn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class p_ extends wn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nt{constructor(e,t,n,i,s,a,o,l,c,u,d,f,h,_,g,p){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,f,h,_,g,p)}set(e,t,n,i,s,a,o,l,c,u,d,f,h,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),a=1/us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+_*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,_=c*u,g=c*d;t[0]=f+g*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,_=c*u,g=c*d;t[0]=f-g*o,t[4]=-a*d,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=_*c-h,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-f*d,t[8]=_*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=a*l,h=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=a*u,t[9]=h*d-_,t[2]=_*d-h,t[6]=o*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m_,e,__)}lookAt(e,t,n){const i=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),rr.crossVectors(n,kn),rr.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),rr.crossVectors(n,kn)),rr.normalize(),Qa.crossVectors(kn,rr),i[0]=rr.x,i[4]=Qa.x,i[8]=kn.x,i[1]=rr.y,i[5]=Qa.y,i[9]=kn.y,i[2]=rr.z,i[6]=Qa.z,i[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],_=n[2],g=n[6],p=n[10],m=n[14],M=n[3],b=n[7],S=n[11],T=n[15],A=i[0],w=i[4],v=i[8],y=i[12],U=i[1],R=i[5],I=i[9],k=i[13],V=i[2],z=i[6],B=i[10],O=i[14],J=i[3],Q=i[7],P=i[11],le=i[15];return s[0]=a*A+o*U+l*V+c*J,s[4]=a*w+o*R+l*z+c*Q,s[8]=a*v+o*I+l*B+c*P,s[12]=a*y+o*k+l*O+c*le,s[1]=u*A+d*U+f*V+h*J,s[5]=u*w+d*R+f*z+h*Q,s[9]=u*v+d*I+f*B+h*P,s[13]=u*y+d*k+f*O+h*le,s[2]=_*A+g*U+p*V+m*J,s[6]=_*w+g*R+p*z+m*Q,s[10]=_*v+g*I+p*B+m*P,s[14]=_*y+g*k+p*O+m*le,s[3]=M*A+b*U+S*V+T*J,s[7]=M*w+b*R+S*z+T*Q,s[11]=M*v+b*I+S*B+T*P,s[15]=M*y+b*k+S*O+T*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],g=e[7],p=e[11],m=e[15],M=l*h-c*f,b=o*h-c*d,S=o*f-l*d,T=a*h-c*u,A=a*f-l*u,w=a*d-o*u;return t*(g*M-p*b+m*S)-n*(_*M-p*T+m*A)+i*(_*b-g*T+m*w)-s*(_*S-g*A+p*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],g=e[13],p=e[14],m=e[15],M=t*o-n*a,b=t*l-i*a,S=t*c-s*a,T=n*l-i*o,A=n*c-s*o,w=i*c-s*l,v=u*g-d*_,y=u*p-f*_,U=u*m-h*_,R=d*p-f*g,I=d*m-h*g,k=f*m-h*p,V=M*k-b*I+S*R+T*U-A*y+w*v;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/V;return e[0]=(o*k-l*I+c*R)*z,e[1]=(i*I-n*k-s*R)*z,e[2]=(g*w-p*A+m*T)*z,e[3]=(f*A-d*w-h*T)*z,e[4]=(l*U-a*k-c*y)*z,e[5]=(t*k-i*U+s*y)*z,e[6]=(p*S-_*w-m*b)*z,e[7]=(u*w-f*S+h*b)*z,e[8]=(a*I-o*U+c*v)*z,e[9]=(n*U-t*I-s*v)*z,e[10]=(_*A-g*S+m*M)*z,e[11]=(d*S-u*A-h*M)*z,e[12]=(o*y-a*R-l*v)*z,e[13]=(t*R-n*y+i*v)*z,e[14]=(g*b-_*T-p*M)*z,e[15]=(u*T-d*b+f*M)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,_=s*d,g=a*u,p=a*d,m=o*d,M=l*c,b=l*u,S=l*d,T=n.x,A=n.y,w=n.z;return i[0]=(1-(g+m))*T,i[1]=(h+S)*T,i[2]=(_-b)*T,i[3]=0,i[4]=(h-S)*A,i[5]=(1-(f+m))*A,i[6]=(p+M)*A,i[7]=0,i[8]=(_+b)*w,i[9]=(p-M)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=us.set(i[0],i[1],i[2]).length();const o=us.set(i[4],i[5],i[6]).length(),l=us.set(i[8],i[9],i[10]).length();s<0&&(a=-a),fi.copy(this);const c=1/a,u=1/o,d=1/l;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=d,fi.elements[9]*=d,fi.elements[10]*=d,t.setFromRotationMatrix(fi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Ai,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Ai)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===el)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ai,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),h=-(n+i)/(n-i);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Ai)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===el)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const us=new X,fi=new Nt,m_=new X(0,0,0),__=new X(1,1,1),rr=new X,Qa=new X,kn=new X,Gf=new Nt,Hf=new Zs;class Qi{constructor(e=0,t=0,n=0,i=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hf.setFromEuler(this),this.setFromQuaternion(Hf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class Nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g_=0;const Wf=new X,fs=new Zs,Oi=new Nt,eo=new X,ta=new X,v_=new X,x_=new Zs,Xf=new X(1,0,0),qf=new X(0,1,0),Yf=new X(0,0,1),$f={type:"added"},M_={type:"removed"},hs={type:"childadded",child:null},Ul={type:"childremoved",child:null};class Cn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new X,t=new Qi,n=new Zs,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Je}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Xf,e)}rotateY(e){return this.rotateOnAxis(qf,e)}rotateZ(e){return this.rotateOnAxis(Yf,e)}translateOnAxis(e,t){return Wf.copy(e).applyQuaternion(this.quaternion),this.position.add(Wf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xf,e)}translateY(e){return this.translateOnAxis(qf,e)}translateZ(e){return this.translateOnAxis(Yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?eo.copy(e):eo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(ta,eo,this.up):Oi.lookAt(eo,ta,this.up),this.quaternion.setFromRotationMatrix(Oi),i&&(Oi.extractRotation(i.matrixWorld),fs.setFromRotationMatrix(Oi),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($f),hs.child=e,this.dispatchEvent(hs),hs.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(M_),Ul.child=e,this.dispatchEvent(Ul),Ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($f),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,v_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,x_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Cn.DEFAULT_UP=new X(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ha extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S_={type:"move"};class Nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(S_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ha;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},to={h:0,s:0,l:0};function Fl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ht{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=l_(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Fl(a,s,e+1/3),this.g=Fl(a,s,e),this.b=Fl(a,s,e-1/3)}return lt.colorSpaceToWorking(this,i),this}setStyle(e,t=ni){function n(s){s!==void 0&&parseFloat(s)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const n=Fd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return lt.workingToColorSpace(dn.copy(this),e),Math.round(st(dn.r*255,0,255))*65536+Math.round(st(dn.g*255,0,255))*256+Math.round(st(dn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(dn.copy(this),t);const n=dn.r,i=dn.g,s=dn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=ni){lt.workingToColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,i=dn.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+t,sr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sr),e.getHSL(to);const n=Rl(sr.h,to.h,t),i=Rl(sr.s,to.s,t),s=Rl(sr.l,to.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new ht;ht.NAMES=Fd;class y_ extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hi=new X,Bi=new X,Ol=new X,ki=new X,ds=new X,ps=new X,jf=new X,Bl=new X,kl=new X,zl=new X,Vl=new zt,Gl=new zt,Hl=new zt;class mi{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hi.subVectors(e,t),i.cross(hi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hi.subVectors(i,t),Bi.subVectors(n,t),Ol.subVectors(e,t);const a=hi.dot(hi),o=hi.dot(Bi),l=hi.dot(Ol),c=Bi.dot(Bi),u=Bi.dot(Ol),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-h-_,_,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Vl.setScalar(0),Gl.setScalar(0),Hl.setScalar(0),Vl.fromBufferAttribute(e,t),Gl.fromBufferAttribute(e,n),Hl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Vl,s.x),a.addScaledVector(Gl,s.y),a.addScaledVector(Hl,s.z),a}static isFrontFacing(e,t,n,i){return hi.subVectors(n,t),Bi.subVectors(e,t),hi.cross(Bi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),hi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return mi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ds.subVectors(i,n),ps.subVectors(s,n),Bl.subVectors(e,n);const l=ds.dot(Bl),c=ps.dot(Bl);if(l<=0&&c<=0)return t.copy(n);kl.subVectors(e,i);const u=ds.dot(kl),d=ps.dot(kl);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ds,a);zl.subVectors(e,s);const h=ds.dot(zl),_=ps.dot(zl);if(_>=0&&h<=_)return t.copy(s);const g=h*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ps,o);const p=u*_-h*d;if(p<=0&&d-u>=0&&h-_>=0)return jf.subVectors(s,i),o=(d-u)/(d-u+(h-_)),t.copy(i).addScaledVector(jf,o);const m=1/(p+g+f);return a=g*m,o=f*m,t.copy(n).addScaledVector(ds,a).addScaledVector(ps,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $a{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,di):di.fromBufferAttribute(s,a),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),no.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),no.copy(n.boundingBox)),no.applyMatrix4(e.matrixWorld),this.union(no)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),io.subVectors(this.max,na),ms.subVectors(e.a,na),_s.subVectors(e.b,na),gs.subVectors(e.c,na),ar.subVectors(_s,ms),or.subVectors(gs,_s),Rr.subVectors(ms,gs);let t=[0,-ar.z,ar.y,0,-or.z,or.y,0,-Rr.z,Rr.y,ar.z,0,-ar.x,or.z,0,-or.x,Rr.z,0,-Rr.x,-ar.y,ar.x,0,-or.y,or.x,0,-Rr.y,Rr.x,0];return!Wl(t,ms,_s,gs,io)||(t=[1,0,0,0,1,0,0,0,1],!Wl(t,ms,_s,gs,io))?!1:(ro.crossVectors(ar,or),t=[ro.x,ro.y,ro.z],Wl(t,ms,_s,gs,io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zi=[new X,new X,new X,new X,new X,new X,new X,new X],di=new X,no=new $a,ms=new X,_s=new X,gs=new X,ar=new X,or=new X,Rr=new X,na=new X,io=new X,ro=new X,Pr=new X;function Wl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Pr.fromArray(r,s);const o=i.x*Math.abs(Pr.x)+i.y*Math.abs(Pr.y)+i.z*Math.abs(Pr.z),l=e.dot(Pr),c=t.dot(Pr),u=n.dot(Pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Gt=new X,so=new Mt;let E_=0;class gi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:E_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nf,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)so.fromBufferAttribute(this,t),so.applyMatrix3(e),this.setXY(t,so.x,so.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ea(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ea(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ea(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ea(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ea(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array),i=Rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),n=Rn(n,this.array),i=Rn(i,this.array),s=Rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nf&&(e.usage=this.usage),e}}class Od extends gi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bd extends gi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jn extends gi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const b_=new $a,ia=new X,Xl=new X;class ja{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):b_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const t=ia.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ia,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(Xl)),this.expandByPoint(ia.copy(e.center).sub(Xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let T_=0;const ei=new Nt,ql=new Cn,vs=new X,zn=new $a,ra=new $a,Qt=new X;class Fn extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r_(e)?Bd:Od)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,n){return ei.makeTranslation(e,t,n),this.applyMatrix4(ei),this}scale(e,t,n){return ei.makeScale(e,t,n),this.applyMatrix4(ei),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ra.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(zn.min,ra.min),zn.expandByPoint(Qt),Qt.addVectors(zn.max,ra.max),zn.expandByPoint(Qt)):(zn.expandByPoint(ra.min),zn.expandByPoint(ra.max))}zn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Qt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Qt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Qt.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(e,c),Qt.add(vs)),i=Math.max(i,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new X,l[v]=new X;const c=new X,u=new X,d=new X,f=new Mt,h=new Mt,_=new Mt,g=new X,p=new X;function m(v,y,U){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,U),f.fromBufferAttribute(s,v),h.fromBufferAttribute(s,y),_.fromBufferAttribute(s,U),u.sub(c),d.sub(c),h.sub(f),_.sub(f);const R=1/(h.x*_.y-_.x*h.y);isFinite(R)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(R),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(R),o[v].add(g),o[y].add(g),o[U].add(g),l[v].add(p),l[y].add(p),l[U].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,y=M.length;v<y;++v){const U=M[v],R=U.start,I=U.count;for(let k=R,V=R+I;k<V;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const b=new X,S=new X,T=new X,A=new X;function w(v){T.fromBufferAttribute(i,v),A.copy(T);const y=o[v];b.copy(y),b.sub(T.multiplyScalar(T.dot(y))).normalize(),S.crossVectors(A,y);const R=S.dot(l[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,R)}for(let v=0,y=M.length;v<y;++v){const U=M[v],R=U.start,I=U.count;for(let k=R,V=R+I;k<V;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const i=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,d=new X;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?h=l[g]*o.data.stride+o.offset:h=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[h++]}return new gi(f,u,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let A_=0;class Js extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Ya(),this.name="",this.type="Material",this.blending=Ps,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ec,this.blendDst=bc,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==yr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ec&&(n.blendSrc=this.blendSrc),this.blendDst!==bc&&(n.blendDst=this.blendDst),this.blendEquation!==Vr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Vi=new X,Yl=new X,ao=new X,lr=new X,$l=new X,oo=new X,jl=new X;class Ku{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Yl.copy(e).add(t).multiplyScalar(.5),ao.copy(t).sub(e).normalize(),lr.copy(this.origin).sub(Yl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ao),o=lr.dot(this.direction),l=-lr.dot(ao),c=lr.lengthSq(),u=Math.abs(1-a*a);let d,f,h,_;if(u>0)if(d=a*l-o,f=a*o-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const g=1/u;d*=g,f*=g,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Yl).addScaledVector(ao,f),h}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);const n=Vi.dot(this.direction),i=Vi.dot(Vi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,n,i,s){$l.subVectors(t,e),oo.subVectors(n,e),jl.crossVectors($l,oo);let a=this.direction.dot(jl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;lr.subVectors(this.origin,e);const l=o*this.direction.dot(oo.crossVectors(lr,oo));if(l<0)return null;const c=o*this.direction.dot($l.cross(lr));if(c<0||l+c>a)return null;const u=-o*lr.dot(jl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zu extends Js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kf=new Nt,Dr=new Ku,lo=new ja,Zf=new X,co=new X,uo=new X,fo=new X,Kl=new X,ho=new X,Jf=new X,po=new X;class Ii extends Cn{constructor(e=new Fn,t=new Zu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ho.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Kl.fromBufferAttribute(d,e),a?ho.addScaledVector(Kl,u):ho.addScaledVector(Kl.sub(t),u))}t.add(ho)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(lo.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(lo,Zf)===null||Dr.origin.distanceToSquared(Zf)>(e.far-e.near)**2))&&(Kf.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Kf),!(n.boundingBox!==null&&Dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],M=Math.max(p.start,h.start),b=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let S=M,T=b;S<T;S+=3){const A=o.getX(S),w=o.getX(S+1),v=o.getX(S+2);i=mo(this,m,e,n,c,u,d,A,w,v),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let p=_,m=g;p<m;p+=3){const M=o.getX(p),b=o.getX(p+1),S=o.getX(p+2);i=mo(this,a,e,n,c,u,d,M,b,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],M=Math.max(p.start,h.start),b=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let S=M,T=b;S<T;S+=3){const A=S,w=S+1,v=S+2;i=mo(this,m,e,n,c,u,d,A,w,v),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let p=_,m=g;p<m;p+=3){const M=p,b=p+1,S=p+2;i=mo(this,a,e,n,c,u,d,M,b,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function w_(r,e,t,n,i,s,a,o){let l;if(e.side===Dn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===yr,o),l===null)return null;po.copy(o),po.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(po);return c<t.near||c>t.far?null:{distance:c,point:po.clone(),object:r}}function mo(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,co),r.getVertexPosition(l,uo),r.getVertexPosition(c,fo);const u=w_(r,e,t,n,co,uo,fo,Jf);if(u){const d=new X;mi.getBarycoord(Jf,co,uo,fo,d),i&&(u.uv=mi.getInterpolatedAttribute(i,o,l,c,d,new Mt)),s&&(u.uv1=mi.getInterpolatedAttribute(s,o,l,c,d,new Mt)),a&&(u.normal=mi.getInterpolatedAttribute(a,o,l,c,d,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new X,materialIndex:0};mi.getNormal(co,uo,fo,f.normal),u.face=f,u.barycoord=d}return u}class C_ extends wn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=an,u=an,d,f){super(null,a,o,l,c,u,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zl=new X,R_=new X,P_=new Je;class Or{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Zl.subVectors(n,t).cross(R_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Zl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||P_.getNormalMatrix(e),i=this.coplanarPoint(Zl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new ja,D_=new Mt(.5,.5),_o=new X;class kd{constructor(e=new Or,t=new Or,n=new Or,i=new Or,s=new Or,a=new Or){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ai,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],_=s[8],g=s[9],p=s[10],m=s[11],M=s[12],b=s[13],S=s[14],T=s[15];if(i[0].setComponents(c-a,h-u,m-_,T-M).normalize(),i[1].setComponents(c+a,h+u,m+_,T+M).normalize(),i[2].setComponents(c+o,h+d,m+g,T+b).normalize(),i[3].setComponents(c-o,h-d,m-g,T-b).normalize(),n)i[4].setComponents(l,f,p,S).normalize(),i[5].setComponents(c-l,h-f,m-p,T-S).normalize();else if(i[4].setComponents(c-l,h-f,m-p,T-S).normalize(),t===Ai)i[5].setComponents(c+l,h+f,m+p,T+S).normalize();else if(t===el)i[5].setComponents(l,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){Lr.center.set(0,0,0);const t=D_.distanceTo(e.center);return Lr.radius=.7071067811865476+t,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(_o.x=i.normal.x>0?e.max.x:e.min.x,_o.y=i.normal.y>0?e.max.y:e.min.y,_o.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_o)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zd extends Js{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const il=new X,rl=new X,Qf=new Nt,sa=new Ku,go=new ja,Jl=new X,eh=new X;class L_ extends Cn{constructor(e=new Fn,t=new zd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)il.fromBufferAttribute(t,i-1),rl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=il.distanceTo(rl);e.setAttribute("lineDistance",new jn(n,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(i),go.radius+=s,e.ray.intersectsSphere(go)===!1)return;Qf.copy(i).invert(),sa.copy(e.ray).applyMatrix4(Qf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=h,p=_-1;g<p;g+=c){const m=u.getX(g),M=u.getX(g+1),b=vo(this,e,sa,l,m,M,g);b&&t.push(b)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(h),m=vo(this,e,sa,l,g,p,_-1);m&&t.push(m)}}else{const h=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=h,p=_-1;g<p;g+=c){const m=vo(this,e,sa,l,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){const g=vo(this,e,sa,l,_-1,h,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function vo(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(il.fromBufferAttribute(o,i),rl.fromBufferAttribute(o,s),t.distanceSqToSegment(il,rl,Jl,eh)>n)return;Jl.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Jl);if(!(c<e.near||c>e.far))return{distance:c,point:eh.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}class Vd extends Js{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const th=new Nt,du=new Ku,xo=new ja,Mo=new X;class I_ extends Cn{constructor(e=new Fn,t=new Vd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(i),xo.radius+=s,e.ray.intersectsSphere(xo)===!1)return;th.copy(i).invert(),du.copy(e.ray).applyMatrix4(th);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let _=f,g=h;_<g;_++){const p=c.getX(_);Mo.fromBufferAttribute(d,p),nh(Mo,p,l,i,e,t,this)}}else{const f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let _=f,g=h;_<g;_++)Mo.fromBufferAttribute(d,_),nh(Mo,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function nh(r,e,t,n,i,s,a){const o=du.distanceSqToPoint(r);if(o<t){const l=new X;du.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Gd extends wn{constructor(e=[],t=es,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Oa extends wn{constructor(e,t,n=Li,i,s,a,o=an,l=an,c,u=Ji,d=1){if(u!==Ji&&u!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ju(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class U_ extends Oa{constructor(e,t=Li,n=es,i,s,a=an,o=an,l,c=Ji){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hd extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ka extends Fn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new jn(c,3)),this.setAttribute("normal",new jn(u,3)),this.setAttribute("uv",new jn(d,2));function _(g,p,m,M,b,S,T,A,w,v,y){const U=S/w,R=T/v,I=S/2,k=T/2,V=A/2,z=w+1,B=v+1;let O=0,J=0;const Q=new X;for(let P=0;P<B;P++){const le=P*R-k;for(let ce=0;ce<z;ce++){const Be=ce*U-I;Q[g]=Be*M,Q[p]=le*b,Q[m]=V,c.push(Q.x,Q.y,Q.z),Q[g]=0,Q[p]=0,Q[m]=A>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(ce/w),d.push(1-P/v),O+=1}}for(let P=0;P<v;P++)for(let le=0;le<w;le++){const ce=f+le+z*P,Be=f+le+z*(P+1),Ve=f+(le+1)+z*(P+1),Ye=f+(le+1)+z*P;l.push(ce,Be,Ye),l.push(Be,Ve,Ye),J+=6}o.addGroup(h,J,y),h+=J,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class vl extends Fn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,f=t/l,h=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const M=m*f-a;for(let b=0;b<c;b++){const S=b*d-s;_.push(S,-M,0),g.push(0,0,1),p.push(b/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const b=M+c*m,S=M+c*(m+1),T=M+1+c*(m+1),A=M+1+c*m;h.push(b,S,A),h.push(S,T,A)}this.setIndex(h),this.setAttribute("position",new jn(_,3)),this.setAttribute("normal",new jn(g,3)),this.setAttribute("uv",new jn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ju extends Fn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new X,f=new X,h=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const M=[],b=m/n;let S=0;m===0&&a===0?S=.5/t:m===n&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){const A=T/t;d.x=-e*Math.cos(i+A*s)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(i+A*s)*Math.sin(a+b*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),p.push(A+S,1-b),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const b=u[m][M+1],S=u[m][M],T=u[m+1][M],A=u[m+1][M+1];(m!==0||a>0)&&h.push(b,S,A),(m!==n-1||l<Math.PI)&&h.push(S,T,A)}this.setIndex(h),this.setAttribute("position",new jn(_,3)),this.setAttribute("normal",new jn(g,3)),this.setAttribute("uv",new jn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ju(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Gs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yn(r){const e={};for(let t=0;t<r.length;t++){const n=Gs(r[t]);for(const i in n)e[i]=n[i]}return e}function N_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Wd(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const F_={clone:Gs,merge:yn};var O_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends Js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O_,this.fragmentShader=B_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=N_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class k_ extends Ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class z_ extends Js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V_ extends Js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const So=new X,yo=new Zs,xi=new X;class Xd extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(So,yo,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,yo,xi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(So,yo,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,yo,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cr=new X,ih=new Mt,rh=new Mt;class ii extends Xd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hu*2*Math.atan(Math.tan(Cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,t){return this.getViewBounds(e,ih,rh),t.subVectors(rh,ih)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class qd extends Xd{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xs=-90,Ms=1;class G_ extends Cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ii(xs,Ms,e,t);i.layers=this.layers,this.add(i);const s=new ii(xs,Ms,e,t);s.layers=this.layers,this.add(s);const a=new ii(xs,Ms,e,t);a.layers=this.layers,this.add(a);const o=new ii(xs,Ms,e,t);o.layers=this.layers,this.add(o);const l=new ii(xs,Ms,e,t);l.layers=this.layers,this.add(l);const c=new ii(xs,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===el)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class H_ extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function sh(r,e,t,n){const i=W_(n);switch(t){case Pd:return r*e;case Ld:return r*e/i.components*i.byteLength;case Wu:return r*e/i.components*i.byteLength;case zs:return r*e*2/i.components*i.byteLength;case Xu:return r*e*2/i.components*i.byteLength;case Dd:return r*e*3/i.components*i.byteLength;case _i:return r*e*4/i.components*i.byteLength;case qu:return r*e*4/i.components*i.byteLength;case ko:case zo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vo:case Go:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nc:case Oc:return Math.max(r,16)*Math.max(e,8)/4;case Uc:case Fc:return Math.max(r,8)*Math.max(e,8)/2;case Bc:case kc:case Vc:case Gc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case zc:case Hc:case Wc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case $c:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case jc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case eu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case tu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case nu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case iu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ru:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case su:case au:case ou:return Math.ceil(r/4)*Math.ceil(e/4)*16;case lu:case cu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case uu:case fu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function W_(r){switch(r){case ai:case Ad:return{byteLength:1,components:1};case Na:case wd:case Zi:return{byteLength:2,components:1};case Gu:case Hu:return{byteLength:2,components:4};case Li:case Vu:case Ti:return{byteLength:4,components:1};case Cd:case Rd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zu}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zu);function Yd(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function X_(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){const _=d[f],g=d[h];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,d[f]=g)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){const g=d[h];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Q_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ag=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_g=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ig=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Og=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,t0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,l0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,u0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,m0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,S0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,P0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,D0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,k0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,z0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,W0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,J0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Q0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ev=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,av=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_v=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ev=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:q_,alphahash_pars_fragment:Y_,alphamap_fragment:$_,alphamap_pars_fragment:j_,alphatest_fragment:K_,alphatest_pars_fragment:Z_,aomap_fragment:J_,aomap_pars_fragment:Q_,batching_pars_vertex:eg,batching_vertex:tg,begin_vertex:ng,beginnormal_vertex:ig,bsdfs:rg,iridescence_fragment:sg,bumpmap_pars_fragment:ag,clipping_planes_fragment:og,clipping_planes_pars_fragment:lg,clipping_planes_pars_vertex:cg,clipping_planes_vertex:ug,color_fragment:fg,color_pars_fragment:hg,color_pars_vertex:dg,color_vertex:pg,common:mg,cube_uv_reflection_fragment:_g,defaultnormal_vertex:gg,displacementmap_pars_vertex:vg,displacementmap_vertex:xg,emissivemap_fragment:Mg,emissivemap_pars_fragment:Sg,colorspace_fragment:yg,colorspace_pars_fragment:Eg,envmap_fragment:bg,envmap_common_pars_fragment:Tg,envmap_pars_fragment:Ag,envmap_pars_vertex:wg,envmap_physical_pars_fragment:Bg,envmap_vertex:Cg,fog_vertex:Rg,fog_pars_vertex:Pg,fog_fragment:Dg,fog_pars_fragment:Lg,gradientmap_pars_fragment:Ig,lightmap_pars_fragment:Ug,lights_lambert_fragment:Ng,lights_lambert_pars_fragment:Fg,lights_pars_begin:Og,lights_toon_fragment:kg,lights_toon_pars_fragment:zg,lights_phong_fragment:Vg,lights_phong_pars_fragment:Gg,lights_physical_fragment:Hg,lights_physical_pars_fragment:Wg,lights_fragment_begin:Xg,lights_fragment_maps:qg,lights_fragment_end:Yg,logdepthbuf_fragment:$g,logdepthbuf_pars_fragment:jg,logdepthbuf_pars_vertex:Kg,logdepthbuf_vertex:Zg,map_fragment:Jg,map_pars_fragment:Qg,map_particle_fragment:e0,map_particle_pars_fragment:t0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:i0,morphinstance_vertex:r0,morphcolor_vertex:s0,morphnormal_vertex:a0,morphtarget_pars_vertex:o0,morphtarget_vertex:l0,normal_fragment_begin:c0,normal_fragment_maps:u0,normal_pars_fragment:f0,normal_pars_vertex:h0,normal_vertex:d0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:_0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:v0,opaque_fragment:x0,packing:M0,premultiplied_alpha_fragment:S0,project_vertex:y0,dithering_fragment:E0,dithering_pars_fragment:b0,roughnessmap_fragment:T0,roughnessmap_pars_fragment:A0,shadowmap_pars_fragment:w0,shadowmap_pars_vertex:C0,shadowmap_vertex:R0,shadowmask_pars_fragment:P0,skinbase_vertex:D0,skinning_pars_vertex:L0,skinning_vertex:I0,skinnormal_vertex:U0,specularmap_fragment:N0,specularmap_pars_fragment:F0,tonemapping_fragment:O0,tonemapping_pars_fragment:B0,transmission_fragment:k0,transmission_pars_fragment:z0,uv_pars_fragment:V0,uv_pars_vertex:G0,uv_vertex:H0,worldpos_vertex:W0,background_vert:X0,background_frag:q0,backgroundCube_vert:Y0,backgroundCube_frag:$0,cube_vert:j0,cube_frag:K0,depth_vert:Z0,depth_frag:J0,distance_vert:Q0,distance_frag:ev,equirect_vert:tv,equirect_frag:nv,linedashed_vert:iv,linedashed_frag:rv,meshbasic_vert:sv,meshbasic_frag:av,meshlambert_vert:ov,meshlambert_frag:lv,meshmatcap_vert:cv,meshmatcap_frag:uv,meshnormal_vert:fv,meshnormal_frag:hv,meshphong_vert:dv,meshphong_frag:pv,meshphysical_vert:mv,meshphysical_frag:_v,meshtoon_vert:gv,meshtoon_frag:vv,points_vert:xv,points_frag:Mv,shadow_vert:Sv,shadow_frag:yv,sprite_vert:Ev,sprite_frag:bv},_e={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Ei={basic:{uniforms:yn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:yn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:yn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:yn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:yn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ht(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:yn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:yn([_e.points,_e.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:yn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:yn([_e.common,_e.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:yn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:yn([_e.sprite,_e.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:yn([_e.common,_e.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:yn([_e.lights,_e.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Ei.physical={uniforms:yn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Eo={r:0,b:0,g:0},Ir=new Qi,Tv=new Nt;function Av(r,e,t,n,i,s){const a=new ht(0);let o=i===!0?0:1,l,c,u=null,d=0,f=null;function h(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){const S=M.backgroundBlurriness>0;b=e.get(b,S)}return b}function _(M){let b=!1;const S=h(M);S===null?p(a,o):S&&S.isColor&&(p(S,1),b=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(M,b){const S=h(b);S&&(S.isCubeTexture||S.mapping===gl)?(c===void 0&&(c=new Ii(new Ka(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Gs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Ir.copy(b.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(Ir)),c.material.toneMapped=lt.getTransfer(S.colorSpace)!==gt,(u!==S||d!==S.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ii(new vl(2,2),new Ui({name:"BackgroundMaterial",uniforms:Gs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=lt.getTransfer(S.colorSpace)!==gt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,b){M.getRGB(Eo,Wd(r)),t.buffers.color.setClear(Eo.r,Eo.g,Eo.b,b,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:_,addToRenderList:g,dispose:m}}function wv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(R,I,k,V,z){let B=!1;const O=d(R,V,k,I);s!==O&&(s=O,c(s.object)),B=h(R,V,k,z),B&&_(R,V,k,z),z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,S(R,I,k,V),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return r.createVertexArray()}function c(R){return r.bindVertexArray(R)}function u(R){return r.deleteVertexArray(R)}function d(R,I,k,V){const z=V.wireframe===!0;let B=n[I.id];B===void 0&&(B={},n[I.id]=B);const O=R.isInstancedMesh===!0?R.id:0;let J=B[O];J===void 0&&(J={},B[O]=J);let Q=J[k.id];Q===void 0&&(Q={},J[k.id]=Q);let P=Q[z];return P===void 0&&(P=f(l()),Q[z]=P),P}function f(R){const I=[],k=[],V=[];for(let z=0;z<t;z++)I[z]=0,k[z]=0,V[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:V,object:R,attributes:{},index:null}}function h(R,I,k,V){const z=s.attributes,B=I.attributes;let O=0;const J=k.getAttributes();for(const Q in J)if(J[Q].location>=0){const le=z[Q];let ce=B[Q];if(ce===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),le===void 0||le.attribute!==ce||ce&&le.data!==ce.data)return!0;O++}return s.attributesNum!==O||s.index!==V}function _(R,I,k,V){const z={},B=I.attributes;let O=0;const J=k.getAttributes();for(const Q in J)if(J[Q].location>=0){let le=B[Q];le===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(le=R.instanceColor));const ce={};ce.attribute=le,le&&le.data&&(ce.data=le.data),z[Q]=ce,O++}s.attributes=z,s.attributesNum=O,s.index=V}function g(){const R=s.newAttributes;for(let I=0,k=R.length;I<k;I++)R[I]=0}function p(R){m(R,0)}function m(R,I){const k=s.newAttributes,V=s.enabledAttributes,z=s.attributeDivisors;k[R]=1,V[R]===0&&(r.enableVertexAttribArray(R),V[R]=1),z[R]!==I&&(r.vertexAttribDivisor(R,I),z[R]=I)}function M(){const R=s.newAttributes,I=s.enabledAttributes;for(let k=0,V=I.length;k<V;k++)I[k]!==R[k]&&(r.disableVertexAttribArray(k),I[k]=0)}function b(R,I,k,V,z,B,O){O===!0?r.vertexAttribIPointer(R,I,k,z,B):r.vertexAttribPointer(R,I,k,V,z,B)}function S(R,I,k,V){g();const z=V.attributes,B=k.getAttributes(),O=I.defaultAttributeValues;for(const J in B){const Q=B[J];if(Q.location>=0){let P=z[J];if(P===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(P=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(P=R.instanceColor)),P!==void 0){const le=P.normalized,ce=P.itemSize,Be=e.get(P);if(Be===void 0)continue;const Ve=Be.buffer,Ye=Be.type,j=Be.bytesPerElement,ee=Ye===r.INT||Ye===r.UNSIGNED_INT||P.gpuType===Vu;if(P.isInterleavedBufferAttribute){const re=P.data,Le=re.stride,Ie=P.offset;if(re.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Q.locationSize;Ce++)m(Q.location+Ce,re.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ce=0;Ce<Q.locationSize;Ce++)p(Q.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let Ce=0;Ce<Q.locationSize;Ce++)b(Q.location+Ce,ce/Q.locationSize,Ye,le,Le*j,(Ie+ce/Q.locationSize*Ce)*j,ee)}else{if(P.isInstancedBufferAttribute){for(let re=0;re<Q.locationSize;re++)m(Q.location+re,P.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let re=0;re<Q.locationSize;re++)p(Q.location+re);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let re=0;re<Q.locationSize;re++)b(Q.location+re,ce/Q.locationSize,Ye,le,ce*j,ce/Q.locationSize*re*j,ee)}}else if(O!==void 0){const le=O[J];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(Q.location,le);break;case 3:r.vertexAttrib3fv(Q.location,le);break;case 4:r.vertexAttrib4fv(Q.location,le);break;default:r.vertexAttrib1fv(Q.location,le)}}}}M()}function T(){y();for(const R in n){const I=n[R];for(const k in I){const V=I[k];for(const z in V){const B=V[z];for(const O in B)u(B[O].object),delete B[O];delete V[z]}}delete n[R]}}function A(R){if(n[R.id]===void 0)return;const I=n[R.id];for(const k in I){const V=I[k];for(const z in V){const B=V[z];for(const O in B)u(B[O].object),delete B[O];delete V[z]}}delete n[R.id]}function w(R){for(const I in n){const k=n[I];for(const V in k){const z=k[V];if(z[R.id]===void 0)continue;const B=z[R.id];for(const O in B)u(B[O].object),delete B[O];delete z[R.id]}}}function v(R){for(const I in n){const k=n[I],V=R.isInstancedMesh===!0?R.id:0,z=k[V];if(z!==void 0){for(const B in z){const O=z[B];for(const J in O)u(O[J].object),delete O[J];delete z[B]}delete k[V],Object.keys(k).length===0&&delete n[I]}}}function y(){U(),a=!0,s!==i&&(s=i,c(s.object))}function U(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:y,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:p,disableUnusedAttributes:M}}function Cv(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let h=0;for(let _=0;_<d;_++)h+=u[_];t.update(h,n,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Rv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==_i&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const v=w===Zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ai&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ti&&!v)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:S,maxSamples:T,samples:A}}function Pv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Or,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||i;return i=f,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,b=M*4;let S=m.clippingState||null;l.value=S,S=u(_,f,b,h);for(let T=0;T!==b;++T)S[T]=t[T];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=h+g*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,S=h;b!==g;++b,S+=4)a.copy(d[b]).applyMatrix4(M,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}const hr=4,ah=[.125,.215,.35,.446,.526,.582],Gr=20,Dv=256,aa=new qd,oh=new ht;let Ql=null,ec=0,tc=0,nc=!1;const Lv=new X;class lh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Lv}=s;Ql=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ql,ec,tc),this._renderer.xr.enabled=nc,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ql=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Zi,format:_i,colorSpace:Vs,depthBuffer:!1},i=ch(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Iv(s)),this._blurMaterial=Nv(s,e,t),this._ggxMaterial=Uv(s,e,t)}return i}_compileMaterial(e){const t=new Ii(new Fn,e);this._renderer.compile(t,aa)}_sceneToCubeUV(e,t,n,i,s){const l=new ii(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(oh),d.toneMapping=Ri,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ii(new Ka,new Zu({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let m=!1;const M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,m=!0):(p.color.copy(oh),m=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const T=this._cubeSize;Ss(i,S*T,b>2?T:0,T,T),d.setRenderTarget(i),m&&d.render(g,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===es||e.mapping===ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ss(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,aa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:_}=this,g=this._sizeLods[n],p=3*g*(n>_-hr?n-_+hr:0),m=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-t,Ss(s,p,m,3*g,2*g),i.setRenderTarget(s),i.render(o,aa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,Ss(e,p,m,3*g,2*g),i.setRenderTarget(e),i.render(o,aa)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[i];d.material=c;const f=c.uniforms,h=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Gr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Gr;p>Gr&&Xe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gr}`);const m=[];let M=0;for(let w=0;w<Gr;++w){const v=w/g,y=Math.exp(-v*v/2);m.push(y),w===0?M+=y:w<p&&(M+=2*y)}for(let w=0;w<m.length;w++)m[w]=m[w]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-n;const S=this._sizeLods[i],T=3*S*(i>b-hr?i-b+hr:0),A=4*(this._cubeSize-S);Ss(t,T,A,3*S,2*S),l.setRenderTarget(t),l.render(d,aa)}}function Iv(r){const e=[],t=[],n=[];let i=r;const s=r-hr+1+ah.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-hr?l=ah[a-r+hr-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,g=3,p=2,m=1,M=new Float32Array(g*_*h),b=new Float32Array(p*_*h),S=new Float32Array(m*_*h);for(let A=0;A<h;A++){const w=A%3*2/3-1,v=A>2?0:-1,y=[w,v,0,w+2/3,v,0,w+2/3,v+1,0,w,v,0,w+2/3,v+1,0,w,v+1,0];M.set(y,g*_*A),b.set(f,p*_*A);const U=[A,A,A,A,A,A];S.set(U,m*_*A)}const T=new Fn;T.setAttribute("position",new gi(M,g)),T.setAttribute("uv",new gi(b,p)),T.setAttribute("faceIndex",new gi(S,m)),n.push(new Ii(T,null)),i>hr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ch(r,e,t){const n=new Pi(r,e,t);return n.texture.mapping=gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Uv(r,e,t){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Nv(r,e,t){const n=new Float32Array(Gr),i=new X(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function uh(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function fh(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function xl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class $d extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Gd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ka(5,5,5),s=new Ui({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:$i});s.uniforms.tEquirect.value=t;const a=new Ii(i,s),o=t.minFilter;return t.minFilter===Hr&&(t.minFilter=vn),new G_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function Fv(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Tl||h===Al)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const g=new $d(_.height);return g.fromEquirectangularTexture(r,f),e.set(f,g),f.addEventListener("dispose",c),o(g.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const h=f.mapping,_=h===Tl||h===Al,g=h===es||h===ks;if(_||g){let p=t.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new lh(r)),p=_?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const M=f.image;return _&&M&&M.height>0||g&&M&&l(M)?(n===null&&(n=new lh(r)),p=_?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function o(f,h){return h===Tl?f.mapping=es:h===Al&&(f.mapping=ks),f}function l(f){let h=0;const _=6;for(let g=0;g<_;g++)f[g]!==void 0&&h++;return h===_}function c(f){const h=f.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Ov(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&nl("WebGLRenderer: "+n+" extension not supported."),i}}}function Bv(r,e,t,n){const i={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],r.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,_=d.attributes.position;let g=0;if(_===void 0)return;if(h!==null){const M=h.array;g=h.version;for(let b=0,S=M.length;b<S;b+=3){const T=M[b+0],A=M[b+1],w=M[b+2];f.push(T,A,A,w,w,T)}}else{const M=_.array;g=_.version;for(let b=0,S=M.length/3-1;b<S;b+=3){const T=b+0,A=b+1,w=b+2;f.push(T,A,A,w,w,T)}}const p=new(_.count>=65535?Bd:Od)(f,1);p.version=g;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function kv(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){r.drawElements(n,h,s,f*a),t.update(h,n,1)}function c(f,h,_){_!==0&&(r.drawElementsInstanced(n,h,s,f*a,_),t.update(h,n,_))}function u(f,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,_);let p=0;for(let m=0;m<_;m++)p+=h[m];t.update(p,n,1)}function d(f,h,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,h[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,h,0,s,f,0,g,0,_);let m=0;for(let M=0;M<_;M++)m+=h[M]*g[M];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function zv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Vv(r,e,t){const n=new WeakMap,i=new zt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let y=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const h=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let b=0;h===!0&&(b=1),_===!0&&(b=2),g===!0&&(b=3);let S=o.attributes.position.count*b,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*T*4*d),w=new Ud(A,S,T,d);w.type=Ti,w.needsUpdate=!0;const v=b*4;for(let U=0;U<d;U++){const R=p[U],I=m[U],k=M[U],V=S*T*4*U;for(let z=0;z<R.count;z++){const B=z*v;h===!0&&(i.fromBufferAttribute(R,z),A[V+B+0]=i.x,A[V+B+1]=i.y,A[V+B+2]=i.z,A[V+B+3]=0),_===!0&&(i.fromBufferAttribute(I,z),A[V+B+4]=i.x,A[V+B+5]=i.y,A[V+B+6]=i.z,A[V+B+7]=0),g===!0&&(i.fromBufferAttribute(k,z),A[V+B+8]=i.x,A[V+B+9]=i.y,A[V+B+10]=i.z,A[V+B+11]=k.itemSize===4?i.w:1)}}f={count:d,texture:w,size:new Mt(S,T)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let h=0;for(let g=0;g<c.length;g++)h+=c[g];const _=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Gv(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Hv={[vd]:"LINEAR_TONE_MAPPING",[xd]:"REINHARD_TONE_MAPPING",[Md]:"CINEON_TONE_MAPPING",[Sd]:"ACES_FILMIC_TONE_MAPPING",[Ed]:"AGX_TONE_MAPPING",[bd]:"NEUTRAL_TONE_MAPPING",[yd]:"CUSTOM_TONE_MAPPING"};function Wv(r,e,t,n,i){const s=new Pi(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Pi(e,t,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),o=new Fn;o.setAttribute("position",new jn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new jn([0,2,0,0,2,0],2));const l=new k_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ii(o,l),u=new qd(-1,1,1,-1,0,1);let d=null,f=null,h=!1,_,g=null,p=[],m=!1;this.setSize=function(M,b){s.setSize(M,b),a.setSize(M,b);for(let S=0;S<p.length;S++){const T=p[S];T.setSize&&T.setSize(M,b)}},this.setEffects=function(M){p=M,m=p.length>0&&p[0].isRenderPass===!0;const b=s.width,S=s.height;for(let T=0;T<p.length;T++){const A=p[T];A.setSize&&A.setSize(b,S)}},this.begin=function(M,b){if(h||M.toneMapping===Ri&&p.length===0)return!1;if(g=b,b!==null){const S=b.width,T=b.height;(s.width!==S||s.height!==T)&&this.setSize(S,T)}return m===!1&&M.setRenderTarget(s),_=M.toneMapping,M.toneMapping=Ri,!0},this.hasRenderPass=function(){return m},this.end=function(M,b){M.toneMapping=_,h=!0;let S=s,T=a;for(let A=0;A<p.length;A++){const w=p[A];if(w.enabled!==!1&&(w.render(M,T,S,b),w.needsSwap!==!1)){const v=S;S=T,T=v}}if(d!==M.outputColorSpace||f!==M.toneMapping){d=M.outputColorSpace,f=M.toneMapping,l.defines={},lt.getTransfer(d)===gt&&(l.defines.SRGB_TRANSFER="");const A=Hv[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(g),M.render(c,u),g=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const jd=new wn,pu=new Oa(1,1),Kd=new Ud,Zd=new p_,Jd=new Gd,hh=[],dh=[],ph=new Float32Array(16),mh=new Float32Array(9),_h=new Float32Array(4);function Qs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=hh[i];if(s===void 0&&(s=new Float32Array(i),hh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function jt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Kt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ml(r,e){let t=dh[e];t===void 0&&(t=new Int32Array(e),dh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Xv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function qv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2fv(this.addr,e),Kt(t,e)}}function Yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;r.uniform3fv(this.addr,e),Kt(t,e)}}function $v(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4fv(this.addr,e),Kt(t,e)}}function jv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;_h.set(n),r.uniformMatrix2fv(this.addr,!1,_h),Kt(t,n)}}function Kv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;mh.set(n),r.uniformMatrix3fv(this.addr,!1,mh),Kt(t,n)}}function Zv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;ph.set(n),r.uniformMatrix4fv(this.addr,!1,ph),Kt(t,n)}}function Jv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Qv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2iv(this.addr,e),Kt(t,e)}}function ex(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3iv(this.addr,e),Kt(t,e)}}function tx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4iv(this.addr,e),Kt(t,e)}}function nx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ix(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2uiv(this.addr,e),Kt(t,e)}}function rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3uiv(this.addr,e),Kt(t,e)}}function sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4uiv(this.addr,e),Kt(t,e)}}function ax(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(pu.compareFunction=t.isReversedDepthBuffer()?$u:Yu,s=pu):s=jd,t.setTexture2D(e||s,i)}function ox(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zd,i)}function lx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jd,i)}function cx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Kd,i)}function ux(r){switch(r){case 5126:return Xv;case 35664:return qv;case 35665:return Yv;case 35666:return $v;case 35674:return jv;case 35675:return Kv;case 35676:return Zv;case 5124:case 35670:return Jv;case 35667:case 35671:return Qv;case 35668:case 35672:return ex;case 35669:case 35673:return tx;case 5125:return nx;case 36294:return ix;case 36295:return rx;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}function fx(r,e){r.uniform1fv(this.addr,e)}function hx(r,e){const t=Qs(e,this.size,2);r.uniform2fv(this.addr,t)}function dx(r,e){const t=Qs(e,this.size,3);r.uniform3fv(this.addr,t)}function px(r,e){const t=Qs(e,this.size,4);r.uniform4fv(this.addr,t)}function mx(r,e){const t=Qs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function _x(r,e){const t=Qs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function gx(r,e){const t=Qs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function vx(r,e){r.uniform1iv(this.addr,e)}function xx(r,e){r.uniform2iv(this.addr,e)}function Mx(r,e){r.uniform3iv(this.addr,e)}function Sx(r,e){r.uniform4iv(this.addr,e)}function yx(r,e){r.uniform1uiv(this.addr,e)}function Ex(r,e){r.uniform2uiv(this.addr,e)}function bx(r,e){r.uniform3uiv(this.addr,e)}function Tx(r,e){r.uniform4uiv(this.addr,e)}function Ax(r,e,t){const n=this.cache,i=e.length,s=Ml(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=pu:a=jd;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function wx(r,e,t){const n=this.cache,i=e.length,s=Ml(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Zd,s[a])}function Cx(r,e,t){const n=this.cache,i=e.length,s=Ml(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Jd,s[a])}function Rx(r,e,t){const n=this.cache,i=e.length,s=Ml(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Kd,s[a])}function Px(r){switch(r){case 5126:return fx;case 35664:return hx;case 35665:return dx;case 35666:return px;case 35674:return mx;case 35675:return _x;case 35676:return gx;case 5124:case 35670:return vx;case 35667:case 35671:return xx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return yx;case 36294:return Ex;case 36295:return bx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Rx}}class Dx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ux(t.type)}}class Lx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Px(t.type)}}class Ix{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ic=/(\w+)(\])?(\[|\.)?/g;function gh(r,e){r.seq.push(e),r.map[e.id]=e}function Ux(r,e,t){const n=r.name,i=n.length;for(ic.lastIndex=0;;){const s=ic.exec(n),a=ic.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){gh(t,c===void 0?new Dx(o,r,e):new Lx(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Ix(o),gh(t,d)),t=d}}}class Ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Ux(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function vh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Nx=37297;let Fx=0;function Ox(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const xh=new Je;function Bx(r){lt._getMatrix(xh,lt.workingColorSpace,r);const e=`mat3( ${xh.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(r)){case Qo:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Mh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ox(r.getShaderSource(e),o)}else return s}function kx(r,e){const t=Bx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zx={[vd]:"Linear",[xd]:"Reinhard",[Md]:"Cineon",[Sd]:"ACESFilmic",[Ed]:"AgX",[bd]:"Neutral",[yd]:"Custom"};function Vx(r,e){const t=zx[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bo=new X;function Gx(){lt.getLuminanceCoefficients(bo);const r=bo.x.toFixed(4),e=bo.y.toFixed(4),t=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function Wx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function da(r){return r!==""}function Sh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function mu(r){return r.replace(qx,$x)}const Yx=new Map;function $x(r,e){let t=Qe[e];if(t===void 0){const n=Yx.get(e);if(n!==void 0)t=Qe[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mu(t)}const jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(r){return r.replace(jx,Kx)}function Kx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function bh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Zx={[Bo]:"SHADOWMAP_TYPE_PCF",[fa]:"SHADOWMAP_TYPE_VSM"};function Jx(r){return Zx[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Qx={[es]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE",[gl]:"ENVMAP_TYPE_CUBE_UV"};function eM(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Qx[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const tM={[ks]:"ENVMAP_MODE_REFRACTION"};function nM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":tM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iM={[gd]:"ENVMAP_BLENDING_MULTIPLY",[qm]:"ENVMAP_BLENDING_MIX",[Ym]:"ENVMAP_BLENDING_ADD"};function rM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":iM[r.combine]||"ENVMAP_BLENDING_NONE"}function sM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function aM(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Jx(t),c=eM(t),u=nM(t),d=rM(t),f=sM(t),h=Hx(t),_=Wx(s),g=i.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(da).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(da).join(`
`),m.length>0&&(m+=`
`)):(p=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),m=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Ri?Vx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,kx("linearToOutputTexel",t.outputColorSpace),Gx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(da).join(`
`)),a=mu(a),a=Sh(a,t),a=yh(a,t),o=mu(o),o=Sh(o,t),o=yh(o,t),a=Eh(a),o=Eh(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=M+p+a,S=M+m+o,T=vh(i,i.VERTEX_SHADER,b),A=vh(i,i.FRAGMENT_SHADER,S);i.attachShader(g,T),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(R){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(g)||"",k=i.getShaderInfoLog(T)||"",V=i.getShaderInfoLog(A)||"",z=I.trim(),B=k.trim(),O=V.trim();let J=!0,Q=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,T,A);else{const P=Mh(i,T,"vertex"),le=Mh(i,A,"fragment");ft("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+P+`
`+le)}else z!==""?Xe("WebGLProgram: Program Info Log:",z):(B===""||O==="")&&(Q=!1);Q&&(R.diagnostics={runnable:J,programLog:z,vertexShader:{log:B,prefix:p},fragmentShader:{log:O,prefix:m}})}i.deleteShader(T),i.deleteShader(A),v=new Ho(i,g),y=Xx(i,g)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(g,Nx)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=A,this}let oM=0;class lM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cM(e),t.set(e,n)),n}}class cM{constructor(e){this.id=oM++,this.code=e,this.usedTimes=0}}function uM(r,e,t,n,i,s){const a=new Nd,o=new lM,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,y,U,R,I){const k=R.fog,V=I.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||z,B),J=O&&O.mapping===gl?O.image.height:null,Q=h[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&Xe("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const P=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,le=P!==void 0?P.length:0;let ce=0;V.morphAttributes.position!==void 0&&(ce=1),V.morphAttributes.normal!==void 0&&(ce=2),V.morphAttributes.color!==void 0&&(ce=3);let Be,Ve,Ye,j;if(Q){const ve=Ei[Q];Be=ve.vertexShader,Ve=ve.fragmentShader}else Be=v.vertexShader,Ve=v.fragmentShader,o.update(v),Ye=o.getVertexShaderID(v),j=o.getFragmentShaderID(v);const ee=r.getRenderTarget(),re=r.state.buffers.depth.getReversed(),Le=I.isInstancedMesh===!0,Ie=I.isBatchedMesh===!0,Ce=!!v.map,ot=!!v.matcap,Ee=!!O,ke=!!v.aoMap,je=!!v.lightMap,Oe=!!v.bumpMap,W=!!v.normalMap,L=!!v.displacementMap,dt=!!v.emissiveMap,et=!!v.metalnessMap,ze=!!v.roughnessMap,xe=v.anisotropy>0,C=v.clearcoat>0,x=v.dispersion>0,N=v.iridescence>0,K=v.sheen>0,Z=v.transmission>0,Y=xe&&!!v.anisotropyMap,ge=C&&!!v.clearcoatMap,ae=C&&!!v.clearcoatNormalMap,Re=C&&!!v.clearcoatRoughnessMap,Me=N&&!!v.iridescenceMap,ne=N&&!!v.iridescenceThicknessMap,se=K&&!!v.sheenColorMap,Se=K&&!!v.sheenRoughnessMap,be=!!v.specularMap,he=!!v.specularColorMap,Ge=!!v.specularIntensityMap,D=Z&&!!v.transmissionMap,oe=Z&&!!v.thicknessMap,ie=!!v.gradientMap,de=!!v.alphaMap,te=v.alphaTest>0,$=!!v.alphaHash,ye=!!v.extensions;let Ne=Ri;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ne=r.toneMapping);const ct={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:Be,fragmentShader:Ve,defines:v.defines,customVertexShaderID:Ye,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&I._colorsTexture!==null,instancing:Le,instancingColor:Le&&I.instanceColor!==null,instancingMorph:Le&&I.morphTexture!==null,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Vs,alphaToCoverage:!!v.alphaToCoverage,map:Ce,matcap:ot,envMap:Ee,envMapMode:Ee&&O.mapping,envMapCubeUVHeight:J,aoMap:ke,lightMap:je,bumpMap:Oe,normalMap:W,displacementMap:L,emissiveMap:dt,normalMapObjectSpace:W&&v.normalMapType===Zm,normalMapTangentSpace:W&&v.normalMapType===Km,metalnessMap:et,roughnessMap:ze,anisotropy:xe,anisotropyMap:Y,clearcoat:C,clearcoatMap:ge,clearcoatNormalMap:ae,clearcoatRoughnessMap:Re,dispersion:x,iridescence:N,iridescenceMap:Me,iridescenceThicknessMap:ne,sheen:K,sheenColorMap:se,sheenRoughnessMap:Se,specularMap:be,specularColorMap:he,specularIntensityMap:Ge,transmission:Z,transmissionMap:D,thicknessMap:oe,gradientMap:ie,opaque:v.transparent===!1&&v.blending===Ps&&v.alphaToCoverage===!1,alphaMap:de,alphaTest:te,alphaHash:$,combine:v.combine,mapUv:Ce&&_(v.map.channel),aoMapUv:ke&&_(v.aoMap.channel),lightMapUv:je&&_(v.lightMap.channel),bumpMapUv:Oe&&_(v.bumpMap.channel),normalMapUv:W&&_(v.normalMap.channel),displacementMapUv:L&&_(v.displacementMap.channel),emissiveMapUv:dt&&_(v.emissiveMap.channel),metalnessMapUv:et&&_(v.metalnessMap.channel),roughnessMapUv:ze&&_(v.roughnessMap.channel),anisotropyMapUv:Y&&_(v.anisotropyMap.channel),clearcoatMapUv:ge&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:se&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(v.sheenRoughnessMap.channel),specularMapUv:be&&_(v.specularMap.channel),specularColorMapUv:he&&_(v.specularColorMap.channel),specularIntensityMapUv:Ge&&_(v.specularIntensityMap.channel),transmissionMapUv:D&&_(v.transmissionMap.channel),thicknessMapUv:oe&&_(v.thicknessMap.channel),alphaMapUv:de&&_(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(W||xe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(Ce||de),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&W===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:I.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ce,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Ce&&v.map.isVideoTexture===!0&&lt.getTransfer(v.map.colorSpace)===gt,decodeVideoTextureEmissive:dt&&v.emissiveMap.isVideoTexture===!0&&lt.getTransfer(v.emissiveMap.colorSpace)===gt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Wi,flipSided:v.side===Dn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ye&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&v.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function p(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)y.push(U),y.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(m(y,v),M(y,v),y.push(r.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function m(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function M(v,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function b(v){const y=h[v.type];let U;if(y){const R=Ei[y];U=F_.clone(R.uniforms)}else U=v.uniforms;return U}function S(v,y){let U=u.get(y);return U!==void 0?++U.usedTimes:(U=new aM(r,y,v,i),c.push(U),u.set(y,U)),U}function T(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:b,acquireProgram:S,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:w}}function fM(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function hM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Th(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ah(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,_,g,p,m){let M=r[e];return M===void 0?(M={id:f.id,object:f,geometry:h,material:_,materialVariant:a(f),groupOrder:g,renderOrder:f.renderOrder,z:p,group:m},r[e]=M):(M.id=f.id,M.object=f,M.geometry=h,M.material=_,M.materialVariant=a(f),M.groupOrder=g,M.renderOrder=f.renderOrder,M.z=p,M.group=m),e++,M}function l(f,h,_,g,p,m){const M=o(f,h,_,g,p,m);_.transmission>0?n.push(M):_.transparent===!0?i.push(M):t.push(M)}function c(f,h,_,g,p,m){const M=o(f,h,_,g,p,m);_.transmission>0?n.unshift(M):_.transparent===!0?i.unshift(M):t.unshift(M)}function u(f,h){t.length>1&&t.sort(f||hM),n.length>1&&n.sort(h||Th),i.length>1&&i.sort(h||Th)}function d(){for(let f=e,h=r.length;f<h;f++){const _=r[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function dM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ah,r.set(n,[a])):i>=s.length?(a=new Ah,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function pM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ht};break;case"SpotLight":t={position:new X,direction:new X,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function mM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let _M=0;function gM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function vM(r){const e=new pM,t=mM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const i=new X,s=new Nt,a=new Nt;function o(c){let u=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let h=0,_=0,g=0,p=0,m=0,M=0,b=0,S=0,T=0,A=0,w=0;c.sort(gM);for(let y=0,U=c.length;y<U;y++){const R=c[y],I=R.color,k=R.intensity,V=R.distance;let z=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===zs?z=R.shadow.map.texture:z=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=I.r*k,d+=I.g*k,f+=I.b*k;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],k);w++}else if(R.isDirectionalLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const O=R.shadow,J=t.get(R);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,n.directionalShadow[h]=J,n.directionalShadowMap[h]=z,n.directionalShadowMatrix[h]=R.shadow.matrix,M++}n.directional[h]=B,h++}else if(R.isSpotLight){const B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(I).multiplyScalar(k),B.distance=V,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[g]=B;const O=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,O.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[g]=O.matrix,R.castShadow){const J=t.get(R);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,n.spotShadow[g]=J,n.spotShadowMap[g]=z,S++}g++}else if(R.isRectAreaLight){const B=e.get(R);B.color.copy(I).multiplyScalar(k),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=B,p++}else if(R.isPointLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const O=R.shadow,J=t.get(R);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,J.shadowCameraNear=O.camera.near,J.shadowCameraFar=O.camera.far,n.pointShadow[_]=J,n.pointShadowMap[_]=z,n.pointShadowMatrix[_]=R.shadow.matrix,b++}n.point[_]=B,_++}else if(R.isHemisphereLight){const B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(k),B.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[m]=B,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==h||v.pointLength!==_||v.spotLength!==g||v.rectAreaLength!==p||v.hemiLength!==m||v.numDirectionalShadows!==M||v.numPointShadows!==b||v.numSpotShadows!==S||v.numSpotMaps!==T||v.numLightProbes!==w)&&(n.directional.length=h,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,v.directionalLength=h,v.pointLength=_,v.spotLength=g,v.rectAreaLength=p,v.hemiLength=m,v.numDirectionalShadows=M,v.numPointShadows=b,v.numSpotShadows=S,v.numSpotMaps=T,v.numLightProbes=w,n.version=_M++)}function l(c,u){let d=0,f=0,h=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const b=c[m];if(b.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(b.isSpotLight){const S=n.spot[h];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),h++}else if(b.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(b.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function wh(r){const e=new vM(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function xM(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new wh(r),e.set(i,[o])):s>=a.length?(o=new wh(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const MM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yM=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],EM=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Ch=new Nt,oa=new X,rc=new X;function bM(r,e,t){let n=new kd;const i=new Mt,s=new Mt,a=new zt,o=new z_,l=new V_,c={},u=t.maxTextureSize,d={[yr]:Dn,[Dn]:yr,[Wi]:Wi},f=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:MM,fragmentShader:SM}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new Fn;_.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ii(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bo;let m=this.type;this.render=function(A,w,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===wm&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Bo);const y=r.getRenderTarget(),U=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),I=r.state;I.setBlending($i),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const k=m!==this.type;k&&w.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(z=>z.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,z=A.length;V<z;V++){const B=A[V],O=B.shadow;if(O===void 0){Xe("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const J=O.getFrameExtents();i.multiply(J),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,O.mapSize.y=s.y));const Q=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=Q,O.map===null||k===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===fa){if(B.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Pi(i.x,i.y,{format:zs,type:Zi,minFilter:vn,magFilter:vn,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new Oa(i.x,i.y,Ti),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=Ji,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=an,O.map.depthTexture.magFilter=an}else B.isPointLight?(O.map=new $d(i.x),O.map.depthTexture=new U_(i.x,Li)):(O.map=new Pi(i.x,i.y),O.map.depthTexture=new Oa(i.x,i.y,Li)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=Ji,this.type===Bo?(O.map.depthTexture.compareFunction=Q?$u:Yu,O.map.depthTexture.minFilter=vn,O.map.depthTexture.magFilter=vn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=an,O.map.depthTexture.magFilter=an);O.camera.updateProjectionMatrix()}const P=O.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<P;le++){if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,le),r.clear();else{le===0&&(r.setRenderTarget(O.map),r.clear());const ce=O.getViewport(le);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),I.viewport(a)}if(B.isPointLight){const ce=O.camera,Be=O.matrix,Ve=B.distance||ce.far;Ve!==ce.far&&(ce.far=Ve,ce.updateProjectionMatrix()),oa.setFromMatrixPosition(B.matrixWorld),ce.position.copy(oa),rc.copy(ce.position),rc.add(yM[le]),ce.up.copy(EM[le]),ce.lookAt(rc),ce.updateMatrixWorld(),Be.makeTranslation(-oa.x,-oa.y,-oa.z),Ch.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Ch,ce.coordinateSystem,ce.reversedDepth)}else O.updateMatrices(B);n=O.getFrustum(),S(w,v,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===fa&&M(O,v),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(y,U,R)};function M(A,w){const v=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pi(i.x,i.y,{format:zs,type:Zi})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,v,f,g,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,v,h,g,null)}function b(A,w,v,y){let U=null;const R=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)U=R;else if(U=v.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const I=U.uuid,k=w.uuid;let V=c[I];V===void 0&&(V={},c[I]=V);let z=V[k];z===void 0&&(z=U.clone(),V[k]=z,w.addEventListener("dispose",T)),U=z}if(U.visible=w.visible,U.wireframe=w.wireframe,y===fa?U.side=w.shadowSide!==null?w.shadowSide:w.side:U.side=w.shadowSide!==null?w.shadowSide:d[w.side],U.alphaMap=w.alphaMap,U.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,U.map=w.map,U.clipShadows=w.clipShadows,U.clippingPlanes=w.clippingPlanes,U.clipIntersection=w.clipIntersection,U.displacementMap=w.displacementMap,U.displacementScale=w.displacementScale,U.displacementBias=w.displacementBias,U.wireframeLinewidth=w.wireframeLinewidth,U.linewidth=w.linewidth,v.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const I=r.properties.get(U);I.light=v}return U}function S(A,w,v,y,U){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&U===fa)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const k=e.update(A),V=A.material;if(Array.isArray(V)){const z=k.groups;for(let B=0,O=z.length;B<O;B++){const J=z[B],Q=V[J.materialIndex];if(Q&&Q.visible){const P=b(A,Q,y,U);A.onBeforeShadow(r,A,w,v,k,P,J),r.renderBufferDirect(v,null,k,P,A,J),A.onAfterShadow(r,A,w,v,k,P,J)}}}else if(V.visible){const z=b(A,V,y,U);A.onBeforeShadow(r,A,w,v,k,z,null),r.renderBufferDirect(v,null,k,z,A,null),A.onAfterShadow(r,A,w,v,k,z,null)}}const I=A.children;for(let k=0,V=I.length;k<V;k++)S(I[k],w,v,y,U)}function T(A){A.target.removeEventListener("dispose",T);for(const v in c){const y=c[v],U=A.target.uuid;U in y&&(y[U].dispose(),delete y[U])}}}function TM(r,e){function t(){let D=!1;const oe=new zt;let ie=null;const de=new zt(0,0,0,0);return{setMask:function(te){ie!==te&&!D&&(r.colorMask(te,te,te,te),ie=te)},setLocked:function(te){D=te},setClear:function(te,$,ye,Ne,ct){ct===!0&&(te*=Ne,$*=Ne,ye*=Ne),oe.set(te,$,ye,Ne),de.equals(oe)===!1&&(r.clearColor(te,$,ye,Ne),de.copy(oe))},reset:function(){D=!1,ie=null,de.set(-1,0,0,0)}}}function n(){let D=!1,oe=!1,ie=null,de=null,te=null;return{setReversed:function($){if(oe!==$){const ye=e.get("EXT_clip_control");$?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),oe=$;const Ne=te;te=null,this.setClear(Ne)}},getReversed:function(){return oe},setTest:function($){$?ee(r.DEPTH_TEST):re(r.DEPTH_TEST)},setMask:function($){ie!==$&&!D&&(r.depthMask($),ie=$)},setFunc:function($){if(oe&&($=o_[$]),de!==$){switch($){case Tc:r.depthFunc(r.NEVER);break;case Ac:r.depthFunc(r.ALWAYS);break;case wc:r.depthFunc(r.LESS);break;case Bs:r.depthFunc(r.LEQUAL);break;case Cc:r.depthFunc(r.EQUAL);break;case Rc:r.depthFunc(r.GEQUAL);break;case Pc:r.depthFunc(r.GREATER);break;case Dc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=$}},setLocked:function($){D=$},setClear:function($){te!==$&&(te=$,oe&&($=1-$),r.clearDepth($))},reset:function(){D=!1,ie=null,de=null,te=null,oe=!1}}}function i(){let D=!1,oe=null,ie=null,de=null,te=null,$=null,ye=null,Ne=null,ct=null;return{setTest:function(ve){D||(ve?ee(r.STENCIL_TEST):re(r.STENCIL_TEST))},setMask:function(ve){oe!==ve&&!D&&(r.stencilMask(ve),oe=ve)},setFunc:function(ve,Pe,Ze){(ie!==ve||de!==Pe||te!==Ze)&&(r.stencilFunc(ve,Pe,Ze),ie=ve,de=Pe,te=Ze)},setOp:function(ve,Pe,Ze){($!==ve||ye!==Pe||Ne!==Ze)&&(r.stencilOp(ve,Pe,Ze),$=ve,ye=Pe,Ne=Ze)},setLocked:function(ve){D=ve},setClear:function(ve){ct!==ve&&(r.clearStencil(ve),ct=ve)},reset:function(){D=!1,oe=null,ie=null,de=null,te=null,$=null,ye=null,Ne=null,ct=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],_=null,g=!1,p=null,m=null,M=null,b=null,S=null,T=null,A=null,w=new ht(0,0,0),v=0,y=!1,U=null,R=null,I=null,k=null,V=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,O=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(J)[1]),B=O>=1):J.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),B=O>=2);let Q=null,P={};const le=r.getParameter(r.SCISSOR_BOX),ce=r.getParameter(r.VIEWPORT),Be=new zt().fromArray(le),Ve=new zt().fromArray(ce);function Ye(D,oe,ie,de){const te=new Uint8Array(4),$=r.createTexture();r.bindTexture(D,$),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ye=0;ye<ie;ye++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(oe,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(oe+ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return $}const j={};j[r.TEXTURE_2D]=Ye(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=Ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=Ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=Ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(r.DEPTH_TEST),a.setFunc(Bs),Oe(!1),W(Df),ee(r.CULL_FACE),ke($i);function ee(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function re(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function Le(D,oe){return d[D]!==oe?(r.bindFramebuffer(D,oe),d[D]=oe,D===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=oe),D===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ie(D,oe){let ie=h,de=!1;if(D){ie=f.get(oe),ie===void 0&&(ie=[],f.set(oe,ie));const te=D.textures;if(ie.length!==te.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let $=0,ye=te.length;$<ye;$++)ie[$]=r.COLOR_ATTACHMENT0+$;ie.length=te.length,de=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,de=!0);de&&r.drawBuffers(ie)}function Ce(D){return _!==D?(r.useProgram(D),_=D,!0):!1}const ot={[Vr]:r.FUNC_ADD,[Rm]:r.FUNC_SUBTRACT,[Pm]:r.FUNC_REVERSE_SUBTRACT};ot[Dm]=r.MIN,ot[Lm]=r.MAX;const Ee={[Im]:r.ZERO,[Um]:r.ONE,[Nm]:r.SRC_COLOR,[Ec]:r.SRC_ALPHA,[Vm]:r.SRC_ALPHA_SATURATE,[km]:r.DST_COLOR,[Om]:r.DST_ALPHA,[Fm]:r.ONE_MINUS_SRC_COLOR,[bc]:r.ONE_MINUS_SRC_ALPHA,[zm]:r.ONE_MINUS_DST_COLOR,[Bm]:r.ONE_MINUS_DST_ALPHA,[Gm]:r.CONSTANT_COLOR,[Hm]:r.ONE_MINUS_CONSTANT_COLOR,[Wm]:r.CONSTANT_ALPHA,[Xm]:r.ONE_MINUS_CONSTANT_ALPHA};function ke(D,oe,ie,de,te,$,ye,Ne,ct,ve){if(D===$i){g===!0&&(re(r.BLEND),g=!1);return}if(g===!1&&(ee(r.BLEND),g=!0),D!==Cm){if(D!==p||ve!==y){if((m!==Vr||S!==Vr)&&(r.blendEquation(r.FUNC_ADD),m=Vr,S=Vr),ve)switch(D){case Ps:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yc:r.blendFunc(r.ONE,r.ONE);break;case Lf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case If:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ft("WebGLState: Invalid blending: ",D);break}else switch(D){case Ps:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Lf:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case If:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",D);break}M=null,b=null,T=null,A=null,w.set(0,0,0),v=0,p=D,y=ve}return}te=te||oe,$=$||ie,ye=ye||de,(oe!==m||te!==S)&&(r.blendEquationSeparate(ot[oe],ot[te]),m=oe,S=te),(ie!==M||de!==b||$!==T||ye!==A)&&(r.blendFuncSeparate(Ee[ie],Ee[de],Ee[$],Ee[ye]),M=ie,b=de,T=$,A=ye),(Ne.equals(w)===!1||ct!==v)&&(r.blendColor(Ne.r,Ne.g,Ne.b,ct),w.copy(Ne),v=ct),p=D,y=!1}function je(D,oe){D.side===Wi?re(r.CULL_FACE):ee(r.CULL_FACE);let ie=D.side===Dn;oe&&(ie=!ie),Oe(ie),D.blending===Ps&&D.transparent===!1?ke($i):ke(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const de=D.stencilWrite;o.setTest(de),de&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),dt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):re(r.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(D){U!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),U=D)}function W(D){D!==Tm?(ee(r.CULL_FACE),D!==R&&(D===Df?r.cullFace(r.BACK):D===Am?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):re(r.CULL_FACE),R=D}function L(D){D!==I&&(B&&r.lineWidth(D),I=D)}function dt(D,oe,ie){D?(ee(r.POLYGON_OFFSET_FILL),(k!==oe||V!==ie)&&(k=oe,V=ie,a.getReversed()&&(oe=-oe),r.polygonOffset(oe,ie))):re(r.POLYGON_OFFSET_FILL)}function et(D){D?ee(r.SCISSOR_TEST):re(r.SCISSOR_TEST)}function ze(D){D===void 0&&(D=r.TEXTURE0+z-1),Q!==D&&(r.activeTexture(D),Q=D)}function xe(D,oe,ie){ie===void 0&&(Q===null?ie=r.TEXTURE0+z-1:ie=Q);let de=P[ie];de===void 0&&(de={type:void 0,texture:void 0},P[ie]=de),(de.type!==D||de.texture!==oe)&&(Q!==ie&&(r.activeTexture(ie),Q=ie),r.bindTexture(D,oe||j[D]),de.type=D,de.texture=oe)}function C(){const D=P[Q];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{r.compressedTexImage2D(...arguments)}catch(D){ft("WebGLState:",D)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(D){ft("WebGLState:",D)}}function K(){try{r.texSubImage2D(...arguments)}catch(D){ft("WebGLState:",D)}}function Z(){try{r.texSubImage3D(...arguments)}catch(D){ft("WebGLState:",D)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(D){ft("WebGLState:",D)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(D){ft("WebGLState:",D)}}function ae(){try{r.texStorage2D(...arguments)}catch(D){ft("WebGLState:",D)}}function Re(){try{r.texStorage3D(...arguments)}catch(D){ft("WebGLState:",D)}}function Me(){try{r.texImage2D(...arguments)}catch(D){ft("WebGLState:",D)}}function ne(){try{r.texImage3D(...arguments)}catch(D){ft("WebGLState:",D)}}function se(D){Be.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Be.copy(D))}function Se(D){Ve.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Ve.copy(D))}function be(D,oe){let ie=c.get(oe);ie===void 0&&(ie=new WeakMap,c.set(oe,ie));let de=ie.get(D);de===void 0&&(de=r.getUniformBlockIndex(oe,D.name),ie.set(D,de))}function he(D,oe){const de=c.get(oe).get(D);l.get(oe)!==de&&(r.uniformBlockBinding(oe,de,D.__bindingPointIndex),l.set(oe,de))}function Ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,P={},d={},f=new WeakMap,h=[],_=null,g=!1,p=null,m=null,M=null,b=null,S=null,T=null,A=null,w=new ht(0,0,0),v=0,y=!1,U=null,R=null,I=null,k=null,V=null,Be.set(0,0,r.canvas.width,r.canvas.height),Ve.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:re,bindFramebuffer:Le,drawBuffers:Ie,useProgram:Ce,setBlending:ke,setMaterial:je,setFlipSided:Oe,setCullFace:W,setLineWidth:L,setPolygonOffset:dt,setScissorTest:et,activeTexture:ze,bindTexture:xe,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Me,texImage3D:ne,updateUBOMapping:be,uniformBlockBinding:he,texStorage2D:ae,texStorage3D:Re,texSubImage2D:K,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:ge,scissor:se,viewport:Se,reset:Ge}}function AM(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,x){return h?new OffscreenCanvas(C,x):tl("canvas")}function g(C,x,N){let K=1;const Z=xe(C);if((Z.width>N||Z.height>N)&&(K=N/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(K*Z.width),ge=Math.floor(K*Z.height);d===void 0&&(d=_(Y,ge));const ae=x?_(Y,ge):d;return ae.width=Y,ae.height=ge,ae.getContext("2d").drawImage(C,0,0,Y,ge),Xe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+ge+")."),ae}else return"data"in C&&Xe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function p(C){return C.generateMipmaps}function m(C){r.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(C,x,N,K,Z=!1){if(C!==null){if(r[C]!==void 0)return r[C];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=x;if(x===r.RED&&(N===r.FLOAT&&(Y=r.R32F),N===r.HALF_FLOAT&&(Y=r.R16F),N===r.UNSIGNED_BYTE&&(Y=r.R8)),x===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(Y=r.R8UI),N===r.UNSIGNED_SHORT&&(Y=r.R16UI),N===r.UNSIGNED_INT&&(Y=r.R32UI),N===r.BYTE&&(Y=r.R8I),N===r.SHORT&&(Y=r.R16I),N===r.INT&&(Y=r.R32I)),x===r.RG&&(N===r.FLOAT&&(Y=r.RG32F),N===r.HALF_FLOAT&&(Y=r.RG16F),N===r.UNSIGNED_BYTE&&(Y=r.RG8)),x===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(Y=r.RG8UI),N===r.UNSIGNED_SHORT&&(Y=r.RG16UI),N===r.UNSIGNED_INT&&(Y=r.RG32UI),N===r.BYTE&&(Y=r.RG8I),N===r.SHORT&&(Y=r.RG16I),N===r.INT&&(Y=r.RG32I)),x===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),N===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),N===r.UNSIGNED_INT&&(Y=r.RGB32UI),N===r.BYTE&&(Y=r.RGB8I),N===r.SHORT&&(Y=r.RGB16I),N===r.INT&&(Y=r.RGB32I)),x===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),N===r.UNSIGNED_INT&&(Y=r.RGBA32UI),N===r.BYTE&&(Y=r.RGBA8I),N===r.SHORT&&(Y=r.RGBA16I),N===r.INT&&(Y=r.RGBA32I)),x===r.RGB&&(N===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),N===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),x===r.RGBA){const ge=Z?Qo:lt.getTransfer(K);N===r.FLOAT&&(Y=r.RGBA32F),N===r.HALF_FLOAT&&(Y=r.RGBA16F),N===r.UNSIGNED_BYTE&&(Y=ge===gt?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(C,x){let N;return C?x===null||x===Li||x===Fa?N=r.DEPTH24_STENCIL8:x===Ti?N=r.DEPTH32F_STENCIL8:x===Na&&(N=r.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Li||x===Fa?N=r.DEPTH_COMPONENT24:x===Ti?N=r.DEPTH_COMPONENT32F:x===Na&&(N=r.DEPTH_COMPONENT16),N}function T(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==an&&C.minFilter!==vn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function A(C){const x=C.target;x.removeEventListener("dispose",A),v(x),x.isVideoTexture&&u.delete(x)}function w(C){const x=C.target;x.removeEventListener("dispose",w),U(x)}function v(C){const x=n.get(C);if(x.__webglInit===void 0)return;const N=C.source,K=f.get(N);if(K){const Z=K[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(C),Object.keys(K).length===0&&f.delete(N)}n.remove(C)}function y(C){const x=n.get(C);r.deleteTexture(x.__webglTexture);const N=C.source,K=f.get(N);delete K[x.__cacheKey],a.memory.textures--}function U(C){const x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let Z=0;Z<x.__webglFramebuffer[K].length;Z++)r.deleteFramebuffer(x.__webglFramebuffer[K][Z]);else r.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)r.deleteFramebuffer(x.__webglFramebuffer[K]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=C.textures;for(let K=0,Z=N.length;K<Z;K++){const Y=n.get(N[K]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(N[K])}n.remove(C)}let R=0;function I(){R=0}function k(){const C=R;return C>=i.maxTextures&&Xe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function V(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function z(C,x){const N=n.get(C);if(C.isVideoTexture&&et(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const K=C.image;if(K===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{j(N,C,x);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+x)}function B(C,x){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){j(N,C,x);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+x)}function O(C,x){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){j(N,C,x);return}t.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+x)}function J(C,x){const N=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){ee(N,C,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+x)}const Q={[Lc]:r.REPEAT,[qi]:r.CLAMP_TO_EDGE,[Ic]:r.MIRRORED_REPEAT},P={[an]:r.NEAREST,[$m]:r.NEAREST_MIPMAP_NEAREST,[Ja]:r.NEAREST_MIPMAP_LINEAR,[vn]:r.LINEAR,[wl]:r.LINEAR_MIPMAP_NEAREST,[Hr]:r.LINEAR_MIPMAP_LINEAR},le={[Jm]:r.NEVER,[i_]:r.ALWAYS,[Qm]:r.LESS,[Yu]:r.LEQUAL,[e_]:r.EQUAL,[$u]:r.GEQUAL,[t_]:r.GREATER,[n_]:r.NOTEQUAL};function ce(C,x){if(x.type===Ti&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===vn||x.magFilter===wl||x.magFilter===Ja||x.magFilter===Hr||x.minFilter===vn||x.minFilter===wl||x.minFilter===Ja||x.minFilter===Hr)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Q[x.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Q[x.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Q[x.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,P[x.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,P[x.minFilter]),x.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===an||x.minFilter!==Ja&&x.minFilter!==Hr||x.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Be(C,x){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",A));const K=x.source;let Z=f.get(K);Z===void 0&&(Z={},f.set(K,Z));const Y=V(x);if(Y!==C.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[Y].usedTimes++;const ge=Z[C.__cacheKey];ge!==void 0&&(Z[C.__cacheKey].usedTimes--,ge.usedTimes===0&&y(x)),C.__cacheKey=Y,C.__webglTexture=Z[Y].texture}return N}function Ve(C,x,N){return Math.floor(Math.floor(C/N)/x)}function Ye(C,x,N,K){const Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,N,K,x.data);else{Y.sort((ne,se)=>ne.start-se.start);let ge=0;for(let ne=1;ne<Y.length;ne++){const se=Y[ge],Se=Y[ne],be=se.start+se.count,he=Ve(Se.start,x.width,4),Ge=Ve(se.start,x.width,4);Se.start<=be+1&&he===Ge&&Ve(Se.start+Se.count-1,x.width,4)===he?se.count=Math.max(se.count,Se.start+Se.count-se.start):(++ge,Y[ge]=Se)}Y.length=ge+1;const ae=r.getParameter(r.UNPACK_ROW_LENGTH),Re=r.getParameter(r.UNPACK_SKIP_PIXELS),Me=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let ne=0,se=Y.length;ne<se;ne++){const Se=Y[ne],be=Math.floor(Se.start/4),he=Math.ceil(Se.count/4),Ge=be%x.width,D=Math.floor(be/x.width),oe=he,ie=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,Ge,D,oe,ie,N,K,x.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ae),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Re),r.pixelStorei(r.UNPACK_SKIP_ROWS,Me)}}function j(C,x,N){let K=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=r.TEXTURE_3D);const Z=Be(C,x),Y=x.source;t.bindTexture(K,C.__webglTexture,r.TEXTURE0+N);const ge=n.get(Y);if(Y.version!==ge.__version||Z===!0){t.activeTexture(r.TEXTURE0+N);const ae=lt.getPrimaries(lt.workingColorSpace),Re=x.colorSpace===fr?null:lt.getPrimaries(x.colorSpace),Me=x.colorSpace===fr||ae===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ne=g(x.image,!1,i.maxTextureSize);ne=ze(x,ne);const se=s.convert(x.format,x.colorSpace),Se=s.convert(x.type);let be=b(x.internalFormat,se,Se,x.colorSpace,x.isVideoTexture);ce(K,x);let he;const Ge=x.mipmaps,D=x.isVideoTexture!==!0,oe=ge.__version===void 0||Z===!0,ie=Y.dataReady,de=T(x,ne);if(x.isDepthTexture)be=S(x.format===Wr,x.type),oe&&(D?t.texStorage2D(r.TEXTURE_2D,1,be,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,be,ne.width,ne.height,0,se,Se,null));else if(x.isDataTexture)if(Ge.length>0){D&&oe&&t.texStorage2D(r.TEXTURE_2D,de,be,Ge[0].width,Ge[0].height);for(let te=0,$=Ge.length;te<$;te++)he=Ge[te],D?ie&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,he.width,he.height,se,Se,he.data):t.texImage2D(r.TEXTURE_2D,te,be,he.width,he.height,0,se,Se,he.data);x.generateMipmaps=!1}else D?(oe&&t.texStorage2D(r.TEXTURE_2D,de,be,ne.width,ne.height),ie&&Ye(x,ne,se,Se)):t.texImage2D(r.TEXTURE_2D,0,be,ne.width,ne.height,0,se,Se,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&oe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,be,Ge[0].width,Ge[0].height,ne.depth);for(let te=0,$=Ge.length;te<$;te++)if(he=Ge[te],x.format!==_i)if(se!==null)if(D){if(ie)if(x.layerUpdates.size>0){const ye=sh(he.width,he.height,x.format,x.type);for(const Ne of x.layerUpdates){const ct=he.data.subarray(Ne*ye/he.data.BYTES_PER_ELEMENT,(Ne+1)*ye/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,Ne,he.width,he.height,1,se,ct)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ne.depth,se,he.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,be,he.width,he.height,ne.depth,0,he.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ie&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ne.depth,se,Se,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,be,he.width,he.height,ne.depth,0,se,Se,he.data)}else{D&&oe&&t.texStorage2D(r.TEXTURE_2D,de,be,Ge[0].width,Ge[0].height);for(let te=0,$=Ge.length;te<$;te++)he=Ge[te],x.format!==_i?se!==null?D?ie&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,he.width,he.height,se,he.data):t.compressedTexImage2D(r.TEXTURE_2D,te,be,he.width,he.height,0,he.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ie&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,he.width,he.height,se,Se,he.data):t.texImage2D(r.TEXTURE_2D,te,be,he.width,he.height,0,se,Se,he.data)}else if(x.isDataArrayTexture)if(D){if(oe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,be,ne.width,ne.height,ne.depth),ie)if(x.layerUpdates.size>0){const te=sh(ne.width,ne.height,x.format,x.type);for(const $ of x.layerUpdates){const ye=ne.data.subarray($*te/ne.data.BYTES_PER_ELEMENT,($+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,ne.width,ne.height,1,se,Se,ye)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,se,Se,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,be,ne.width,ne.height,ne.depth,0,se,Se,ne.data);else if(x.isData3DTexture)D?(oe&&t.texStorage3D(r.TEXTURE_3D,de,be,ne.width,ne.height,ne.depth),ie&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,se,Se,ne.data)):t.texImage3D(r.TEXTURE_3D,0,be,ne.width,ne.height,ne.depth,0,se,Se,ne.data);else if(x.isFramebufferTexture){if(oe)if(D)t.texStorage2D(r.TEXTURE_2D,de,be,ne.width,ne.height);else{let te=ne.width,$=ne.height;for(let ye=0;ye<de;ye++)t.texImage2D(r.TEXTURE_2D,ye,be,te,$,0,se,Se,null),te>>=1,$>>=1}}else if(Ge.length>0){if(D&&oe){const te=xe(Ge[0]);t.texStorage2D(r.TEXTURE_2D,de,be,te.width,te.height)}for(let te=0,$=Ge.length;te<$;te++)he=Ge[te],D?ie&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,se,Se,he):t.texImage2D(r.TEXTURE_2D,te,be,se,Se,he);x.generateMipmaps=!1}else if(D){if(oe){const te=xe(ne);t.texStorage2D(r.TEXTURE_2D,de,be,te.width,te.height)}ie&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se,Se,ne)}else t.texImage2D(r.TEXTURE_2D,0,be,se,Se,ne);p(x)&&m(K),ge.__version=Y.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function ee(C,x,N){if(x.image.length!==6)return;const K=Be(C,x),Z=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+N);const Y=n.get(Z);if(Z.version!==Y.__version||K===!0){t.activeTexture(r.TEXTURE0+N);const ge=lt.getPrimaries(lt.workingColorSpace),ae=x.colorSpace===fr?null:lt.getPrimaries(x.colorSpace),Re=x.colorSpace===fr||ge===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Me=x.isCompressedTexture||x.image[0].isCompressedTexture,ne=x.image[0]&&x.image[0].isDataTexture,se=[];for(let $=0;$<6;$++)!Me&&!ne?se[$]=g(x.image[$],!0,i.maxCubemapSize):se[$]=ne?x.image[$].image:x.image[$],se[$]=ze(x,se[$]);const Se=se[0],be=s.convert(x.format,x.colorSpace),he=s.convert(x.type),Ge=b(x.internalFormat,be,he,x.colorSpace),D=x.isVideoTexture!==!0,oe=Y.__version===void 0||K===!0,ie=Z.dataReady;let de=T(x,Se);ce(r.TEXTURE_CUBE_MAP,x);let te;if(Me){D&&oe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Ge,Se.width,Se.height);for(let $=0;$<6;$++){te=se[$].mipmaps;for(let ye=0;ye<te.length;ye++){const Ne=te[ye];x.format!==_i?be!==null?D?ie&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,Ne.width,Ne.height,be,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,Ge,Ne.width,Ne.height,0,Ne.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,Ne.width,Ne.height,be,he,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,Ge,Ne.width,Ne.height,0,be,he,Ne.data)}}}else{if(te=x.mipmaps,D&&oe){te.length>0&&de++;const $=xe(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Ge,$.width,$.height)}for(let $=0;$<6;$++)if(ne){D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,se[$].width,se[$].height,be,he,se[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,se[$].width,se[$].height,0,be,he,se[$].data);for(let ye=0;ye<te.length;ye++){const ct=te[ye].image[$].image;D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,ct.width,ct.height,be,he,ct.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,Ge,ct.width,ct.height,0,be,he,ct.data)}}else{D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,be,he,se[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,be,he,se[$]);for(let ye=0;ye<te.length;ye++){const Ne=te[ye];D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,be,he,Ne.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,Ge,be,he,Ne.image[$])}}}p(x)&&m(r.TEXTURE_CUBE_MAP),Y.__version=Z.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function re(C,x,N,K,Z,Y){const ge=s.convert(N.format,N.colorSpace),ae=s.convert(N.type),Re=b(N.internalFormat,ge,ae,N.colorSpace),Me=n.get(x),ne=n.get(N);if(ne.__renderTarget=x,!Me.__hasExternalTextures){const se=Math.max(1,x.width>>Y),Se=Math.max(1,x.height>>Y);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,Re,se,Se,x.depth,0,ge,ae,null):t.texImage2D(Z,Y,Re,se,Se,0,ge,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),dt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,Z,ne.__webglTexture,0,L(x)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,Z,ne.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(C,x,N){if(r.bindRenderbuffer(r.RENDERBUFFER,C),x.depthBuffer){const K=x.depthTexture,Z=K&&K.isDepthTexture?K.type:null,Y=S(x.stencilBuffer,Z),ge=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;dt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L(x),Y,x.width,x.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,L(x),Y,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Y,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,C)}else{const K=x.textures;for(let Z=0;Z<K.length;Z++){const Y=K[Z],ge=s.convert(Y.format,Y.colorSpace),ae=s.convert(Y.type),Re=b(Y.internalFormat,ge,ae,Y.colorSpace);dt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L(x),Re,x.width,x.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,L(x),Re,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Re,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ie(C,x,N){const K=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(x.depthTexture);if(Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),ce(r.TEXTURE_CUBE_MAP,x.depthTexture);const Me=s.convert(x.depthTexture.format),ne=s.convert(x.depthTexture.type);let se;x.depthTexture.format===Ji?se=r.DEPTH_COMPONENT24:x.depthTexture.format===Wr&&(se=r.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,se,x.width,x.height,0,Me,ne,null)}}else z(x.depthTexture,0);const Y=Z.__webglTexture,ge=L(x),ae=K?r.TEXTURE_CUBE_MAP_POSITIVE_X+N:r.TEXTURE_2D,Re=x.depthTexture.format===Wr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ji)dt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Re,ae,Y,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,Re,ae,Y,0);else if(x.depthTexture.format===Wr)dt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Re,ae,Y,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,Re,ae,Y,0);else throw new Error("Unknown depthTexture format")}function Ce(C){const x=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=K}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let K=0;K<6;K++)Ie(x.__webglFramebuffer[K],C,K);else{const K=C.texture.mipmaps;K&&K.length>0?Ie(x.__webglFramebuffer[0],C,0):Ie(x.__webglFramebuffer,C,0)}else if(N){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=r.createRenderbuffer(),Le(x.__webglDepthbuffer[K],C,!1);else{const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Y)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Le(x.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Y)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(C,x,N){const K=n.get(C);x!==void 0&&re(K.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&Ce(C)}function Ee(C){const x=C.texture,N=n.get(C),K=n.get(x);C.addEventListener("dispose",w);const Z=C.textures,Y=C.isWebGLCubeRenderTarget===!0,ge=Z.length>1;if(ge||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=x.version,a.memory.textures++),Y){N.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ae]=[];for(let Re=0;Re<x.mipmaps.length;Re++)N.__webglFramebuffer[ae][Re]=r.createFramebuffer()}else N.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ae=0;ae<x.mipmaps.length;ae++)N.__webglFramebuffer[ae]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(ge)for(let ae=0,Re=Z.length;ae<Re;ae++){const Me=n.get(Z[ae]);Me.__webglTexture===void 0&&(Me.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&dt(C)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){const Re=Z[ae];N.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[ae]);const Me=s.convert(Re.format,Re.colorSpace),ne=s.convert(Re.type),se=b(Re.internalFormat,Me,ne,Re.colorSpace,C.isXRRenderTarget===!0),Se=L(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,se,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,N.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(N.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),ce(r.TEXTURE_CUBE_MAP,x);for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)re(N.__webglFramebuffer[ae][Re],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Re);else re(N.__webglFramebuffer[ae],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(x)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ae=0,Re=Z.length;ae<Re;ae++){const Me=Z[ae],ne=n.get(Me);let se=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,ne.__webglTexture),ce(se,Me),re(N.__webglFramebuffer,C,Me,r.COLOR_ATTACHMENT0+ae,se,0),p(Me)&&m(se)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,K.__webglTexture),ce(ae,x),x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)re(N.__webglFramebuffer[Re],C,x,r.COLOR_ATTACHMENT0,ae,Re);else re(N.__webglFramebuffer,C,x,r.COLOR_ATTACHMENT0,ae,0);p(x)&&m(ae),t.unbindTexture()}C.depthBuffer&&Ce(C)}function ke(C){const x=C.textures;for(let N=0,K=x.length;N<K;N++){const Z=x[N];if(p(Z)){const Y=M(C),ge=n.get(Z).__webglTexture;t.bindTexture(Y,ge),m(Y),t.unbindTexture()}}}const je=[],Oe=[];function W(C){if(C.samples>0){if(dt(C)===!1){const x=C.textures,N=C.width,K=C.height;let Z=r.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(C),ae=x.length>1;if(ae)for(let Me=0;Me<x.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const Re=C.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Me=0;Me<x.length;Me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[Me]);const ne=n.get(x[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,N,K,0,0,N,K,Z,r.NEAREST),l===!0&&(je.length=0,Oe.length=0,je.push(r.COLOR_ATTACHMENT0+Me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(je.push(Y),Oe.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Oe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let Me=0;Me<x.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,ge.__webglColorRenderbuffer[Me]);const ne=n.get(x[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function L(C){return Math.min(i.maxSamples,C.samples)}function dt(C){const x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function et(C){const x=a.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function ze(C,x){const N=C.colorSpace,K=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==Vs&&N!==fr&&(lt.getTransfer(N)===gt?(K!==_i||Z!==ai)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",N)),x}function xe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=I,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=O,this.setTextureCube=J,this.rebindTextures=ot,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=re,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wM(r,e){function t(n,i=fr){let s;const a=lt.getTransfer(i);if(n===ai)return r.UNSIGNED_BYTE;if(n===Gu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Hu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Cd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Rd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ad)return r.BYTE;if(n===wd)return r.SHORT;if(n===Na)return r.UNSIGNED_SHORT;if(n===Vu)return r.INT;if(n===Li)return r.UNSIGNED_INT;if(n===Ti)return r.FLOAT;if(n===Zi)return r.HALF_FLOAT;if(n===Pd)return r.ALPHA;if(n===Dd)return r.RGB;if(n===_i)return r.RGBA;if(n===Ji)return r.DEPTH_COMPONENT;if(n===Wr)return r.DEPTH_STENCIL;if(n===Ld)return r.RED;if(n===Wu)return r.RED_INTEGER;if(n===zs)return r.RG;if(n===Xu)return r.RG_INTEGER;if(n===qu)return r.RGBA_INTEGER;if(n===ko||n===zo||n===Vo||n===Go)if(a===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ko)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ko)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Go)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uc||n===Nc||n===Fc||n===Oc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Uc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bc||n===kc||n===zc||n===Vc||n===Gc||n===Hc||n===Wc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Bc||n===kc)return a===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===zc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vc)return s.COMPRESSED_R11_EAC;if(n===Gc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Hc)return s.COMPRESSED_RG11_EAC;if(n===Wc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xc||n===qc||n===Yc||n===$c||n===jc||n===Kc||n===Zc||n===Jc||n===Qc||n===eu||n===tu||n===nu||n===iu||n===ru)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$c)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qc)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===iu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ru)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===su||n===au||n===ou)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===su)return a===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===au)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ou)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lu||n===cu||n===uu||n===fu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===lu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===cu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const CM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Hd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ui({vertexShader:CM,fragmentShader:RM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ii(new vl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DM extends Ks{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null;const g=typeof XRWebGLBinding<"u",p=new PM,m={},M=t.getContextAttributes();let b=null,S=null;const T=[],A=[],w=new Mt;let v=null;const y=new ii;y.viewport=new zt;const U=new ii;U.viewport=new zt;const R=[y,U],I=new H_;let k=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=T[j];return ee===void 0&&(ee=new Nl,T[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=T[j];return ee===void 0&&(ee=new Nl,T[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=T[j];return ee===void 0&&(ee=new Nl,T[j]=ee),ee.getHandSpace()};function z(j){const ee=A.indexOf(j.inputSource);if(ee===-1)return;const re=T[ee];re!==void 0&&(re.update(j.inputSource,j.frame,c||a),re.dispatchEvent({type:j.type,data:j.inputSource}))}function B(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",O);for(let j=0;j<T.length;j++){const ee=A[j];ee!==null&&(A[j]=null,T[j].disconnect(ee))}k=null,V=null,p.reset();for(const j in m)delete m[j];e.setRenderTarget(b),h=null,f=null,d=null,i=null,S=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",B),i.addEventListener("inputsourceschange",O),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Le=null,Ie=null;M.depth&&(Ie=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=M.stencil?Wr:Ji,Le=M.stencil?Fa:Li);const Ce={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ce),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Pi(f.textureWidth,f.textureHeight,{format:_i,type:ai,depthTexture:new Oa(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const re={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Pi(h.framebufferWidth,h.framebufferHeight,{format:_i,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(j){for(let ee=0;ee<j.removed.length;ee++){const re=j.removed[ee],Le=A.indexOf(re);Le>=0&&(A[Le]=null,T[Le].disconnect(re))}for(let ee=0;ee<j.added.length;ee++){const re=j.added[ee];let Le=A.indexOf(re);if(Le===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=A.length){A.push(re),Le=Ce;break}else if(A[Ce]===null){A[Ce]=re,Le=Ce;break}if(Le===-1)break}const Ie=T[Le];Ie&&Ie.connect(re)}}const J=new X,Q=new X;function P(j,ee,re){J.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(re.matrixWorld);const Le=J.distanceTo(Q),Ie=ee.projectionMatrix.elements,Ce=re.projectionMatrix.elements,ot=Ie[14]/(Ie[10]-1),Ee=Ie[14]/(Ie[10]+1),ke=(Ie[9]+1)/Ie[5],je=(Ie[9]-1)/Ie[5],Oe=(Ie[8]-1)/Ie[0],W=(Ce[8]+1)/Ce[0],L=ot*Oe,dt=ot*W,et=Le/(-Oe+W),ze=et*-Oe;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ze),j.translateZ(et),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ie[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const xe=ot+et,C=Ee+et,x=L-ze,N=dt+(Le-ze),K=ke*Ee/C*xe,Z=je*Ee/C*xe;j.projectionMatrix.makePerspective(x,N,K,Z,xe,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function le(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ee=j.near,re=j.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(re=p.depthFar)),I.near=U.near=y.near=ee,I.far=U.far=y.far=re,(k!==I.near||V!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),k=I.near,V=I.far),I.layers.mask=j.layers.mask|6,y.layers.mask=I.layers.mask&-5,U.layers.mask=I.layers.mask&-3;const Le=j.parent,Ie=I.cameras;le(I,Le);for(let Ce=0;Ce<Ie.length;Ce++)le(Ie[Ce],Le);Ie.length===2?P(I,y,U):I.projectionMatrix.copy(y.projectionMatrix),ce(j,I,Le)};function ce(j,ee,re){re===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(re.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=hu*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(j){return m[j]};let Be=null;function Ve(j,ee){if(u=ee.getViewerPose(c||a),_=ee,u!==null){const re=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Le=!1;re.length!==I.cameras.length&&(I.cameras.length=0,Le=!0);for(let Ee=0;Ee<re.length;Ee++){const ke=re[Ee];let je=null;if(h!==null)je=h.getViewport(ke);else{const W=d.getViewSubImage(f,ke);je=W.viewport,Ee===0&&(e.setRenderTargetTextures(S,W.colorTexture,W.depthStencilTexture),e.setRenderTarget(S))}let Oe=R[Ee];Oe===void 0&&(Oe=new ii,Oe.layers.enable(Ee),Oe.viewport=new zt,R[Ee]=Oe),Oe.matrix.fromArray(ke.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(ke.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(je.x,je.y,je.width,je.height),Ee===0&&(I.matrix.copy(Oe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Le===!0&&I.cameras.push(Oe)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const Ee=d.getDepthInformation(re[0]);Ee&&Ee.isValid&&Ee.texture&&p.init(Ee,i.renderState)}if(Ie&&Ie.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let Ee=0;Ee<re.length;Ee++){const ke=re[Ee].camera;if(ke){let je=m[ke];je||(je=new Hd,m[ke]=je);const Oe=d.getCameraImage(ke);je.sourceTexture=Oe}}}}for(let re=0;re<T.length;re++){const Le=A[re],Ie=T[re];Le!==null&&Ie!==void 0&&Ie.update(Le,ee,c||a)}Be&&Be(j,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),_=null}const Ye=new Yd;Ye.setAnimationLoop(Ve),this.setAnimationLoop=function(j){Be=j},this.dispose=function(){}}}const Ur=new Qi,LM=new Nt;function IM(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Wd(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,b,S){m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,b):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Dn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Dn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),b=M.envMap,S=M.envMapRotation;b&&(p.envMap.value=b,Ur.copy(S),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),p.envMapRotation.value.setFromMatrix4(LM.makeRotationFromEuler(Ur)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=b*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Dn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function UM(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const S=b.program;n.uniformBlockBinding(M,S)}function c(M,b){let S=i[M.id];S===void 0&&(_(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",p));const T=b.program;n.updateUBOMapping(M,T);const A=e.render.frame;s[M.id]!==A&&(f(M),s[M.id]=A)}function u(M){const b=d();M.__bindingPointIndex=b;const S=r.createBuffer(),T=M.__size,A=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,T,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,S),S}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const b=i[M.id],S=M.uniforms,T=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let A=0,w=S.length;A<w;A++){const v=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,U=v.length;y<U;y++){const R=v[y];if(h(R,A,y,T)===!0){const I=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let z=0;z<k.length;z++){const B=k[z],O=g(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,I+V,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,V),V+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(M,b,S,T){const A=M.value,w=b+"_"+S;if(T[w]===void 0)return typeof A=="number"||typeof A=="boolean"?T[w]=A:T[w]=A.clone(),!0;{const v=T[w];if(typeof A=="number"||typeof A=="boolean"){if(v!==A)return T[w]=A,!0}else if(v.equals(A)===!1)return v.copy(A),!0}return!1}function _(M){const b=M.uniforms;let S=0;const T=16;for(let w=0,v=b.length;w<v;w++){const y=Array.isArray(b[w])?b[w]:[b[w]];for(let U=0,R=y.length;U<R;U++){const I=y[U],k=Array.isArray(I.value)?I.value:[I.value];for(let V=0,z=k.length;V<z;V++){const B=k[V],O=g(B),J=S%T,Q=J%O.boundary,P=J+Q;S+=Q,P!==0&&T-P<O.storage&&(S+=T-P),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=O.storage}}}const A=S%T;return A>0&&(S+=T-A),M.__size=S,M.__cache={},this}function g(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xe("WebGLRenderer: Unsupported uniform value type.",M),b}function p(M){const b=M.target;b.removeEventListener("dispose",p);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function m(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}const NM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mi=null;function FM(){return Mi===null&&(Mi=new C_(NM,16,16,zs,Zi),Mi.name="DFG_LUT",Mi.minFilter=vn,Mi.magFilter=vn,Mi.wrapS=qi,Mi.wrapT=qi,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}class OM{constructor(e={}){const{canvas:t=s_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=ai}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=h,p=new Set([qu,Xu,Wu]),m=new Set([ai,Li,Na,Fa,Gu,Hu]),M=new Uint32Array(4),b=new Int32Array(4);let S=null,T=null;const A=[],w=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let U=!1;this._outputColorSpace=ni;let R=0,I=0,k=null,V=-1,z=null;const B=new zt,O=new zt;let J=null;const Q=new ht(0);let P=0,le=t.width,ce=t.height,Be=1,Ve=null,Ye=null;const j=new zt(0,0,le,ce),ee=new zt(0,0,le,ce);let re=!1;const Le=new kd;let Ie=!1,Ce=!1;const ot=new Nt,Ee=new X,ke=new zt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function W(){return k===null?Be:1}let L=n;function dt(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zu}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",ct,!1),L===null){const F="webgl2";if(L=dt(F,E),L===null)throw dt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw ft("WebGLRenderer: "+E.message),E}let et,ze,xe,C,x,N,K,Z,Y,ge,ae,Re,Me,ne,se,Se,be,he,Ge,D,oe,ie,de;function te(){et=new Ov(L),et.init(),oe=new wM(L,et),ze=new Rv(L,et,e,oe),xe=new TM(L,et),ze.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),C=new zv(L),x=new fM,N=new AM(L,et,xe,x,ze,oe,C),K=new Fv(y),Z=new X_(L),ie=new wv(L,Z),Y=new Bv(L,Z,C,ie),ge=new Gv(L,Y,Z,ie,C),he=new Vv(L,ze,N),se=new Pv(x),ae=new uM(y,K,et,ze,ie,se),Re=new IM(y,x),Me=new dM,ne=new xM(et),be=new Av(y,K,xe,ge,_,l),Se=new bM(y,ge,ze),de=new UM(L,C,ze,xe),Ge=new Cv(L,et,C),D=new kv(L,et,C),C.programs=ae.programs,y.capabilities=ze,y.extensions=et,y.properties=x,y.renderLists=Me,y.shadowMap=Se,y.state=xe,y.info=C}te(),g!==ai&&(v=new Wv(g,t.width,t.height,i,s));const $=new DM(y,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(E){E!==void 0&&(Be=E,this.setSize(le,ce,!1))},this.getSize=function(E){return E.set(le,ce)},this.setSize=function(E,F,q=!0){if($.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}le=E,ce=F,t.width=Math.floor(E*Be),t.height=Math.floor(F*Be),q===!0&&(t.style.width=E+"px",t.style.height=F+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(le*Be,ce*Be).floor()},this.setDrawingBufferSize=function(E,F,q){le=E,ce=F,Be=q,t.width=Math.floor(E*q),t.height=Math.floor(F*q),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(g===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(B)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,F,q,H){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,F,q,H),xe.viewport(B.copy(j).multiplyScalar(Be).round())},this.getScissor=function(E){return E.copy(ee)},this.setScissor=function(E,F,q,H){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,F,q,H),xe.scissor(O.copy(ee).multiplyScalar(Be).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(E){xe.setScissorTest(re=E)},this.setOpaqueSort=function(E){Ve=E},this.setTransparentSort=function(E){Ye=E},this.getClearColor=function(E){return E.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,q=!0){let H=0;if(E){let G=!1;if(k!==null){const ue=k.texture.format;G=p.has(ue)}if(G){const ue=k.texture.type,pe=m.has(ue),fe=be.getClearColor(),Ae=be.getClearAlpha(),Te=fe.r,Ke=fe.g,tt=fe.b;pe?(M[0]=Te,M[1]=Ke,M[2]=tt,M[3]=Ae,L.clearBufferuiv(L.COLOR,0,M)):(b[0]=Te,b[1]=Ke,b[2]=tt,b[3]=Ae,L.clearBufferiv(L.COLOR,0,b))}else H|=L.COLOR_BUFFER_BIT}F&&(H|=L.DEPTH_BUFFER_BIT),q&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),be.dispose(),Me.dispose(),ne.dispose(),x.dispose(),K.dispose(),ge.dispose(),ie.dispose(),de.dispose(),ae.dispose(),$.dispose(),$.removeEventListener("sessionstart",We),$.removeEventListener("sessionend",Ft),$e.stop()};function ye(E){E.preventDefault(),Bf("WebGLRenderer: Context Lost."),U=!0}function Ne(){Bf("WebGLRenderer: Context Restored."),U=!1;const E=C.autoReset,F=Se.enabled,q=Se.autoUpdate,H=Se.needsUpdate,G=Se.type;te(),C.autoReset=E,Se.enabled=F,Se.autoUpdate=q,Se.needsUpdate=H,Se.type=G}function ct(E){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ve(E){const F=E.target;F.removeEventListener("dispose",ve),Pe(F)}function Pe(E){Ze(E),x.remove(E)}function Ze(E){const F=x.get(E).programs;F!==void 0&&(F.forEach(function(q){ae.releaseProgram(q)}),E.isShaderMaterial&&ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,q,H,G,ue){F===null&&(F=je);const pe=G.isMesh&&G.matrixWorld.determinant()<0,fe=Qn(E,F,q,H,G);xe.setMaterial(H,pe);let Ae=q.index,Te=1;if(H.wireframe===!0){if(Ae=Y.getWireframeAttribute(q),Ae===void 0)return;Te=2}const Ke=q.drawRange,tt=q.attributes.position;let Ue=Ke.start*Te,vt=(Ke.start+Ke.count)*Te;ue!==null&&(Ue=Math.max(Ue,ue.start*Te),vt=Math.min(vt,(ue.start+ue.count)*Te)),Ae!==null?(Ue=Math.max(Ue,0),vt=Math.min(vt,Ae.count)):tt!=null&&(Ue=Math.max(Ue,0),vt=Math.min(vt,tt.count));const Ot=vt-Ue;if(Ot<0||Ot===1/0)return;ie.setup(G,H,fe,q,Ae);let It,xt=Ge;if(Ae!==null&&(It=Z.get(Ae),xt=D,xt.setIndex(It)),G.isMesh)H.wireframe===!0?(xe.setLineWidth(H.wireframeLinewidth*W()),xt.setMode(L.LINES)):xt.setMode(L.TRIANGLES);else if(G.isLine){let fn=H.linewidth;fn===void 0&&(fn=1),xe.setLineWidth(fn*W()),G.isLineSegments?xt.setMode(L.LINES):G.isLineLoop?xt.setMode(L.LINE_LOOP):xt.setMode(L.LINE_STRIP)}else G.isPoints?xt.setMode(L.POINTS):G.isSprite&&xt.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)nl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))xt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const fn=G._multiDrawStarts,De=G._multiDrawCounts,Bn=G._multiDrawCount,ut=Ae?Z.get(Ae).bytesPerElement:1,ui=x.get(H).currentProgram.getUniforms();for(let vi=0;vi<Bn;vi++)ui.setValue(L,"_gl_DrawID",vi),xt.render(fn[vi]/ut,De[vi])}else if(G.isInstancedMesh)xt.renderInstances(Ue,Ot,G.count);else if(q.isInstancedBufferGeometry){const fn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,De=Math.min(q.instanceCount,fn);xt.renderInstances(Ue,Ot,De)}else xt.render(Ue,Ot)};function me(E,F,q){E.transparent===!0&&E.side===Wi&&E.forceSinglePass===!1?(E.side=Dn,E.needsUpdate=!0,cn(E,F,q),E.side=yr,E.needsUpdate=!0,cn(E,F,q),E.side=Wi):cn(E,F,q)}this.compile=function(E,F,q=null){q===null&&(q=E),T=ne.get(q),T.init(F),w.push(T),q.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),E!==q&&E.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();const H=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ue=G.material;if(ue)if(Array.isArray(ue))for(let pe=0;pe<ue.length;pe++){const fe=ue[pe];me(fe,q,G),H.add(fe)}else me(ue,q,G),H.add(ue)}),T=w.pop(),H},this.compileAsync=function(E,F,q=null){const H=this.compile(E,F,q);return new Promise(G=>{function ue(){if(H.forEach(function(pe){x.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){G(E);return}setTimeout(ue,10)}et.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let He=null;function Fe(E){He&&He(E)}function We(){$e.stop()}function Ft(){$e.start()}const $e=new Yd;$e.setAnimationLoop(Fe),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(E){He=E,$.setAnimationLoop(E),E===null?$e.stop():$e.start()},$.addEventListener("sessionstart",We),$.addEventListener("sessionend",Ft),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const q=$.enabled===!0&&$.isPresenting===!0,H=v!==null&&(k===null||q)&&v.begin(y,k);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,F,k),T=ne.get(E,w.length),T.init(F),w.push(T),ot.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Le.setFromProjectionMatrix(ot,Ai,F.reversedDepth),Ce=this.localClippingEnabled,Ie=se.init(this.clippingPlanes,Ce),S=Me.get(E,A.length),S.init(),A.push(S),$.enabled===!0&&$.isPresenting===!0){const pe=y.xr.getDepthSensingMesh();pe!==null&&wt(pe,F,-1/0,y.sortObjects)}wt(E,F,0,y.sortObjects),S.finish(),y.sortObjects===!0&&S.sort(Ve,Ye),Oe=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Oe&&be.addToRenderList(S,E),this.info.render.frame++,Ie===!0&&se.beginShadows();const G=T.state.shadowsArray;if(Se.render(G,E,F),Ie===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&v.hasRenderPass())===!1){const pe=S.opaque,fe=S.transmissive;if(T.setupLights(),F.isArrayCamera){const Ae=F.cameras;if(fe.length>0)for(let Te=0,Ke=Ae.length;Te<Ke;Te++){const tt=Ae[Te];Ct(pe,fe,E,tt)}Oe&&be.render(E);for(let Te=0,Ke=Ae.length;Te<Ke;Te++){const tt=Ae[Te];Wt(S,E,tt,tt.viewport)}}else fe.length>0&&Ct(pe,fe,E,F),Oe&&be.render(E),Wt(S,E,F)}k!==null&&I===0&&(N.updateMultisampleRenderTarget(k),N.updateRenderTargetMipmap(k)),H&&v.end(y),E.isScene===!0&&E.onAfterRender(y,E,F),ie.resetDefaultState(),V=-1,z=null,w.pop(),w.length>0?(T=w[w.length-1],Ie===!0&&se.setGlobalState(y.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?S=A[A.length-1]:S=null};function wt(E,F,q,H){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Le.intersectsSprite(E)){H&&ke.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ot);const pe=ge.update(E),fe=E.material;fe.visible&&S.push(E,pe,fe,q,ke.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Le.intersectsObject(E))){const pe=ge.update(E),fe=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ke.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ke.copy(pe.boundingSphere.center)),ke.applyMatrix4(E.matrixWorld).applyMatrix4(ot)),Array.isArray(fe)){const Ae=pe.groups;for(let Te=0,Ke=Ae.length;Te<Ke;Te++){const tt=Ae[Te],Ue=fe[tt.materialIndex];Ue&&Ue.visible&&S.push(E,pe,Ue,q,ke.z,tt)}}else fe.visible&&S.push(E,pe,fe,q,ke.z,null)}}const ue=E.children;for(let pe=0,fe=ue.length;pe<fe;pe++)wt(ue[pe],F,q,H)}function Wt(E,F,q,H){const{opaque:G,transmissive:ue,transparent:pe}=E;T.setupLightsView(q),Ie===!0&&se.setGlobalState(y.clippingPlanes,q),H&&xe.viewport(B.copy(H)),G.length>0&&_t(G,F,q),ue.length>0&&_t(ue,F,q),pe.length>0&&_t(pe,F,q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Ct(E,F,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const Ue=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new Pi(1,1,{generateMipmaps:!0,type:Ue?Zi:ai,minFilter:Hr,samples:Math.max(4,ze.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const ue=T.state.transmissionRenderTarget[H.id],pe=H.viewport||B;ue.setSize(pe.z*y.transmissionResolutionScale,pe.w*y.transmissionResolutionScale);const fe=y.getRenderTarget(),Ae=y.getActiveCubeFace(),Te=y.getActiveMipmapLevel();y.setRenderTarget(ue),y.getClearColor(Q),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear(),Oe&&be.render(q);const Ke=y.toneMapping;y.toneMapping=Ri;const tt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),Ie===!0&&se.setGlobalState(y.clippingPlanes,H),_t(E,q,H),N.updateMultisampleRenderTarget(ue),N.updateRenderTargetMipmap(ue),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let vt=0,Ot=F.length;vt<Ot;vt++){const It=F[vt],{object:xt,geometry:fn,material:De,group:Bn}=It;if(De.side===Wi&&xt.layers.test(H.layers)){const ut=De.side;De.side=Dn,De.needsUpdate=!0,pt(xt,q,H,fn,De,Bn),De.side=ut,De.needsUpdate=!0,Ue=!0}}Ue===!0&&(N.updateMultisampleRenderTarget(ue),N.updateRenderTargetMipmap(ue))}y.setRenderTarget(fe,Ae,Te),y.setClearColor(Q,P),tt!==void 0&&(H.viewport=tt),y.toneMapping=Ke}function _t(E,F,q){const H=F.isScene===!0?F.overrideMaterial:null;for(let G=0,ue=E.length;G<ue;G++){const pe=E[G],{object:fe,geometry:Ae,group:Te}=pe;let Ke=pe.material;Ke.allowOverride===!0&&H!==null&&(Ke=H),fe.layers.test(q.layers)&&pt(fe,F,q,Ae,Ke,Te)}}function pt(E,F,q,H,G,ue){E.onBeforeRender(y,F,q,H,G,ue),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(y,F,q,H,E,ue),G.transparent===!0&&G.side===Wi&&G.forceSinglePass===!1?(G.side=Dn,G.needsUpdate=!0,y.renderBufferDirect(q,F,H,G,E,ue),G.side=yr,G.needsUpdate=!0,y.renderBufferDirect(q,F,H,G,E,ue),G.side=Wi):y.renderBufferDirect(q,F,H,G,E,ue),E.onAfterRender(y,F,q,H,G,ue)}function cn(E,F,q){F.isScene!==!0&&(F=je);const H=x.get(E),G=T.state.lights,ue=T.state.shadowsArray,pe=G.state.version,fe=ae.getParameters(E,G.state,ue,F,q),Ae=ae.getProgramCacheKey(fe);let Te=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;const Ke=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=K.get(E.envMap||H.environment,Ke),H.envMapRotation=H.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",ve),Te=new Map,H.programs=Te);let tt=Te.get(Ae);if(tt!==void 0){if(H.currentProgram===tt&&H.lightsStateVersion===pe)return un(E,fe),tt}else fe.uniforms=ae.getUniforms(E),E.onBeforeCompile(fe,y),tt=ae.acquireProgram(fe,Ae),Te.set(Ae,tt),H.uniforms=fe.uniforms;const Ue=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=se.uniform),un(E,fe),H.needsLights=qt(E),H.lightsStateVersion=pe,H.needsLights&&(Ue.ambientLightColor.value=G.state.ambient,Ue.lightProbe.value=G.state.probe,Ue.directionalLights.value=G.state.directional,Ue.directionalLightShadows.value=G.state.directionalShadow,Ue.spotLights.value=G.state.spot,Ue.spotLightShadows.value=G.state.spotShadow,Ue.rectAreaLights.value=G.state.rectArea,Ue.ltc_1.value=G.state.rectAreaLTC1,Ue.ltc_2.value=G.state.rectAreaLTC2,Ue.pointLights.value=G.state.point,Ue.pointLightShadows.value=G.state.pointShadow,Ue.hemisphereLights.value=G.state.hemi,Ue.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ue.spotLightMatrix.value=G.state.spotLightMatrix,Ue.spotLightMap.value=G.state.spotLightMap,Ue.pointShadowMatrix.value=G.state.pointShadowMatrix),H.currentProgram=tt,H.uniformsList=null,tt}function bt(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Ho.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function un(E,F){const q=x.get(E);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function Qn(E,F,q,H,G){F.isScene!==!0&&(F=je),N.resetTextureUnits();const ue=F.fog,pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,fe=k===null?y.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Vs,Ae=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Te=K.get(H.envMap||pe,Ae),Ke=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,tt=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ue=!!q.morphAttributes.position,vt=!!q.morphAttributes.normal,Ot=!!q.morphAttributes.color;let It=Ri;H.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(It=y.toneMapping);const xt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,fn=xt!==void 0?xt.length:0,De=x.get(H),Bn=T.state.lights;if(Ie===!0&&(Ce===!0||E!==z)){const Jt=E===z&&H.id===V;se.setState(H,E,Jt)}let ut=!1;H.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Bn.state.version||De.outputColorSpace!==fe||G.isBatchedMesh&&De.batching===!1||!G.isBatchedMesh&&De.batching===!0||G.isBatchedMesh&&De.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&De.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&De.instancing===!1||!G.isInstancedMesh&&De.instancing===!0||G.isSkinnedMesh&&De.skinning===!1||!G.isSkinnedMesh&&De.skinning===!0||G.isInstancedMesh&&De.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&De.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&De.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&De.instancingMorph===!1&&G.morphTexture!==null||De.envMap!==Te||H.fog===!0&&De.fog!==ue||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==se.numPlanes||De.numIntersection!==se.numIntersection)||De.vertexAlphas!==Ke||De.vertexTangents!==tt||De.morphTargets!==Ue||De.morphNormals!==vt||De.morphColors!==Ot||De.toneMapping!==It||De.morphTargetsCount!==fn)&&(ut=!0):(ut=!0,De.__version=H.version);let ui=De.currentProgram;ut===!0&&(ui=cn(H,F,G));let vi=!1,Cr=!1,as=!1;const St=ui.getUniforms(),rn=De.uniforms;if(xe.useProgram(ui.program)&&(vi=!0,Cr=!0,as=!0),H.id!==V&&(V=H.id,Cr=!0),vi||z!==E){xe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),St.setValue(L,"projectionMatrix",E.projectionMatrix),St.setValue(L,"viewMatrix",E.matrixWorldInverse);const ir=St.map.cameraPosition;ir!==void 0&&ir.setValue(L,Ee.setFromMatrixPosition(E.matrixWorld)),ze.logarithmicDepthBuffer&&St.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&St.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),z!==E&&(z=E,Cr=!0,as=!0)}if(De.needsLights&&(Bn.state.directionalShadowMap.length>0&&St.setValue(L,"directionalShadowMap",Bn.state.directionalShadowMap,N),Bn.state.spotShadowMap.length>0&&St.setValue(L,"spotShadowMap",Bn.state.spotShadowMap,N),Bn.state.pointShadowMap.length>0&&St.setValue(L,"pointShadowMap",Bn.state.pointShadowMap,N)),G.isSkinnedMesh){St.setOptional(L,G,"bindMatrix"),St.setOptional(L,G,"bindMatrixInverse");const Jt=G.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),St.setValue(L,"boneTexture",Jt.boneTexture,N))}G.isBatchedMesh&&(St.setOptional(L,G,"batchingTexture"),St.setValue(L,"batchingTexture",G._matricesTexture,N),St.setOptional(L,G,"batchingIdTexture"),St.setValue(L,"batchingIdTexture",G._indirectTexture,N),St.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&St.setValue(L,"batchingColorTexture",G._colorsTexture,N));const nr=q.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0)&&he.update(G,q,ui),(Cr||De.receiveShadow!==G.receiveShadow)&&(De.receiveShadow=G.receiveShadow,St.setValue(L,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(rn.envMapIntensity.value=F.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=FM()),Cr&&(St.setValue(L,"toneMappingExposure",y.toneMappingExposure),De.needsLights&&Xt(rn,as),ue&&H.fog===!0&&Re.refreshFogUniforms(rn,ue),Re.refreshMaterialUniforms(rn,H,Be,ce,T.state.transmissionRenderTarget[E.id]),Ho.upload(L,bt(De),rn,N)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ho.upload(L,bt(De),rn,N),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&St.setValue(L,"center",G.center),St.setValue(L,"modelViewMatrix",G.modelViewMatrix),St.setValue(L,"normalMatrix",G.normalMatrix),St.setValue(L,"modelMatrix",G.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Jt=H.uniformsGroups;for(let ir=0,os=Jt.length;ir<os;ir++){const wf=Jt[ir];de.update(wf,ui),de.bind(wf,ui)}}return ui}function Xt(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function qt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(E,F,q){const H=x.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),x.get(E.texture).__webglTexture=F,x.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const q=x.get(E);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0};const Zt=L.createFramebuffer();this.setRenderTarget=function(E,F=0,q=0){k=E,R=F,I=q;let H=null,G=!1,ue=!1;if(E){const fe=x.get(E);if(fe.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(L.FRAMEBUFFER,fe.__webglFramebuffer),B.copy(E.viewport),O.copy(E.scissor),J=E.scissorTest,xe.viewport(B),xe.scissor(O),xe.setScissorTest(J),V=-1;return}else if(fe.__webglFramebuffer===void 0)N.setupRenderTarget(E);else if(fe.__hasExternalTextures)N.rebindTextures(E,x.get(E.texture).__webglTexture,x.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ke=E.depthTexture;if(fe.__boundDepthTexture!==Ke){if(Ke!==null&&x.has(Ke)&&(E.width!==Ke.image.width||E.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(E)}}const Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ue=!0);const Te=x.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Te[F])?H=Te[F][q]:H=Te[F],G=!0):E.samples>0&&N.useMultisampledRTT(E)===!1?H=x.get(E).__webglMultisampledFramebuffer:Array.isArray(Te)?H=Te[q]:H=Te,B.copy(E.viewport),O.copy(E.scissor),J=E.scissorTest}else B.copy(j).multiplyScalar(Be).floor(),O.copy(ee).multiplyScalar(Be).floor(),J=re;if(q!==0&&(H=Zt),xe.bindFramebuffer(L.FRAMEBUFFER,H)&&xe.drawBuffers(E,H),xe.viewport(B),xe.scissor(O),xe.setScissorTest(J),G){const fe=x.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,fe.__webglTexture,q)}else if(ue){const fe=F;for(let Ae=0;Ae<E.textures.length;Ae++){const Te=x.get(E.textures[Ae]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ae,Te.__webglTexture,q,fe)}}else if(E!==null&&q!==0){const fe=x.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fe.__webglTexture,q)}V=-1},this.readRenderTargetPixels=function(E,F,q,H,G,ue,pe,fe=0){if(!(E&&E.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Ae=Ae[pe]),Ae){xe.bindFramebuffer(L.FRAMEBUFFER,Ae);try{const Te=E.textures[fe],Ke=Te.format,tt=Te.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe),!ze.textureFormatReadable(Ke)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(tt)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-H&&q>=0&&q<=E.height-G&&L.readPixels(F,q,H,G,oe.convert(Ke),oe.convert(tt),ue)}finally{const Te=k!==null?x.get(k).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,F,q,H,G,ue,pe,fe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Ae=Ae[pe]),Ae)if(F>=0&&F<=E.width-H&&q>=0&&q<=E.height-G){xe.bindFramebuffer(L.FRAMEBUFFER,Ae);const Te=E.textures[fe],Ke=Te.format,tt=Te.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe),!ze.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(F,q,H,G,oe.convert(Ke),oe.convert(tt),0);const vt=k!==null?x.get(k).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,vt);const Ot=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await a_(L,Ot,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.deleteBuffer(Ue),L.deleteSync(Ot),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,q=0){const H=Math.pow(2,-q),G=Math.floor(E.image.width*H),ue=Math.floor(E.image.height*H),pe=F!==null?F.x:0,fe=F!==null?F.y:0;N.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,pe,fe,G,ue),xe.unbindTexture()};const Fi=L.createFramebuffer(),ss=L.createFramebuffer();this.copyTextureToTexture=function(E,F,q=null,H=null,G=0,ue=0){let pe,fe,Ae,Te,Ke,tt,Ue,vt,Ot;const It=E.isCompressedTexture?E.mipmaps[ue]:E.image;if(q!==null)pe=q.max.x-q.min.x,fe=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,Te=q.min.x,Ke=q.min.y,tt=q.isBox3?q.min.z:0;else{const rn=Math.pow(2,-G);pe=Math.floor(It.width*rn),fe=Math.floor(It.height*rn),E.isDataArrayTexture?Ae=It.depth:E.isData3DTexture?Ae=Math.floor(It.depth*rn):Ae=1,Te=0,Ke=0,tt=0}H!==null?(Ue=H.x,vt=H.y,Ot=H.z):(Ue=0,vt=0,Ot=0);const xt=oe.convert(F.format),fn=oe.convert(F.type);let De;F.isData3DTexture?(N.setTexture3D(F,0),De=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(N.setTexture2DArray(F,0),De=L.TEXTURE_2D_ARRAY):(N.setTexture2D(F,0),De=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const Bn=L.getParameter(L.UNPACK_ROW_LENGTH),ut=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ui=L.getParameter(L.UNPACK_SKIP_PIXELS),vi=L.getParameter(L.UNPACK_SKIP_ROWS),Cr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,It.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,It.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ke),L.pixelStorei(L.UNPACK_SKIP_IMAGES,tt);const as=E.isDataArrayTexture||E.isData3DTexture,St=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const rn=x.get(E),nr=x.get(F),Jt=x.get(rn.__renderTarget),ir=x.get(nr.__renderTarget);xe.bindFramebuffer(L.READ_FRAMEBUFFER,Jt.__webglFramebuffer),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let os=0;os<Ae;os++)as&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,x.get(E).__webglTexture,G,tt+os),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,x.get(F).__webglTexture,ue,Ot+os)),L.blitFramebuffer(Te,Ke,pe,fe,Ue,vt,pe,fe,L.DEPTH_BUFFER_BIT,L.NEAREST);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||x.has(E)){const rn=x.get(E),nr=x.get(F);xe.bindFramebuffer(L.READ_FRAMEBUFFER,Fi),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,ss);for(let Jt=0;Jt<Ae;Jt++)as?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,rn.__webglTexture,G,tt+Jt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,rn.__webglTexture,G),St?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,nr.__webglTexture,ue,Ot+Jt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,nr.__webglTexture,ue),G!==0?L.blitFramebuffer(Te,Ke,pe,fe,Ue,vt,pe,fe,L.COLOR_BUFFER_BIT,L.NEAREST):St?L.copyTexSubImage3D(De,ue,Ue,vt,Ot+Jt,Te,Ke,pe,fe):L.copyTexSubImage2D(De,ue,Ue,vt,Te,Ke,pe,fe);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else St?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(De,ue,Ue,vt,Ot,pe,fe,Ae,xt,fn,It.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(De,ue,Ue,vt,Ot,pe,fe,Ae,xt,It.data):L.texSubImage3D(De,ue,Ue,vt,Ot,pe,fe,Ae,xt,fn,It):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ue,Ue,vt,pe,fe,xt,fn,It.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ue,Ue,vt,It.width,It.height,xt,It.data):L.texSubImage2D(L.TEXTURE_2D,ue,Ue,vt,pe,fe,xt,fn,It);L.pixelStorei(L.UNPACK_ROW_LENGTH,Bn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ui),L.pixelStorei(L.UNPACK_SKIP_ROWS,vi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Cr),ue===0&&F.generateMipmaps&&L.generateMipmap(De),xe.unbindTexture()},this.initRenderTarget=function(E){x.get(E).__webglFramebuffer===void 0&&N.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?N.setTextureCube(E,0):E.isData3DTexture?N.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?N.setTexture2DArray(E,0):N.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){R=0,I=0,k=null,xe.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}function Gi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Qd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Hs={duration:.5,overwrite:!1,delay:0},Qu,ln,Rt,oi=1e8,Et=1/oi,_u=Math.PI*2,BM=_u/4,kM=0,ep=Math.sqrt,zM=Math.cos,VM=Math.sin,nn=function(e){return typeof e=="string"},Ut=function(e){return typeof e=="function"},er=function(e){return typeof e=="number"},ef=function(e){return typeof e>"u"},Ni=function(e){return typeof e=="object"},Ln=function(e){return e!==!1},tf=function(){return typeof window<"u"},To=function(e){return Ut(e)||nn(e)},tp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},xn=Array.isArray,GM=/random\([^)]+\)/g,HM=/,\s*/g,Rh=/(?:-?\.?\d|\.)+/gi,np=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ws=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,sc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ip=/[+-]=-?[.\d]+/,WM=/[^,'"\[\]\s]+/gi,XM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Dt,Si,gu,nf,Zn={},sl={},rp,sp=function(e){return(sl=Ws(e,Zn))&&On},rf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ba=function(e,t){return!t&&console.warn(e)},ap=function(e,t){return e&&(Zn[e]=t)&&sl&&(sl[e]=t)||Zn},ka=function(){return 0},qM={suppressEvents:!0,isStart:!0,kill:!1},Wo={suppressEvents:!0,kill:!1},YM={suppressEvents:!0},sf={},vr=[],vu={},op,Hn={},ac={},Ph=30,Xo=[],af="",of=function(e){var t=e[0],n,i;if(Ni(t)||Ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Xo.length;i--&&!Xo[i].targetTest(t););n=Xo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Dp(e[i],n)))||e.splice(i,1);return e},Yr=function(e){return e._gsap||of(li(e))[0]._gsap},lp=function(e,t,n){return(n=e[t])&&Ut(n)?e[t]():ef(n)&&e.getAttribute&&e.getAttribute(t)||n},In=function(e,t){return(e=e.split(",")).forEach(t)||e},Bt=function(e){return Math.round(e*1e5)/1e5||0},Pt=function(e){return Math.round(e*1e7)/1e7||0},Ls=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},$M=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},al=function(){var e=vr.length,t=vr.slice(0),n,i;for(vu={},vr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},lf=function(e){return!!(e._initted||e._startAt||e.add)},cp=function(e,t,n,i){vr.length&&!ln&&al(),e.render(t,n,!!(ln&&t<0&&lf(e))),vr.length&&!ln&&al()},up=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(WM).length<2?t:nn(e)?e.trim():e},fp=function(e){return e},Jn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},jM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ws=function(e,t){for(var n in t)e[n]=t[n];return e},Dh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ni(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},ol=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ya=function(e){var t=e.parent||Dt,n=e.keyframes?jM(xn(e.keyframes)):Jn;if(Ln(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},KM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},hp=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Sl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Er=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},$r=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ZM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},xu=function(e,t,n,i){return e._startAt&&(ln?e._startAt.revert(Wo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},JM=function r(e){return!e||e._ts&&r(e.parent)},Lh=function(e){return e._repeat?Xs(e._tTime,e=e.duration()+e._rDelay)*e:0},Xs=function(e,t){var n=Math.floor(e=Pt(e/t));return e&&n===e?n-1:n},ll=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},yl=function(e){return e._end=Pt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},El=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Pt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),yl(e),n._dirty||$r(n,e)),e},dp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ll(e.rawTime(),t),(!t._dur||Za(0,t.totalDuration(),n)-t._tTime>Et)&&t.render(n,!0)),$r(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Et}},bi=function(e,t,n,i){return t.parent&&Er(t),t._start=Pt((er(n)?n:n||e!==Dt?ti(e,n,t):e._time)+t._delay),t._end=Pt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),hp(e,t,"_first","_last",e._sort?"_start":0),Mu(t)||(e._recent=t),i||dp(e,t),e._ts<0&&El(e,e._tTime),e},pp=function(e,t){return(Zn.ScrollTrigger||rf("scrollTrigger",t))&&Zn.ScrollTrigger.create(t,e)},mp=function(e,t,n,i,s){if(uf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&op!==Xn.frame)return vr.push(e),e._lazy=[s,i],1},QM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Mu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},eS=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&QM(e)&&!(!e._initted&&Mu(e))||(e._ts<0||e._dp._ts<0)&&!Mu(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Za(0,e._tDur,t),u=Xs(l,o),e._yoyo&&u&1&&(a=1-a),u!==Xs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||ln||i||e._zTime===Et||!t&&e._zTime){if(!e._initted&&mp(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Et:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&xu(e,t,n,!0),e._onUpdate&&!n&&Yn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Yn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Er(e,1),!n&&!ln&&(Yn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},tS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},qs=function(e,t,n,i){var s=e._repeat,a=Pt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Pt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&El(e,e._tTime=e._tDur*o),e.parent&&yl(e),n||$r(e.parent,e),e},Ih=function(e){return e instanceof sn?$r(e):qs(e,e._dur)},nS={_start:0,endTime:ka,totalDuration:ka},ti=function r(e,t,n){var i=e.labels,s=e._recent||nS,a=e.duration()>=oi?s.endTime(!1):e._dur,o,l,c;return nn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(xn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ea=function(e,t,n){var i=er(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ln(l.vars.inherit)&&l.parent;a.immediateRender=Ln(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new kt(t[0],a,t[s+1])},wr=function(e,t){return e||e===0?t(e):t},Za=function(e,t,n){return n<e?e:n>t?t:n},_n=function(e,t){return!nn(e)||!(t=XM.exec(e))?"":t[1]},iS=function(e,t,n){return wr(n,function(i){return Za(e,t,i)})},Su=[].slice,_p=function(e,t){return e&&Ni(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ni(e[0]))&&!e.nodeType&&e!==Si},rS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return nn(i)&&!t||_p(i,1)?(s=n).push.apply(s,li(i)):n.push(i)})||n},li=function(e,t,n){return Rt&&!t&&Rt.selector?Rt.selector(e):nn(e)&&!n&&(gu||!Ys())?Su.call((t||nf).querySelectorAll(e),0):xn(e)?rS(e,n):_p(e)?Su.call(e,0):e?[e]:[]},yu=function(e){return e=li(e)[0]||Ba("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return li(t,n.querySelectorAll?n:n===e?Ba("Invalid scope")||nf.createElement("div"):e)}},gp=function(e){return e.sort(function(){return .5-Math.random()})},vp=function(e){if(Ut(e))return e;var t=Ni(e)?e:{each:e},n=jr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return nn(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(f,h,_){var g=(_||t).length,p=a[g],m,M,b,S,T,A,w,v,y;if(!p){if(y=t.grid==="auto"?0:(t.grid||[1,oi])[1],!y){for(w=-oi;w<(w=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(p=a[g]=[],m=l?Math.min(y,g)*u-.5:i%y,M=y===oi?0:l?g*d/y-.5:i/y|0,w=0,v=oi,A=0;A<g;A++)b=A%y-m,S=M-(A/y|0),p[A]=T=c?Math.abs(c==="y"?S:b):ep(b*b+S*S),T>w&&(w=T),T<v&&(v=T);i==="random"&&gp(p),p.max=w-v,p.min=v,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=_n(t.amount||t.each)||0,n=n&&g<0?Cp(n):n}return g=(p[f]-p.min)/p.max||0,Pt(p.b+(n?n(g):g)*p.v)+p.u}},Eu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Pt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(er(n)?0:_n(n))}},xp=function(e,t){var n=xn(e),i,s;return!n&&Ni(e)&&(i=n=e.radius||oi,e.values?(e=li(e.values),(s=!er(e[0]))&&(i*=i)):e=Eu(e.increment)),wr(t,n?Ut(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=oi,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-o,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-o),f<c&&(c=f,u=d);return u=!i||c<=i?e[u]:a,s||u===a||er(a)?u:u+_n(a)}:Eu(e))},Mp=function(e,t,n,i){return wr(xn(e)?!t:n===!0?!!(n=0):!i,function(){return xn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},sS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},aS=function(e,t){return function(n){return e(parseFloat(n))+(t||_n(n))}},oS=function(e,t,n){return yp(e,t,0,1,n)},Sp=function(e,t,n){return wr(n,function(i){return e[~~t(i)]})},lS=function r(e,t,n){var i=t-e;return xn(e)?Sp(e,r(0,e.length),t):wr(n,function(s){return(i+(s-e)%i)%i+e})},cS=function r(e,t,n){var i=t-e,s=i*2;return xn(e)?Sp(e,r(0,e.length-1),t):wr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},za=function(e){return e.replace(GM,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(HM);return Mp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},yp=function(e,t,n,i,s){var a=t-e,o=i-n;return wr(s,function(l){return n+((l-e)/a*o||0)})},uS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=nn(e),o={},l,c,u,d,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(xn(e)&&!xn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(_){_*=d;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=Ws(xn(e)?[]:{},e));if(!u){for(l in t)cf.call(o,e,l,"get",t[l]);s=function(_){return df(_,o)||(a?e.p:e)}}}return wr(n,s)},Uh=function(e,t,n){var i=e.labels,s=oi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Yn=function(e,t,n){var i=e.vars,s=i[t],a=Rt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&vr.length&&al(),o&&(Rt=o),u=l?s.apply(c,l):s.call(c),Rt=a,u},pa=function(e){return Er(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ln),e.progress()<1&&Yn(e,"onInterrupt"),e},Cs,Ep=[],bp=function(e){if(e)if(e=!e.name&&e.default||e,tf()||e.headless){var t=e.name,n=Ut(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ka,render:df,add:cf,kill:AS,modifier:TS,rawVars:0},a={targetTest:0,get:0,getSetter:hf,aliases:{},register:0};if(Ys(),e!==i){if(Hn[t])return;Jn(i,Jn(ol(e,s),a)),Ws(i.prototype,Ws(s,ol(e,a))),Hn[i.prop=t]=i,e.targetTest&&(Xo.push(i),sf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ap(t,i),e.register&&e.register(On,i,Un)}else Ep.push(e)},yt=255,ma={aqua:[0,yt,yt],lime:[0,yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yt],navy:[0,0,128],white:[yt,yt,yt],olive:[128,128,0],yellow:[yt,yt,0],orange:[yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yt,0,0],pink:[yt,192,203],cyan:[0,yt,yt],transparent:[yt,yt,yt,0]},oc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*yt+.5|0},Tp=function(e,t,n){var i=e?er(e)?[e>>16,e>>8&yt,e&yt]:0:ma.black,s,a,o,l,c,u,d,f,h,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ma[e])i=ma[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&yt,i&yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&yt,e&yt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Rh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=oc(l+1/3,s,a),i[1]=oc(l,s,a),i[2]=oc(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(np),n&&i.length<4&&(i[3]=1),i}else i=e.match(Rh)||ma.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/yt,a=i[1]/yt,o=i[2]/yt,d=Math.max(s,a,o),f=Math.min(s,a,o),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(a-o)/h+(a<o?6:0):d===a?(o-s)/h+2:(s-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Ap=function(e){var t=[],n=[],i=-1;return e.split(xr).forEach(function(s){var a=s.match(ws)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Nh=function(e,t,n){var i="",s=(e+i).match(xr),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=Tp(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Ap(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(xr,"1").split(ws),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(xr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},xr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ma)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),fS=/hsl[a]?\(/,wp=function(e){var t=e.join(" "),n;if(xr.lastIndex=0,xr.test(t))return n=fS.test(t),e[1]=Nh(e[1],n),e[0]=Nh(e[0],n,Ap(e[1])),!0},Va,Xn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,f,h,_=function g(p){var m=r()-i,M=p===!0,b,S,T,A;if((m>e||m<0)&&(n+=m-t),i+=m,T=i-n,b=T-a,(b>0||M)&&(A=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,a+=b+(b>=s?4:s-b),S=1),M||(l=c(g)),S)for(h=0;h<o.length;h++)o[h](T,f,A,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){rp&&(!gu&&tf()&&(Si=gu=window,nf=Si.document||{},Zn.gsap=On,(Si.gsapVersions||(Si.gsapVersions=[])).push(On.version),sp(sl||Si.GreenSockGlobals||!Si.gsap&&Si||{}),Ep.forEach(bp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Va=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Va=0,c=ka},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,M){var b=m?function(S,T,A,w){p(S,T,A,w),d.remove(b)}:p;return d.remove(p),o[M?"unshift":"push"](b),Ys(),b},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&h>=m&&h--},_listeners:o},d})(),Ys=function(){return!Va&&Xn.wake()},at={},hS=/^[\d.\-M][\d.\-,\s]/,dS=/["']/g,pS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(dS,"").trim():+c,i=l.substr(o+1).trim();return t},mS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},_S=function(e){var t=(e+"").split("("),n=at[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[pS(t[1])]:mS(e).split(",").map(up)):at._CE&&hS.test(e)?at._CE("",e):n},Cp=function(e){return function(t){return 1-e(1-t)}},Rp=function r(e,t){for(var n=e._first,i;n;)n instanceof sn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},jr=function(e,t){return e&&(Ut(e)?e:at[e]||_S(e))||t},rs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return In(e,function(o){at[o]=Zn[o]=s,at[a=o.toLowerCase()]=n;for(var l in s)at[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[o+"."+l]=s[l]}),s},Pp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},lc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/_u*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*VM((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Pp(o);return s=_u/s,l.config=function(c,u){return r(e,c,u)},l},cc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Pp(n);return i.config=function(s){return r(e,s)},i};In("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;rs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;rs("Elastic",lc("in"),lc("out"),lc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};rs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);rs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});rs("Circ",function(r){return-(ep(1-r*r)-1)});rs("Sine",function(r){return r===1?1:-zM(r*BM)+1});rs("Back",cc("in"),cc("out"),cc());at.SteppedEase=at.steps=Zn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Et;return function(o){return((i*Za(0,a,o)|0)+s)*n}}};Hs.ease=at["quad.out"];In("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return af+=r+","+r+"Params,"});var Dp=function(e,t){this.id=kM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:lp,this.set=t?t.getSetter:hf},Ga=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,qs(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),Va||Xn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ys(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(El(this,n),!s._dp||s.parent||dp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&bi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Et||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),cp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Lh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Lh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Xs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ll(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Et?0:this._rts,this.totalTime(Za(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),yl(this),ZM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ys(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Pt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&bi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ll(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=YM);var i=ln;return ln=n,lf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ln=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ih(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ih(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ti(this,n),Ln(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ln(i)),this._dur||(this._zTime=-Et),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Et)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ut(n)?n:fp,l=function(){var u=i.then;i.then=null,s&&s(),Ut(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){pa(this)},r})();Jn(Ga.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var sn=(function(r){Qd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ln(n.sortChildren),Dt&&bi(n.parent||Dt,Gi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&pp(Gi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Ea(0,arguments,this),this},t.from=function(i,s,a){return Ea(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Ea(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ya(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new kt(i,s,ti(this,a),1),this},t.call=function(i,s,a){return bi(this,kt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new kt(i,a,ti(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ya(a).immediateRender=Ln(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,ya(o).immediateRender=Ln(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Pt(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,h,_,g,p,m,M,b,S,T,A,w;if(this!==Dt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,S=this._start,b=this._ts,m=!b,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=Pt(u%p),u===l?(g=this._repeat,f=c):(T=Pt(u/p),g=~~T,g&&g===T&&(f=c,g--),f>c&&(f=c)),T=Xs(this._tTime,p),!o&&this._tTime&&T!==g&&this._tTime-T*p-this._dur<=0&&(T=g),A&&g&1&&(f=c-f,w=1),g!==T&&!this._lock){var v=A&&T&1,y=v===(A&&g&1);if(g<T&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(w?0:Pt(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Yn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,T=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Rp(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=tS(this,Pt(o),Pt(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!T&&(Yn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(h=this._first;h;){if(_=h._next,(h._act||f>=h._start)&&h._ts&&M!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,a),f!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=-Et);break}}h=_}else{h=this._last;for(var U=i<0?i:f;h;){if(_=h._prev,(h._act||U<=h._end)&&h._ts&&M!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(U-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(U-h._start)*h._ts,s,a||ln&&lf(h)),f!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=U?-Et:Et);break}}h=_}}if(M&&!s&&(this.pause(),M.render(f>=o?0:-Et)._zTime=f>=o?1:-1,this._ts))return this._start=S,yl(this),this.render(i,s,a);this._onUpdate&&!s&&Yn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Er(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Yn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(er(s)||(s=ti(this,s,i)),!(i instanceof Ga)){if(xn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(nn(i))return this.addLabel(i,s);if(Ut(i))i=kt.delayedCall(0,i);else return this}return this!==i?bi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-oi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof kt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return nn(i)?this.removeLabel(i):Ut(i)?this.killTweensOf(i):(i.parent===this&&Sl(this,i),i===this._recent&&(this._recent=this._last),$r(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pt(Xn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ti(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=kt.delayedCall(0,s||ka,a);return o.data="isPause",this._hasPause=1,bi(this,o,ti(this,i))},t.removePause=function(i){var s=this._first;for(i=ti(this,i);s;)s._start===i&&s.data==="isPause"&&Er(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)dr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=li(i),l=this._first,c=er(s),u;l;)l instanceof kt?$M(l._targets,o)&&(c?(!dr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=ti(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,_=kt.to(a,Jn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Et,onStart:function(){if(a.pause(),!h){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&qs(_,p,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Jn({startAt:{time:ti(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Uh(this,ti(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Uh(this,ti(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Pt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return $r(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),$r(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=oi,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,bi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Pt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;qs(a,a===Dt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Dt._ts&&(cp(Dt,ll(i,Dt)),op=Xn.frame),Xn.frame>=Ph){Ph+=Kn.autoSleep||120;var s=Dt._first;if((!s||!s._ts)&&Kn.autoSleep&&Xn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Xn.sleep()}}},e})(Ga);Jn(sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var gS=function(e,t,n,i,s,a,o){var l=new Un(this._pt,e,t,0,1,Op,null,s),c=0,u=0,d,f,h,_,g,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=za(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),f=n.match(sc)||[];d=sc.exec(i);)_=d[0],g=i.substring(c,d.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Ls(p,_)-p:parseFloat(_)-p,m:h&&h<4?Math.round:0},c=sc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(ip.test(i)||m)&&(l.e=0),this._pt=l,l},cf=function(e,t,n,i,s,a,o,l,c,u){Ut(i)&&(i=i(s||0,e,a));var d=e[t],f=n!=="get"?n:Ut(d)?c?e[t.indexOf("set")||!Ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Ut(d)?c?yS:Np:ff,_;if(nn(i)&&(~i.indexOf("random(")&&(i=za(i)),i.charAt(1)==="="&&(_=Ls(f,i)+(_n(f)||0),(_||_===0)&&(i=_))),!u||f!==i||bu)return!isNaN(f*i)&&i!==""?(_=new Un(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?bS:Fp,0,h),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&rf(t,i),gS.call(this,e,t,f,i,h,l||Kn.stringFilter,c))},vS=function(e,t,n,i,s){if(Ut(e)&&(e=ba(e,s,t,n,i)),!Ni(e)||e.style&&e.nodeType||xn(e)||tp(e))return nn(e)?ba(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=ba(e[o],s,t,n,i);return a},Lp=function(e,t,n,i,s,a){var o,l,c,u;if(Hn[e]&&(o=new Hn[e]).init(s,o.rawVars?t[e]:vS(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Un(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Cs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},dr,bu,uf=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,h=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,M=m&&m.data==="nested"?m.vars.targets:p,b=e._overwrite==="auto"&&!Qu,S=e.timeline,T,A,w,v,y,U,R,I,k,V,z,B,O;if(S&&(!f||!s)&&(s="none"),e._ease=jr(s,Hs.ease),e._yEase=d?Cp(jr(d===!0?s:d,Hs.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!S&&!!i.runBackwards,!S||f&&!i.stagger){if(I=p[0]?Yr(p[0]).harness:0,B=I&&i[I.prop],T=ol(i,sf),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!h?g.render(-1,!0):g.revert(u&&_?Wo:qM),g._lazy=0),a){if(Er(e._startAt=kt.set(p,Jn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Ln(l),startAt:null,delay:0,onUpdate:c&&function(){return Yn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln||!o&&!h)&&e._startAt.revert(Wo),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),w=Jn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Ln(l),immediateRender:o,stagger:0,parent:m},T),B&&(w[I.prop]=B),Er(e._startAt=kt.set(p,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln?e._startAt.revert(Wo):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Ln(l)||l&&!_,A=0;A<p.length;A++){if(y=p[A],R=y._gsap||of(p)[A]._gsap,e._ptLookup[A]=V={},vu[R.id]&&vr.length&&al(),z=M===p?A:M.indexOf(y),I&&(k=new I).init(y,B||T,e,z,M)!==!1&&(e._pt=v=new Un(e._pt,y,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(J){V[J]=v}),k.priority&&(U=1)),!I||B)for(w in T)Hn[w]&&(k=Lp(w,T,e,z,y,M))?k.priority&&(U=1):V[w]=v=cf.call(e,y,w,"get",T[w],z,M,0,i.stringFilter);e._op&&e._op[A]&&e.kill(y,e._op[A]),b&&e._pt&&(dr=e,Dt.killTweensOf(y,V,e.globalTime(t)),O=!e.parent,dr=0),e._pt&&l&&(vu[R.id]=1)}U&&Bp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!O,f&&t<=0&&S.render(oi,!0,!0)},xS=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return bu=1,e.vars[t]="+=0",uf(e,o),bu=0,l?Ba(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Bt(n)+_n(d.e)),d.b&&(d.b=u.s+_n(d.b))},MS=function(e,t){var n=e[0]?Yr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Ws({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},SS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(xn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ba=function(e,t,n,i,s){return Ut(e)?e.call(t,n,i,s):nn(e)&&~e.indexOf("random(")?za(e):e},Ip=af+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Up={};In(Ip+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Up[r]=1});var kt=(function(r){Qd(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ya(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,M=i.parent||Dt,b=(xn(n)||tp(n)?er(n[0]):"length"in i)?[n]:li(n),S,T,A,w,v,y,U,R;if(o._targets=b.length?of(b):Ba("GSAP target "+n+" not found. https://gsap.com",!Kn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,_||f||To(c)||To(u)){if(i=o.vars,S=o.timeline=new sn({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:b}),S.kill(),S.parent=S._dp=Gi(o),S._start=0,f||To(c)||To(u)){if(w=b.length,U=f&&vp(f),Ni(f))for(v in f)~Ip.indexOf(v)&&(R||(R={}),R[v]=f[v]);for(T=0;T<w;T++)A=ol(i,Up),A.stagger=0,m&&(A.yoyoEase=m),R&&Ws(A,R),y=b[T],A.duration=+ba(c,Gi(o),T,y,b),A.delay=(+ba(u,Gi(o),T,y,b)||0)-o._delay,!f&&w===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),S.to(y,A,U?U(T,y,b):0),S._ease=at.none;S.duration()?c=u=0:o.timeline=0}else if(_){ya(Jn(S.vars.defaults,{ease:"none"})),S._ease=jr(_.ease||i.ease||"none");var I=0,k,V,z;if(xn(_))_.forEach(function(B){return S.to(b,B,">")}),S.duration();else{A={};for(v in _)v==="ease"||v==="easeEach"||SS(v,_[v],A,_.easeEach);for(v in A)for(k=A[v].sort(function(B,O){return B.t-O.t}),I=0,T=0;T<k.length;T++)V=k[T],z={ease:V.e,duration:(V.t-(T?k[T-1].t:0))/100*c},z[v]=V.v,S.to(b,z,I),I+=z.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return h===!0&&!Qu&&(dr=Gi(o),Dt.killTweensOf(b),dr=0),bi(M,Gi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!_&&o._start===Pt(M._time)&&Ln(d)&&JM(Gi(o))&&M.data!=="nested")&&(o._tTime=-Et,o.render(Math.max(0,-u)||0)),p&&pp(Gi(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Et&&!u?l:i<Et?0:i,f,h,_,g,p,m,M,b,S;if(!c)eS(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,b=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(f=Pt(d%g),d===l?(_=this._repeat,f=c):(p=Pt(d/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(S=this._yEase,f=c-f),p=Xs(this._tTime,g),f===o&&!a&&this._initted&&_===p)return this._tTime=d,this;_!==p&&(b&&this._yEase&&Rp(b,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(Pt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(mp(this,u?i:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(f/c),this._from&&(this.ratio=M=1-M),!o&&d&&!s&&!p&&(Yn(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(M,h.d),h=h._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&xu(this,i,s,a),Yn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Yn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&xu(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Er(this,1),!s&&!(u&&!o)&&(d||o||m)&&(Yn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Va||Xn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||uf(this,c),u=this._ease(c/this._dur),xS(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(El(this,0),this.parent||hp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?pa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ln),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,dr&&dr.vars.overwrite!==!0)._first||pa(this),this.parent&&a!==this.timeline.totalDuration()&&qs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?li(i):o,c=this._ptLookup,u=this._pt,d,f,h,_,g,p,m;if((!s||s==="all")&&KM(o,l))return s==="all"&&(this._pt=0),pa(this);for(d=this._op=this._op||[],s!=="all"&&(nn(s)&&(g={},In(s,function(M){return g[M]=1}),s=g),s=MS(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(d[m]=s,_=f,h={}):(h=d[m]=d[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Sl(this,p,"_pt"),delete f[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&u&&pa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ea(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Ea(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Dt.killTweensOf(i,s,a)},e})(Ga);Jn(kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});In("staggerTo,staggerFrom,staggerFromTo",function(r){kt[r]=function(){var e=new sn,t=Su.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var ff=function(e,t,n){return e[t]=n},Np=function(e,t,n){return e[t](n)},yS=function(e,t,n,i){return e[t](i.fp,n)},ES=function(e,t,n){return e.setAttribute(t,n)},hf=function(e,t){return Ut(e[t])?Np:ef(e[t])&&e.setAttribute?ES:ff},Fp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},bS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Op=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},df=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},TS=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},AS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Sl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},wS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Bp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Un=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Fp,this.d=l||this,this.set=c||ff,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=wS,this.m=n,this.mt=s,this.tween=i},r})();In(af+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return sf[r]=1});Zn.TweenMax=Zn.TweenLite=kt;Zn.TimelineLite=Zn.TimelineMax=sn;Dt=new sn({sortChildren:!1,defaults:Hs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kn.stringFilter=wp;var Kr=[],qo={},CS=[],Fh=0,RS=0,uc=function(e){return(qo[e]||CS).map(function(t){return t()})},Tu=function(){var e=Date.now(),t=[];e-Fh>2&&(uc("matchMediaInit"),Kr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Si.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),uc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Fh=e,uc("matchMedia"))},kp=(function(){function r(t,n){this.selector=n&&yu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=RS++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ut(n)&&(s=i,i=n,n=Ut);var a=this,o=function(){var c=Rt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=yu(s)),Rt=a,d=i.apply(a,arguments),Ut(d)&&a._r.push(d),Rt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Ut?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Rt;Rt=null,n(this),Rt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof kt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Kr.length;a--;)Kr[a].id===this.id&&Kr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),PS=(function(){function r(t){this.contexts=[],this.scope=t,Rt&&Rt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ni(n)||(n={matches:n});var a=new kp(0,s||this.scope),o=a.conditions={},l,c,u;Rt&&!a.selector&&(a.selector=Rt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Si.matchMedia(n[c]),l&&(Kr.indexOf(a)<0&&Kr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Tu):l.addEventListener("change",Tu)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),cl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return bp(i)})},timeline:function(e){return new sn(e)},getTweensOf:function(e,t){return Dt.getTweensOf(e,t)},getProperty:function(e,t,n,i){nn(e)&&(e=li(e)[0]);var s=Yr(e||{}).get,a=n?fp:up;return n==="native"&&(n=""),e&&(t?a((Hn[t]&&Hn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Hn[o]&&Hn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=li(e),e.length>1){var i=e.map(function(u){return On.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=Hn[t],o=Yr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;Cs._pt=0,d.init(e,n?u+n:u,Cs,0,[e]),d.render(1,d),Cs._pt&&df(1,Cs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=On.to(e,Jn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=jr(e.ease,Hs.ease)),Dh(Hs,e||{})},config:function(e){return Dh(Kn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Hn[o]&&!Zn[o]&&Ba(t+" effect requires "+o+" plugin.")}),ac[t]=function(o,l,c){return n(li(o),Jn(l||{},s),c)},a&&(sn.prototype[t]=function(o,l,c){return this.add(ac[t](o,Ni(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){at[e]=jr(t)},parseEase:function(e,t){return arguments.length?jr(e,t):at},getById:function(e){return Dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new sn(e),i,s;for(n.smoothChildTiming=Ln(e.smoothChildTiming),Dt.remove(n),n._dp=0,n._time=n._tTime=Dt._time,i=Dt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof kt&&i.vars.onComplete===i._targets[0]))&&bi(n,i,i._start-i._delay),i=s;return bi(Dt,n,0),n},context:function(e,t){return e?new kp(e,t):Rt},matchMedia:function(e){return new PS(e)},matchMediaRefresh:function(){return Kr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Tu()},addEventListener:function(e,t){var n=qo[e]||(qo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=qo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:lS,wrapYoyo:cS,distribute:vp,random:Mp,snap:xp,normalize:oS,getUnit:_n,clamp:iS,splitColor:Tp,toArray:li,selector:yu,mapRange:yp,pipe:sS,unitize:aS,interpolate:uS,shuffle:gp},install:sp,effects:ac,ticker:Xn,updateRoot:sn.updateRoot,plugins:Hn,globalTimeline:Dt,core:{PropTween:Un,globals:ap,Tween:kt,Timeline:sn,Animation:Ga,getCache:Yr,_removeLinkedListItem:Sl,reverting:function(){return ln},context:function(e){return e&&Rt&&(Rt.data.push(e),e._ctx=Rt),Rt},suppressOverwrites:function(e){return Qu=e}}};In("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return cl[r]=kt[r]});Xn.add(sn.updateRoot);Cs=cl.to({},{duration:0});var DS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},LS=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=DS(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},fc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(nn(s)&&(l={},In(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}LS(o,s)}}}},On=cl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)ln?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},fc("roundProps",Eu),fc("modifiers"),fc("snap",xp))||cl;kt.version=sn.version=On.version="3.14.2";rp=1;tf()&&Ys();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;var Oh,pr,Is,pf,Xr,Bh,mf,IS=function(){return typeof window<"u"},tr={},Br=180/Math.PI,Us=Math.PI/180,ys=Math.atan2,kh=1e8,_f=/([A-Z])/g,US=/(left|right|width|margin|padding|x)/i,NS=/[\s,\(]\S/,wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Au=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},FS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},OS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},BS=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},kS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},zp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Vp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},zS=function(e,t,n){return e.style[t]=n},VS=function(e,t,n){return e.style.setProperty(t,n)},GS=function(e,t,n){return e._gsap[t]=n},HS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},WS=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},XS=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Lt="transform",Nn=Lt+"Origin",qS=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in tr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=wi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Hi(i,o)}):this.tfm[e]=a.x?a[e]:Hi(i,e),e===Nn&&(this.tfm.zOrigin=a.zOrigin);else return wi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Lt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Nn,t,"")),e=Lt}(s||t)&&this.props.push(e,t,s[e])},Gp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},YS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(_f,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=mf(),(!s||!s.isStart)&&!n[Lt]&&(Gp(n),i.zOrigin&&n[Nn]&&(n[Nn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Hp=function(e,t){var n={target:e,props:[],revert:YS,save:qS};return e._gsap||On.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Wp,wu=function(e,t){var n=pr.createElementNS?pr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):pr.createElement(e);return n&&n.style?n:pr.createElement(e)},$n=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(_f,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,$s(t)||t,1)||""},zh="O,Moz,ms,Ms,Webkit".split(","),$s=function(e,t,n){var i=t||Xr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(zh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?zh[a]:"")+e},Cu=function(){IS()&&window.document&&(Oh=window,pr=Oh.document,Is=pr.documentElement,Xr=wu("div")||{style:{}},wu("div"),Lt=$s(Lt),Nn=Lt+"Origin",Xr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wp=!!$s("perspective"),mf=On.core.reverting,pf=1)},Vh=function(e){var t=e.ownerSVGElement,n=wu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Is.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Is.removeChild(n),s},Gh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Xp=function(e){var t,n;try{t=e.getBBox()}catch{t=Vh(e),n=1}return t&&(t.width||t.height)||n||(t=Vh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Gh(e,["x","cx","x1"])||0,y:+Gh(e,["y","cy","y1"])||0,width:0,height:0}:t},qp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Xp(e))},br=function(e,t){if(t){var n=e.style,i;t in tr&&t!==Nn&&(t=Lt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(_f,"-$1").toLowerCase())):n.removeAttribute(t)}},mr=function(e,t,n,i,s,a){var o=new Un(e._pt,t,n,0,1,a?Vp:zp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Hh={deg:1,rad:1,turn:1},$S={grid:1,flex:1},Tr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Xr.style,l=US.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",h=i==="%",_,g,p,m;if(i===a||!s||Hh[i]||Hh[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&qp(e),(h||a==="%")&&(tr[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Bt(h?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(f?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===pr||!g.appendChild)&&(g=pr.body),p=g._gsap,p&&h&&p.width&&l&&p.time===Xn.time&&!p.uncache)return Bt(s/p.width*d);if(h&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=d+i,_=e[u],M?e.style[t]=M:br(e,t)}else(h||a==="%")&&!$S[$n(g,"display")]&&(o.position=$n(e,"position")),g===e&&(o.position="static"),g.appendChild(Xr),_=Xr[u],g.removeChild(Xr),o.position="absolute";return l&&h&&(p=Yr(g),p.time=Xn.time,p.width=g[u]),Bt(f?_*s/d:_&&s?d/_*s:0)},Hi=function(e,t,n,i){var s;return pf||Cu(),t in wi&&t!=="transform"&&(t=wi[t],~t.indexOf(",")&&(t=t.split(",")[0])),tr[t]&&t!=="transform"?(s=Wa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:fl($n(e,Nn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ul[t]&&ul[t](e,t,n)||$n(e,t)||lp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Tr(e,t,s,n)+n:s},jS=function(e,t,n,i){if(!n||n==="none"){var s=$s(t,e,1),a=s&&$n(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=$n(e,"borderTopColor"))}var o=new Un(this._pt,e.style,t,0,1,Op),l=0,c=0,u,d,f,h,_,g,p,m,M,b,S,T;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=$n(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=$n(e,t)||i,g?e.style[t]=g:br(e,t)),u=[n,i],wp(u),n=u[0],i=u[1],f=n.match(ws)||[],T=i.match(ws)||[],T.length){for(;d=ws.exec(i);)p=d[0],M=i.substring(l,d.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(h=parseFloat(g)||0,S=g.substr((h+"").length),p.charAt(1)==="="&&(p=Ls(h,p)+S),m=parseFloat(p),b=p.substr((m+"").length),l=ws.lastIndex-b.length,b||(b=b||Kn.units[t]||S,l===i.length&&(i+=b,o.e+=b)),S!==b&&(h=Tr(e,t,g,b)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:h,c:m-h,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Vp:zp;return ip.test(i)&&(o.e=0),this._pt=o,o},Wh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},KS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Wh[n]||n,t[1]=Wh[i]||i,t.join(" ")},ZS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],tr[o]&&(l=1,o=o==="transformOrigin"?Nn:Lt),br(n,o);l&&(br(n,Lt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Wa(n,1),a.uncache=1,Gp(i)))}},ul={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Un(e._pt,t,n,0,0,ZS);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ha=[1,0,0,1,0,0],Yp={},$p=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Xh=function(e){var t=$n(e,Lt);return $p(t)?Ha:t.substr(7).match(np).map(Bt)},gf=function(e,t){var n=e._gsap||Yr(e),i=e.style,s=Xh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ha:s):(s===Ha&&!e.offsetParent&&e!==Is&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Is.appendChild(e)),s=Xh(e),l?i.display=l:br(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Is.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ru=function(e,t,n,i,s,a){var o=e._gsap,l=s||gf(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,h=l[0],_=l[1],g=l[2],p=l[3],m=l[4],M=l[5],b=t.split(" "),S=parseFloat(b[0])||0,T=parseFloat(b[1])||0,A,w,v,y;n?l!==Ha&&(w=h*p-_*g)&&(v=S*(p/w)+T*(-g/w)+(g*M-p*m)/w,y=S*(-_/w)+T*(h/w)-(h*M-_*m)/w,S=v,T=y):(A=Xp(e),S=A.x+(~b[0].indexOf("%")?S/100*A.width:S),T=A.y+(~(b[1]||b[0]).indexOf("%")?T/100*A.height:T)),i||i!==!1&&o.smooth?(m=S-c,M=T-u,o.xOffset=d+(m*h+M*g)-m,o.yOffset=f+(m*_+M*p)-M):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=T,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Nn]="0px 0px",a&&(mr(a,o,"xOrigin",c,S),mr(a,o,"yOrigin",u,T),mr(a,o,"xOffset",d,o.xOffset),mr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+T)},Wa=function(e,t){var n=e._gsap||new Dp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=$n(e,Nn)||"0",u,d,f,h,_,g,p,m,M,b,S,T,A,w,v,y,U,R,I,k,V,z,B,O,J,Q,P,le,ce,Be,Ve,Ye;return u=d=f=g=p=m=M=b=S=0,h=_=1,n.svg=!!(e.getCTM&&qp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Lt]!=="none"?l[Lt]:"")),i.scale=i.rotate=i.translate="none"),w=gf(e,n.svg),n.svg&&(n.uncache?(J=e.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Ru(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,w)),T=n.xOrigin||0,A=n.yOrigin||0,w!==Ha&&(R=w[0],I=w[1],k=w[2],V=w[3],u=z=w[4],d=B=w[5],w.length===6?(h=Math.sqrt(R*R+I*I),_=Math.sqrt(V*V+k*k),g=R||I?ys(I,R)*Br:0,M=k||V?ys(k,V)*Br+g:0,M&&(_*=Math.abs(Math.cos(M*Us))),n.svg&&(u-=T-(T*R+A*k),d-=A-(T*I+A*V))):(Ye=w[6],Be=w[7],P=w[8],le=w[9],ce=w[10],Ve=w[11],u=w[12],d=w[13],f=w[14],v=ys(Ye,ce),p=v*Br,v&&(y=Math.cos(-v),U=Math.sin(-v),O=z*y+P*U,J=B*y+le*U,Q=Ye*y+ce*U,P=z*-U+P*y,le=B*-U+le*y,ce=Ye*-U+ce*y,Ve=Be*-U+Ve*y,z=O,B=J,Ye=Q),v=ys(-k,ce),m=v*Br,v&&(y=Math.cos(-v),U=Math.sin(-v),O=R*y-P*U,J=I*y-le*U,Q=k*y-ce*U,Ve=V*U+Ve*y,R=O,I=J,k=Q),v=ys(I,R),g=v*Br,v&&(y=Math.cos(v),U=Math.sin(v),O=R*y+I*U,J=z*y+B*U,I=I*y-R*U,B=B*y-z*U,R=O,z=J),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),h=Bt(Math.sqrt(R*R+I*I+k*k)),_=Bt(Math.sqrt(B*B+Ye*Ye)),v=ys(z,B),M=Math.abs(v)>2e-4?v*Br:0,S=Ve?1/(Ve<0?-Ve:Ve):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!$p($n(e,Lt)),O&&e.setAttribute("transform",O))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(h*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Bt(h),n.scaleY=Bt(_),n.rotation=Bt(g)+o,n.rotationX=Bt(p)+o,n.rotationY=Bt(m)+o,n.skewX=M+o,n.skewY=b+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Nn]=fl(c)),n.xOffset=n.yOffset=0,n.force3D=Kn.force3D,n.renderTransform=n.svg?QS:Wp?jp:JS,n.uncache=0,n},fl=function(e){return(e=e.split(" "))[0]+" "+e[1]},hc=function(e,t,n){var i=_n(t);return Bt(parseFloat(t)+parseFloat(Tr(e,"x",n+"px",i)))+i},JS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,jp(e,t)},Nr="0deg",la="0px",Fr=") ",jp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,h=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,b=n.zOrigin,S="",T=m==="auto"&&e&&e!==1||m===!0;if(b&&(d!==Nr||u!==Nr)){var A=parseFloat(u)*Us,w=Math.sin(A),v=Math.cos(A),y;A=parseFloat(d)*Us,y=Math.cos(A),a=hc(M,a,w*y*-b),o=hc(M,o,-Math.sin(A)*-b),l=hc(M,l,v*y*-b+b)}p!==la&&(S+="perspective("+p+Fr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(T||a!==la||o!==la||l!==la)&&(S+=l!==la||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Fr),c!==Nr&&(S+="rotate("+c+Fr),u!==Nr&&(S+="rotateY("+u+Fr),d!==Nr&&(S+="rotateX("+d+Fr),(f!==Nr||h!==Nr)&&(S+="skew("+f+", "+h+Fr),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Fr),M.style[Lt]=S||"translate(0, 0)"},QS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,h=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,b=parseFloat(a),S=parseFloat(o),T,A,w,v,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Us,c*=Us,T=Math.cos(l)*d,A=Math.sin(l)*d,w=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=Us,y=Math.tan(c-u),y=Math.sqrt(1+y*y),w*=y,v*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),T*=y,A*=y)),T=Bt(T),A=Bt(A),w=Bt(w),v=Bt(v)):(T=d,v=f,A=w=0),(b&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(b=Tr(h,"x",a,"px"),S=Tr(h,"y",o,"px")),(_||g||p||m)&&(b=Bt(b+_-(_*T+g*w)+p),S=Bt(S+g-(_*A+g*v)+m)),(i||s)&&(y=h.getBBox(),b=Bt(b+i/100*y.width),S=Bt(S+s/100*y.height)),y="matrix("+T+","+A+","+w+","+v+","+b+","+S+")",h.setAttribute("transform",y),M&&(h.style[Lt]=y)},ey=function(e,t,n,i,s){var a=360,o=nn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Br:1),c=l-i,u=i+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*kh)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*kh)%a-~~(c/a)*a)),e._pt=f=new Un(e._pt,t,n,i,c,FS),f.e=u,f.u="deg",e._props.push(n),f},qh=function(e,t){for(var n in t)e[n]=t[n];return e},ty=function(e,t,n){var i=qh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,f,h,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Lt]=t,o=Wa(n,1),br(n,Lt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Lt],a[Lt]=t,o=Wa(n,1),a[Lt]=c);for(l in tr)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=_n(c),_=_n(u),d=h!==_?Tr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Un(e._pt,o,l,d,f-d,Au),e._pt.u=_||0,e._props.push(l));qh(o,i)};In("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ul[e>1?"border"+r:r]=function(o,l,c,u,d){var f,h;if(arguments.length<4)return f=a.map(function(_){return Hi(o,_,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},a.forEach(function(_,g){return h[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,h,d)}});var vf={name:"css",register:Cu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,f,h,_,g,p,m,M,b,S,T,A,w,v,y;pf||Cu(),this.styles=this.styles||Hp(e),v=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Hn[g]&&Lp(g,t,n,i,e,s)))){if(h=typeof u,_=ul[g],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=za(u)),_)_(this,e,g,u,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",xr.lastIndex=0,xr.test(c)||(p=_n(c),m=_n(u),m?p!==m&&(c=Tr(e,g,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),v.push(g,0,o[g]);else if(h!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],nn(c)&&~c.indexOf("random(")&&(c=za(c)),_n(c+"")||c==="auto"||(c+=Kn.units[g]||_n(Hi(e,g))||""),(c+"").charAt(1)==="="&&(c=Hi(e,g))):c=Hi(e,g),f=parseFloat(c),M=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),d=parseFloat(u),g in wi&&(g==="autoAlpha"&&(f===1&&Hi(e,"visibility")==="hidden"&&d&&(f=0),v.push("visibility",0,o.visibility),mr(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=wi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in tr,b){if(this.styles.save(g),y=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=$n(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var U=e.style.perspective;e.style.perspective=u,u=$n(e,"perspective"),U?e.style.perspective=U:br(e,"perspective")}d=parseFloat(u)}if(S||(T=e._gsap,T.renderTransform&&!t.parseTransform||Wa(e,t.parseTransform),A=t.smoothOrigin!==!1&&T.smooth,S=this._pt=new Un(this._pt,o,Lt,0,1,T.renderTransform,T,0,-1),S.dep=1),g==="scale")this._pt=new Un(this._pt,T,"scaleY",T.scaleY,(M?Ls(T.scaleY,M+d):d)-T.scaleY||0,Au),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){v.push(Nn,0,o[Nn]),u=KS(u),T.svg?Ru(e,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==T.zOrigin&&mr(this,T,"zOrigin",T.zOrigin,m),mr(this,o,g,fl(c),fl(u)));continue}else if(g==="svgOrigin"){Ru(e,u,1,A,0,this);continue}else if(g in Yp){ey(this,T,g,f,M?Ls(f,M+u):u);continue}else if(g==="smoothOrigin"){mr(this,T,"smooth",T.smooth,u);continue}else if(g==="force3D"){T[g]=u;continue}else if(g==="transform"){ty(this,u,e);continue}}else g in o||(g=$s(g)||g);if(b||(d||d===0)&&(f||f===0)&&!NS.test(u)&&g in o)p=(c+"").substr((f+"").length),d||(d=0),m=_n(u)||(g in Kn.units?Kn.units[g]:p),p!==m&&(f=Tr(e,g,c,m)),this._pt=new Un(this._pt,b?T:o,g,f,(M?Ls(f,M+d):d)-f,!b&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?kS:Au),this._pt.u=m||0,b&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=BS):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=OS);else if(g in o)jS.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,i,s);else if(g!=="parseTransform"){rf(g,u);continue}b||(g in o?v.push(g,0,o[g]):typeof e[g]=="function"?v.push(g,2,e[g]()):v.push(g,1,c||e[g])),a.push(g)}}w&&Bp(this)},render:function(e,t){if(t.tween._time||!mf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Hi,aliases:wi,getSetter:function(e,t,n){var i=wi[t];return i&&i.indexOf(",")<0&&(t=i),t in tr&&t!==Nn&&(e._gsap.x||Hi(e,"x"))?n&&Bh===n?t==="scale"?HS:GS:(Bh=n||{})&&(t==="scale"?WS:XS):e.style&&!ef(e.style[t])?zS:~t.indexOf("-")?VS:hf(e,t)},core:{_removeProperty:br,_getMatrix:gf}};On.utils.checkPrefix=$s;On.core.getStyleSaver=Hp;(function(r,e,t,n){var i=In(r+","+e+","+t,function(s){tr[s]=1});In(e,function(s){Kn.units[s]="deg",Yp[s]=1}),wi[i[13]]=r+","+e,In(n,function(s){var a=s.split(":");wi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");In("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Kn.units[r]="px"});On.registerPlugin(vf);var At=On.registerPlugin(vf)||On;At.core.Tween;const ny=Object.freeze(Object.defineProperty({__proto__:null,CSSPlugin:vf,TimelineLite:sn,TimelineMax:sn,TweenLite:kt,default:At,gsap:At},Symbol.toStringTag,{value:"Module"}));function iy(){ry(),sy(),ay()}function ry(){const r=document.getElementById("hero-canvas");if(!r)return;const e=new y_,t=new ii(75,window.innerWidth/window.innerHeight,.1,1e3),n=new OM({canvas:r,alpha:!0,antialias:!1});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,1.5));const i=50,s=new Ju(.04,6,6),a=[],o=[],l=new ha,c=new Zu({color:new ht().setHSL(.75,.8,.6),transparent:!0,opacity:.8});for(let T=0;T<i;T++){const A=new Ii(s,c),w=new X((Math.random()-.5)*10,(Math.random()-.5)*8,(Math.random()-.5)*6);A.position.copy(w),a.push(w),o.push(A),l.add(A)}e.add(l);const u=new zd({color:7103487,transparent:!0,opacity:.12}),d=2.8;for(let T=0;T<i;T++)for(let A=T+1;A<i;A++)if(a[T].distanceTo(a[A])<d){const v=new Fn().setFromPoints([a[T],a[A]]),y=new L_(v,u);e.add(y)}const f=100,h=new Fn,_=new Float32Array(f*3),g=new Float32Array(f);for(let T=0;T<f;T++)_[T*3]=(Math.random()-.5)*20,_[T*3+1]=(Math.random()-.5)*15,_[T*3+2]=(Math.random()-.5)*10,g[T]=Math.random()*.005+.002;h.setAttribute("position",new gi(_,3));const p=new Vd({color:54442,size:.03,transparent:!0,opacity:.6,blending:yc}),m=new I_(h,p);e.add(m),t.position.z=5;const M={x:0,y:0};window.addEventListener("mousemove",T=>{M.x=T.clientX/window.innerWidth*2-1,M.y=-(T.clientY/window.innerHeight)*2+1});let b=0;function S(){requestAnimationFrame(S),b+=.004,l.rotation.y=b*.3+M.x*.3,l.rotation.x=Math.sin(b*.5)*.1+M.y*.2,Math.round(b*1e3)%2===0&&o.forEach((A,w)=>{const v=1+Math.sin(b*3+w*.5)*.3;A.scale.setScalar(v)});const T=h.attributes.position.array;for(let A=0;A<f;A++)T[A*3+1]+=g[A],T[A*3+1]>7.5&&(T[A*3+1]=-7.5);h.attributes.position.needsUpdate=!0,t.position.x+=(M.x*.5-t.position.x)*.02,t.position.y+=(M.y*.3-t.position.y)*.02,n.render(e,t)}S(),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)})}function sy(){const r=document.getElementById("typing-text");if(!r)return;let e=Rf[Sr()],t=0,n=null,i=null;function s(){n&&(n.kill(),n=null),i&&(i.kill(),i=null)}function a(){const l=e[t];r.innerHTML=" ",n=At.timeline({onComplete:()=>{i=At.delayedCall(1.5,()=>{o(l.length)})}});for(let c=0;c<l.length;c++)n.to(r,{duration:.06,onComplete:()=>{r.textContent=l.substring(0,c+1)}},c*.06);n.set(r,{className:"+=typing-cursor"})}function o(l){n=At.timeline({onComplete:()=>{t=(t+1)%e.length,r.classList.remove("typing-cursor"),i=At.delayedCall(.3,a)}});for(let c=l;c>=0;c--)n.to(r,{duration:.04,onComplete:()=>{r.textContent=r.textContent.substring(0,c)||" "}},(l-c)*.04)}i=At.delayedCall(1.5,a),window.addEventListener("languageChanged",()=>{s(),e=Rf[Sr()],t=0,r.textContent=" ",r.classList.remove("typing-cursor"),i=At.delayedCall(.3,a)})}function ay(){At.timeline({delay:.3}).to(".hero-badge",{opacity:1,y:0,duration:.8,ease:"power3.out"}).to(".title-line",{opacity:1,y:0,duration:.8,ease:"power3.out",stagger:.2},"-=0.4").to(".hero-description",{opacity:1,y:0,duration:.8,ease:"power3.out"},"-=0.4").to(".hero-cta",{opacity:1,y:0,duration:.8,ease:"power3.out"},"-=0.4").to(".hero-stats",{opacity:1,y:0,duration:.8,ease:"power3.out"},"-=0.4"),document.querySelectorAll(".stat-number").forEach(e=>{const t=parseInt(e.getAttribute("data-target")||"0");At.to(e,{textContent:t,duration:2,delay:1.5,ease:"power2.out",snap:{textContent:1}})})}function oy(){const r=document.getElementById("navbar"),e=document.getElementById("nav-hamburger"),t=document.getElementById("nav-links"),n=document.getElementById("theme-toggle");if(!r||!e||!t||!n)return;window.addEventListener("scroll",()=>{window.scrollY>50?r.classList.add("scrolled"):r.classList.remove("scrolled"),l()}),e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("active")}),t.querySelectorAll(".nav-link").forEach(c=>{c.addEventListener("click",()=>{e.classList.remove("active"),t.classList.remove("active")})});const i=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",i),n.addEventListener("click",()=>{const u=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",u),localStorage.setItem("theme",u)});const s=document.getElementById("lang-toggle"),a=document.getElementById("lang-toggle-flag");function o(){a&&(a.textContent=Sr()==="fr"?"🇫🇷":"🇬🇧")}o(),s?.addEventListener("click",()=>{const c=Sr()==="fr"?"en":"fr";Sc(c)}),window.addEventListener("languageChanged",o);function l(){const c=document.querySelectorAll("section[id]"),u=window.scrollY+window.innerHeight/3;c.forEach(d=>{const f=d,h=f.offsetTop,_=f.offsetHeight,g=f.getAttribute("id");u>=h&&u<h+_&&t.querySelectorAll(".nav-link").forEach(p=>{p.classList.remove("active"),p.getAttribute("data-section")===g&&p.classList.add("active")})})}}function ly(){const r=document.getElementById("tech-grid");if(!r)return;[{icon:"⚛️",name:"React"},{icon:"🟢",name:"Node.js"},{icon:"🐍",name:"Python"},{icon:"📘",name:"TypeScript"},{icon:"🔥",name:"Next.js"},{icon:"🗄️",name:"PostgreSQL"},{icon:"🤖",name:"ROS"},{icon:"🧠",name:"TensorFlow"},{icon:"🔦",name:"PyTorch"},{icon:"👁️",name:"OpenCV"},{icon:"🔌",name:"Arduino"},{icon:"🐧",name:"Linux"},{icon:"🐳",name:"Docker"},{icon:"📦",name:"Git"},{icon:"☁️",name:"AWS"},{icon:"🎨",name:"Three.js"}].forEach(t=>{const n=document.createElement("div");n.className="tech-item",n.innerHTML=`
      <span class="tech-icon">${t.icon}</span>
      <span>${t.name}</span>
    `,r.appendChild(n)})}const cy="modulepreload",uy=function(r,e){return new URL(r,e).href},Yh={},fy=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=c(t.map(u=>{if(u=uy(u,n),u in Yh)return;Yh[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(n)for(let _=a.length-1;_>=0;_--){const g=a[_];if(g.href===u&&(!d||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":cy,d||(h.as="script"),h.crossOrigin="",h.href=u,l&&h.setAttribute("nonce",l),document.head.appendChild(h),d)return new Promise((_,g)=>{h.addEventListener("load",_),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},dc=[{id:1,category:"fullstack",tags:["Next.js 13","React","Framer Motion","Tailwind CSS","EmailJS"],emoji:"🌐",github:"#",demo:"https://maltos.dev"},{id:2,category:"robotics",tags:["ROS2","Python","SLAM","LiDAR","Raspberry Pi"],emoji:"🤖",github:"#",demo:"#"},{id:3,category:"ml",tags:["YOLOv8","PyTorch","OpenCV","NVIDIA Jetson","WebSocket"],emoji:"👁️",github:"#",demo:"#"},{id:4,category:"fullstack",tags:["React","D3.js","GraphQL","Docker","K8s"],emoji:"📊",github:"#",demo:"#"},{id:5,category:"fullstack",tags:["Android","Jetpack Compose","Node.js","PostgreSQL","Tailwind CSS"],emoji:"🐜",github:"https://github.com/floragel/Trakant",demo:"https://github.com/floragel/Trakant"},{id:6,category:"ml",tags:["Transformers","BERT","FastAPI","MLflow","Docker"],emoji:"💬",github:"#",demo:"#"}];function hy(){const r=document.getElementById("projects-grid"),e=document.getElementById("project-filters"),t=document.getElementById("project-modal"),n=document.getElementById("modal-content"),i=document.getElementById("modal-close");if(!r||!e||!t||!n||!i)return;function s(l="all"){const c=Sr(),u=Cf[c],d=Pf[c],f=l==="all"?dc:dc.filter(h=>h.category===l);r.innerHTML="",f.forEach(h=>{const _=dc.indexOf(h),g=u[_],p=document.createElement("div");p.className="project-card",p.innerHTML=`
        <div class="project-card-image">
          <div class="project-placeholder">${h.emoji}</div>
          <div class="project-card-overlay">
            <span>${Sa("projects.viewDetails")}</span>
          </div>
        </div>
        <div class="project-card-body">
          <div class="project-card-category">${d[h.category]||h.category}</div>
          <h3 class="project-card-title">${g.title}</h3>
          <p class="project-card-desc">${g.description}</p>
          <div class="project-card-tags">
            ${h.tags.map(m=>`<span class="tag">${m}</span>`).join("")}
          </div>
        </div>
      `,p.addEventListener("click",()=>a(h,_)),r.appendChild(p)}),fy(async()=>{const{gsap:h}=await Promise.resolve().then(()=>ny);return{gsap:h}},void 0,import.meta.url).then(({gsap:h})=>{h.fromTo(r.querySelectorAll(".project-card"),{opacity:0,y:40},{opacity:1,y:0,duration:.5,stagger:.1,ease:"power3.out"})})}e.querySelectorAll(".filter-btn").forEach(l=>{l.addEventListener("click",()=>{e.querySelectorAll(".filter-btn").forEach(u=>u.classList.remove("active")),l.classList.add("active");const c=l.getAttribute("data-filter")||"all";s(c)})});function a(l,c){const u=Sr(),d=Cf[u][c],f=Pf[u];n.innerHTML=`
      <div class="project-placeholder modal-image" style="display:flex;align-items:center;justify-content:center;font-size:4rem;">${l.emoji}</div>
      <div class="project-card-category">${f[l.category]||l.category}</div>
      <h2>${d.title}</h2>
      <p>${d.longDescription}</p>
      <div class="project-card-tags">
        ${l.tags.map(h=>`<span class="tag">${h}</span>`).join("")}
      </div>
      <div class="project-card-links">
        ${l.github!=="#"?`
        <a href="${l.github}" class="project-link" target="_blank">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          ${Sa("projects.sourceCode")}
        </a>`:""}
        ${l.demo!=="#"?`
        <a href="${l.demo}" class="project-link" target="_blank">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          ${Sa("projects.viewDemo")}
        </a>`:""}
      </div>
    `,t.classList.add("active"),document.body.style.overflow="hidden"}i.addEventListener("click",o),t.addEventListener("click",l=>{l.target===t&&o()});function o(){t.classList.remove("active"),document.body.style.overflow=""}document.addEventListener("keydown",l=>{l.key==="Escape"&&o()}),s(),window.addEventListener("languageChanged",()=>{const l=e.querySelector(".filter-btn.active")?.getAttribute("data-filter")||"all";s(l)})}const dy=[{tech:"JavaScript / Canvas",type:"learning",emoji:"📊",link:"#"},{tech:"Python / GPIO",type:"experiment",emoji:"🔊",link:"#"},{tech:"Python / NumPy",type:"learning",emoji:"🧮",link:"#"},{tech:"Node.js / Express",type:"learning",emoji:"🔗",link:"#"},{tech:"Arduino / C++",type:"experiment",emoji:"🏎️",link:"#"},{tech:"PyTorch / CUDA",type:"experiment",emoji:"🎨",link:"#"},{tech:"React / Storybook",type:"learning",emoji:"🧩",link:"#"},{tech:"Python / OpenCV",type:"experiment",emoji:"🚁",link:"#"}];function $h(){const r=document.getElementById("learning-grid");if(!r)return;const e=Sr(),t=Sm[e];r.innerHTML="",dy.forEach((n,i)=>{const s=t[i],a=document.createElement("div");a.className="learning-card",a.innerHTML=`
      <div class="learning-card-header">
        <span class="learning-badge ${n.type}">${n.type==="learning"?Sa("learning.badgeLearning"):Sa("learning.badgeExperiment")}</span>
        <span class="learning-card-icon">${n.emoji}</span>
      </div>
      <h3>${s.title}</h3>
      <p>${s.description}</p>
      <div class="learning-card-footer">
        <span class="learning-card-tech">${n.tech}</span>
      </div>
    `,r.appendChild(a)})}function py(){$h(),window.addEventListener("languageChanged",$h)}const my=[{name:"Frontend",icon:"🎨",skills:[{name:"React / Next.js",level:90},{name:"TypeScript",level:85},{name:"HTML / CSS",level:95},{name:"Three.js / WebGL",level:70}]},{name:"Backend",icon:"⚙️",skills:[{name:"Node.js / Express",level:88},{name:"Python / FastAPI",level:85},{name:"PostgreSQL / MongoDB",level:80},{name:"GraphQL / REST",level:82}]},{name:"Robotique",icon:"🤖",skills:[{name:"ROS / ROS2",level:78},{name:"Arduino / Embedded C",level:82},{name:"Raspberry Pi / Linux",level:85},{name:"CAO / Impression 3D",level:70}]},{name:"Machine Learning",icon:"🧠",skills:[{name:"PyTorch / TensorFlow",level:80},{name:"OpenCV / Vision",level:75},{name:"scikit-learn / Pandas",level:82},{name:"MLOps / Déploiement",level:68}]},{name:"DevOps & Outils",icon:"🛠️",skills:[{name:"Git / GitHub",level:92},{name:"Docker / K8s",level:75},{name:"CI/CD Pipelines",level:72},{name:"Linux / Shell",level:85}]}];function jh(r){const e=Sr();return ym[e][r]||r}function Kh(){const r=document.getElementById("skills-grid");r&&(r.innerHTML="",my.forEach(e=>{const t=document.createElement("div");t.className="skill-category",t.innerHTML=`
      <div class="skill-category-header">
        <div class="skill-category-icon">${e.icon}</div>
        <h3>${jh(e.name)}</h3>
      </div>
      <div class="skill-list">
        ${e.skills.map(n=>`
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">${jh(n.name)}</span>
              <span class="skill-percentage">${n.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" data-width="${n.level}"></div>
            </div>
          </div>
        `).join("")}
      </div>
    `,r.appendChild(t)}),window.dispatchEvent(new CustomEvent("skillsRendered")))}function _y(){Kh(),window.addEventListener("languageChanged",Kh)}function gy(){const r=document.getElementById("contact-form");r&&r.addEventListener("submit",e=>{e.preventDefault();const t=r.querySelector('button[type="submit"]'),n=t.innerHTML;t.innerHTML=`
      <span>Envoi en cours...</span>
      <svg class="spinning" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    `,t.disabled=!0,setTimeout(()=>{t.innerHTML=`
        <span>Message envoyé !</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      `,t.style.background="linear-gradient(135deg, #00d4aa 0%, #00b894 100%)",r.reset(),setTimeout(()=>{t.innerHTML=n,t.style.background="",t.disabled=!1},3e3)},1500)})}function vy(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function xy(r,e,t){return e&&vy(r.prototype,e),r}var on,Yo,qn,_r,gr,Ns,Kp,kr,Ta,Zp,Yi,pi,Jp,Qp=function(){return on||typeof window<"u"&&(on=window.gsap)&&on.registerPlugin&&on},em=1,Rs=[],rt=[],Di=[],Aa=Date.now,Pu=function(e,t){return t},My=function(){var e=Ta.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,rt),i.push.apply(i,Di),rt=n,Di=i,Pu=function(a,o){return t[a](o)}},Mr=function(e,t){return~Di.indexOf(e)&&Di[Di.indexOf(e)+1][t]},wa=function(e){return!!~Zp.indexOf(e)},Sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Mn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ao="scrollLeft",wo="scrollTop",Du=function(){return Yi&&Yi.isPressed||rt.cache++},hl=function(e,t){var n=function i(s){if(s||s===0){em&&(qn.history.scrollRestoration="manual");var a=Yi&&Yi.isPressed;s=i.v=Math.round(s)||(Yi&&Yi.iOS?1:0),e(s),i.cacheID=rt.cache,a&&Pu("ss",s)}else(t||rt.cache!==i.cacheID||Pu("ref"))&&(i.cacheID=rt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},An={s:Ao,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:hl(function(r){return arguments.length?qn.scrollTo(r,$t.sc()):qn.pageXOffset||_r[Ao]||gr[Ao]||Ns[Ao]||0})},$t={s:wo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:An,sc:hl(function(r){return arguments.length?qn.scrollTo(An.sc(),r):qn.pageYOffset||_r[wo]||gr[wo]||Ns[wo]||0})},Pn=function(e,t){return(t&&t._ctx&&t._ctx.selector||on.utils.toArray)(e)[0]||(typeof e=="string"&&on.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Sy=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ar=function(e,t){var n=t.s,i=t.sc;wa(e)&&(e=_r.scrollingElement||gr);var s=rt.indexOf(e),a=i===$t.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+a]||Sn(e,"scroll",Du);var o=rt[s+a],l=o||(rt[s+a]=hl(Mr(e,n),!0)||(wa(e)?i:hl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=on.getProperty(e,"scrollBehavior")==="smooth"),l},Lu=function(e,t,n){var i=e,s=e,a=Aa(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=Aa();g||p-a>l?(s=i,i=_,o=a,a=p):n?i+=_:i=s+(_-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},f=function(_){var g=o,p=s,m=Aa();return(_||_===0)&&_!==i&&u(_),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-g)*1e3};return{update:u,reset:d,getVelocity:f}},ca=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Zh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},tm=function(){Ta=on.core.globals().ScrollTrigger,Ta&&Ta.core&&My()},nm=function(e){return on=e||Qp(),!Yo&&on&&typeof document<"u"&&document.body&&(qn=window,_r=document,gr=_r.documentElement,Ns=_r.body,Zp=[qn,_r,gr,Ns],on.utils.clamp,Jp=on.core.context||function(){},kr="onpointerenter"in Ns?"pointer":"mouse",Kp=Vt.isTouch=qn.matchMedia&&qn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in qn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,pi=Vt.eventTypes=("ontouchstart"in gr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in gr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return em=0},500),tm(),Yo=1),Yo};An.op=$t;rt.cache=0;var Vt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Yo||nm(on)||console.warn("Please gsap.registerPlugin(Observer)"),Ta||tm();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,f=n.onStopDelay,h=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,b=n.onPress,S=n.onRelease,T=n.onRight,A=n.onLeft,w=n.onUp,v=n.onDown,y=n.onChangeX,U=n.onChangeY,R=n.onChange,I=n.onToggleX,k=n.onToggleY,V=n.onHover,z=n.onHoverEnd,B=n.onMove,O=n.ignoreCheck,J=n.isNormalizer,Q=n.onGestureStart,P=n.onGestureEnd,le=n.onWheel,ce=n.onEnable,Be=n.onDisable,Ve=n.onClick,Ye=n.scrollSpeed,j=n.capture,ee=n.allowClicks,re=n.lockAxis,Le=n.onLockAxis;this.target=o=Pn(o)||gr,this.vars=n,h&&(h=on.utils.toArray(h)),i=i||1e-9,s=s||0,_=_||1,Ye=Ye||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(qn.getComputedStyle(Ns).lineHeight)||22);var Ie,Ce,ot,Ee,ke,je,Oe,W=this,L=0,dt=0,et=n.passive||!u&&n.passive!==!1,ze=Ar(o,An),xe=Ar(o,$t),C=ze(),x=xe(),N=~a.indexOf("touch")&&!~a.indexOf("pointer")&&pi[0]==="pointerdown",K=wa(o),Z=o.ownerDocument||_r,Y=[0,0,0],ge=[0,0,0],ae=0,Re=function(){return ae=Aa()},Me=function(Pe,Ze){return(W.event=Pe)&&h&&Sy(Pe.target,h)||Ze&&N&&Pe.pointerType!=="touch"||O&&O(Pe,Ze)},ne=function(){W._vx.reset(),W._vy.reset(),Ce.pause(),d&&d(W)},se=function(){var Pe=W.deltaX=Zh(Y),Ze=W.deltaY=Zh(ge),me=Math.abs(Pe)>=i,He=Math.abs(Ze)>=i;R&&(me||He)&&R(W,Pe,Ze,Y,ge),me&&(T&&W.deltaX>0&&T(W),A&&W.deltaX<0&&A(W),y&&y(W),I&&W.deltaX<0!=L<0&&I(W),L=W.deltaX,Y[0]=Y[1]=Y[2]=0),He&&(v&&W.deltaY>0&&v(W),w&&W.deltaY<0&&w(W),U&&U(W),k&&W.deltaY<0!=dt<0&&k(W),dt=W.deltaY,ge[0]=ge[1]=ge[2]=0),(Ee||ot)&&(B&&B(W),ot&&(p&&ot===1&&p(W),M&&M(W),ot=0),Ee=!1),je&&!(je=!1)&&Le&&Le(W),ke&&(le(W),ke=!1),Ie=0},Se=function(Pe,Ze,me){Y[me]+=Pe,ge[me]+=Ze,W._vx.update(Pe),W._vy.update(Ze),c?Ie||(Ie=requestAnimationFrame(se)):se()},be=function(Pe,Ze){re&&!Oe&&(W.axis=Oe=Math.abs(Pe)>Math.abs(Ze)?"x":"y",je=!0),Oe!=="y"&&(Y[2]+=Pe,W._vx.update(Pe,!0)),Oe!=="x"&&(ge[2]+=Ze,W._vy.update(Ze,!0)),c?Ie||(Ie=requestAnimationFrame(se)):se()},he=function(Pe){if(!Me(Pe,1)){Pe=ca(Pe,u);var Ze=Pe.clientX,me=Pe.clientY,He=Ze-W.x,Fe=me-W.y,We=W.isDragging;W.x=Ze,W.y=me,(We||(He||Fe)&&(Math.abs(W.startX-Ze)>=s||Math.abs(W.startY-me)>=s))&&(ot||(ot=We?2:1),We||(W.isDragging=!0),be(He,Fe))}},Ge=W.onPress=function(ve){Me(ve,1)||ve&&ve.button||(W.axis=Oe=null,Ce.pause(),W.isPressed=!0,ve=ca(ve),L=dt=0,W.startX=W.x=ve.clientX,W.startY=W.y=ve.clientY,W._vx.reset(),W._vy.reset(),Sn(J?o:Z,pi[1],he,et,!0),W.deltaX=W.deltaY=0,b&&b(W))},D=W.onRelease=function(ve){if(!Me(ve,1)){Mn(J?o:Z,pi[1],he,!0);var Pe=!isNaN(W.y-W.startY),Ze=W.isDragging,me=Ze&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),He=ca(ve);!me&&Pe&&(W._vx.reset(),W._vy.reset(),u&&ee&&on.delayedCall(.08,function(){if(Aa()-ae>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(Z.createEvent){var Fe=Z.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,qn,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(Fe)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,d&&Ze&&!J&&Ce.restart(!0),ot&&se(),m&&Ze&&m(W),S&&S(W,me)}},oe=function(Pe){return Pe.touches&&Pe.touches.length>1&&(W.isGesturing=!0)&&Q(Pe,W.isDragging)},ie=function(){return(W.isGesturing=!1)||P(W)},de=function(Pe){if(!Me(Pe)){var Ze=ze(),me=xe();Se((Ze-C)*Ye,(me-x)*Ye,1),C=Ze,x=me,d&&Ce.restart(!0)}},te=function(Pe){if(!Me(Pe)){Pe=ca(Pe,u),le&&(ke=!0);var Ze=(Pe.deltaMode===1?l:Pe.deltaMode===2?qn.innerHeight:1)*_;Se(Pe.deltaX*Ze,Pe.deltaY*Ze,0),d&&!J&&Ce.restart(!0)}},$=function(Pe){if(!Me(Pe)){var Ze=Pe.clientX,me=Pe.clientY,He=Ze-W.x,Fe=me-W.y;W.x=Ze,W.y=me,Ee=!0,d&&Ce.restart(!0),(He||Fe)&&be(He,Fe)}},ye=function(Pe){W.event=Pe,V(W)},Ne=function(Pe){W.event=Pe,z(W)},ct=function(Pe){return Me(Pe)||ca(Pe,u)&&Ve(W)};Ce=W._dc=on.delayedCall(f||.25,ne).pause(),W.deltaX=W.deltaY=0,W._vx=Lu(0,50,!0),W._vy=Lu(0,50,!0),W.scrollX=ze,W.scrollY=xe,W.isDragging=W.isGesturing=W.isPressed=!1,Jp(this),W.enable=function(ve){return W.isEnabled||(Sn(K?Z:o,"scroll",Du),a.indexOf("scroll")>=0&&Sn(K?Z:o,"scroll",de,et,j),a.indexOf("wheel")>=0&&Sn(o,"wheel",te,et,j),(a.indexOf("touch")>=0&&Kp||a.indexOf("pointer")>=0)&&(Sn(o,pi[0],Ge,et,j),Sn(Z,pi[2],D),Sn(Z,pi[3],D),ee&&Sn(o,"click",Re,!0,!0),Ve&&Sn(o,"click",ct),Q&&Sn(Z,"gesturestart",oe),P&&Sn(Z,"gestureend",ie),V&&Sn(o,kr+"enter",ye),z&&Sn(o,kr+"leave",Ne),B&&Sn(o,kr+"move",$)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=Ee=ot=!1,W._vx.reset(),W._vy.reset(),C=ze(),x=xe(),ve&&ve.type&&Ge(ve),ce&&ce(W)),W},W.disable=function(){W.isEnabled&&(Rs.filter(function(ve){return ve!==W&&wa(ve.target)}).length||Mn(K?Z:o,"scroll",Du),W.isPressed&&(W._vx.reset(),W._vy.reset(),Mn(J?o:Z,pi[1],he,!0)),Mn(K?Z:o,"scroll",de,j),Mn(o,"wheel",te,j),Mn(o,pi[0],Ge,j),Mn(Z,pi[2],D),Mn(Z,pi[3],D),Mn(o,"click",Re,!0),Mn(o,"click",ct),Mn(Z,"gesturestart",oe),Mn(Z,"gestureend",ie),Mn(o,kr+"enter",ye),Mn(o,kr+"leave",Ne),Mn(o,kr+"move",$),W.isEnabled=W.isPressed=W.isDragging=!1,Be&&Be(W))},W.kill=W.revert=function(){W.disable();var ve=Rs.indexOf(W);ve>=0&&Rs.splice(ve,1),Yi===W&&(Yi=0)},Rs.push(W),J&&wa(o)&&(Yi=W),W.enable(g)},xy(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Vt.version="3.14.2";Vt.create=function(r){return new Vt(r)};Vt.register=nm;Vt.getAll=function(){return Rs.slice()};Vt.getById=function(r){return Rs.filter(function(e){return e.vars.id===r})[0]};Qp()&&on.registerPlugin(Vt);var we,Ts,it,Tt,Wn,mt,xf,dl,Xa,Ca,_a,Co,pn,bl,Iu,bn,Jh,Qh,As,im,pc,rm,En,Uu,sm,am,ur,Nu,Mf,Fs,Sf,Ra,Fu,mc,Ro=1,mn=Date.now,_c=mn(),ci=0,ga=0,ed=function(e,t,n){var i=Gn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},td=function(e,t){return t&&(!Gn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},yy=function r(){return ga&&requestAnimationFrame(r)},nd=function(){return bl=1},id=function(){return bl=0},yi=function(e){return e},va=function(e){return Math.round(e*1e5)/1e5||0},om=function(){return typeof window<"u"},lm=function(){return we||om()&&(we=window.gsap)&&we.registerPlugin&&we},ts=function(e){return!!~xf.indexOf(e)},cm=function(e){return(e==="Height"?Sf:it["inner"+e])||Wn["client"+e]||mt["client"+e]},um=function(e){return Mr(e,"getBoundingClientRect")||(ts(e)?function(){return Jo.width=it.innerWidth,Jo.height=Sf,Jo}:function(){return Xi(e)})},Ey=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Mr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?cm(s):e["client"+s])||0}},by=function(e,t){return!t||~Di.indexOf(e)?um(e):function(){return Jo}},Ci=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Mr(e,n))?a()-um(e)()[s]:ts(e)?(Wn[n]||mt[n])-cm(i):e[n]-e["offset"+i])},Po=function(e,t){for(var n=0;n<As.length;n+=3)(!t||~t.indexOf(As[n+1]))&&e(As[n],As[n+1],As[n+2])},Gn=function(e){return typeof e=="string"},gn=function(e){return typeof e=="function"},xa=function(e){return typeof e=="number"},zr=function(e){return typeof e=="object"},ua=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},gc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Es=Math.abs,fm="left",hm="top",yf="right",Ef="bottom",Zr="width",Jr="height",Pa="Right",Da="Left",La="Top",Ia="Bottom",Ht="padding",ri="margin",js="Width",bf="Height",Yt="px",si=function(e){return it.getComputedStyle(e)},Ty=function(e){var t=si(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},rd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Xi=function(e,t){var n=t&&si(e)[Iu]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},pl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},dm=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Ay=function(e){return function(t){return we.utils.snap(dm(e),t)}},Tf=function(e){var t=we.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},wy=function(e){return function(t,n){return Tf(dm(e))(t,n.direction)}},Do=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},tn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},en=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Lo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},sd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Io={toggleActions:"play",anticipatePin:0},ml={top:0,left:0,center:.5,bottom:1,right:1},$o=function(e,t){if(Gn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ml?ml[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Uo=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,_=Tt.createElement("div"),g=ts(n)||Mr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?mt:n,M=e.indexOf("start")!==-1,b=M?c:u,S="border-color:"+b+";font-size:"+d+";color:"+b+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(S+=(i===$t?yf:Ef)+":"+(a+parseFloat(f))+"px;"),o&&(S+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=S,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],jo(_,0,i,M),_},jo=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+js]=1,s["border"+o+js]=0,s[n.p]=t+"px",we.set(e,s)},nt=[],Ou={},qa,ad=function(){return mn()-ci>34&&(qa||(qa=requestAnimationFrame(Ki)))},bs=function(){(!En||!En.isPressed||En.startX>mt.clientWidth)&&(rt.cache++,En?qa||(qa=requestAnimationFrame(Ki)):Ki(),ci||is("scrollStart"),ci=mn())},vc=function(){am=it.innerWidth,sm=it.innerHeight},Ma=function(e){rt.cache++,(e===!0||!pn&&!rm&&!Tt.fullscreenElement&&!Tt.webkitFullscreenElement&&(!Uu||am!==it.innerWidth||Math.abs(it.innerHeight-sm)>it.innerHeight*.25))&&dl.restart(!0)},ns={},Cy=[],pm=function r(){return en(qe,"scrollEnd",r)||qr(!0)},is=function(e){return ns[e]&&ns[e].map(function(t){return t()})||Cy},Vn=[],mm=function(e){for(var t=0;t<Vn.length;t+=5)(!e||Vn[t+4]&&Vn[t+4].query===e)&&(Vn[t].style.cssText=Vn[t+1],Vn[t].getBBox&&Vn[t].setAttribute("transform",Vn[t+2]||""),Vn[t+3].uncache=1)},_m=function(){return rt.forEach(function(e){return gn(e)&&++e.cacheID&&(e.rec=e())})},Af=function(e,t){var n;for(bn=0;bn<nt.length;bn++)n=nt[bn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ra=!0,t&&mm(t),t||is("revert")},gm=function(e,t){rt.cache++,(t||!Tn)&&rt.forEach(function(n){return gn(n)&&n.cacheID++&&(n.rec=0)}),Gn(e)&&(it.history.scrollRestoration=Mf=e)},Tn,Qr=0,od,Ry=function(){if(od!==Qr){var e=od=Qr;requestAnimationFrame(function(){return e===Qr&&qr(!0)})}},vm=function(){mt.appendChild(Fs),Sf=!En&&Fs.offsetHeight||it.innerHeight,mt.removeChild(Fs)},ld=function(e){return Xa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},qr=function(e,t){if(Wn=Tt.documentElement,mt=Tt.body,xf=[it,Tt,Wn,mt],ci&&!e&&!Ra){tn(qe,"scrollEnd",pm);return}vm(),Tn=qe.isRefreshing=!0,Ra||_m();var n=is("refreshInit");im&&qe.sort(),t||Af(),rt.forEach(function(i){gn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),nt.slice(0).forEach(function(i){return i.refresh()}),Ra=!1,nt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Fu=1,ld(!0),nt.forEach(function(i){var s=Ci(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),ld(!1),Fu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),rt.forEach(function(i){gn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),gm(Mf,1),dl.pause(),Qr++,Tn=2,Ki(2),nt.forEach(function(i){return gn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Tn=qe.isRefreshing=!1,is("refresh")},Bu=0,Ko=1,Ua,Ki=function(e){if(e===2||!Tn&&!Ra){qe.isUpdating=!0,Ua&&Ua.update(0);var t=nt.length,n=mn(),i=n-_c>=50,s=t&&nt[0].scroll();if(Ko=Bu>s?-1:1,Tn||(Bu=s),i&&(ci&&!bl&&n-ci>200&&(ci=0,is("scrollEnd")),_a=_c,_c=n),Ko<0){for(bn=t;bn-- >0;)nt[bn]&&nt[bn].update(0,i);Ko=1}else for(bn=0;bn<t;bn++)nt[bn]&&nt[bn].update(0,i);qe.isUpdating=!1}qa=0},ku=[fm,hm,Ef,yf,ri+Ia,ri+Pa,ri+La,ri+Da,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Zo=ku.concat([Zr,Jr,"boxSizing","max"+js,"max"+bf,"position",ri,Ht,Ht+La,Ht+Pa,Ht+Ia,Ht+Da]),Py=function(e,t,n){Os(n);var i=e._gsap;if(i.spacerIsNative)Os(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},xc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=ku.length,a=t.style,o=e.style,l;s--;)l=ku[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Ef]=o[yf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Zr]=pl(e,An)+Yt,a[Jr]=pl(e,$t)+Yt,a[Ht]=o[ri]=o[hm]=o[fm]="0",Os(i),o[Zr]=o["max"+js]=n[Zr],o[Jr]=o["max"+bf]=n[Jr],o[Ht]=n[Ht],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Dy=/([A-Z])/g,Os=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(Dy,"-$1").toLowerCase())}},No=function(e){for(var t=Zo.length,n=e.style,i=[],s=0;s<t;s++)i.push(Zo[s],n[Zo[s]]);return i.t=e,i},Ly=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Jo={left:0,top:0},cd=function(e,t,n,i,s,a,o,l,c,u,d,f,h,_){gn(e)&&(e=e(l)),Gn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?$o("0"+e.substr(3),n):0));var g=h?h.time():0,p,m,M;if(h&&h.seek(0),isNaN(e)||(e=+e),xa(e))h&&(e=we.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),o&&jo(o,n,i,!0);else{gn(t)&&(t=t(l));var b=(e||"0").split(" "),S,T,A,w;M=Pn(t,l)||mt,S=Xi(M)||{},(!S||!S.left&&!S.top)&&si(M).display==="none"&&(w=M.style.display,M.style.display="block",S=Xi(M),w?M.style.display=w:M.style.removeProperty("display")),T=$o(b[0],S[i.d]),A=$o(b[1]||"0",n),e=S[i.p]-c[i.p]-u+T+s-A,o&&jo(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var v=e+n,y=a._isStart;p="scroll"+i.d2,jo(a,v,i,y&&v>20||!y&&(d?Math.max(mt[p],Wn[p]):a.parentNode[p])<=v+1),d&&(c=Xi(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Yt))}return h&&M&&(p=Xi(M),h.seek(f),m=Xi(M),h._caScrollDist=p[i.p]-m[i.p],e=e/h._caScrollDist*f),h&&h.seek(g),h?e:Math.round(e)},Iy=/(webkit|moz|length|cssText|inset)/i,ud=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===mt){e._stOrig=s.cssText,o=si(e);for(a in o)!+a&&!Iy.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},xm=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Fo=function(e,t,n){var i={};i[t.p]="+="+n,we.set(e,i)},fd=function(e,t){var n=Ar(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var f=a.tween,h=l.onComplete,_={};c=c||n();var g=xm(n,c,function(){f.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){rt.cache++,a.tween&&Ki()},l.onComplete=function(){a.tween=0,h&&h.call(f)},f=a.tween=we.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},tn(e,"wheel",n.wheelHandler),qe.isTouch&&tn(e,"touchmove",n.wheelHandler),s},qe=(function(){function r(t,n){Ts||r.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Nu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ga){this.update=this.refresh=this.kill=yi;return}n=rd(Gn(n)||xa(n)||n.nodeType?{trigger:n}:n,Io);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,b=s.once,S=s.snap,T=s.pinReparent,A=s.pinSpacer,w=s.containerAnimation,v=s.fastScrollEnd,y=s.preventOverlaps,U=n.horizontal||n.containerAnimation&&n.horizontal!==!1?An:$t,R=!d&&d!==0,I=Pn(n.scroller||it),k=we.core.getCache(I),V=ts(I),z=("pinType"in n?n.pinType:Mr(I,"pinType")||V&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=R&&n.toggleActions.split(" "),J="markers"in n?n.markers:Io.markers,Q=V?0:parseFloat(si(I)["border"+U.p2+js])||0,P=this,le=n.onRefreshInit&&function(){return n.onRefreshInit(P)},ce=Ey(I,V,U),Be=by(I,V),Ve=0,Ye=0,j=0,ee=Ar(I,U),re,Le,Ie,Ce,ot,Ee,ke,je,Oe,W,L,dt,et,ze,xe,C,x,N,K,Z,Y,ge,ae,Re,Me,ne,se,Se,be,he,Ge,D,oe,ie,de,te,$,ye,Ne;if(P._startClamp=P._endClamp=!1,P._dir=U,p*=45,P.scroller=I,P.scroll=w?w.time.bind(w):ee,Ce=ee(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(im=1,n.refreshPriority===-9999&&(Ua=P)),k.tweenScroll=k.tweenScroll||{top:fd(I,$t),left:fd(I,An)},P.tweenTo=re=k.tweenScroll[U.p],P.scrubDuration=function(me){oe=xa(me)&&me,oe?D?D.duration(me):D=we.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:oe,paused:!0,onComplete:function(){return m&&m(P)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(d),he=0,l||(l=i.vars.id)),S&&((!zr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in mt.style&&we.set(V?[mt,Wn]:I,{scrollBehavior:"auto"}),rt.forEach(function(me){return gn(me)&&me.target===(V?Tt.scrollingElement||Wn:I)&&(me.smooth=!1)}),Ie=gn(S.snapTo)?S.snapTo:S.snapTo==="labels"?Ay(i):S.snapTo==="labelsDirectional"?wy(i):S.directional!==!1?function(me,He){return Tf(S.snapTo)(me,mn()-Ye<500?0:He.direction)}:we.utils.snap(S.snapTo),ie=S.duration||{min:.1,max:2},ie=zr(ie)?Ca(ie.min,ie.max):Ca(ie,ie),de=we.delayedCall(S.delay||oe/2||.1,function(){var me=ee(),He=mn()-Ye<500,Fe=re.tween;if((He||Math.abs(P.getVelocity())<10)&&!Fe&&!bl&&Ve!==me){var We=(me-Ee)/ze,Ft=i&&!R?i.totalProgress():We,$e=He?0:(Ft-Ge)/(mn()-_a)*1e3||0,wt=we.utils.clamp(-We,1-We,Es($e/2)*$e/.185),Wt=We+(S.inertia===!1?0:wt),Ct,_t,pt=S,cn=pt.onStart,bt=pt.onInterrupt,un=pt.onComplete;if(Ct=Ie(Wt,P),xa(Ct)||(Ct=Wt),_t=Math.max(0,Math.round(Ee+Ct*ze)),me<=ke&&me>=Ee&&_t!==me){if(Fe&&!Fe._initted&&Fe.data<=Es(_t-me))return;S.inertia===!1&&(wt=Ct-We),re(_t,{duration:ie(Es(Math.max(Es(Wt-Ft),Es(Ct-Ft))*.185/$e/.05||0)),ease:S.ease||"power3",data:Es(_t-me),onInterrupt:function(){return de.restart(!0)&&bt&&bt(P)},onComplete:function(){P.update(),Ve=ee(),i&&!R&&(D?D.resetTo("totalProgress",Ct,i._tTime/i._tDur):i.progress(Ct)),he=Ge=i&&!R?i.totalProgress():P.progress,M&&M(P),un&&un(P)}},me,wt*ze,_t-me-wt*ze),cn&&cn(P,re.tween)}}else P.isActive&&Ve!==me&&de.restart(!0)}).pause()),l&&(Ou[l]=P),f=P.trigger=Pn(f||h!==!0&&h),Ne=f&&f._gsap&&f._gsap.stRevert,Ne&&(Ne=Ne(P)),h=h===!0?f:Pn(h),Gn(o)&&(o={targets:f,className:o}),h&&(_===!1||_===ri||(_=!_&&h.parentNode&&h.parentNode.style&&si(h.parentNode).display==="flex"?!1:Ht),P.pin=h,Le=we.core.getCache(h),Le.spacer?xe=Le.pinState:(A&&(A=Pn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Le.spacerIsNative=!!A,A&&(Le.spacerState=No(A))),Le.spacer=N=A||Tt.createElement("div"),N.classList.add("pin-spacer"),l&&N.classList.add("pin-spacer-"+l),Le.pinState=xe=No(h)),n.force3D!==!1&&we.set(h,{force3D:!0}),P.spacer=N=Le.spacer,be=si(h),Re=be[_+U.os2],Z=we.getProperty(h),Y=we.quickSetter(h,U.a,Yt),xc(h,N,be),x=No(h)),J){dt=zr(J)?rd(J,sd):sd,W=Uo("scroller-start",l,I,U,dt,0),L=Uo("scroller-end",l,I,U,dt,0,W),K=W["offset"+U.op.d2];var ct=Pn(Mr(I,"content")||I);je=this.markerStart=Uo("start",l,ct,U,dt,K,0,w),Oe=this.markerEnd=Uo("end",l,ct,U,dt,K,0,w),w&&(ye=we.quickSetter([je,Oe],U.a,Yt)),!z&&!(Di.length&&Mr(I,"fixedMarkers")===!0)&&(Ty(V?mt:I),we.set([W,L],{force3D:!0}),ne=we.quickSetter(W,U.a,Yt),Se=we.quickSetter(L,U.a,Yt))}if(w){var ve=w.vars.onUpdate,Pe=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){P.update(0,0,1),ve&&ve.apply(w,Pe||[])})}if(P.previous=function(){return nt[nt.indexOf(P)-1]},P.next=function(){return nt[nt.indexOf(P)+1]},P.revert=function(me,He){if(!He)return P.kill(!0);var Fe=me!==!1||!P.enabled,We=pn;Fe!==P.isReverted&&(Fe&&(te=Math.max(ee(),P.scroll.rec||0),j=P.progress,$=i&&i.progress()),je&&[je,Oe,W,L].forEach(function(Ft){return Ft.style.display=Fe?"none":"block"}),Fe&&(pn=P,P.update(Fe)),h&&(!T||!P.isActive)&&(Fe?Py(h,N,xe):xc(h,N,si(h),Me)),Fe||P.update(Fe),pn=We,P.isReverted=Fe)},P.refresh=function(me,He,Fe,We){if(!((pn||!P.enabled)&&!He)){if(h&&me&&ci){tn(r,"scrollEnd",pm);return}!Tn&&le&&le(P),pn=P,re.tween&&!Fe&&(re.tween.kill(),re.tween=0),D&&D.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Te){return Te.vars.immediateRender&&Te.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ft=ce(),$e=Be(),wt=w?w.duration():Ci(I,U),Wt=ze<=.01||!ze,Ct=0,_t=We||0,pt=zr(Fe)?Fe.end:n.end,cn=n.endTrigger||f,bt=zr(Fe)?Fe.start:n.start||(n.start===0||!f?0:h?"0 0":"0 100%"),un=P.pinnedContainer=n.pinnedContainer&&Pn(n.pinnedContainer,P),Qn=f&&Math.max(0,nt.indexOf(P))||0,Xt=Qn,qt,Zt,Fi,ss,E,F,q,H,G,ue,pe,fe,Ae;for(J&&zr(Fe)&&(fe=we.getProperty(W,U.p),Ae=we.getProperty(L,U.p));Xt-- >0;)F=nt[Xt],F.end||F.refresh(0,1)||(pn=P),q=F.pin,q&&(q===f||q===h||q===un)&&!F.isReverted&&(ue||(ue=[]),ue.unshift(F),F.revert(!0,!0)),F!==nt[Xt]&&(Qn--,Xt--);for(gn(bt)&&(bt=bt(P)),bt=ed(bt,"start",P),Ee=cd(bt,f,Ft,U,ee(),je,W,P,$e,Q,z,wt,w,P._startClamp&&"_startClamp")||(h?-.001:0),gn(pt)&&(pt=pt(P)),Gn(pt)&&!pt.indexOf("+=")&&(~pt.indexOf(" ")?pt=(Gn(bt)?bt.split(" ")[0]:"")+pt:(Ct=$o(pt.substr(2),Ft),pt=Gn(bt)?bt:(w?we.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Ee):Ee)+Ct,cn=f)),pt=ed(pt,"end",P),ke=Math.max(Ee,cd(pt||(cn?"100% 0":wt),cn,Ft,U,ee()+Ct,Oe,L,P,$e,Q,z,wt,w,P._endClamp&&"_endClamp"))||-.001,Ct=0,Xt=Qn;Xt--;)F=nt[Xt]||{},q=F.pin,q&&F.start-F._pinPush<=Ee&&!w&&F.end>0&&(qt=F.end-(P._startClamp?Math.max(0,F.start):F.start),(q===f&&F.start-F._pinPush<Ee||q===un)&&isNaN(bt)&&(Ct+=qt*(1-F.progress)),q===h&&(_t+=qt));if(Ee+=Ct,ke+=Ct,P._startClamp&&(P._startClamp+=Ct),P._endClamp&&!Tn&&(P._endClamp=ke||-.001,ke=Math.min(ke,Ci(I,U))),ze=ke-Ee||(Ee-=.01)&&.001,Wt&&(j=we.utils.clamp(0,1,we.utils.normalize(Ee,ke,te))),P._pinPush=_t,je&&Ct&&(qt={},qt[U.a]="+="+Ct,un&&(qt[U.p]="-="+ee()),we.set([je,Oe],qt)),h&&!(Fu&&P.end>=Ci(I,U)))qt=si(h),ss=U===$t,Fi=ee(),ge=parseFloat(Z(U.a))+_t,!wt&&ke>1&&(pe=(V?Tt.scrollingElement||Wn:I).style,pe={style:pe,value:pe["overflow"+U.a.toUpperCase()]},V&&si(mt)["overflow"+U.a.toUpperCase()]!=="scroll"&&(pe.style["overflow"+U.a.toUpperCase()]="scroll")),xc(h,N,qt),x=No(h),Zt=Xi(h,!0),H=z&&Ar(I,ss?An:$t)(),_?(Me=[_+U.os2,ze+_t+Yt],Me.t=N,Xt=_===Ht?pl(h,U)+ze+_t:0,Xt&&(Me.push(U.d,Xt+Yt),N.style.flexBasis!=="auto"&&(N.style.flexBasis=Xt+Yt)),Os(Me),un&&nt.forEach(function(Te){Te.pin===un&&Te.vars.pinSpacing!==!1&&(Te._subPinOffset=!0)}),z&&ee(te)):(Xt=pl(h,U),Xt&&N.style.flexBasis!=="auto"&&(N.style.flexBasis=Xt+Yt)),z&&(E={top:Zt.top+(ss?Fi-Ee:H)+Yt,left:Zt.left+(ss?H:Fi-Ee)+Yt,boxSizing:"border-box",position:"fixed"},E[Zr]=E["max"+js]=Math.ceil(Zt.width)+Yt,E[Jr]=E["max"+bf]=Math.ceil(Zt.height)+Yt,E[ri]=E[ri+La]=E[ri+Pa]=E[ri+Ia]=E[ri+Da]="0",E[Ht]=qt[Ht],E[Ht+La]=qt[Ht+La],E[Ht+Pa]=qt[Ht+Pa],E[Ht+Ia]=qt[Ht+Ia],E[Ht+Da]=qt[Ht+Da],C=Ly(xe,E,T),Tn&&ee(0)),i?(G=i._initted,pc(1),i.render(i.duration(),!0,!0),ae=Z(U.a)-ge+ze+_t,se=Math.abs(ze-ae)>1,z&&se&&C.splice(C.length-2,2),i.render(0,!0,!0),G||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),pc(0)):ae=ze,pe&&(pe.value?pe.style["overflow"+U.a.toUpperCase()]=pe.value:pe.style.removeProperty("overflow-"+U.a));else if(f&&ee()&&!w)for(Zt=f.parentNode;Zt&&Zt!==mt;)Zt._pinOffset&&(Ee-=Zt._pinOffset,ke-=Zt._pinOffset),Zt=Zt.parentNode;ue&&ue.forEach(function(Te){return Te.revert(!1,!0)}),P.start=Ee,P.end=ke,Ce=ot=Tn?te:ee(),!w&&!Tn&&(Ce<te&&ee(te),P.scroll.rec=0),P.revert(!1,!0),Ye=mn(),de&&(Ve=-1,de.restart(!0)),pn=0,i&&R&&(i._initted||$)&&i.progress()!==$&&i.progress($||0,!0).render(i.time(),!0,!0),(Wt||j!==P.progress||w||g||i&&!i._initted)&&(i&&!R&&(i._initted||j||i.vars.immediateRender!==!1)&&i.totalProgress(w&&Ee<-.001&&!j?we.utils.normalize(Ee,ke,0):j,!0),P.progress=Wt||(Ce-Ee)/ze===j?0:j),h&&_&&(N._pinOffset=Math.round(P.progress*ae)),D&&D.invalidate(),isNaN(fe)||(fe-=we.getProperty(W,U.p),Ae-=we.getProperty(L,U.p),Fo(W,U,fe),Fo(je,U,fe-(We||0)),Fo(L,U,Ae),Fo(Oe,U,Ae-(We||0))),Wt&&!Tn&&P.update(),u&&!Tn&&!et&&(et=!0,u(P),et=!1)}},P.getVelocity=function(){return(ee()-ot)/(mn()-_a)*1e3||0},P.endAnimation=function(){ua(P.callbackAnimation),i&&(D?D.progress(1):i.paused()?R||ua(i,P.direction<0,1):ua(i,i.reversed()))},P.labelToScroll=function(me){return i&&i.labels&&(Ee||P.refresh()||Ee)+i.labels[me]/i.duration()*ze||0},P.getTrailing=function(me){var He=nt.indexOf(P),Fe=P.direction>0?nt.slice(0,He).reverse():nt.slice(He+1);return(Gn(me)?Fe.filter(function(We){return We.vars.preventOverlaps===me}):Fe).filter(function(We){return P.direction>0?We.end<=Ee:We.start>=ke})},P.update=function(me,He,Fe){if(!(w&&!Fe&&!me)){var We=Tn===!0?te:P.scroll(),Ft=me?0:(We-Ee)/ze,$e=Ft<0?0:Ft>1?1:Ft||0,wt=P.progress,Wt,Ct,_t,pt,cn,bt,un,Qn;if(He&&(ot=Ce,Ce=w?ee():We,S&&(Ge=he,he=i&&!R?i.totalProgress():$e)),p&&h&&!pn&&!Ro&&ci&&(!$e&&Ee<We+(We-ot)/(mn()-_a)*p?$e=1e-4:$e===1&&ke>We+(We-ot)/(mn()-_a)*p&&($e=.9999)),$e!==wt&&P.enabled){if(Wt=P.isActive=!!$e&&$e<1,Ct=!!wt&&wt<1,bt=Wt!==Ct,cn=bt||!!$e!=!!wt,P.direction=$e>wt?1:-1,P.progress=$e,cn&&!pn&&(_t=$e&&!wt?0:$e===1?1:wt===1?2:3,R&&(pt=!bt&&O[_t+1]!=="none"&&O[_t+1]||O[_t],Qn=i&&(pt==="complete"||pt==="reset"||pt in i))),y&&(bt||Qn)&&(Qn||d||!i)&&(gn(y)?y(P):P.getTrailing(y).forEach(function(Fi){return Fi.endAnimation()})),R||(D&&!pn&&!Ro?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",$e,i._tTime/i._tDur):(D.vars.totalProgress=$e,D.invalidate().restart())):i&&i.totalProgress($e,!!(pn&&(Ye||me)))),h){if(me&&_&&(N.style[_+U.os2]=Re),!z)Y(va(ge+ae*$e));else if(cn){if(un=!me&&$e>wt&&ke+1>We&&We+1>=Ci(I,U),T)if(!me&&(Wt||un)){var Xt=Xi(h,!0),qt=We-Ee;ud(h,mt,Xt.top+(U===$t?qt:0)+Yt,Xt.left+(U===$t?0:qt)+Yt)}else ud(h,N);Os(Wt||un?C:x),se&&$e<1&&Wt||Y(ge+($e===1&&!un?ae:0))}}S&&!re.tween&&!pn&&!Ro&&de.restart(!0),o&&(bt||b&&$e&&($e<1||!mc))&&Xa(o.targets).forEach(function(Fi){return Fi.classList[Wt||b?"add":"remove"](o.className)}),a&&!R&&!me&&a(P),cn&&!pn?(R&&(Qn&&(pt==="complete"?i.pause().totalProgress(1):pt==="reset"?i.restart(!0).pause():pt==="restart"?i.restart(!0):i[pt]()),a&&a(P)),(bt||!mc)&&(c&&bt&&gc(P,c),B[_t]&&gc(P,B[_t]),b&&($e===1?P.kill(!1,1):B[_t]=0),bt||(_t=$e===1?1:3,B[_t]&&gc(P,B[_t]))),v&&!Wt&&Math.abs(P.getVelocity())>(xa(v)?v:2500)&&(ua(P.callbackAnimation),D?D.progress(1):ua(i,pt==="reverse"?1:!$e,1))):R&&a&&!pn&&a(P)}if(Se){var Zt=w?We/w.duration()*(w._caScrollDist||0):We;ne(Zt+(W._isFlipped?1:0)),Se(Zt)}ye&&ye(-We/w.duration()*(w._caScrollDist||0))}},P.enable=function(me,He){P.enabled||(P.enabled=!0,tn(I,"resize",Ma),V||tn(I,"scroll",bs),le&&tn(r,"refreshInit",le),me!==!1&&(P.progress=j=0,Ce=ot=Ve=ee()),He!==!1&&P.refresh())},P.getTween=function(me){return me&&re?re.tween:D},P.setPositions=function(me,He,Fe,We){if(w){var Ft=w.scrollTrigger,$e=w.duration(),wt=Ft.end-Ft.start;me=Ft.start+wt*me/$e,He=Ft.start+wt*He/$e}P.refresh(!1,!1,{start:td(me,Fe&&!!P._startClamp),end:td(He,Fe&&!!P._endClamp)},We),P.update()},P.adjustPinSpacing=function(me){if(Me&&me){var He=Me.indexOf(U.d)+1;Me[He]=parseFloat(Me[He])+me+Yt,Me[1]=parseFloat(Me[1])+me+Yt,Os(Me)}},P.disable=function(me,He){if(me!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,He||D&&D.pause(),te=0,Le&&(Le.uncache=1),le&&en(r,"refreshInit",le),de&&(de.pause(),re.tween&&re.tween.kill()&&(re.tween=0)),!V)){for(var Fe=nt.length;Fe--;)if(nt[Fe].scroller===I&&nt[Fe]!==P)return;en(I,"resize",Ma),V||en(I,"scroll",bs)}},P.kill=function(me,He){P.disable(me,He),D&&!He&&D.kill(),l&&delete Ou[l];var Fe=nt.indexOf(P);Fe>=0&&nt.splice(Fe,1),Fe===bn&&Ko>0&&bn--,Fe=0,nt.forEach(function(We){return We.scroller===P.scroller&&(Fe=1)}),Fe||Tn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,me&&i.revert({kill:!1}),He||i.kill()),je&&[je,Oe,W,L].forEach(function(We){return We.parentNode&&We.parentNode.removeChild(We)}),Ua===P&&(Ua=0),h&&(Le&&(Le.uncache=1),Fe=0,nt.forEach(function(We){return We.pin===h&&Fe++}),Fe||(Le.spacer=0)),n.onKill&&n.onKill(P)},nt.push(P),P.enable(!1,!1),Ne&&Ne(P),i&&i.add&&!ze){var Ze=P.update;P.update=function(){P.update=Ze,rt.cache++,Ee||ke||P.refresh()},we.delayedCall(.01,P.update),ze=.01,Ee=ke=0}else P.refresh();h&&Ry()},r.register=function(n){return Ts||(we=n||lm(),om()&&window.document&&r.enable(),Ts=ga),Ts},r.defaults=function(n){if(n)for(var i in n)Io[i]=n[i];return Io},r.disable=function(n,i){ga=0,nt.forEach(function(a){return a[i?"kill":"disable"](n)}),en(it,"wheel",bs),en(Tt,"scroll",bs),clearInterval(Co),en(Tt,"touchcancel",yi),en(mt,"touchstart",yi),Do(en,Tt,"pointerdown,touchstart,mousedown",nd),Do(en,Tt,"pointerup,touchend,mouseup",id),dl.kill(),Po(en);for(var s=0;s<rt.length;s+=3)Lo(en,rt[s],rt[s+1]),Lo(en,rt[s],rt[s+2])},r.enable=function(){if(it=window,Tt=document,Wn=Tt.documentElement,mt=Tt.body,we&&(Xa=we.utils.toArray,Ca=we.utils.clamp,Nu=we.core.context||yi,pc=we.core.suppressOverwrites||yi,Mf=it.history.scrollRestoration||"auto",Bu=it.pageYOffset||0,we.core.globals("ScrollTrigger",r),mt)){ga=1,Fs=document.createElement("div"),Fs.style.height="100vh",Fs.style.position="absolute",vm(),yy(),Vt.register(we),r.isTouch=Vt.isTouch,ur=Vt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Uu=Vt.isTouch===1,tn(it,"wheel",bs),xf=[it,Tt,Wn,mt],we.matchMedia?(r.matchMedia=function(c){var u=we.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},we.addEventListener("matchMediaInit",function(){_m(),Af()}),we.addEventListener("matchMediaRevert",function(){return mm()}),we.addEventListener("matchMedia",function(){qr(0,1),is("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return vc(),vc})):console.warn("Requires GSAP 3.11.0 or later"),vc(),tn(Tt,"scroll",bs);var n=mt.hasAttribute("style"),i=mt.style,s=i.borderTopStyle,a=we.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Xi(mt),$t.m=Math.round(o.top+$t.sc())||0,An.m=Math.round(o.left+An.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(mt.setAttribute("style",""),mt.removeAttribute("style")),Co=setInterval(ad,250),we.delayedCall(.5,function(){return Ro=0}),tn(Tt,"touchcancel",yi),tn(mt,"touchstart",yi),Do(tn,Tt,"pointerdown,touchstart,mousedown",nd),Do(tn,Tt,"pointerup,touchend,mouseup",id),Iu=we.utils.checkPrefix("transform"),Zo.push(Iu),Ts=mn(),dl=we.delayedCall(.2,qr).pause(),As=[Tt,"visibilitychange",function(){var c=it.innerWidth,u=it.innerHeight;Tt.hidden?(Jh=c,Qh=u):(Jh!==c||Qh!==u)&&Ma()},Tt,"DOMContentLoaded",qr,it,"load",qr,it,"resize",Ma],Po(tn),nt.forEach(function(c){return c.enable(0,1)}),l=0;l<rt.length;l+=3)Lo(en,rt[l],rt[l+1]),Lo(en,rt[l],rt[l+2])}},r.config=function(n){"limitCallbacks"in n&&(mc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Co)||(Co=i)&&setInterval(ad,i),"ignoreMobileResize"in n&&(Uu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Po(en)||Po(tn,n.autoRefreshEvents||"none"),rm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Pn(n),a=rt.indexOf(s),o=ts(s);~a&&rt.splice(a,o?6:2),i&&(o?Di.unshift(it,i,mt,i,Wn,i):Di.unshift(s,i))},r.clearMatchMedia=function(n){nt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Gn(n)?Pn(n):n).getBoundingClientRect(),o=a[s?Zr:Jr]*i||0;return s?a.right-o>0&&a.left+o<it.innerWidth:a.bottom-o>0&&a.top+o<it.innerHeight},r.positionInViewport=function(n,i,s){Gn(n)&&(n=Pn(n));var a=n.getBoundingClientRect(),o=a[s?Zr:Jr],l=i==null?o/2:i in ml?ml[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/it.innerWidth:(a.top+l)/it.innerHeight},r.killAll=function(n){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ns.killAll||[];ns={},i.forEach(function(s){return s()})}},r})();qe.version="3.14.2";qe.saveStyles=function(r){return r?Xa(r).forEach(function(e){if(e&&e.style){var t=Vn.indexOf(e);t>=0&&Vn.splice(t,5),Vn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),Nu())}}):Vn};qe.revert=function(r,e){return Af(!r,e)};qe.create=function(r,e){return new qe(r,e)};qe.refresh=function(r){return r?Ma(!0):(Ts||qe.register())&&qr(!0)};qe.update=function(r){return++rt.cache&&Ki(r===!0?2:0)};qe.clearScrollMemory=gm;qe.maxScroll=function(r,e){return Ci(r,e?An:$t)};qe.getScrollFunc=function(r,e){return Ar(Pn(r),e?An:$t)};qe.getById=function(r){return Ou[r]};qe.getAll=function(){return nt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};qe.isScrolling=function(){return!!ci};qe.snapDirectional=Tf;qe.addEventListener=function(r,e){var t=ns[r]||(ns[r]=[]);~t.indexOf(e)||t.push(e)};qe.removeEventListener=function(r,e){var t=ns[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],f=[],h=we.delayedCall(i,function(){u(d,f),d=[],f=[]}).pause();return function(_){d.length||h.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&gn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return gn(s)&&(s=s(),tn(qe,"refresh",function(){return s=e.batchMax()})),Xa(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(qe.create(c))}),t};var hd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Mc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Vt.isTouch?" pinch-zoom":""):"none",e===Wn&&r(mt,t)},Oo={auto:1,scroll:1},Uy=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||we.core.getCache(s),o=mn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Oo[(l=si(s)).overflowY]||Oo[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ts(s)&&(Oo[(l=si(s)).overflowY]||Oo[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Mm=function(e,t,n,i){return Vt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Uy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&tn(Tt,Vt.eventTypes[0],pd,!1,!0)},onDisable:function(){return en(Tt,Vt.eventTypes[0],pd,!0)}})},Ny=/(input|label|select|textarea)/i,dd,pd=function(e){var t=Ny.test(e.target.tagName);(t||dd)&&(e._gsapAllow=!0,dd=t)},Fy=function(e){zr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Pn(e.target)||Wn,u=we.core.globals().ScrollSmoother,d=u&&u.get(),f=ur&&(e.content&&Pn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Ar(c,$t),_=Ar(c,An),g=1,p=(Vt.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,m=0,M=gn(i)?function(){return i(o)}:function(){return i||2.8},b,S,T=Mm(c,e.type,!0,s),A=function(){return S=!1},w=yi,v=yi,y=function(){l=Ci(c,$t),v=Ca(ur?1:0,l),n&&(w=Ca(0,Ci(c,An))),b=Qr},U=function(){f._gsap.y=va(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},R=function(){if(S){requestAnimationFrame(A);var J=va(o.deltaY/2),Q=v(h.v-J);if(f&&Q!==h.v+h.offset){h.offset=Q-h.v;var P=va((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",h.cacheID=rt.cache,Ki()}return!0}h.offset&&U(),S=!0},I,k,V,z,B=function(){y(),I.isActive()&&I.vars.scrollY>l&&(h()>l?I.progress(1)&&h(l):I.resetTo("scrollY",l))};return f&&we.set(f,{y:"+=0"}),e.ignoreCheck=function(O){return ur&&O.type==="touchmove"&&R()||g>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){S=!1;var O=g;g=va((it.visualViewport&&it.visualViewport.scale||1)/p),I.pause(),O!==g&&Mc(c,g>1.01?!0:n?!1:"x"),k=_(),V=h(),y(),b=Qr},e.onRelease=e.onGestureStart=function(O,J){if(h.offset&&U(),!J)z.restart(!0);else{rt.cache++;var Q=M(),P,le;n&&(P=_(),le=P+Q*.05*-O.velocityX/.227,Q*=hd(_,P,le,Ci(c,An)),I.vars.scrollX=w(le)),P=h(),le=P+Q*.05*-O.velocityY/.227,Q*=hd(h,P,le,Ci(c,$t)),I.vars.scrollY=v(le),I.invalidate().duration(Q).play(.01),(ur&&I.vars.scrollY>=l||P>=l-1)&&we.to({},{onUpdate:B,duration:Q})}a&&a(O)},e.onWheel=function(){I._ts&&I.pause(),mn()-m>1e3&&(b=0,m=mn())},e.onChange=function(O,J,Q,P,le){if(Qr!==b&&y(),J&&n&&_(w(P[2]===J?k+(O.startX-O.x):_()+J-P[1])),Q){h.offset&&U();var ce=le[2]===Q,Be=ce?V+O.startY-O.y:h()+Q-le[1],Ve=v(Be);ce&&Be!==Ve&&(V+=Ve-Be),h(Ve)}(Q||J)&&Ki()},e.onEnable=function(){Mc(c,n?!1:"x"),qe.addEventListener("refresh",B),tn(it,"resize",B),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=_.smooth=!1),T.enable()},e.onDisable=function(){Mc(c,!0),en(it,"resize",B),qe.removeEventListener("refresh",B),T.kill()},e.lockAxis=e.lockAxis!==!1,o=new Vt(e),o.iOS=ur,ur&&!h()&&h(1),ur&&we.ticker.add(yi),z=o._dc,I=we.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:xm(h,h(),function(){return I.pause()})},onUpdate:Ki,onComplete:z.vars.onComplete}),o};qe.sort=function(r){if(gn(r))return nt.sort(r);var e=it.pageYOffset||0;return qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+it.innerHeight}),nt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};qe.observe=function(r){return new Vt(r)};qe.normalizeScroll=function(r){if(typeof r>"u")return En;if(r===!0&&En)return En.enable();if(r===!1){En&&En.kill(),En=r;return}var e=r instanceof Vt?r:Fy(r);return En&&En.target===e.target&&En.kill(),ts(e.target)&&(En=e),e};qe.core={_getVelocityProp:Lu,_inputObserver:Mm,_scrollers:rt,_proxies:Di,bridge:{ss:function(){ci||is("scrollStart"),ci=mn()},ref:function(){return pn}}};lm()&&we.registerPlugin(qe);At.registerPlugin(qe);function Oy(){By(),ky(),zy(),Vy(),Gy()}function By(){const r=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("revealed"),r.unobserve(t.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".reveal").forEach(e=>r.observe(e)),setInterval(()=>{document.querySelectorAll(".reveal:not(.revealed)").forEach(e=>r.observe(e))},1e3)}function ky(){At.utils.toArray(".section-header").forEach(r=>{At.from(r.querySelector(".section-tag"),{scrollTrigger:{trigger:r,start:"top 80%",end:"top 30%",scrub:1},y:30,opacity:0}),At.from(r.querySelector(".section-title"),{scrollTrigger:{trigger:r,start:"top 80%",end:"top 40%",scrub:1},y:50,opacity:0}),At.from(r.querySelector(".section-subtitle"),{scrollTrigger:{trigger:r,start:"top 75%",end:"top 35%",scrub:1},y:30,opacity:0})}),At.fromTo(".highlight",{opacity:0,x:-50},{scrollTrigger:{trigger:".about-highlights",start:"top 80%"},opacity:1,x:0,duration:.8,stagger:.2,ease:"power3.out"})}function zy(){const r=document.getElementById("cursor"),e=document.getElementById("cursor-follower");if(!r||!e)return;if("ontouchstart"in window){r.style.display="none",e.style.display="none";return}let t=0,n=0,i=0,s=0;document.addEventListener("mousemove",l=>{i=l.clientX,s=l.clientY,r.style.transform=`translate(${l.clientX-4}px, ${l.clientY-4}px)`});function a(){t+=(i-t)*.15,n+=(s-n)*.15,e.style.transform=`translate(${t-18}px, ${n-18}px)`,requestAnimationFrame(a)}a(),document.querySelectorAll("a, button, .project-card, .tech-item, .highlight, .learning-card").forEach(l=>{l.addEventListener("mouseenter",()=>{r.classList.add("hovering"),e.classList.add("hovering")}),l.addEventListener("mouseleave",()=>{r.classList.remove("hovering"),e.classList.remove("hovering")})})}function md(){qe.getAll().forEach(r=>{r.trigger&&r.trigger.classList?.contains("skill-progress")&&r.kill()}),At.utils.toArray(".skill-progress").forEach(r=>{const e=r.getAttribute("data-width");At.set(r,{width:0}),qe.create({trigger:r,start:"top 85%",onEnter:()=>{At.to(r,{width:e+"%",duration:1.5,ease:"power3.out"})},once:!0})})}function Vy(){md(),window.addEventListener("skillsRendered",()=>{requestAnimationFrame(md)})}function Gy(){qe.create({trigger:".tech-grid",start:"top 80%",onEnter:()=>{At.fromTo(".tech-item",{opacity:0,y:30},{opacity:1,y:0,duration:.5,stagger:.05,ease:"power3.out"})},once:!0}),qe.create({trigger:".learning-grid",start:"top 80%",onEnter:()=>{At.fromTo(".learning-card",{opacity:0,y:40},{opacity:1,y:0,duration:.6,stagger:.1,ease:"power3.out"})},once:!0}),qe.create({trigger:".skills-grid",start:"top 80%",onEnter:()=>{At.fromTo(".skill-category",{opacity:0,y:50},{opacity:1,y:0,duration:.7,stagger:.12,ease:"power3.out"})},once:!0}),qe.create({trigger:".contact-grid",start:"top 80%",onEnter:()=>{At.fromTo(".contact-card",{opacity:0,x:-40},{opacity:1,x:0,duration:.6,stagger:.15,ease:"power3.out"}),At.fromTo(".contact-form",{opacity:0,x:40},{opacity:1,x:0,duration:.8,ease:"power3.out"})},once:!0}),qe.create({trigger:"#about",start:"top 90%",onEnter:()=>{At.to("#scroll-indicator",{opacity:0,duration:.5})}})}document.addEventListener("DOMContentLoaded",()=>{bm(),oy(),iy(),ly(),hy(),py(),_y(),gy(),Oy();const r=document.getElementById("current-year");r&&(r.textContent=new Date().getFullYear().toString())});
