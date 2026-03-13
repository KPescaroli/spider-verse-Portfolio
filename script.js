const DICTIONARY = {
  pt: {
    "intro.kicker": "Portfolio Protocol v2.099",
    "intro.title": "SPIDER-VERSE EXPERIENCE",
    "nav.home": "Home",
    "nav.characters": "Personagens",
    "nav.multiverse": "Multiverso",
    "nav.gallery": "Galeria",
    "nav.about": "Sobre",
    "nav.contact": "Contato",
    "hero.label": "Showcase Cinematográfico de Front-end",
    "hero.title": "SPIDER-VERSE EXPERIENCE",
    "hero.description": "Um projeto de portfólio de alto impacto com Three.js, GSAP e interface futurista, combinando narrativa visual, 3D e microinterações profissionais.",
    "hero.cta": "Entrar no Multiverso",
    "characters.kicker": "Arquivo de Personagens",
    "characters.title": "Personagens em destaque",
    "characters.peterDesc": "Clássico, estratégico e o ponto de origem da lenda.",
    "characters.milesDesc": "Energia urbana, identidade própria e estilo inconfundível.",
    "characters.gwenDesc": "Precisão, atitude e estética elegante em cada frame.",
    "characters.s2099Desc": "Força brutal, presença futurista e domínio do caos.",
    "multiverse.kicker": "Dimensões Conectadas",
    "multiverse.title": "Teias entre universos",
    "multiverse.description": "Nesta seção, nós simulamos conexões dimensionais com visual 3D e camadas parallax, reforçando storytelling visual e domínio técnico em experiências interativas.",
    "gallery.kicker": "Frames Visuais",
    "gallery.title": "Galeria cinematográfica",
    "about.kicker": "História do Projeto",
    "about.title": "Sobre o projeto",
    "about.description": "Este projeto foi criado como uma experiência interativa inspirada no universo do Spider-Man, utilizando tecnologias modernas de front-end para demonstrar habilidades em UI, animações e interatividade. A proposta combina direção de arte cinematográfica com engenharia de interface para entregar uma apresentação de portfólio memorável.",
    "contact.kicker": "Canal de Transmissão",
    "contact.title": "Contato",
    "contact.nameLabel": "Nome",
    "contact.namePlaceholder": "Seu nome",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "voce@email.com",
    "contact.messageLabel": "Mensagem",
    "contact.messagePlaceholder": "Me conte sobre seu projeto",
    "contact.submit": "Enviar mensagem",
    "footer.text": "© 2026 • Spider-Verse Experience — Conceito de Portfólio Front-end",
    "form.error.name": "Digite pelo menos 2 caracteres.",
    "form.error.email": "Informe um email válido.",
    "form.error.message": "A mensagem precisa ter ao menos 10 caracteres.",
    "form.error.global": "Corrija os campos destacados para continuar.",
    "form.success": "Mensagem enviada com sucesso! Eu retorno em breve.",
  },
  en: {
    "intro.kicker": "Portfolio Protocol v2.099",
    "intro.title": "SPIDER-VERSE EXPERIENCE",
    "nav.home": "Home",
    "nav.characters": "Characters",
    "nav.multiverse": "Multiverse",
    "nav.gallery": "Gallery",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.label": "Cinematic Front-end Showcase",
    "hero.title": "SPIDER-VERSE EXPERIENCE",
    "hero.description": "A high-impact portfolio project powered by Three.js, GSAP and a futuristic interface, combining visual storytelling, 3D and professional microinteractions.",
    "hero.cta": "Enter the Multiverse",
    "characters.kicker": "Character Archive",
    "characters.title": "Featured characters",
    "characters.peterDesc": "Classic, strategic and the origin point of the legend.",
    "characters.milesDesc": "Urban energy, unique identity and unmistakable style.",
    "characters.gwenDesc": "Precision, attitude and elegant aesthetics in every frame.",
    "characters.s2099Desc": "Brutal force, futuristic presence and control over chaos.",
    "multiverse.kicker": "Connected Dimensions",
    "multiverse.title": "Webs between universes",
    "multiverse.description": "In this section, we simulate dimensional connections with 3D visuals and parallax layers, reinforcing visual storytelling and technical mastery in interactive experiences.",
    "gallery.kicker": "Visual Frames",
    "gallery.title": "Cinematic gallery",
    "about.kicker": "Project Story",
    "about.title": "About the project",
    "about.description": "This project was created as an interactive experience inspired by the Spider-Man universe, using modern front-end technologies to showcase skills in UI, animation and interactivity. The proposal blends cinematic art direction with interface engineering to deliver a memorable portfolio presentation.",
    "contact.kicker": "Transmission Channel",
    "contact.title": "Contact",
    "contact.nameLabel": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "you@email.com",
    "contact.messageLabel": "Message",
    "contact.messagePlaceholder": "Tell me about your project",
    "contact.submit": "Send message",
    "footer.text": "© 2026 • Spider-Verse Experience — Front-end Portfolio Concept",
    "form.error.name": "Please enter at least 2 characters.",
    "form.error.email": "Please enter a valid email.",
    "form.error.message": "Message must be at least 10 characters.",
    "form.error.global": "Please fix the highlighted fields before continuing.",
    "form.success": "Message sent successfully! I'll get back to you soon.",
  },
};

