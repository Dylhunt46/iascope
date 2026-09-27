document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const toolCards = document.querySelectorAll('.tool-card');

  let currentCategory = 'all';
  let searchQuery = '';

  // Fonction de filtrage combinée (Catégorie + Recherche)
  function filterTools() {
    toolCards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category');
      const cardTitle = card.querySelector('h3').textContent.toLowerCase();
      const cardDesc = card.querySelector('p').textContent.toLowerCase();

      const matchesCategory =
        currentCategory === 'all' || cardCategory === currentCategory;
      const matchesSearch =
        cardTitle.includes(searchQuery) || cardDesc.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Événements sur les boutons de filtre
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      currentCategory = button.getAttribute('data-category');
      filterTools();
    });
  });

  // Événement sur la barre de recherche
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterTools();
    });
  }
});
