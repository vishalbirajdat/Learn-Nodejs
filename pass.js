// pass by value
var a = 6;
console.log(a);
var b = a;
console.log(b);
b = b+5;
console.log(b);
// output 
// 6
// 6
// 11


// pass by  referance

var obj1 = {
    name:"vishal",
    job:"Metaverse Developer Intern",
    status:false
}

console.log(obj1);

var obj2 = obj1;
console.log(obj2);

obj2.status = true;
console.log(obj1);
console.log(obj2);


// output 
// { name: 'vishal', job: 'Metaverse Developer Intern', status: false }
// { name: 'vishal', job: 'Metaverse Developer Intern', status: false }
// { name: 'vishal', job: 'Metaverse Developer Intern', status: true }
// { name: 'vishal', job: 'Metaverse Developer Intern', status: true }
