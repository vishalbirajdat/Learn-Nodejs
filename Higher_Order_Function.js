// use argument as other function 
// return function as a result

const interviews = (name)=>{
    return function(topic){
        console.log(`hii ${name}. What is ${topic} ? . Plz explain us.`);
    }
}

interviews(`Vishal`)(`Blockchain`);

const name = interviews(`Rohit`);
name(`Data Sceince`);
