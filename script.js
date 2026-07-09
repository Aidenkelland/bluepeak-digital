/* ==========================================================================
   BluePeak Digital — Script
   Sections:
   1. Theme toggle (dark/light)
   2. Mobile nav
   3. Header scroll state + back-to-top
   4. Scroll reveal animations
   5. Animated stat counters
   6. Portfolio filtering
   7. FAQ accordion
   8. Contact form (Formspree)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. Theme toggle ---------- */
  // Note: theme preference is kept in memory only (no localStorage),
  // so it resets on page reload. Swap in localStorage if hosting this
  // outside of an environment that restricts it.
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');

  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  if (prefersLight) root.setAttribute('data-theme', 'light');

  themeToggle.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    root.setAttribute('data-theme', isLight ? 'dark' : 'light');
  });

  /* ---------- 2. Mobile nav ---------- */
  const header = document.getElementById('siteHeader');
  const navToggle = document.getElementById('navToggle');

  const closeNav = () => {
    header.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Close on Escape (keyboard users) and on click outside the menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.classList.contains('nav-open')) {
      closeNav();
      navToggle.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (header.classList.contains('nav-open') && !header.contains(e.target)) {
      closeNav();
    }
  });

  /* ---------- 3. Header scroll state + back-to-top ---------- */
  const backToTop = document.getElementById('backToTop');

  const onScroll = () => {
    const scrolled = window.scrollY > 40;
    header.classList.toggle('is-scrolled', scrolled);
    backToTop.classList.toggle('is-visible', window.scrollY > 600);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- 4. Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- 5. Animated stat counters ---------- */
  const counters = document.querySelectorAll('.stat-number');

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const decimals = parseInt(el.dataset.decimal || '0', 10);
    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value = target * eased;
      el.textContent = value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObserver.observe(el));

  /* ---------- 6. Portfolio filtering ---------- */
  const filterTabs = document.querySelectorAll('.filter-tab');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      const filter = tab.dataset.filter;
      portfolioCards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !match);
      });
    });
  });

  /* ---------- 7. FAQ accordion ---------- */
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    const panel = trigger.nextElementSibling;

    trigger.addEventListener('click', () => {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      // Close all other panels for a single-open accordion
      document.querySelectorAll('.accordion-trigger').forEach(t => {
        if (t !== trigger) {
          t.setAttribute('aria-expanded', 'false');
          t.nextElementSibling.style.maxHeight = null;
        }
      });

      trigger.setAttribute('aria-expanded', String(!isOpen));
      panel.style.maxHeight = isOpen ? null : panel.scrollHeight + 'px';
    });
  });

  /* ---------- 8. Contact form (Formspree) ---------- */
  const ctaForm = document.getElementById('ctaForm');
  const formNote = document.getElementById('formNote');
  const formSubmitBtn = ctaForm.querySelector('button[type="submit"]');
  const submitBtnDefaultText = formSubmitBtn.textContent;

  ctaForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('ctaName').value.trim();
    const email = document.getElementById('ctaEmail').value.trim();
    const honeypot = ctaForm.querySelector('[name="_gotcha"]').value;

    formNote.classList.remove('is-error');

    if (!name || !email) {
      formNote.textContent = 'Please fill in your name and email.';
      formNote.classList.add('is-error');
      return;
    }

    // Honeypot tripped — a real visitor never fills this field. Pretend
    // success without actually submitting, so bots don't learn it failed.
    if (honeypot) {
      formNote.textContent = `Thanks, ${name.split(' ')[0]} — we'll be in touch within 24 hours.`;
      ctaForm.reset();
      return;
    }

    formSubmitBtn.disabled = true;
    formSubmitBtn.textContent = 'Sending...';
    formNote.textContent = '';

    try {
      const response = await fetch(ctaForm.action, {
        method: 'POST',
        body: new FormData(ctaForm),
        headers: { 'Accept': 'application/json' }
      });

      if (!response.ok) throw new Error('Form submission failed');

      formNote.classList.remove('is-error');
      formNote.textContent = `Thanks, ${name.split(' ')[0]} — we'll be in touch within 24 hours.`;
      ctaForm.reset();
    } catch (err) {
      formNote.classList.add('is-error');
      formNote.textContent = 'Something went wrong sending that — please email bluepeakdigitalweb@gmail.com or WhatsApp us instead.';
    } finally {
      formSubmitBtn.disabled = false;
      formSubmitBtn.textContent = submitBtnDefaultText;
    }
  });

  /* Footer year */
  document.getElementById('year').textContent = new Date().getFullYear();
});
