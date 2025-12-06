document.addEventListener('DOMContentLoaded', () => {
  // hamburger menu
  const hamburgerButtons = document.querySelectorAll('.hamburger');
  hamburgerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = document.getElementById('nav');
      if (!nav) return;
      nav.classList.toggle('open');
      btn.classList.toggle('is-open');
      // mobile: simple show/hide
      if(nav.style.display === 'flex') nav.style.display = 'none';
      else nav.style.display = 'flex';
    });
  });

  // members interaction
  const membersGrids = document.querySelectorAll('.members-grid, #membersGrid2');
  membersGrids.forEach(grid => {
    grid.addEventListener('click', (ev) => {
      const card = ev.target.closest('.member-card');
      if (!card) return;
      // toggle active
      const already = card.classList.contains('active');
      document.querySelectorAll('.member-card.active').forEach(c => c.classList.remove('active'));
      if (!already) card.classList.add('active');
      // change owner gradient
      const grad = card.dataset && card.dataset.gradient;
      if (grad) {
        document.documentElement.style.setProperty('--owner-gradient', grad);
        const ownerEl = document.querySelector('.owner-name') || document.getElementById('ownerName') || document.getElementById('ownerNameMembers');
        if (ownerEl) {
          ownerEl.style.background = grad;
          ownerEl.style.backgroundSize = '200% 200%';
          // restart animation
          ownerEl.style.animation = 'none';
          void ownerEl.offsetWidth;
          ownerEl.style.animation = '';
        }
      }
    });
  });

  // default owner gradient from owner card
  const ownerCard = document.querySelector('.member-card.owner');
  if (ownerCard && ownerCard.dataset && ownerCard.dataset.gradient) {
    document.documentElement.style.setProperty('--owner-gradient', ownerCard.dataset.gradient);
    const ownerEl = document.querySelector('.owner-name') || document.getElementById('ownerName');
    if (ownerEl) ownerEl.style.background = ownerCard.dataset.gradient;
  }
});
