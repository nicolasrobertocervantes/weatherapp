const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=4edff24892aa70308daee193af48e991&query=' + latitude + ',' + longitude + '&units=f'

    request({ url: url, json: true }, (error, response) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }
        else if (response.body.error){
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, `${response.body.current.weather_descriptions[0]}.  It is currently ${response.body.current.temperature} degrees out and feels like ${response.body.current.feelslike} degrees out. There is ${response.body.current.precip}% chance of rain.`)
        }
    })
}

module.exports = forecast;