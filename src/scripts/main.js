'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const openBtn = document.querySelector('.icon--menu');
  const closeBtn = document.querySelector('.icon--close');

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.add('menu--open');
    document.body.classList.add('no-scroll');
  });

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.remove('menu--open');
    document.body.classList.remove('no-scroll');
  });
});

