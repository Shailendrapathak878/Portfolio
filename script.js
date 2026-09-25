/* ============================================================
   SHAILENDRA PATHAK — PORTFOLIO
   script.js
   ============================================================ */

/* ── DATA: PROJECTS ─────────────────────────────────────────── */
/*
  To add a project: copy an object, fill in fields.
  - github: set to "" if no public repo exists yet
  - liveDemo: set to "" if no deployed URL exists — button will be hidden
  - status: "complete" | "active" | "progress"
*/
const projects = [
  {
    id: "smart-safety",
    num: "01",
    icon: "fa-solid fa-shield-halved",
    title: "Smart Public Safety Surveillance & Weapon Detection Dashboard",
    status: "active-dev",
    description:
      "Real-time weapon detection system using YOLO11s and computer vision. Detects 5 weapon classes from live video feeds, routes authority alerts, and preserves source video/clip evidence.",
    highlights: [
      "5-class detection: Gun, Knife, Grenade, Missile, Sword",
      "Large aggregated training dataset",
      "Real-time WebSocket-based monitoring",
      "Authority alert & source clip evidence workflow",
      "FastAPI backend"
    ],
    technologies: ["YOLO11s", "Python", "OpenCV", "FastAPI", "WebSocket", "Computer Vision", "Machine Learning"],
    github: "",
    liveDemo: ""
  },
  {
    id: "iraad-generator",
    num: "02",
    icon: "fa-solid fa-database",
    title: "IRAAD — Indian Road Accident Analytics Dataset Generator",
    status: "complete",
    description:
      "An Indian road accident synthetic dataset generator designed to create realistic, ML-ready accident data with weather, road, vehicle, driver, traffic, risk and emergency-response attributes, with CSV, JSON and Excel export support.",
    highlights: [
      "Realistic ML-ready synthetic data generation",
      "Weather, road, vehicle, driver & traffic attributes",
      "Risk scoring & emergency-response features",
      "Export: CSV, JSON, Excel"
    ],
    technologies: ["Python", "Pandas", "NumPy", "OpenPyXL"],
    github: "https://github.com/Shailendrapathak878/IRAAD-Generator",
    liveDemo: ""
  },
  {
    id: "smart-city-ai",
    num: "03",
    icon: "fa-solid fa-brain",
    title: "AI-Powered Smart City Road Accident Analytics",
    status: "complete",
    description:
      "An AI-powered road accident analytics project combining data preprocessing, feature engineering, machine learning, predictive analytics and an interactive dashboard.",
    highlights: [
      "Data preprocessing & feature engineering",
      "Machine learning for predictive analytics",
      "Interactive Streamlit dashboard",
      "End-to-end ML pipeline"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning", "Streamlit"],
    github: "https://github.com/Shailendrapathak878/AI-Powered-Smart-City-Road-Accident-Analytics",
    liveDemo: ""
  },
  {
    id: "smart-city-analytics",
    num: "04",
    icon: "fa-solid fa-chart-line",
    title: "Smart City Road Accident Analytics",
    status: "complete",
    description:
      "An end-to-end road accident data analytics project focused on data cleaning, feature engineering, exploratory analysis, statistical analysis and professional visualization using a custom synthetic accident dataset.",
    highlights: [
      "End-to-end data cleaning & EDA",
      "Feature engineering pipeline",
      "Statistical analysis",
      "Professional visualization"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Analytics"],
    github: "https://github.com/Shailendrapathak878/Smart-City-Road-Accident-Analytics",
    liveDemo: ""
  },
  {
    id: "customer-shopping",
    num: "05",
    icon: "fa-solid fa-chart-bar",
    title: "Customer Shopping Behavior Analysis",
    status: "complete",
    description:
      "An end-to-end customer shopping behavior analysis project using Python, PostgreSQL, SQL and Power BI to clean data, analyze customer behavior and generate business-focused insights.",
    highlights: [
      "Data cleaning & preprocessing",
      "PostgreSQL & SQL-based analysis",
      "Interactive Power BI dashboard with DAX",
      "Business behavior insights"
    ],
    technologies: ["Python", "PostgreSQL", "SQL", "Pandas", "Power BI", "DAX"],
    github: "https://github.com/Shailendrapathak878/customer-shopping-behavior-analysis",
    liveDemo: ""
  },
  {
    id: "codeverse",
    num: "06",
    icon: "fa-solid fa-graduation-cap",
    title: "CodeVerse",
    status: "active",
    description:
      "An educational platform built with Flutter and Dart that brings coding, competitive exam preparation and entrance exam learning into a unified learning experience.",
    highlights: [
      "Coding interview preparation",
      "Competitive exam preparation",
      "Entrance exam learning",
      "Cross-platform Flutter application"
    ],
    technologies: ["Flutter", "Dart", "Android Studio"],
    github: "https://github.com/Shailendrapathak878/CodeVerse",
    liveDemo: ""
  },
  {
    id: "smart-gate",
    num: "07",
    icon: "fa-solid fa-door-closed",
    title: "AI Smart Gate System",
    status: "progress",
    description:
      "An IoT-powered smart gate using ESP32-CAM and sensors to automate access control with motor-driven gate operation — demonstrating hardware-software integration.",
    highlights: [
      "ESP32-CAM based vision module",
      "Sensor-driven automation",
      "Motor control for gate operation",
      "IoT hardware integration"
    ],
    technologies: ["ESP32-CAM", "IoT", "Sensors", "Motor Automation"],
    github: "",
    liveDemo: ""
  }
];

/* ── DATA: CERTIFICATIONS ───────────────────────────────────── */
/*
  To add a certificate:
  1. Drop the image in assets/certifications/
  2. Copy an object below and fill in the fields.
  Leave credentialId or verificationUrl as "" if not available.
*/
const certifications = [
  // ORDER IS LOCKED — do NOT sort alphabetically or by date.
  // To add a certificate: copy an object, fill fields, drop image in assets/certifications/
  // Leave verificationUrl as "" if no verified URL exists.
  {
    // 01
    title: "Data Analyst",
    organization: "Coding Seekho",
    date: "25 August 2026",
    credentialId: "Serial No: 64031-1",
    image: "assets/certifications/certificate-01.jpg",
    verificationUrl: ""
  },
  {
    // 02
    title: "Introduction to Python",
    organization: "Analytics Vidhya",
    date: "20 September 2026",
    credentialId: "wgwgvc2g0i",
    image: "assets/certifications/certificate-02.jpg",
    verificationUrl: ""
  },
  {
    // 03
    title: "SQL for Data Science",
    organization: "Simplilearn SkillUp",
    date: "21 September 2026",
    credentialId: "10764274",
    image: "assets/certifications/certificate-03.jpg",
    verificationUrl: ""
  },
  {
    // 04
    title: "Introduction to Artificial Intelligence",
    organization: "Simplilearn SkillUp",
    date: "21 September 2026",
    credentialId: "10764757",
    image: "assets/certifications/certificate-04.jpg",
    verificationUrl: ""
  },
  {
    // 05
    title: "Introduction to Generative AI Studio",
    organization: "Simplilearn SkillUp",
    note: "Powered by Google Cloud",
    date: "25 September 2026",
    credentialId: "10785036",
    image: "assets/certifications/certificate-05.jpg",
    verificationUrl: ""
  }
];

/* ── BUILD PROJECTS ─────────────────────────────────────────── */
function buildProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projects.map((p) => {
    // Status badge
    let statusClass, statusIcon, statusText;
    if (p.status === "complete") {
      statusClass = "status-complete"; statusIcon = "fa-solid fa-circle-check"; statusText = "Completed";
    } else if (p.status === "active") {
      statusClass = "status-active"; statusIcon = "fa-solid fa-circle-dot"; statusText = "Active Project";
    } else if (p.status === "active-dev") {
      statusClass = "status-active-dev"; statusIcon = "fa-solid fa-code-branch"; statusText = "Active Development";
    } else {
      statusClass = "status-progress"; statusIcon = "fa-solid fa-circle-dot"; statusText = "In Progress";
    }

    const highlights = p.highlights
      .map(h => `<div class="highlight-item"><i class="fa-solid fa-angle-right"></i>${escHtml(h)}</div>`)
      .join("");

    const tags = p.technologies
      .map(t => `<span class="tag">${escHtml(t)}</span>`)
      .join("");

    const githubBtn = p.github
      ? `<a class="btn btn-primary btn-sm" href="${p.github}" target="_blank" rel="noopener noreferrer" aria-label="View ${escHtml(p.title)} on GitHub"><i class="fa-brands fa-github"></i>GitHub</a>`
      : "";

    const demoBtn = p.liveDemo
      ? `<a class="btn btn-ghost btn-sm" href="${p.liveDemo}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i>Live Demo</a>`
      : "";

    return `
      <article class="project-card card tilt-wrap" data-reveal>
        <div class="pc-header">
          <div class="pc-num-icon">
            <span class="pc-num">${escHtml(p.num)}</span>
            <span class="pc-icon-wrap"><i class="${p.icon}"></i></span>
          </div>
          <div class="pc-title-area">
            <div class="project-status ${statusClass}"><i class="${statusIcon}"></i>${statusText}</div>
            <h3>${escHtml(p.title)}</h3>
          </div>
        </div>
        <p class="pc-desc">${escHtml(p.description)}</p>
        <div class="pc-highlights">${highlights}</div>
        <div class="pc-footer">
          <div class="tag-group pc-tags">${tags}</div>
          <div class="project-links">${githubBtn}${demoBtn}</div>
        </div>
      </article>`;
  }).join("");

  document.querySelectorAll("#projectsGrid [data-reveal]").forEach(el => revealObserver.observe(el));
  bindTilt();
}

function escHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

/* ── BUILD CERTIFICATIONS ───────────────────────────────────── */
function buildCertifications() {
  const grid = document.getElementById("certsGrid");
  if (!grid) return;

  if (certifications.length === 0) {
    grid.innerHTML = `
      <div class="certs-placeholder">
        <i class="fa-solid fa-certificate"></i>
        <p>Certifications will appear here once added.</p>
      </div>`;
    return;
  }

  grid.innerHTML = certifications.map((c, i) => {
    const imgHtml = c.image
      ? `<img
           src="${c.image}"
           alt="${escHtml(c.title)} — ${escHtml(c.organization)} certificate"
           loading="lazy"
           onerror="this.replaceWith(certFallbackEl())"
         />
         <div class="cert-img-overlay"><i class="fa-solid fa-magnifying-glass-plus"></i></div>`
      : certFallbackEl().outerHTML;

    // Show note (e.g. "Powered by Google Cloud") if present
    const noteHtml = c.note
      ? `<div class="cert-note"><i class="fa-solid fa-circle-nodes"></i>${escHtml(c.note)}</div>`
      : "";

    // Label varies by org
    const idLabel = c.organization === "Coding Seekho" ? "" : "ID\u00a0";
    const credentialHtml = c.credentialId
      ? `<div class="cert-id" title="Certificate ID: ${escHtml(c.credentialId)}">${idLabel}${escHtml(c.credentialId)}</div>`
      : "";

    const verifyHtml = c.verificationUrl
      ? `<a class="cert-verify-btn" href="${c.verificationUrl}" target="_blank" rel="noopener noreferrer">
           <i class="fa-solid fa-arrow-up-right-from-square"></i>Verify Certificate
         </a>`
      : "";

    return `
      <article class="cert-card card" data-reveal>
        <div class="cert-img-wrap" data-cert-index="${i}" role="button" tabindex="0"
             aria-label="View ${escHtml(c.title)} certificate"
             onclick="openCertModal(${i})"
             onkeydown="if(event.key==='Enter'||event.key===' ')openCertModal(${i})">
          ${imgHtml}
        </div>
        <div class="cert-body">
          <div class="cert-org">${escHtml(c.organization)}</div>
          ${noteHtml}
          <h3 class="cert-title">${escHtml(c.title)}</h3>
          <div class="cert-meta">
            ${c.date ? `<span class="cert-date"><i class="fa-regular fa-calendar"></i>${escHtml(c.date)}</span>` : ""}
            ${credentialHtml}
          </div>
          ${verifyHtml}
        </div>
      </article>`;
  }).join("");

  document.querySelectorAll("#certsGrid [data-reveal]").forEach(el => revealObserver.observe(el));
}

function certFallbackEl() {
  const div = document.createElement("div");
  div.className = "cert-fallback";
  div.innerHTML = `<i class="fa-solid fa-certificate"></i><span>Certificate image not yet available</span>`;
  return div;
}

/* ── CERT MODAL ─────────────────────────────────────────────── */
const certModal    = document.getElementById("certModal");
const modalImg     = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const modalOrg     = document.getElementById("modalOrg");

function openCertModal(index) {
  const c = certifications[index];
  if (!c || !c.image) return;

  modalImg.src     = c.image;
  modalImg.alt     = c.title + " certificate";
  modalCaption.textContent = c.title;
  modalOrg.textContent     = c.organization;
  certModal.classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeCertModal() {
  certModal.classList.remove("open");
  document.body.style.overflow = "";
}

if (certModal) {
  certModal.addEventListener("click", e => {
    if (e.target === certModal) closeCertModal();
  });
  document.getElementById("modalClose").addEventListener("click", closeCertModal);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && certModal.classList.contains("open")) closeCertModal();
  });
}

