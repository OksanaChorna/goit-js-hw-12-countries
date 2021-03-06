import fetchCountries from './js/fetchCountries';
import './styles.css';
const refs = {
  formCountry: document.querySelector('#get-country'),
  countryCard: document.querySelector('#country'),
};

refs.formCountry.addEventListener('input', e => fetchCountries(e.target.value));
