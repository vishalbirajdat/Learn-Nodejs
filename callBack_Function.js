// any function is passed as argument

// execute after another function


const FunA = (name, callBack)=>{
    console.log(name);
    callBack();
}


const FunB = ()=>{
        console.log('welcome funB');
}


FunA('welcome funA ', FunB);

