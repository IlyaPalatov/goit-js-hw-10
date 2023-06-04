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
    showLoader();
    hideError();
    hideCatInfo();
    hideBreedSelect();

    try {
      fetchBreeds()
        .then(breeds => {
          breeds.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed.id;
            option.textContent = breed.name;
            breedSelect.appendChild(option);
          });
          breedSelect.addEventListener('change', handleBreedSelect);
          hideLoader();
          showBreedSelect();
        })
        .catch(() => {
          showError('Ooops! Something went wrong! Try reloading the page!');
          hideLoader();
        });
    } catch (error) {
      showError('Ooops! Something went wrong! Try reloading the page!');
      hideLoader();
    }
  }

  function handleBreedSelect() {
    const breedId = breedSelect.value;
    showLoader();
    hideCatInfo();

    try {
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
          showError('Ooops! Something went wrong! Try reloading the page!');
          hideLoader();
        });
    } catch (error) {
      showError('Ooops! Something went wrong! Try reloading the page!');
      hideLoader();
    }
  }

  function showLoader() {
    loader.style.display = 'block';
  }

  function hideLoader() {
    loader.style.display = 'none';
  }

  function showError(errorMessage) {
    error.style.display = 'block';
    error.textContent = errorMessage;
  }

  function hideError() {
    error.style.display = 'none';
  }

  function showBreedSelect() {
    breedSelect.style.display = 'block';
  }

  function hideBreedSelect() {
    breedSelect.style.display = 'none';
  }

  function showCatInfo() {
    catInfo.style.display = 'block';
  }

  function hideCatInfo() {
    catInfo.style.display = 'none';
  }

  populateBreeds();
});
