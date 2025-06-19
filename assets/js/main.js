// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // 1) 모바일 햄버거 메뉴 토글
  const navToggle = document.querySelector('.nav-toggle');
  const nav       = document.querySelector('.nav');

  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  // 2) FAQ 아코디언
  document.querySelectorAll('.faq-item__header').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling; // .faq-item__body
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // 모든 열려 있는 아코디언 닫기
      document.querySelectorAll('.faq-item__header').forEach(h => {
        h.setAttribute('aria-expanded', 'false');
        h.nextElementSibling.style.maxHeight = null;
      });

      // 지금 클릭한 것만 열기
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // 3) 스무스 스크롤 (헤더 메뉴 / footer 소셜링크)
  document.querySelectorAll('.nav__link[href^="#"], .footer__social-link[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(a.getAttribute('href'))
              .scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 4) 데스크탑 리사이즈 시 모바일 메뉴 닫기
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
