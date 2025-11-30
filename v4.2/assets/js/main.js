// Simple helper to make lantern cells clickable without extra markup
const lanternCells = document.querySelectorAll('.lantern-cell[data-href]');
lanternCells.forEach((cell) => {
  cell.addEventListener('click', () => {
    const target = cell.getAttribute('data-href');
    if (target) window.location.href = target;
  });
});
