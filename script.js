document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const url = card.dataset.link;
    if (url) window.open(url, '_blank', 'noopener');
  });
});