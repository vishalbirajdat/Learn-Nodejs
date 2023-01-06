async function main() {
    let dataFetch =  await fetch("https://api.covid19api.com/");
    let data = await dataFetch.json();
    console.log(data.countriesRoute.Path);
}


main();