(function () {

  var NAV = `
    <nav class="mxd-nav__wrap" data-lenis-prevent="">
      <div class="mxd-nav__contain loading__fade">
        <a href="#0" class="mxd-nav__hamburger" aria-label="Menu">
          <div class="hamburger__base"></div>
          <div class="hamburger__line"></div>
          <div class="hamburger__line"></div>
        </a>
      </div>
      <div class="mxd-menu__wrapper">
        <div class="mxd-menu__base"></div>
        <div class="mxd-menu__contain">
          <div class="mxd-menu__inner">
            <div class="mxd-menu__left">
              <p class="mxd-menu__caption menu-fade-in">&#128640; Dise&#241;o con prop&#243;sito<br>y desarrollo de alta calidad</p>
              <div class="main-menu">
                <nav class="main-menu__content">
                  <ul id="main-menu" class="main-menu__accordion">
                    <li class="main-menu__item">
                      <a class="main-menu__link btn btn-anim" href="index.html"><span class="btn-caption">Inicio</span></a>
                    </li>
                    <li class="main-menu__item">
                      <a class="main-menu__link btn btn-anim" href="works-masonry.html"><span class="btn-caption">Proyectos</span></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="mxd-menu__right">
              <div class="menu-promo">
                <div class="menu-promo__content">
                  <p class="menu-promo__caption menu-fade-in">&#128075; &#161;Hola! Soy Luis Fernando,<br>UX Designer e Ingeniero de Software<br>apasionado por proyectos con prop&#243;sito.<br>📍 Quito, Ecuador</p>
                </div>
              </div>
            </div>
            <div class="mxd-menu__data menu-fade-in">
              <p class="t-xsmall"><a class="no-effect" href="https://github.com/stronglakes" target="_blank">@stronglakes</a></p>
              <p class="t-xsmall"><i class="ph ph-copyright"></i> 2026</p>
            </div>
          </div>
        </div>
      </div>
    </nav>`;

  var FOOTER = `
    <footer id="mxd-footer" class="mxd-footer">
      <div class="mxd-footer__footer-blocks">

        <div class="footer-blocks__column animate-card-3">
          <div class="footer-blocks__card fullheight-card">
            <div class="footer-blocks__nav">
              <ul class="footer-nav">
                <li class="footer-nav__item anim-uni-in-up"><a href="index.html" class="footer-nav__link btn-anim"><span class="btn-caption">Inicio</span></a></li>
                <li class="footer-nav__item anim-uni-in-up"><a href="works-masonry.html" class="footer-nav__link btn-anim"><span class="btn-caption">Proyectos</span></a></li>
              </ul>
            </div>
            <div class="footer-blocks__links anim-uni-in-up">
              <p class="t-xsmall t-muted">Making the internet a purposeful site</p>
            </div>
          </div>
        </div>

        <div class="footer-blocks__column animate-card-3">
          <div class="footer-blocks__card">
            <p class="mxd-point-subtitle anim-uni-in-up">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor"><path d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6z"/></svg>
              <a href="mailto:fuerteslagos@gmail.com?subject=Hablemos%20de%20tu%20proyecto">fuerteslagos@gmail.com</a>
            </p>
          </div>
          <div class="footer-blocks__card">
            <p class="mxd-point-subtitle anim-uni-in-up">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor"><path d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6z"/></svg>
              Quito, Ecuador &#127466;&#127464;
            </p>
          </div>
        </div>

        <div class="footer-blocks__column animate-card-3">
          <div class="footer-blocks__card fullheight-card">
            <div class="footer-blocks__block">
              <div class="footer-blocks__title anim-uni-in-up">
                <p class="footer-blocks__title-l">Redes</p>
              </div>
              <div class="footer-blocks__socials">
                <ul class="footer-socials">
                  <li class="footer-socials__item anim-uni-in-up"><a href="https://github.com/stronglakes" class="footer-socials__link" target="_blank">GitHub</a></li>
                  <li class="footer-socials__item anim-uni-in-up"><a href="https://www.linkedin.com/in/luis-fernando-fuertes-0987b6153/" class="footer-socials__link" target="_blank">LinkedIn</a></li>
                  <li class="footer-socials__item anim-uni-in-up"><a href="https://www.instagram.com/stronglakes/" class="footer-socials__link" target="_blank">Instagram</a></li>
                </ul>
              </div>
            </div>
            <div class="footer-blocks__links anim-uni-in-up">
              <p class="t-xsmall t-muted">Luis Fernando Fuertes <i class="ph-bold ph-copyright"></i> 2026</p>
            </div>
          </div>
        </div>

      </div>
    </footer>`;

  var PROMO_MEDIA = [
    { type: 'img', src: 'img/works/LOPDP/800x800_card-image-01.webp', alt: 'LOPDP' },
    { type: 'img', src: 'img/works/LOPDP/800x800_card-image-02.webp', alt: 'LOPDP' },
    { type: 'img', src: 'img/works/LOPDP/1200x1200_service-image-04.webp', alt: 'LOPDP' },
    { type: 'img', src: 'img/works/ituran/800x800_card-image-01.webp', alt: 'Ituran' },
    { type: 'img', src: 'img/works/subin-migracion/subin-migracion.webp', alt: 'Subin' },
    { type: 'img', src: 'img/works/holiday/subin-holiday-party.webp', alt: 'Holiday Party' },
    { type: 'img', src: 'img/works/farmacias-economicas/proyecto-farmacias-economicas.png', alt: 'Farmacias Económicas' },
    { type: 'img', src: 'img/works/adopta-club/tarjeta-club-3.png', alt: 'Adopta Club' },
    { type: 'img', src: 'img/works/visit-quito/visit-quito-mobile.png', alt: 'Visit Quito' },
    { type: 'img', src: 'img/hero/Luis-Fernando-Fuertes-cuadrada.png', alt: 'Luis Fernando Fuertes' },
    { type: 'video', src: 'video/ituran/rastreo.mp4', alt: 'Ituran' },
    { type: 'video', src: 'video/adopta-club/adopta-club.mp4', alt: 'Adopta Club' },
    { type: 'video', src: 'video/visit-quito.mp4', alt: 'Visit Quito' },
    { type: 'video', src: 'video/codigo.mp4', alt: 'Código' },
    { type: 'video', src: 'video/Holiday/INVITE.mp4', alt: 'Holiday Party' },
  ];

  function promoMediaHTML(item, cls) {
    if (item.type === 'video') {
      return '<video class="promo-image ' + cls + '" autoplay muted loop playsinline><source src="' + item.src + '" type="video/mp4"></video>';
    }
    return '<img class="promo-image ' + cls + '" src="' + item.src + '" alt="' + item.alt + '">';
  }

  function buildPromoImages() {
    var pool = PROMO_MEDIA.slice();
    for (var i = pool.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = pool[i]; pool[i] = pool[j]; pool[j] = t;
    }
    return promoMediaHTML(pool[0], 'promo-image-1') +
           '\n                ' + promoMediaHTML(pool[1], 'promo-image-2') +
           '\n                ' + promoMediaHTML(pool[2], 'promo-image-3');
  }

  var CTA = `
    <div class="mxd-section overflow-hidden">
      <div class="mxd-container">
        <div class="mxd-block">
          <div class="mxd-promo">
            <div class="mxd-promo__inner anim-zoom-out-container">
              <div class="mxd-promo__bg"></div>
              <div class="mxd-promo__content">
                <p class="mxd-promo__title anim-uni-in-up">
                  <span class="mxd-promo__caption reveal-type">&#191;Tienes un proyecto en mente?</span>
                </p>
                <div class="mxd-promo__controls anim-uni-in-up">
                  <a class="btn btn-anim btn-default btn-large btn-additional slide-right-up" href="mailto:fuerteslagos@gmail.com?subject=Hablemos%20de%20tu%20proyecto">
                    <span class="btn-caption">Hablemos</span>
                    <i class="ph-bold ph-arrow-up-right"></i>
                  </a>
                </div>
              </div>
              <div class="mxd-promo__images">
                ` + buildPromoImages() + `
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  var navEl = document.getElementById('site-nav');
  if (navEl) {
    var navTemp = document.createElement('div');
    navTemp.innerHTML = NAV;
    navEl.parentNode.replaceChild(navTemp.firstElementChild, navEl);
  }

  var footerEl = document.getElementById('site-footer');
  if (footerEl) {
    var isProjectPage = /project-details/.test(window.location.pathname);
    if (!isProjectPage) {
      var ctaTemp = document.createElement('div');
      ctaTemp.innerHTML = CTA;
      footerEl.parentNode.insertBefore(ctaTemp.firstElementChild, footerEl);
    }
    var footerTemp = document.createElement('div');
    footerTemp.innerHTML = FOOTER;
    footerEl.parentNode.replaceChild(footerTemp.firstElementChild, footerEl);
  }

})();
