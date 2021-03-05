const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];

    const cards = document.querySelector('.cards');


    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let pimg = document.createElement('img');

        h2.innerHTML = `${prophet.name} <span style="color:red"> ${prophet.lastname}</span>`;
        p.innerHTML = `Date of Birth: ${prophet.birthdate} <br></br> Place of Birth: ${prophet.birthplace}`
        pimg.setAttribute('src', prophet.imageurl);
        pimg.setAttribute('alt', prophet.name + prophet.lastname);
        pimg.style.boxShadow ='0 0 30px #333'
        card.append(h2);
        card.append(p)
        card.append(pimg)
        cards.append(card);
    });
  });