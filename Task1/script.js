const request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response)
    var res = data.reduce((acc,res1) => {
        return acc+res1.population;
    },0);
    console.log(res);
}