let CURRENT_LANG = "pt";

const t = (key) => DICTIONARY[CURRENT_LANG][key] || key;

function setLanguage(lang) {
  CURRENT_LANG = lang;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  localStorage.setItem("svx-language", lang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    element.setAttribute("placeholder", t(key));
  });

  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((button) => {
    const isActive = button.getAttribute("data-lang") === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const introOverlay = document.getElementById("introOverlay");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  const preferred = localStorage.getItem("svx-language");
  const browser = navigator.language?.toLowerCase().startsWith("en") ? "en" : "pt";
  setLanguage(preferred || browser);

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.getAttribute("data-lang")));
  });

  // Intro cinematográfica
  const introTl = gsap.timeline({ defaults: { ease: "power3.out" } });
  introTl
    .from(".intro-kicker", { opacity: 0, y: 20, duration: 0.5 })
    .from(".intro-title", { opacity: 0, y: 30, duration: 0.7 }, "<0.1")
    .from(".intro-loader", { opacity: 0, scaleX: 0.7, duration: 0.5 }, "<0.1")
    .to(introOverlay, { opacity: 0, duration: 0.6, delay: 0.2 })
    .set(introOverlay, { display: "none" });

  gsap.from(".hero-content > *", {
    y: 30,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    delay: 0.2,
  });

  gsap.from(".hero-visual", {
    opacity: 0,
    y: 35,
    duration: 1,
    delay: 0.3,
  });

  // Menu mobile
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("is-open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("is-open"));
  });

  // Scrollspy do menu
  const sections = [...document.querySelectorAll("main section")];
  const navAnchors = [...navLinks.querySelectorAll("a")];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navAnchors.forEach((anchor) => {
          anchor.classList.toggle("is-active", anchor.getAttribute("href") === `#${id}`);
        });
      });
    },
    { threshold: 0.35 },
  );

  sections.forEach((section) => observer.observe(section));

  // Background de partículas em forma de teia
  initBackgroundWeb();

  // Three.js hero
  initHeroScene();

  // Three.js multiverse
  initMultiverseScene();

  // Cards com tilt 3D
  initCardTilt();

  // Scroll animations
  initScrollAnimations();

  // Parallax
  initParallax();

  // Validação de formulário
  initContactValidation();
});

