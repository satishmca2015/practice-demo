const axios = require('axios');
// Define the URL of the API endpoint
const url = 'https://api.example.com/endpoint';

// Define the data you want to send in the POST request
const postData = {
  key1: 'value1',
  key2: 'value2'
};

// Define the token for authorization
const token = 'your_token_here';

// Make the POST request
axios.post(url, postData, {
  headers: {
    // Include the token in the Authorization header
    'Authorization': `Bearer ${token}`,
    // Define any other headers as needed
    'Content-Type': 'application/json'
  }
})
.then(response => {
  // Handle the response here
  console.log('Response:', response.data);
})
.catch(error => {
  // Handle the error here
  console.error('Error:', error);
});



//============================================================
//USING ASYNC AWAIT

const axios = require('axios');

async function makePostRequest() {
  const url = 'https://api.example.com/endpoint';
  const postData = {
    key1: 'value1',
    key2: 'value2'
  };
  const token = 'your_token_here';

  try {
    const response = await axios.post(url, postData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    // Handle the response
    console.log('Response:', response.data);
  } catch (error) {
    // Handle any errors
    console.error('Error:', error.message);
  }
}

// Call the async function to make the request
makePostRequest();
