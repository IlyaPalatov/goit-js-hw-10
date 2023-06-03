// app.js
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

document.addEventListener('DOMContentLoaded', function () {
  const loader = document.querySelector('.loader');
  const error = document.querySelector('.error');
  const catInfo = document.querySelector('.cat-info');
  const breedSelect = document.querySelector('.breed-select');
  const breedName = document.querySelector('.breed-name');
  const description = document.querySelector('.description');
  const temperament = document.querySelector('.temperament');
  const catImage = document.querySelector('.cat-info img');

  function populateBreeds() {
    fetchBreeds()
      .then(breeds => {
        breeds.forEach(breed => {
          const option = document.createElement('option');
          option.value = breed.id;
          option.textContent = breed.name;
          breedSelect.appendChild(option);
        });
        breedSelect.addEventListener('change', handleBreedSelect);
        loader.style.display = 'none';
        breedSelect.style.display = 'block';
      })
      .catch(() => {
        showError();
      });
  }

  function handleBreedSelect() {
    const breedId = breedSelect.value;
    showLoader();
    hideCatInfo();

    fetchCatByBreed(breedId)
      .then(cat => {
        breedName.textContent = cat.breed;
        description.textContent = cat.description;
        temperament.textContent = cat.temperament;
        catImage.src = cat.image;
        showCatInfo();
        hideLoader();
      })
      .catch(() => {
        showError();
        hideLoader();
      });
  }

  function showLoader() {
    loader.style.display = 'block';
  }

  function hideLoader() {
    loader.style.display = 'none';
  }

  function showError() {
    error.style.display = 'block';
  }

  function hideError() {
    error.style.display = 'none';
  }

  function showCatInfo() {
    catInfo.style.display = 'block';
  }

  function hideCatInfo() {
    catInfo.style.display = 'none';
  }

  populateBreeds();
});
