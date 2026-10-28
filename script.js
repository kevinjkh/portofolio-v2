(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    const setExpanded = (expanded) => {
      navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      navLinks.classList.toggle('is-open', expanded);
    };

    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      setExpanded(!expanded);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setExpanded(false);
    });
  }
})();

// Pengalih bahasa ID / EN
(function () {
  const I18N = {
  "id": {
    "nav.brand": "Portofolio",
    "nav.about": "Tentang",
    "nav.education": "Pendidikan",
    "nav.skills": "Skill",
    "nav.work": "Karya",
    "nav.certs": "Sertifikat",
    "hero.subtitle": "Saya adalah seorang web developer yang fokus di bidang <strong>Front-End</strong> (HTML, CSS, JavaScript). Saya telah berhasil membuat website <strong>company profile</strong> dengan fitur <strong>booking</strong> terintegrasi dalam satu website.",
    "hero.work": "Lihat Karya",
    "hero.certs": "Lihat Sertifikat",
    "about.title": "Tentang Saya",
    "about.desc": "Ringkas, jelas, dan profesional.",
    "about.body": "Saya adalah seorang web developer bidang yang saya geluti adalah front-end developer (HTML, CSS, JS) yang telah berhasil membuat karya website company profil yang dilengkapi fitur booking terintegrasi dalam satu website.",
    "edu.title": "Riwayat Pendidikan",
    "edu.desc": "Perjalanan pendidikan saya.",
    "edu.now": "2023 - sekarang",
    "skills.desc": "Keahlian utama yang saya gunakan dalam project.",
    "skills.resp": "Layout Desktop, Tablet, Mobile",
    "work.title": "Karyaku",
    "work.desc": "Company profile + booking, responsive, dan animasi di homescreen.",
    "work.body": "Responsive design 3 layout (Desktop, Tablet, Mobile) dengan homescreen animation (3 triggered) yang bergerak secara otomatis.",
    "work.b1": "Booking Terintegrasi",
    "work.b3": "Animasi",
    "cert.desc": "Klik tombol untuk melihat file sertifikat.",
    "cert.html": "Sertifikat HTML",
    "cert.css": "Sertifikat CSS",
    "cert.js": "Sertifikat JavaScript",
    "cert.btn": "Klik disini",
    "footer.top": "Kembali ke atas",
    "nav.menu": "Buka menu",
    "img.portrait": "Foto latar belakang",
    "img.work": "Preview karya website",
    "meta.title": "Portofolio | Front-End Developer"
  },
  "en": {
    "nav.brand": "Portfolio",
    "nav.about": "About",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.work": "Work",
    "nav.certs": "Certificates",
    "hero.subtitle": "I am a web developer focused on <strong>Front-End</strong> development (HTML, CSS, JavaScript). I have successfully built a <strong>company profile</strong> website with an integrated <strong>booking</strong> feature in a single site.",
    "hero.work": "View Work",
    "hero.certs": "View Certificates",
    "about.title": "About Me",
    "about.desc": "Concise, clear, and professional.",
    "about.body": "I am a web developer specializing in front-end development (HTML, CSS, JS) and have successfully built a company profile website equipped with an integrated booking feature in a single site.",
    "edu.title": "Education History",
    "edu.desc": "My educational journey.",
    "edu.now": "2023 - present",
    "skills.desc": "The main skills I use in my projects.",
    "skills.resp": "Desktop, Tablet, and Mobile layouts",
    "work.title": "My Work",
    "work.desc": "Company profile + booking, responsive, and homescreen animation.",
    "work.body": "Responsive design with 3 layouts (Desktop, Tablet, Mobile) and a homescreen animation (3 triggers) that plays automatically.",
    "work.b1": "Integrated Booking",
    "work.b3": "Animation",
    "cert.desc": "Click the button to view the certificate file.",
    "cert.html": "HTML Certificate",
    "cert.css": "CSS Certificate",
    "cert.js": "JavaScript Certificate",
    "cert.btn": "Click here",
    "footer.top": "Back to top",
    "nav.menu": "Open menu",
    "img.portrait": "Background photo",
    "img.work": "Website work preview",
    "meta.title": "Portfolio | Front-End Developer"
  }
};

  const STORAGE_KEY = 'portfolio-lang';
  const buttons = document.querySelectorAll('.lang__btn');

  const getSaved = () => {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  };
  const save = (lang) => {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* abaikan */ }
  };

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.id;
    document.documentElement.lang = lang;
    document.title = dict['meta.title'];

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const v = dict[el.dataset.i18n];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const v = dict[el.dataset.i18nAlt];
      if (v != null) el.setAttribute('alt', v);
    });
    document.querySelectorAll('[data-i18n-label]').forEach((el) => {
      const v = dict[el.dataset.i18nLabel];
      if (v != null) el.setAttribute('aria-label', v);
    });

    buttons.forEach((b) => {
      const active = b.dataset.lang === lang;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    save(lang);
  }

  buttons.forEach((b) => b.addEventListener('click', () => applyLang(b.dataset.lang)));
  applyLang(getSaved() === 'en' ? 'en' : 'id');
})();
