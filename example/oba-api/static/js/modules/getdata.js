/*** Fetching data -> refactor into module later ***/
import { renderData } from './renderdata.js'

let query;
export function getData() {
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const key = 'bfdd3deee1f7b77b3d021e958f75c7ee';
const secret = '4289fec4e962a33118340c888699438d';
const detail = 'Default';
const url = `${cors}${endpoint}${query}}&authorization=${key}&detaillevel=${detail}&refine=true&output=json`;
const config = {
  Authorization: `Bearer ${secret}`
};

fetch(url, config)
  .then(response => {
    return response.json();
  })
  .then(data => {
    //console.log(data);
    renderData(data);
   // renderData();
  })
  
  .catch(err => {
    console.log(err);
  });

}

document.querySelector('ul li a.ehbo').addEventListener('click', function (e) {
    e.preventDefault();
    query = 'Eerste Hulp Bij Online';
    getData();
  });
  
  
  document.querySelector('ul li a.digitaal').addEventListener('click', function (e) {
    e.preventDefault();
    query = 'Informatiepunt Digitale Overheid';
    getData();
    

});