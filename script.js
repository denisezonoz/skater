document.getElementById('clickMe').addEventListener('click', () => {
  alert('Hello from your new website!');
});

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
});

window.addEventListener('beforeunload', () => {
  document.body.classList.add('fade-out');
});