function initBackgroundWeb() {
  const canvas = document.getElementById("background-web-canvas");
  const ctx = canvas.getContext("2d");

  let width = 0;
  let height = 0;
  let nodes = [];

  const createNodes = () => {
    const count = Math.max(45, Math.floor((width * height) / 28000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.36,
      vy: (Math.random() - 0.5) * 0.36,
      radius: Math.random() * 1.8 + 0.6,
    }));
  };

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    createNodes();
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);

    nodes.forEach((node) => {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      ctx.beginPath();
      ctx.fillStyle = "rgba(255,255,255,0.45)";
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          const alpha = (1 - dist / 110) * 0.25;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(90, 140, 255, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  };

  window.addEventListener("resize", resize);
  resize();
  draw();
}

function initHeroScene() {
  const canvas = document.getElementById("hero-3d-canvas");
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1000);
  camera.position.set(0, 0, 6.8);

  const group = new THREE.Group();
  scene.add(group);

  const geometry = new THREE.TorusKnotGeometry(1.3, 0.35, 220, 28);
  const material = new THREE.MeshStandardMaterial({
    color: 0xff1f3d,
    emissive: 0x230710,
    metalness: 0.5,
    roughness: 0.3,
  });
  const knot = new THREE.Mesh(geometry, material);

  const wireGeometry = new THREE.IcosahedronGeometry(2.2, 2);
  const wireMaterial = new THREE.MeshBasicMaterial({
    color: 0x0f62fe,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  });
  const wire = new THREE.Mesh(wireGeometry, wireMaterial);
  group.add(knot, wire);

  const starsGeometry = new THREE.BufferGeometry();
  const starCount = 700;
  const positions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount * 3; i += 1) {
    positions[i] = (Math.random() - 0.5) * 16;
  }
  starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const stars = new THREE.Points(
    starsGeometry,
    new THREE.PointsMaterial({ color: 0x9ec3ff, size: 0.03, transparent: true, opacity: 0.75 }),
  );
  scene.add(stars);

  scene.add(new THREE.AmbientLight(0xffffff, 0.35));
  const redLight = new THREE.PointLight(0xff1f3d, 1.2, 40);
  redLight.position.set(3, 2, 4);
  const blueLight = new THREE.PointLight(0x0f62fe, 1.3, 45);
  blueLight.position.set(-3, -1, 3);
  scene.add(redLight, blueLight);

  const resize = () => {
    const parent = canvas.parentElement;
    const width = parent.clientWidth;
    const height = parent.clientHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  let mouseX = 0;
  let mouseY = 0;
  window.addEventListener("mousemove", (event) => {
    mouseX = (event.clientX / window.innerWidth - 0.5) * 0.6;
    mouseY = (event.clientY / window.innerHeight - 0.5) * 0.6;
  });

  const animate = () => {
    knot.rotation.x += 0.004;
    knot.rotation.y += 0.008;
    wire.rotation.x -= 0.002;
    wire.rotation.y += 0.003;
    stars.rotation.y += 0.0008;

    group.rotation.x += (mouseY - group.rotation.x) * 0.03;
    group.rotation.y += (mouseX - group.rotation.y) * 0.03;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  window.addEventListener("resize", resize);
  resize();
  animate();
}

function initMultiverseScene() {
  const canvas = document.getElementById("multiverse-canvas");
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 1000);
  camera.position.z = 8;

  const nodes = [];
  const nodeGeometry = new THREE.SphereGeometry(0.12, 16, 16);
  for (let i = 0; i < 18; i += 1) {
    const node = new THREE.Mesh(
      nodeGeometry,
      new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0xff1f3d : 0x0f62fe,
        emissive: i % 2 === 0 ? 0x3a0a12 : 0x0c1d4f,
      }),
    );
    node.position.set((Math.random() - 0.5) * 6.2, (Math.random() - 0.5) * 3.6, (Math.random() - 0.5) * 2.5);
    nodes.push(node);
    scene.add(node);
  }

  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xa9c4ff, transparent: true, opacity: 0.48 });
  const lines = [];

  for (let i = 0; i < nodes.length - 1; i += 1) {
    const a = nodes[i].position;
    const b = nodes[(i + 3) % nodes.length].position;
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(a.x, a.y, a.z),
      new THREE.Vector3((a.x + b.x) * 0.5, (a.y + b.y) * 0.5 + 1.1, (a.z + b.z) * 0.5),
      new THREE.Vector3(b.x, b.y, b.z),
    ]);

    const points = curve.getPoints(32);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, lineMaterial);
    lines.push(line);
    scene.add(line);
  }

  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const key = new THREE.PointLight(0x0f62fe, 1.2, 45);
  key.position.set(2.5, 1.6, 4);
  const fill = new THREE.PointLight(0xff1f3d, 1.1, 45);
  fill.position.set(-2.5, -1.6, 4);
  scene.add(key, fill);

  const resize = () => {
    const parent = canvas.parentElement;
    const width = parent.clientWidth;
    const height = parent.clientHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  const animate = () => {
    nodes.forEach((node, idx) => {
      node.position.y += Math.sin(Date.now() * 0.001 + idx) * 0.0017;
      node.rotation.x += 0.008;
      node.rotation.y += 0.01;
    });

    lines.forEach((line) => {
      line.rotation.z += 0.0006;
    });

    scene.rotation.y += 0.0018;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  window.addEventListener("resize", resize);
  resize();
  animate();
}

function initCardTilt() {
  const cards = document.querySelectorAll(".character-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 16;
      const rotateX = ((y / rect.height) - 0.5) * -14;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    });
  });
}

