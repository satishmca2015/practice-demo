async function fetchData(url) {
    try {
      // Make the HTTP GET request
      const response = await fetch(url);
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the JSON response
      const data = await response.json();
  
      // Use the data from the response
      console.log(data);
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error('Fetch error:', error.message);
    }
  }
  
  // URL to fetch data from
  const url = 'https://api.publicapis.org/entries';
  
  // Call the function with the URL
  fetchData(url);
  