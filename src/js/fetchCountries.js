const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/name/${searchQuery}`).then(response => {
    if (response.status === 200) {
      return response.json();
    }
    return [];
  });
}
export default fetchCountries;
