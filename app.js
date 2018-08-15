// Init weather object
const weather = new Weather('Boston', 'MA');

weather.changeLocation('Queens', 'NY')

weather.getWeather()
  .then(results => {
    console.log(results)
  })
  .catch(err => console.log(err))

