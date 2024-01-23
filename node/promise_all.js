// Example 1: Basic Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from a database)
    setTimeout(() => {
      const success = true;
  
      if (success) {
        resolve('Operation successful!');
      } else {
        reject(new Error('Operation failed!'));
      }
    }, 1000);
  });
  
  myPromise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error.message);
    });
  
  // Example 2: Chaining Promises
  const multiplyByTwo = (num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = num * 2;
        resolve(result);
      }, 500);
    });
  };
  
  const addFive = (num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = num + 5;
        resolve(result);
      }, 500);
    });
  };
  
  multiplyByTwo(3)
    .then(addFive)
    .then((finalResult) => {
      console.log('Final result:', finalResult);
    })
    .catch((error) => {
      console.error(error.message);
    });
  
  // Example 3: Promise.all
  const promise1 = Promise.resolve('Promise 1 resolved');
  const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 1000));
  const promise3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Promise 3 rejected')), 500));
  
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log('All promises resolved:', results);
    })
    .catch((error) => {
      console.error('At least one promise rejected:', error.message);
    });
  