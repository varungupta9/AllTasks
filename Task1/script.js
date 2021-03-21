const request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response)
    for(let ele in data)
    {
        console.log(data[ele].name)
    }
}
