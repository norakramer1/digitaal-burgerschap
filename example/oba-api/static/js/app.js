/*** Fetching data -> refactor into module later ***/
const ul = document.querySelector('main ul.results');
const input = document.querySelector('input');
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'Informatiepunt Digitale Overheid';
// const table = 'Informatiepunt Digitale Overheid';
// &table:Activiteiten&
const key = 'bfdd3deee1f7b77b3d021e958f75c7ee';
const secret = '4289fec4e962a33118340c888699438d';
const detail = 'Default';
// const deatilLevel = &detaillevel=${detail};
// ${table}
const url = `${cors}${endpoint}${query}}&authorization=${key}&detaillevel=${detail}&output=json`;

const config = {
  Authorization: `Bearer ${secret}`
};

fetch(url, config)
  .then(response => {
    return response.json();
  })
  .then(data => {
    //console.log(data);
    render(data);
  })
  .catch(err => {
    console.log(err);
  });

// render data
function render(data) {
  const results = data.results;

  console.dir(results);
  results.forEach((item, i) => {
    const html = `
            <li>
              <h2>${item.titles[0]}</h2>
              <p>${
                item.custom[0].text.slice(-20, -10) + ' ' + item.custom[0].text.slice(-29, -24) + ' - ' + item.custom[0].text.slice(-9, -4)
              }</p>     
              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>    
                     
              <img src="${item.coverimages}">
            </li>
          `;
    ul.insertAdjacentHTML('beforeend', html);
  });
}

// function logData(data) {
//   const p = document.querySelector('main ul.results li p');
//   console.log(p);
// }

const p = document.querySelector('main ul.results li p');
console.log(p);


//  <p>${item.custom.text ? item.custom.text[0] : 'Geen Informatie'}</p> 