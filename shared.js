// shared.js — Navigation & Footer partagés pour toutes les pages A-Sabil

function injectNav(activePage) {
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <a class="nav-logo" href="index.html">
      <img src="assets/logo.png" alt="A-Sabil" style="height:52px;width:auto;" />
    </a>
    <div class="nav-links" id="navLinks">
      <a href="index.html" class="${activePage==='accueil'?'active':''}">Accueil</a>
      <div class="nav-dropdown">
        <a href="#" class="nav-dropdown-trigger ${['forage','plantation','ecole','zakat','aid','omra'].includes(activePage)?'active':''}">
          Nos Projets <span class="nav-arrow">▾</span>
        </a>
        <div class="nav-dropdown-menu">
          <a href="forage.html">💧 Forages au Mali</a>
          <a href="plantation.html">🌳 Plantation d'arbres</a>
          <a href="ecole.html">📚 École Al-Kawthar</a>
          <a href="zakat.html">🌙 Zakat al-maal</a>
          <a href="aid.html">🐑 Aïd al-Adha</a>
          <a href="omra.html">🕌 Omra pour nécessiteux</a>
        </div>
      </div>
      <a href="s-engager.html" class="${activePage==='engager'?'active':''}">S'engager</a>
      <a href="contact.html" class="${activePage==='contact'?'active':''}">Contact</a>
      <a href="qui-sommes-nous.html" class="${activePage==='quisommes'?'active':''}">Qui sommes-nous ?</a>
    </div>
    <div class="nav-ctas">
      <a href="don.html" class="btn-nav-don">Faire un don</a>
      <button class="btn-nav-parrain">Je parraine</button>
      <button class="nav-burger" id="navBurger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;
  document.body.prepend(nav);

  // Dropdown hover
  const dropdown = nav.querySelector('.nav-dropdown');
  const trigger = nav.querySelector('.nav-dropdown-trigger');
  const menu = nav.querySelector('.nav-dropdown-menu');
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) menu.classList.remove('open');
  });

  // Mobile burger
  const burger = nav.querySelector('#navBurger');
  const links = nav.querySelector('#navLinks');
  burger.addEventListener('click', () => {
    links.classList.toggle('mobile-open');
    burger.classList.toggle('open');
  });
}

function injectFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="assets/logo.png" alt="A-Sabil" style="height:60px;width:auto;filter:brightness(0);" />
        </div>
        <div class="footer-tagline">Association humanitaire agissant pour l'eau, l'éducation et l'alimentation au Mali.</div>
        <div class="footer-addr">
          A-Sabil France<br/>12 rue Sadi Carnot<br/>93170 Bagnolet, France<br/><br/>
          A-Sabil Mali<br/>Daoudabougou, rue 133<br/>Bamako, Mali<br/><br/>
          <a href="mailto:contact@a-sabil.org">contact@a-sabil.org</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">À propos</div>
        <ul class="footer-links">
          <li><a href="qui-sommes-nous.html">Nous connaître</a></li>
          <li><a href="qui-sommes-nous.html#objectifs">Nos objectifs</a></li>
          <li><a href="qui-sommes-nous.html#mali">A-Sabil Mali</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Nos actions</div>
        <ul class="footer-links">
          <li><a href="plantation.html">Plantation d'arbres</a></li>
          <li><a href="ecole.html">Parrainez l'école</a></li>
          <li><a href="forage.html">Forages au Mali</a></li>
          <li><a href="aid.html">Aïd al-Adha</a></li>
          <li><a href="zakat.html">Zakat al-maal</a></li>
          <li><a href="omra.html">Omra pour nécessiteux</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Liens utiles</div>
        <ul class="footer-links">
          <li><a href="don.html">Faire un don</a></li>
          <li><a href="s-engager.html">S'engager</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <div class="footer-col-title" style="margin-top:20px">Nos réseaux</div>
        <div class="footer-social">
          <a href="https://instagram.com/asabil_mali" target="_blank" class="social-btn">IG</a>
          <a href="https://twitter.com/asab_2_asso" target="_blank" class="social-btn">𝕏</a>
          <a href="https://facebook.com" target="_blank" class="social-btn">FB</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 A-Sabil — Association loi 1901 · Bagnolet, France</span>
      <span><a href="#">Mentions légales</a> · <a href="#">Politique de confidentialité</a></span>
    </div>
  `;
  document.body.appendChild(footer);
}

// Fade-up animation observer
function initFadeUp() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initFadeUp();
  // Re-observe after a tick in case React rendered late
  setTimeout(initFadeUp, 500);
});
