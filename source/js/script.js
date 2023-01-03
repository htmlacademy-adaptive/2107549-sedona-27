let navMain = document.querySelector('.nav-menu');
let navToggle = document.querySelector('.main-header__nav-toggle');
let navClosetoggle = document.querySelector('.nav-menu__close-toggle');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav-menu--closed')) {
    navMain.classList.remove('nav-menu--closed');
    navMain.classList.add('nav-menu--opened');
  }
});

navClosetoggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav-menu--opened')) {
    navMain.classList.remove('nav-menu--opened');
    navMain.classList.add('nav-menu--closed');
  }
});
