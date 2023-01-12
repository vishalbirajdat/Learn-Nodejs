const bcryptjs = require(`bcryptjs`);


const hashme = async (pass)=>{
    try {
   
    const hashed = await bcryptjs.hash(pass, 10);
    console.log(`hashedme : ${hashed}`)
    return hashed;

         
} catch (error) {
    console.log(`hashedme : ${error}`)
        return null;
}
}



module.exports = hashme;