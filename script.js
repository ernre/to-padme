const openButton = document.querySelector('#openMessage');
const reveal = document.querySelector('#reveal');

openButton.addEventListener('click', () => {
  document.body.classList.add('opened');
  reveal.setAttribute('aria-hidden', 'false');
  window.setTimeout(() => reveal.scrollIntoView({ behavior: 'smooth', block: 'start' }), 280);
});
