/* =========================================================
   PORTFOLIO DIANE LANAU
   JavaScript simple et commenté
   Fonctions : menu mobile, animations au scroll, retour en haut,
   lightbox de galerie pour la page projet.
========================================================= */

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const backToTop = document.querySelector('.back-to-top');
const revealElements = document.querySelectorAll('.reveal');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

if (!window.location.hash) {
  window.addEventListener('load', () => {
    window.scrollTo(0, 0);
  });
}

// =========================
// MENU BURGER MOBILE
// =========================
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Ferme le menu mobile quand on clique sur un lien.
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// =========================
// ANIMATIONS AU SCROLL
// =========================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealElements.forEach((element) => revealObserver.observe(element));

// =========================
// BOUTON RETOUR EN HAUT
// =========================
window.addEventListener('scroll', () => {
  if (!backToTop) return;

  if (window.scrollY > 450) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// =========================
// LIEN ACTIF DANS LE MENU
// =========================
const sections = [...document.querySelectorAll('main section[id]')];

const activeLinkObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navAnchors.forEach((link) => link.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  },
  { threshold: 0.45 }
);

sections.forEach((section) => activeLinkObserver.observe(section));

// =========================
// GALERIE AVEC ZOOM / LIGHTBOX
// Cette partie fonctionne seulement si la page contient une galerie.
// =========================
const galleryItems = document.querySelectorAll('.gallery-item, .photo-slot');

if (galleryItems.length > 0) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Fermer l'image agrandie">×</button>
    <div class="lightbox-content">
      <img src="" alt="Image agrandie" />
      <p class="lightbox-caption"></p>
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeButton = lightbox.querySelector('.lightbox-close');

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (!img) return;
      const caption = item.querySelector('span')?.textContent || item.querySelector('figcaption')?.textContent || img.alt;

      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightboxCaption.textContent = caption;
      lightbox.classList.add('open');
    });
  });

  const closeLightbox = () => lightbox.classList.remove('open');

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });
}
