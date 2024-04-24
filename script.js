document.addEventListener('DOMContentLoaded', () => {
  hamburgerToggle();
  handleScroll();
});

function hamburgerToggle() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerIcon = hamburgerMenu.querySelector('.hamburger-icon');

  hamburgerMenu.addEventListener('click', () => {
    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('active');
  });
}

function handleScroll() {
  const specificScrollPosition = 50;

  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const hamburgerIcon = hamburgerMenu.querySelector('.hamburger-icon');
  const menuLinks = document.querySelector('.menu-links');

  window.addEventListener('scroll', function () {
    if (
      menuLinks.classList.contains('open') &&
      window.scrollY > specificScrollPosition
    ) {
      menuLinks.classList.remove('open');
      hamburgerIcon.classList.remove('active');
    }
  });
}
