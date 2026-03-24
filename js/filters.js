let activeCategory = "";
let searchTerm = "";

export function setCategory(category) {
  activeCategory = category;
  applyFilters();
}

export function setSearch(term) {
  searchTerm = term.toLowerCase();
  applyFilters();
}

import { companies } from "./data.js";
import { renderCards } from "./cards.js";

function applyFilters() {
  let filtered = companies;

  // filtro por categoria
  if (activeCategory) {
    filtered = filtered.filter(
      item => item.category === activeCategory
    );
  }

  // filtro por busca
  if (searchTerm) {
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
  }

  renderCards(filtered);
}