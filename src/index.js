'use strict';
import menuCardTemplates from './templates/menu-card.handlebars';
import menu from './menu.json';

const menuNode = document.querySelector('.js-menu');
const inpTheme = document.querySelector('#theme-switch-toggle');

const cardsMenu = menuCardTemplates(menu);
menuNode.insertAdjacentHTML('beforeend', cardsMenu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

uploadTheme();

inpTheme.addEventListener('change', () => {
  const replacementЕtheme = document.body.classList.toggle(Theme.DARK);
  localStorage.setItem('dark', replacementЕtheme);
});

function uploadTheme() {
  const keyLocalStorage = localStorage.getItem('dark');
  const parse = JSON.parse(keyLocalStorage);

  if (parse) {
    inpTheme.checked = true;
    document.body.classList.add(Theme.DARK);
  }
}
