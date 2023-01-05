
function a(){
    console.log('a function running');
    debugger;
    b();
    console.log('a function closed');
}

function b(){
    console.log('b function running');
    debugger;
    c();
    console.log('b function closed');
}

function a(){
    console.log('c function running');
    debugger;
    console.log('c function closed');
}

debugger;
a();
