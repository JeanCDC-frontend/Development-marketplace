import { renderCards } from "./cards.js";

document.addEventListener("DOMContentLoaded", () => {
  renderCards();
});

import { setCategory } from "./filters.js";

export function initCategoryFilter() {
  const categories = document.querySelectorAll(".category");

  categories.forEach(cat => {
    cat.addEventListener("click", () => {
      const value = cat.dataset.category;

      setCategory(value);
    });
  });
}

import { setSearch } from "./filters.js";

export function initSearch() {
  const input = document.getElementById("search-input");

  input.addEventListener("input", (e) => {
    setSearch(e.target.value);
  });
}

import { renderCards } from "./cards.js";
import { initCategoryFilter } from "./filters.js";
import { initSearch } from "./filters.js";

document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  initCategoryFilter();
  initSearch();
});

categories.forEach(cat => {
  cat.addEventListener("click", () => {

    categories.forEach(c => c.classList.remove("active"));
    cat.classList.add("active");

    setCategory(cat.dataset.category);
  });
});