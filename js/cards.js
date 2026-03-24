import { companies } from "./data.js";

export function renderCards() {
  const container = document.getElementById("cards-container");

  container.innerHTML = companies.map(company => `
    <article class="card">

      <div class="card__image">
        <img src="${company.image}" alt="${company.name}">
        <span class="card__badge">TOP</span>
      </div>

      <div class="card__content">
        <h3 class="card__title">${company.name}</h3>

        <p class="card__description">
          ${company.category}
        </p>

        <div class="card__info">
          <span>⭐ ${company.rating}</span>
          <span>${company.location}</span>
        </div>
      </div>

    </article>
  `).join("");
}