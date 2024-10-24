'use strict';

const population = document.querySelectorAll('.population');
let totalPopulation = 0;

for (const country of population) {
  const textContent = country.textContent.replace(/,/g, '');

  totalPopulation += parseInt(textContent, 10);
}

const averagePopulation = totalPopulation / population.length;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString();

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString();
