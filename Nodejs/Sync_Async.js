const fs = require('fs');

const gators = [{
    type: 'cayman'
}];


const getData = () => {
  let data = fs.readFileSync('./swamp/cayman.json', 'utf8');

  if (!data) return [];
  else {
    const file = JSON.parse(data);
    return file;
  }
}

const data = getData();

console.log(data);