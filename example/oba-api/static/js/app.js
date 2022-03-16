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

let dates = results.map(element => {
  return {
    title: element.titles,
    text: element.custom[0].text,
    summaries: element.summaries,
    img: element.coverimages
    // username: element.username.toLowerCase()
  }
 
})
 console.log(dates);
  dates.forEach((item, i) => {
    const html = `
            <li>
              <h2>${item.title}</h2>
              <p>${item.text}</p>     
              <p>${item.summaries ? item.summaries : 'Geen samenvatting'}</p>    
                     
              <img src="${item.img}">
            </li>
          `;
    ul.insertAdjacentHTML('beforeend', html);
    // const p = document.querySelector('main ul.results li p');
    // console.log(p);
  });
}





// function logData(data) {
//   const p = document.querySelector('main ul.results li p');
//   console.log(p);
// }


// .slice(-20, -10) + ' ' + item.custom[0].text.slice(-29, -24) + ' - ' + item.custom[0].text.slice(-9, -4)

//  <p>${item.custom.text ? item.custom.text[0] : 'Geen Informatie'}</p> 

// map over array and change text: to my own date with increment++

		// Map maakt een nieuwe array. en die "returned" die naar de variabel die ervoor staat.
