const $navMobile = document.getElementById('nav-mobile');
const $enlaces = document.getElementById('enlances');
const $header = document.getElementById('header');
const $hero = document.getElementById('hero');

//   DOMContentLoaded

//  Media Queries
const ipad = window.matchMedia('Screen and (max-width:767px)');

function toogleBtnMenu() {
  if ($enlaces.classList.contains('dos')) {
    $enlaces.classList.remove('dos');
    $enlaces.classList.add('uno');
  } else {
    $enlaces.classList.remove('uno');
    $enlaces.classList.add('dos');
  }
}

function validation(event) {
  if (event.matches == true) {
    // Este escuchador de eventos solo se activara cuando se cumpla la condicion de el matchMedia sea true y es true cuando la pantalla tiene una ancho menos de 767px.

    $navMobile.addEventListener('click', toogleBtnMenu);
  } else {
    // Por el contrario este se desactivara o se removera cuando la pantalla sea mayor a 767px
    console.log(event.matches);
    $navMobile.removeEventListener('click', toogleBtnMenu);
  }
}

document.addEventListener('DOMContentLoaded', () => validation(ipad));
ipad.addListener(validation);

function scroling() {
  window.addEventListener('scroll', () => {
    let coords = $hero.getBoundingClientRect();
    if (coords.top >= 0) {
      $header.classList.toggle('bajate');
    } else {
      $hero.classList.toggle('bajate');
    }
  });
}
window.addEventListener('load', scroling);
