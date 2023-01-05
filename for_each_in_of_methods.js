// for each function


const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}


// for in 

const person = {fname:"John", lname:"Doe", age:25};
let text = "";
for (let x in person) {
  text += person[x] + " ";
}



// for of

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}