/* ── PRELOADER ──────────────────────────────────────────────── */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader")?.classList.add("hide");
  }, 450);
});

/* ── TYPED EFFECT ───────────────────────────────────────────── */
const typedEl = document.getElementById("typedText");
const titles  = [
  "AI/ML Developer",
  "Data Analytics Enthusiast",
  "Python Developer",
  "Computer Vision Developer",
  "AI & IoT Builder"
];
let tIdx = 0, cIdx = 0, isDeleting = false;

function typeLoop() {
  const cur = titles[tIdx];
  typedEl.textContent = isDeleting
    ? cur.substring(0, cIdx--)
    : cur.substring(0, cIdx++);

  let speed = isDeleting ? 38 : 68;

  if (!isDeleting && cIdx > cur.length) {
    speed = 1600; isDeleting = true;
  } else if (isDeleting && cIdx < 0) {
    isDeleting = false; tIdx = (tIdx + 1) % titles.length; cIdx = 0; speed = 320;
  }
  setTimeout(typeLoop, speed);
}
if (typedEl) typeLoop();

/* ── PARTICLES ──────────────────────────────────────────────── */
const pField = document.getElementById("particleField");
if (pField) {
  const count = window.innerWidth < 700 ? 12 : 22;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.className = "particle";
    s.style.cssText = `
      position:absolute;width:3px;height:3px;border-radius:50%;
      background:rgba(155,186,255,.8);box-shadow:0 0 10px rgba(110,168,255,.7);
      opacity:.4;animation:drift var(--dur) linear infinite;
      left:${Math.random()*100}%;top:${Math.random()*100}%;
      --dx:${(Math.random()*100-50).toFixed(1)}px;
      --dy:${(Math.random()*80-40).toFixed(1)}px;
      --dur:${(8+Math.random()*10).toFixed(1)}s;
      animation-delay:${(Math.random()*-14).toFixed(1)}s;
    `;
    pField.appendChild(s);
  }
}

