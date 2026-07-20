/* ===================================================
   DIAMOND CUT - JAVASCRIPT
=================================================== */

document.addEventListener('DOMContentLoaded', function () {

  // ==========================================
  // 1. HERO SLIDER (skipped on pages without hero slides)
  // ==========================================
  const slides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;
  let slideInterval;

  if (slides.length > 0) {
    const dotsContainer = document.getElementById('slideDots');
    const prevBtn = document.getElementById('slidePrev');
    const nextBtn = document.getElementById('slideNext');

    // Build dots
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `الشريحة ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      if (dotsContainer) dotsContainer.appendChild(dot);
    });

    function goToSlide(n) {
      slides[currentSlide].classList.remove('active');
      document.querySelectorAll('.slide-dot')[currentSlide].classList.remove('active');
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      document.querySelectorAll('.slide-dot')[currentSlide].classList.add('active');
    }

    function nextSlide() { goToSlide(currentSlide + 1); }
    function prevSlide() { goToSlide(currentSlide - 1); }

    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });

    function startInterval() {
      slideInterval = setInterval(nextSlide, 5000);
    }
    function resetInterval() {
      clearInterval(slideInterval);
      startInterval();
    }
    startInterval();
  }

  // ==========================================
  // 2. HEADER SCROLL
  // ==========================================
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    // Active nav link
    updateActiveNav();
  }, { passive: true });

  // ==========================================
  // 3. HAMBURGER MENU
  // ==========================================
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('main-nav');
  hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamburger.classList.toggle('active');
    document.body.classList.toggle('nav-open');
  });

  // Close nav on link click
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.classList.remove('nav-open');
    });
  });

  // Close nav on backdrop click
  document.addEventListener('click', function(e) {
    if (mainNav.classList.contains('open') && !mainNav.contains(e.target) && !hamburger.contains(e.target)) {
      mainNav.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.classList.remove('nav-open');
    }
  });

  // Mobile: sub-dropdown toggle
  document.querySelectorAll('.has-dropdown > .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.closest('.has-dropdown').classList.toggle('open-sub');
      }
    });
  });

  // ==========================================
  // 4. ACTIVE NAV ON SCROLL
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  function updateActiveNav() {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        if (scrollPos >= top && scrollPos < top + height) {
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  }

  // Initial call
  setTimeout(updateActiveNav, 100);

  // ==========================================
  // 5. COUNTER ANIMATION
  // ==========================================
  const counters = document.querySelectorAll('.stat-num');
  let countersStarted = false;

  function animateCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = Math.floor(current);
      }, 16);
    });
  }

  // ==========================================
  // 6. INTERSECTION OBSERVER (Fade-up + Counters)
  // ==========================================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.classList.contains('stats-strip') && !countersStarted) {
          countersStarted = true;
          animateCounters();
        }
      }
    });
  }, { threshold: 0.1 });

  // Observe fade-up elements
  document.querySelectorAll('.service-card, .svc-card, .why-card, .faq-item, .contact-info-item, .partner-item, .project-card').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });

  // Observe stats strip
  const statsStrip = document.querySelector('.stats-strip');
  if (statsStrip) observer.observe(statsStrip);

  // Stagger service cards
  document.querySelectorAll('.service-card, .svc-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });
  document.querySelectorAll('.why-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });
  document.querySelectorAll('.partner-item').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.12}s`;
  });
  document.querySelectorAll('.project-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.06}s`;
  });

  // ==========================================
  // 7. FAQ ACCORDION
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-q');
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close all
      faqItems.forEach(fi => {
        fi.classList.remove('active');
        fi.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      // Open clicked if was closed
      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ==========================================
  // 8. SMOOTH SCROLL
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerH = header.offsetHeight;
        const top = target.offsetTop - headerH - 10;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ==========================================
  // 9. CONTACT FORM → WhatsApp redirect
  // ==========================================
  window.handleSubmit = function (e) {
    e.preventDefault();
    const form = document.getElementById('contactForm');
    const success = document.getElementById('formSuccess');
    const btn = form.querySelector('.form-submit');
    const lang = document.documentElement.lang || 'ar';

    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email = document.getElementById('email').value.trim();
    var service = document.getElementById('service').value;
    var message = document.getElementById('message').value.trim();

    var serviceLabel = service;
    // Get the selected option's text in the current language
    var sel = document.getElementById('service');
    if (sel.selectedIndex > 0) {
      serviceLabel = sel.options[sel.selectedIndex].text;
    }

    var line = lang === 'en' ? '\n' : '\n';
    var whatsappMsg =
      (lang === 'en' ? '👤 Name: ' : '👤 الاسم: ') + name + line +
      (lang === 'en' ? '📞 Phone: ' : '📞 الجوال: ') + phone + line +
      (email ? (lang === 'en' ? '📧 Email: ' : '📧 البريد: ') + email + line : '') +
      (lang === 'en' ? '🔧 Service: ' : '🔧 الخدمة: ') + serviceLabel + line +
      (lang === 'en' ? '💬 Message: ' : '💬 الرسالة: ') + message;

    var btnTexts = {
      ar: { sending: 'جاري الإرسال...', done: 'إرسال الطلب' },
      en: { sending: 'Sending...', done: 'Send Request' }
    };
    var t = btnTexts[lang] || btnTexts.ar;

    btn.disabled = true;
    btn.textContent = t.sending;

    setTimeout(function () {
      window.open('https://wa.me/966549804777?text=' + encodeURIComponent(whatsappMsg), '_blank');
      form.reset();
      success.classList.add('show');
      btn.disabled = false;
      btn.textContent = t.done;
      setTimeout(function () { success.classList.remove('show'); }, 5000);
    }, 600);
  };

  // Refresh button text on language switch
  document.addEventListener('langChanged', function () {
    var btn = document.querySelector('.form-submit');
    if (btn && !btn.disabled) {
      var lang = document.documentElement.lang || 'ar';
      btn.textContent = lang === 'en' ? 'Send Request' : 'إرسال الطلب';
    }
  });

  // ==========================================
  // 11. GALLERY LIGHTBOX
  // ==========================================
  const galleryImgs = [
    'Assets/Servecis/5791850488167861945 (1).jpg',
    'Assets/Servecis/5791850488167861946.jpg',
    'Assets/Servecis/5791850488167861947.jpg',
    'Assets/Servecis/5791850488167861948.jpg',
    'Assets/Servecis/5791850488167861949.jpg',
    'Assets/Servecis/5791850488167861950.jpg',
    'Assets/Servecis/5791850488167861952 (1).jpg',
    'Assets/Servecis/5791850488167861953.jpg',
    'Assets/Servecis/5791850488167861954.jpg',
    'Assets/PARTNERS/1.png',
    'Assets/PARTNERS/2.png',
    'Assets/PARTNERS/3.png',
    'Assets/PARTNERS/4.png',
    'Assets/PARTNERS/Screenshot 2026-07-20 193017.png',
    'Assets/PARTNERS/Screenshot 2026-07-20 193020.png',
    'Assets/PARTNERS/Screenshot 2026-07-20 193024.png',
    'Assets/PARTNERS/Screenshot 2026-07-20 193028.png',
    'Assets/PARTNERS/Screenshot 2026-07-20 193033.png',
    'Assets/PARTNERS/Screenshot 2026-07-20 193037.png',
    'Assets/PARTNERS/Screenshot 2026-07-20 193042.png',
    'Assets/PARTNERS/Screenshot 2026-07-20 193046.png',
    'Assets/PARTNERS/Screenshot 2026-07-20 193052.png',
    'Assets/PARTNERS/Screenshot 2026-07-20 193057.png',
    'Assets/PARTNERS/WhatsApp Image 2026-07-14 at 9.58.39 PM (1).jpeg',
    'Assets/PARTNERS/WhatsApp Image 2026-07-14 at 9.58.40 PM.jpeg',
    'Assets/PARTNERS/WhatsApp Image 2026-07-14 at 9.58.40 PM (1).jpeg',
    'Assets/PARTNERS/WhatsApp Image 2026-07-14 at 9.58.40 PM (2).jpeg',
    'Assets/PARTNERS/WhatsApp Image 2026-07-14 at 9.58.40 PM (3).jpeg',
    'Assets/PARTNERS/WhatsApp Image 2026-07-14 at 9.58.40 PM (4).jpeg',
    'Assets/PARTNERS/WhatsApp Image 2026-07-14 at 9.58.40 PM (5).jpeg',
    'Assets/PARTNERS/WhatsApp Image 2026-07-20 at 6.44.24 PM.jpeg',
    'Assets/PARTNERS/WhatsApp Image 2026-07-20 at 6.44.32 PM.jpeg',
    'Assets/PARTNERS/WhatsApp Image 2026-07-20 at 6.44.44 PM.jpeg',
    'Assets/PARTNERS/WhatsApp Image 2026-07-20 at 6.44.55 PM.jpeg',
    'Assets/PARTNERS/WhatsApp Image 2026-07-20 at 6.45.00 PM.jpeg',
    'Assets/PARTNERS/WhatsApp Image 2026-07-20 at 6.45.06 PM.jpeg',
    'Assets/PARTNERS/WhatsApp Image 2026-07-20 at 6.45.12 PM.jpeg',
    'Assets/PARTNERS/WhatsApp Image 2026-07-20 at 6.45.18 PM.jpeg',
    'Assets/PARTNERS/WhatsApp Image 2026-07-20 at 6.45.24 PM.jpeg',
    'Assets/PARTNERS/WhatsApp Image 2026-07-20 at 6.45.30 PM.jpeg',
  ];
  let galleryIndex = 0;

  window.openGallery = function (el) {
    var src = el.querySelector('img').getAttribute('src');
    galleryIndex = galleryImgs.indexOf(src);
    if (galleryIndex === -1) galleryIndex = 0;
    document.getElementById('lightboxImg').src = src;
    document.getElementById('galleryLightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeGallery = function (e) {
    if (e && e.target !== e.currentTarget) return;
    document.getElementById('galleryLightbox').classList.remove('active');
    document.body.style.overflow = '';
  };

  window.prevGallery = function () {
    galleryIndex = (galleryIndex - 1 + galleryImgs.length) % galleryImgs.length;
    document.getElementById('lightboxImg').src = galleryImgs[galleryIndex];
  };

  window.nextGallery = function () {
    galleryIndex = (galleryIndex + 1) % galleryImgs.length;
    document.getElementById('lightboxImg').src = galleryImgs[galleryIndex];
  };

  document.addEventListener('keydown', function (e) {
    var lightbox = document.getElementById('galleryLightbox');
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowRight') nextGallery();
    if (e.key === 'ArrowLeft') prevGallery();
  });

  // ==========================================
  // 12. LANGUAGE SWITCHER
  // ==========================================
  var savedLang = localStorage.getItem('dclang') || 'ar';

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-en', lang === 'en');

    var btn = document.getElementById('langToggle');
    if (btn) btn.textContent = lang === 'ar' ? 'EN' : 'عربي';

    // Text content (data-i18n)
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var t = translations[key];
      if (t) el.textContent = t[lang];
    });

    // HTML content (data-i18n-html) - standalone or combined
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var t = translations[key];
      if (t) el.innerHTML = t[lang];
    });

    // Alt attributes
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      var t = translations[key];
      if (t) el.setAttribute('alt', t[lang]);
    });

    // Aria labels
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      var t = translations[key];
      if (t) el.setAttribute('aria-label', t[lang]);
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-place]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-place');
      var t = translations[key];
      if (t) el.setAttribute('placeholder', t[lang]);
    });

    // data-title attributes (blog cards)
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      var t = translations[key];
      if (t) el.setAttribute('data-title', t[lang]);
    });

    // data-desc attributes (blog cards)
    document.querySelectorAll('[data-i18n-desc]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-desc');
      var t = translations[key];
      if (t) el.setAttribute('data-desc', t[lang]);
    });

    // Meta description
    var metaDesc = document.querySelector('meta[data-i18n]');
    if (metaDesc) {
      var metaKey = metaDesc.getAttribute('data-i18n');
      var mt = translations[metaKey];
      if (mt) metaDesc.setAttribute('content', mt[lang]);
    }

    // Title tag
    var titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
      var titleKey = titleEl.getAttribute('data-i18n');
      var tt = translations[titleKey];
      if (tt) titleEl.textContent = tt[lang];
    }

    // Form select options (service names in dropdown)
    document.querySelectorAll('option[data-i18n]').forEach(function (opt) {
      var key = opt.getAttribute('data-i18n');
      var t = translations[key];
      if (t) opt.textContent = t[lang];
    });

    // Map iframe title
    var mapFrame = document.querySelector('iframe[data-i18n]');
    if (mapFrame) {
      var mapKey = mapFrame.getAttribute('data-i18n');
      var mapt = translations[mapKey];
      if (mapt) mapFrame.setAttribute('title', mapt[lang]);
    }

    localStorage.setItem('dclang', lang);
    document.dispatchEvent(new Event('langChanged'));
  }

  // Toggle function called from button
  window.toggleLang = function () {
    var next = document.documentElement.lang === 'ar' ? 'en' : 'ar';
    applyLang(next);
  };

  // Apply saved language on load
  if (savedLang !== 'ar') applyLang(savedLang);

  // Lang toggle button click
  var langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLang);
  }

  // Slide dot aria labels need refreshing after lang switch
  var origGoToSlide = window.goToSlide;
  // Re-apply lang to slide dots after they're created
  setTimeout(function () {
    if (savedLang !== 'ar') {
      document.querySelectorAll('.slide-dot').forEach(function (dot) {
        var idx = Array.from(dot.parentNode.children).indexOf(dot);
        dot.setAttribute('aria-label', (document.documentElement.lang === 'en' ? 'Slide ' : 'الشريحة ') + (idx + 1));
      });
    }
  }, 100);

});

/* ==========================================
   SERVICE MODAL (also used by index.html)
========================================== */
function openModal(el) {
  var modal = document.getElementById('serviceModal');
  if (!modal) return;
  var src = el.getAttribute('data-img');
  document.getElementById('modalImg').src = src;
  var wrap = document.getElementById('modalImgWrap');
  if (src && src.toLowerCase().endsWith('.png')) {
    wrap.className = 'modal-img is-illustration';
  } else {
    wrap.className = 'modal-img';
  }
  var tKey = el.getAttribute('data-i18n-title');
  var dKey = el.getAttribute('data-i18n-desc');
  var lang = document.documentElement.lang || 'ar';
  var tDiv = document.getElementById('modalTitle');
  var dDiv = document.getElementById('modalDesc');
  if (tKey && window.translations && window.translations[tKey]) {
    tDiv.textContent = window.translations[tKey][lang];
  } else {
    tDiv.textContent = '';
  }
  if (dKey && window.translations && window.translations[dKey]) {
    dDiv.textContent = window.translations[dKey][lang];
  } else {
    dDiv.textContent = '';
  }
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if (e && e.target !== e.currentTarget) return;
  var modal = document.getElementById('serviceModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});
