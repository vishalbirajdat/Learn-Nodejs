function main(){
    asyncFun();
    syncFun();
}

const syncFun = ()=>{
    console.log("Hi sync");
console.log("End sync");
}

 
const asyncFun = async () =>{
    console.log("Hi async");

    setTimeout(() => {
        console.log("Let us see what happens");
    }, 2000);
    
    console.log("End async");
}


main();