/* ── MOBILE MENU ────────────────────────────────────────────── */
const menuBtn  = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.querySelector("i").className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  menuBtn.setAttribute("aria-expanded", open);
});

navLinks?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.querySelector("i").className = "fa-solid fa-bars";
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

/* ── NAVBAR SCROLL ──────────────────────────────────────────── */
const nav = document.querySelector(".nav");
const updateNav = () => nav?.classList.toggle("scrolled", window.scrollY > 10);
updateNav();
window.addEventListener("scroll", updateNav, { passive: true });

/* ── DARK / LIGHT TOGGLE ────────────────────────────────────── */
const themeBtn = document.getElementById("themeToggle");
if (localStorage.getItem("portfolio-theme") === "light") document.body.classList.add("light");

function syncThemeIcon() {
  const isLight = document.body.classList.contains("light");
  themeBtn.querySelector("i").className = isLight ? "fa-solid fa-sun" : "fa-solid fa-moon";
  themeBtn.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
}
syncThemeIcon();
themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("portfolio-theme", document.body.classList.contains("light") ? "light" : "dark");
  syncThemeIcon();
});

/* ── SCROLL REVEAL ──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("visible"); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.12 });

document.querySelectorAll("[data-reveal]").forEach(el => revealObserver.observe(el));

/* ── ACTIVE NAV ─────────────────────────────────────────────── */
const sections   = document.querySelectorAll("section[id], main[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const offset = sec.offsetTop - 130;
    if (window.scrollY >= offset && window.scrollY < offset + sec.offsetHeight) {
      current = sec.getAttribute("id");
    }
  });
  navAnchors.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
}, { passive: true });

