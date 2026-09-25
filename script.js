document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const sections = document.querySelectorAll('.tab-section');

  function activateTab(id) {
    tabs.forEach((tab) => tab.classList.toggle('is-active', tab.dataset.tab === id));
    sections.forEach((section) => section.classList.toggle('is-active', section.id === `section-${id}`));
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activateTab(tab.dataset.tab));
  });

  document.querySelectorAll('.toc-row').forEach((row) => {
    row.addEventListener('click', () => activateTab(row.dataset.goto));
  });

  document.querySelectorAll('.tool-header').forEach((header) => {
    header.addEventListener('click', () => {
      const card = header.closest('.tool-card');
      const expand = card.querySelector('.tool-expand');
      const label = header.querySelector('.toggle-label');
      const isOpen = !expand.hidden;
      expand.hidden = isOpen;
      label.textContent = isOpen ? 'See details ↓' : 'Hide details ↑';
    });
  });

  const suggestionInput = document.getElementById('suggestion-input');
  const submitButton = document.getElementById('submit-suggestion');
  const suggestionsList = document.getElementById('suggestions-list');

  submitButton.addEventListener('click', () => {
    const value = suggestionInput.value.trim();
    if (!value) return;

    const item = document.createElement('div');
    item.className = 'suggestion-item';
    item.textContent = value;
    suggestionsList.insertBefore(item, suggestionsList.firstChild);

    suggestionInput.value = '';
  });
});
