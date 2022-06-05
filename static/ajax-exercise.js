'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  fetch('/fortune')
  .then(response => response.text())
  .then(responseData => {
    document.querySelector('#fortune-text').innerHTML = responseData;
  });
};

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;
  
  fetch('/weather.json')
    .then((response) => response.json())
    .then((jsonData) => {
        const weather = jsonData;
        document.querySelector('#weather-info').innerHTML = weather.forecast;
    });

  // TODO: request weather with that URL and show the forecast in #weather-info
  
};

  //  which kind of AJAX call to make - POST?



document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();
  
  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
  const url = '/order-melons.json';
  const data= {qty:document.querySelector('#qty-field').value,
   melon_type:document.querySelector('#melon-type-field').value,}
   
   fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
   })
   .then(response =>  response.json())
   .then(jsonData => {
    document.querySelector('#order-status').innerHTML = jsonData.msg;
    
    if (jsonData.code === "ERROR"){
      document.querySelector('#order-status').classList.add("order-error");
    }
   }); 
};

document.querySelector('#order-form').addEventListener('submit', orderMelons);


//FURTHER STUDY
function getDogImage(evt){
  
  const url = "https://dog.ceo/api/breeds/image/random";
  fetch(url)
    .then(response => response.json())
    .then(jsonData=> {
        const imgUrl = jsonData.message;
        document.querySelector('#dog-image')
            .insertAdjacentHTML(
      "beforeend", `<div><img src=${imgUrl}></div>`); 
    });

}

document.querySelector('#get-dog-image').addEventListener('click', getDogImage);
