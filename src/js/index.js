(async () => {
  const $navMobile = document.getElementById('nav-mobile');
  const $enlaces = document.getElementById('enlances');
  const $header = document.getElementById('header');
  const btnSwitch = document.querySelector('#switch');

  //   Mode nocturne
  btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    //   Guardamos el modo nocturne en localstores
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('dark-mode', 'true');
    } else {
      localStorage.setItem('dark-mode', 'false');
    }
  });

  //Obtenemos el modo actual que nos encontramos

  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
  } else {
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
  }
  // var lastScrollTop = 70;

  // window.addEventListener('scroll', function () {
  //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   if (scrollTop >= lastScrollTop) {
  //     $header.style.top = '-70px';
  //   } else {
  //     $header.style.top = '0px';
  //   }
  //   scrollTop = lastScrollTop;
  // });

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop >= 70) {
      $header.classList.add('up');
    }
    if (scrollTop <= 0) {
      $header.classList.remove('up');
    }
  });

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

  async function getData() {
    const response = await fetch(
      'https://my-json-server.typicode.com/hdmjesus/-Projects/db'
    );
    const data = await response.json();
    return data;
  }

  const {
    hdjesus: { proyectos },
  } = await getData();
  console.log(proyectos[0].img);
})();
