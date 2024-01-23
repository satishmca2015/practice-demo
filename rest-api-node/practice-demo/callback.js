const geocode = function(callback) 
{
    setTimeout(() => {
        const data = {
        latitude: 10,
        longitude: 20
        }
        callback(data)
    }, 2000)
}



   geocode(function(result)  {
    console.log(result)
   })