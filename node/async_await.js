// This is a mock function that simulates a data fetching operation
// and returns a promise that resolves after 2 seconds
function fetchData() 
{
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 2000);
    });
}



  
// An async function where we await the result of fetchData
async function getData() 
{
  try {
    console.log("Fetching data...");
    const data = await fetchData(); // The function execution pauses here until fetchData() is resolved
    console.log(data); // This will be logged after the promise is resolved
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
  
  // Calling the async function
  // getData();

//=====================================================================
  function fun1(){
    return new Promise(function(resolve,reject){
        resolve('Data fetched successfully');
    });
  }


  async function fun(){
      try {
          console.log('fetching data'); 
          const data =  await fun1();
          console.log(data);

      } catch (error) {
        console.log(error);
      }
  }

  fun();
  