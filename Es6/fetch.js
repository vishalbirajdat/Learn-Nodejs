// he fetch() method starts the process of fetching a resource from a server.

// The fetch() method returns a Promise that resolves to a Response object.

async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    myDisplay(y);
  }