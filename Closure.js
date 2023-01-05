function parrent(){
    console.log(`Parent function `)
    const innerFun= ()=>{
        console.log(`inner function`);
    }

    return innerFun;
}

// parrent();
// parrent()();
let parInner = parrent();
parInner();