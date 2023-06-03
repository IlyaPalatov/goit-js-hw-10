
export function fetchBreeds() {
  const apiKey = 'live_Cg5x1xE9Wu0Ss9tK2xDXTBHstn7wll5lstSstJEczpvMVPxz3Jhq9fSejqi42qsk';
  const url = `https://api.thecatapi.com/v1/breeds?api_key=${apiKey}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => data.map(breed => ({
      id: breed.id,
      name: breed.name
    })));
}

export function fetchCatByBreed(breedId) {
  const apiKey = 'live_Cg5x1xE9Wu0Ss9tK2xDXTBHstn7wll5lstSstJEczpvMVPxz3Jhq9fSejqi42qsk';
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${apiKey}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const cat = data[0];
      return {
        image: cat.url,
        breed: cat.breeds[0].name,
        description: cat.breeds[0].description,
        temperament: cat.breeds[0].temperament
      };
    });
}
