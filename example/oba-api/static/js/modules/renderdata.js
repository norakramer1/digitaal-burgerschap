// render data
export function renderData(data) {
    const ul = document.querySelector('main ul.results');
    const results = data.results;
    console.dir(results);
    let activiteitenCheck = data.results.filter(element => element.id.indexOf('oba-activiteiten') !== -1);
  
  let dates = activiteitenCheck.map(element => {
      
    return {
      title: element.titles,
      text: element.custom[0].text.slice(-20, -10),
      summaries: element.summaries,
      img: element.coverimages
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
  });
  }


//   let newRecords = records.map(r => {
//     const date = moment(r.date, 'DD/MM/YYYY').valueOf());
//     return {...r, date}; // using spread operator just to get a new reference of the object
// }
