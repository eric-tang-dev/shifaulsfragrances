document.addEventListener('DOMContentLoaded', () => {
  // existing nav/hero fade-in...
  document.querySelector('nav').classList.add('fade-in');
  document.querySelector('.hero')?.classList.add('fade-in');

  // staggered fade-in for product cards
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add('visible'), i * 200);
  });
});
