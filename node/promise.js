const promise = new Promise(function (reject, resolve) {
  if (1 === 1) {
    resolve("Woking fine");
  } else {
    reject("Error is case");
  }
});

promise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
