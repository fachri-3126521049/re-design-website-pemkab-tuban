(function () {
  'use strict';

  /* ---- Menu mobile ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- Tandai menu aktif saat klik ---- */
  var links = document.querySelectorAll('.main-nav a');
  links.forEach(function (a) {
    a.addEventListener('click', function () {
      links.forEach(function (l) { l.classList.remove('active'); });
      a.classList.add('active');
    });
  });

  /* ---- Hitung naik angka statistik (sekali saat muat) ---- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fmt = function (n, d) {
    return n.toLocaleString('id-ID', { minimumFractionDigits: d, maximumFractionDigits: d });
  };
  document.querySelectorAll('[data-count]').forEach(function (el) {
    var target = parseFloat(el.dataset.count);
    var dec = parseInt(el.dataset.decimals || '0', 10);
    var suffix = el.dataset.suffix || '';
    if (reduce) { el.textContent = fmt(target, dec) + suffix; return; }
    var start = null, dur = 1200;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * eased, dec) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });

  /* ---- Sorot menu sesuai bagian yang sedang dilihat ---- */
  var profil = document.querySelector('a[href="#profil"]');
  var hero = document.getElementById('profil');
  if ('IntersectionObserver' in window && hero && profil) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { profil.classList.toggle('active', e.isIntersecting); });
    }, { threshold: 0.2 }).observe(hero);
  }
})();