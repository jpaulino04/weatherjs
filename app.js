//Init Storage
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
//Init UI object
const ui = new UI;

//Get Weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', e => {

  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  

  //Change Location
  weather.changeLocation(city, state)

  //Set location in Loc.Sto
  storage.setLocationData(city, state);

  //Get and display weather
  getWeather();

  //Close modal
  $('#locModal').modal('hide');
})




//get weather function
function getWeather(){
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err))
}