function initScrollAnimations() {
  gsap.utils.toArray(".section").forEach((section) => {
    const title = section.querySelector(".section-title");
    if (title) {
      gsap.from(title, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
        },
      });
    }
  });

  gsap.from(".character-card", {
    opacity: 0,
    y: 40,
    duration: 0.7,
    stagger: 0.11,
    scrollTrigger: {
      trigger: ".card-grid",
      start: "top 80%",
    },
  });

  gsap.from(".gallery-grid figure", {
    opacity: 0,
    y: 34,
    duration: 0.7,
    stagger: 0.08,
    scrollTrigger: {
      trigger: ".gallery-grid",
      start: "top 84%",
    },
  });
}

function initParallax() {
  gsap.utils.toArray("[data-parallax]").forEach((el) => {
    const y = Number(el.getAttribute("data-parallax"));
    gsap.to(el, {
      y,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        scrub: true,
      },
    });
  });
}

function initContactValidation() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  const fields = {
    name: {
      input: document.getElementById("name"),
      error: document.querySelector('[data-testid="contact-error-name"]'),
      validate: (v) => v.trim().length >= 2,
      messageKey: "form.error.name",
    },
    email: {
      input: document.getElementById("email"),
      error: document.querySelector('[data-testid="contact-error-email"]'),
      validate: (v) => /^\S+@\S+\.\S+$/.test(v),
      messageKey: "form.error.email",
    },
    message: {
      input: document.getElementById("message"),
      error: document.querySelector('[data-testid="contact-error-message"]'),
      validate: (v) => v.trim().length >= 10,
      messageKey: "form.error.message",
    },
  };

  const validateField = (field) => {
    const isValid = field.validate(field.input.value);
    field.error.textContent = isValid ? "" : t(field.messageKey);
    return isValid;
  };

  Object.values(fields).forEach((field) => {
    field.input.addEventListener("input", () => validateField(field));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const validName = validateField(fields.name);
    const validEmail = validateField(fields.email);
    const validMessage = validateField(fields.message);

    if (!validName || !validEmail || !validMessage) {
      status.textContent = t("form.error.global");
      status.style.color = "#ff8fa1";
      return;
    }

    status.textContent = t("form.success");
    status.style.color = "#9ac6ff";
    form.reset();
  });
}
