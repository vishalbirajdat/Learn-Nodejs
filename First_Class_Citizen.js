// in javascript we can assign a function to a variable

const thankYou = function(){
    console.log('thank you so much !');
}

thankYou();


// pass a function as a Arument


const fun1 = ()=>{
    return 'Hello  ';
}

const passFun = (sayHi, name)=>{
console.log(sayHi() + name)
}

passFun(fun1, 'Vishal');



// returning function

function a(){
    console.log(' a ');
    return function b(){
        console.log(' b ')
    }
}


// a();
// a()();

const c = a();

c();
