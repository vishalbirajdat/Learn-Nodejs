
const interviews = (name)=>{
    console.log(`hello ${name} `);
    return function(topic){
        console.log(`${name}. What is ${topic} ? . Plz explain us.`);
    }
}


const name1 = interviews(`Rohit`);
const name2 = interviews(`Vishal`);
const name3 = interviews(`Mohan`);

console.log(`Welcome student`);
name3(`Blockchain `);
name2(`internet of things `)
name1(`Data Sceince `);