/* ── SKILL BAR OBSERVER ─────────────────────────────────────── */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("visible"); skillObserver.unobserve(e.target); }
  });
}, { threshold: 0.3 });

document.querySelectorAll(".skill-cat").forEach(el => skillObserver.observe(el));

/* ── TILT EFFECT ────────────────────────────────────────────── */
function bindTilt() {
  document.querySelectorAll(".tilt-wrap").forEach(card => {
    if (card._tiltBound) return;
    card._tiltBound = true;
    card.addEventListener("mousemove", e => {
      const r  = card.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - 0.5) * -10;
      const ry = ((e.clientX - r.left) / r.width - 0.5) * 10;
      card.style.transform = `perspective(1200px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-3px)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
}
bindTilt();

/* ── CUSTOM CURSOR ──────────────────────────────────────────── */
const cursor         = document.getElementById("cursor");
const cursorFollower = document.getElementById("cursorFollower");
let mx = 0, my = 0, fx = 0, fy = 0;

window.addEventListener("mousemove", e => {
  mx = e.clientX; my = e.clientY;
  if (pField) {
    const px = (e.clientX / window.innerWidth - 0.5) * 16;
    const py = (e.clientY / window.innerHeight - 0.5) * 12;
    pField.style.transform = `translate3d(${px}px,${py}px,0)`;
  }
}, { passive: true });

(function cursorLoop() {
  fx += (mx - fx) * 0.2; fy += (my - fy) * 0.2;
  if (cursor)         cursor.style.transform         = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
  if (cursorFollower) cursorFollower.style.transform = `translate(${fx}px,${fy}px) translate(-50%,-50%)`;
  requestAnimationFrame(cursorLoop);
})();

/* ── CONTACT FORM ───────────────────────────────────────────── */
const form  = document.getElementById("contactForm");
const toast = document.getElementById("toast");

function showToast(msg) {
  toast.querySelector("span").textContent = msg;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

form?.addEventListener("submit", e => {
  e.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }
  form.reset();
  showToast("Message sent successfully.");
});

/* ── RESUME DOWNLOAD ────────────────────────────────────────── */
document.getElementById("downloadResume")?.addEventListener("click", () => {
  const certList = certifications.length
    ? certifications.map(c => `  - ${c.title} | ${c.organization} | ${c.date}${c.credentialId ? " | ID: " + c.credentialId : ""}`).join("\n")
    : "  (To be added)";

  const projectList = projects.map(p =>
    `  - ${p.title}\n    Tech: ${p.technologies.join(", ")}\n    Status: ${p.status === "complete" ? "Completed" : "In Progress"}`
  ).join("\n");

  const text = `SHAILENDRA PATHAK
============================================================
AI/ML | Data Analytics | Python Developer
B.Tech CSE (Artificial Intelligence) Student

CONTACT
-------
Email:     Pandit979212@gmail.com
Mobile:    6387802097 / 9621362097
GitHub:    https://github.com/Shailendrapathak878
LinkedIn:  https://www.linkedin.com/in/shailendra-pathak-66606a3ba
Instagram: https://www.instagram.com/Shailendra_pathak878

EDUCATION
---------
B.Tech — Computer Science & Engineering (Artificial Intelligence)
Babu Banarasi Das University, Lucknow
2024 – 2028 | Currently in 3rd Year

SKILLS
------
Programming:     Python, C/C++, SQL, Dart
AI / ML:         Machine Learning, Computer Vision, YOLO, OpenCV, Scikit-learn, NumPy, Pandas
Data Analytics:  Power BI, DAX, SQL, Pandas, Matplotlib, Seaborn
Development:     HTML, CSS, JavaScript, FastAPI, Flutter
Tools:           Git, GitHub, VS Code, Vercel

PROJECTS
--------
${projectList}

CERTIFICATIONS
--------------
${certList}
============================================================
Generated from portfolio — shailendrapathak878.github.io
`;

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href = url; a.download = "Shailendra_Pathak_Resume.txt";
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
  showToast("Resume download started.");
});

/* ── INIT ───────────────────────────────────────────────────── */
buildProjects();
buildCertifications();
