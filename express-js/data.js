const axios = require(`axios`);

const fetchData = async (name)=>{

    let data = {};
               await axios
              .get(
                `http://api.weatherapi.com/v1/current.json?key=f85ae18bf4ef484389e50013230901&q=${name}&aqi=no`,
                {
                  headers:{
                    "Transfer-Encoding": "chunked",
                    "Cache-Control": "public, max-age=180",
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((response) => {
                  data = response.data
                  console.log(data);
              })
              .catch((err) => {
                console.log("API call error:", err.message);
              });

              return data;
}


module.exports = fetchData;