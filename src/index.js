import fetchCountries from './js/fetchCountries';
import './styles.css';
import countryCard from './templates/country-card.hbs';
import countriesCard from './templates/countries-card.hbs';
const debounce = require('debounce');
const { defaults, error } = require('@pnotify/core');
defaults.width = '400px';

const refs = {
  formCountry: document.getElementById('get-country'),
  countryCard: document.getElementById('country'),
};

const countrySearch = debounce(e => {
  e.preventDefault();
  const searchCountry = fetchCountries(e.target.value);
  searchCountry
    .then(countries => {
      if (countries.length > 10) {
        error({
          text: 'Too many matches found. Please enter a more specific query!',
          // delay: 3000,
        });
        // стилі alert;
      } else if (countries.length >= 2 && countries.length <= 10) {
        renderCountries(countries);
      } else {
        renderCountryCard(countries);
      }
    })
    .catch(onFetchError);
}, 500);

refs.formCountry.addEventListener('input', countrySearch);

function renderCountries(countries) {
  refs.countryCard.innerHTML = '';
  const countryInfo = countriesCard(countries);
  refs.countryCard.insertAdjacentHTML('beforeend', countryInfo);
}

function renderCountryCard(countries) {
  refs.countryCard.innerHTML = '';
  const countryInfo = countryCard(countries);
  refs.countryCard.insertAdjacentHTML('beforeend', countryInfo);
}

function onFetchError(error) {
  console.log(error);
}
