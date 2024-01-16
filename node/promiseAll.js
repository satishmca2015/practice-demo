const axios = require('axios');

// URLs for parallel requests
const urls = [
  'https://api.example.com/data1',
  'https://api.example.com/data2',
  'https://api.example.com/data3'
];

// Create an array of Promises using axios.get for each URL
const requests = urls.map(url =>
  axios.get(url).catch(error => {
    console.error(`Error fetching ${url}:`, error.message);
    return null; // or handle the error as needed
  })
);

// Execute multiple requests in parallel
Promise.all(requests)
  .then(responses => {
    // 'responses' will be an array containing the results for each request
    // Use 'response.data' to access the actual data returned by each API
    responses.forEach((response, index) => {
      if (response) {
        console.log(`Response from ${urls[index]}:`, response.data);
      }
    });
  })
  .catch(error => {
    // This block will only be executed if an error occurs that isn't caught in the individual requests
    console.error('Error during parallel requests:', error);
  });
