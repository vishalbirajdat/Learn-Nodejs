const bcryptjs = require(`bcryptjs`);

const compareHash = async(pass, hash)=>{
    try {
   
        const compared = await bcryptjs.compare(pass, hash);
        return compared;
    
             
    } catch (error) {
            return null;
    }
}


module.exports = compareHash;