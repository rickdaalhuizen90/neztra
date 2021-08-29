// Infinite scroll
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

