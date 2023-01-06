// The await keyword can only be used inside an async function.

// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:


async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("I can do it !!");
    });
    let data =  await myPromise;
    console.log(data);
  }
  
  myDisplay();