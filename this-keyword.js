// this keyword refer to object it belong to.

// Alone, this refers to the global object 
// this = windows object by default;

console.log(this);

// in a regular function, this refer to global object 

function sum(){
    var add = 2+3;
    console.log(add);
    console.log(this);
}


// in method, this refer to owner object


const MyObject = {
    name : "vishal birajdar",
    qulif : "b.tech",

    sum : function(){
        var add = 2+3;
        console.log(add);
        console.log(this);
    }
}


// in a function, in strict this is undefine
"use strict";

function sum(){
    var add = 2+3;
    console.log(add);
    // console.log(this);
}
