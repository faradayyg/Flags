import * as countryNames from './countries/country_names.json';
import './css/styles.css'

let countrySelect = document.querySelector('#countrySelect');
Object.keys(countryNames['default']).forEach(key => {
    let option = document.createElement('option');
    option.value = key;
    option.text = countryNames['default'][key];
    countrySelect.appendChild(option);
})
