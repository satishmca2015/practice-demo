const request = require('request');
/* const url ="https://jsonplaceholder.typicode.com/posts";

request({ url: url }, (error, response) => {
 const data = JSON.parse(response.body)
 console.log(data)
}); */



const geocodeURL ="https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1";
request({ url: geocodeURL, json: true }, (error, response) => {
    console.log(response.body);
 if (error) {
 console.log('Unable to connect to location services!')
 } else if (response.body.code!=200 && response.body!=undefined ) {
 console.log('Unable to find location. Try another search.')
 } else {
 const latitude = response.body.features[0].center[0]
 const longitude = response.body.features[0].center[1]
 console.log(latitude, longitude)
 }
})




/* const user = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
   }
   // The line below uses destructuring
   const { age, location } = user
   console.log(age)
   console.log(location) */
   


