(function () {
  // ----- Mobile menu & dropdowns -----
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('main-menu');

  function closeMenu() {
    if (!menu) return;
    menu.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    document.querySelectorAll('.menu > li.open').forEach(li => {
      li.classList.remove('open');
      li.querySelector('button')?.setAttribute('aria-expanded', 'false');
    });
  }

  toggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.menu > li > button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = btn.parentElement;
      const isOpen = parent.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));

      // On mobile, close other open dropdowns for clean accordion behavior
      if (window.innerWidth <= 960 && isOpen) {
        document.querySelectorAll('.menu > li.open').forEach(other => {
          if (other !== parent) {
            other.classList.remove('open');
            other.querySelector('button')?.setAttribute('aria-expanded', 'false');
          }
        });
      }
    });
  });

  // Close mobile menu on clicking any navigation link or clicking outside
  document.addEventListener('click', (e) => {
    if (!menu?.contains(e.target) && !toggle?.contains(e.target)) {
      closeMenu();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) closeMenu();
  });

  // Prevent default jump for placeholder links
  document.querySelectorAll('a[href="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      if (window.innerWidth <= 960) closeMenu();
    });
  });

  // ----- Hero carousel -----
  const hero = document.getElementById('hero');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dots = Array.from(document.querySelectorAll('.dot'));
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const INTERVAL = 3500; // time each slide stays on screen, in milliseconds

  let current = 0;
  let timer = null;
  let paused = reduceMotion;

  function render(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === current);
      s.classList.toggle('prev', i < current);
      s.setAttribute('aria-hidden', String(i !== current));
    });
    dots.forEach((d, i) => d.setAttribute('aria-current', String(i === current)));
  }

  function next() { render(current + 1); }
  function prev() { render(current - 1); }

  function start() {
    stop();
    if (!paused) timer = setInterval(next, INTERVAL);
  }
  function stop() { if (timer) clearInterval(timer); timer = null; }

  function setPaused(value) {
    paused = value;
    if (pauseBtn) {
      pauseBtn.textContent = paused ? 'Play' : 'Pause';
      pauseBtn.setAttribute('aria-pressed', String(paused));
    }
    paused ? stop() : start();
  }

  nextBtn?.addEventListener('click', () => { next(); start(); });
  prevBtn?.addEventListener('click', () => { prev(); start(); });
  dots.forEach(d => d.addEventListener('click', () => {
    render(Number(d.dataset.index)); start();
  }));
  pauseBtn?.addEventListener('click', () => setPaused(!paused));

  // Pause while hovered or focused so users can read
  hero?.addEventListener('mouseenter', stop);
  hero?.addEventListener('mouseleave', () => { if (!paused) start(); });
  hero?.addEventListener('focusin', stop);
  hero?.addEventListener('focusout', () => { if (!paused) start(); });

  // Keyboard arrows when the carousel has focus
  hero?.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { next(); start(); }
    if (e.key === 'ArrowLeft') { prev(); start(); }
  });

  // Swipe / drag support (touch and mouse)
  const slidesEl = document.getElementById('slides');
  let startX = null;
  let deltaX = 0;

  if (slidesEl) {
    slidesEl.addEventListener('pointerdown', e => {
      startX = e.clientX;
      deltaX = 0;
      hero?.classList.add('is-dragging');
      stop();
    });
    slidesEl.addEventListener('pointermove', e => {
      if (startX === null) return;
      deltaX = e.clientX - startX;
    });
    function endDrag() {
      if (startX === null) return;
      const threshold = 40;
      if (deltaX < -threshold) next();
      else if (deltaX > threshold) prev();
      startX = null;
      hero?.classList.remove('is-dragging');
      if (!paused) start();
    }
    slidesEl.addEventListener('pointerup', endDrag);
    slidesEl.addEventListener('pointercancel', endDrag);
    slidesEl.addEventListener('pointerleave', endDrag);
  }

  render(0);
  if (paused && pauseBtn) {
    pauseBtn.textContent = 'Play';
    pauseBtn.setAttribute('aria-pressed', 'true');
  }
  start();

  // ----- Back to top button -----
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    backTop?.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });
  backTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
})();
