import './styles.css';
import menu from './menu.json';
import itemTemplate from './template.hbs';
console.log(menu);
console.log(itemTemplate);
const menuRef = document.querySelector('.js-menu');
const item = itemTemplate(menu);
console.log(item);
menuRef.insertAdjacentHTML('afterbegin', item);

const switchInputRef = document.querySelector('input.js-switch-input');
const bodyRef = document.querySelector('body');
console.dir(switchInputRef);
console.log(bodyRef);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

switchInputRef.addEventListener('change', () => {
  if (switchInputRef.checked === true) {
    bodyRef.classList.add(Theme.DARK);
    localStorage.clear();
    localStorage.setItem('DARK', JSON.stringify(Theme.DARK));
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    localStorage.clear();
    localStorage.setItem('LIGHT', JSON.stringify(Theme.LIGHT));
  }
});
console.log(localStorage.getItem('DARK'));

// Как после перезагрузки поставить кнопку на чекед?
if (localStorage.getItem('DARK') === 'dark-theme') {
  switchInputRef.checked = true;
}
