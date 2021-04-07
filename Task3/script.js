const request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response)
    console.log("****************Countries population < 200000***************************")
    var pop = data.filter((pop1) => {
        return pop1.population < 200000;
    });
    for( let e in pop){
    console.log(pop[e].name +":"+pop[e].population)
    }
    console.log("****************Countries from ASIA Region****************************")

    var country = data.filter((country) => {
        return country.region === "Asia";
    });
    for( let e in country){
    console.log(country[e].name)
    }
    console.log("****************Name , Capital & Flag****************************")

    data.forEach(element => {
        console.log("Name:"+element.name+", Capital :"+element.capital+", & Flag: "+element.flag)
    });
    console.log("****************Total Population****************************")

    var population = data.reduce((acc,ele)=>{
       return acc+ele.population
    },0)
    console.log("Total Population is :" +population)
    console.log("****************Countries with currency as US dollars***************************")
    var currency = data.filter((currency) => {
        return currency.currencies[0].name === "United States dollar";
    });
    for( let e in currency){
    console.log(currency[e].name)
    }

}