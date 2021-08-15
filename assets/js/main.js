// Infinite scroll
new Waypoint.Infinite({
  element: document.querySelectorAll('.infinite-container')[0],
  offset: '75%'
});

const button = document.querySelector('#menu .button');
const form = document.querySelector('#menu');

button.addEventListener('click', () => {
  if (form.classList.contains('toggle')) {
    form.classList.remove('toggle');
  } else {
    form.classList.add('toggle');
  }

  document.getElementById('search-query').focus();
});

const menu = document.querySelector('#menu');

$(window).scroll(() => {    
    const scroll = $(window).scrollTop();

    if (scroll >= 250) {
      menu.classList.add('scroll');
    } else {
      menu.classList.remove('scroll');
    }
});