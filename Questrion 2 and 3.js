var request=new XMLHttpRequest() // creating a new object of XMLHttpRequest()
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
// address of the API is given
request.send()

request.onload=function(){
    var data = JSON.parse(request.response) //to convert input String into JSON Obejct.
    console.log(data)

console.log("display all the country flags in console")

for(var i=0;i<data.length;i++){
    console.log(`Country: ${data[i].name} 
                 flag:${data[i].flag}`)
}


console.log("......../////.......///////............../////............///...")
console.log("print all countries name, region, sub region and population")    
for(var i=0;i<data.length;i++){
    console.log(`Country: ${data[i].name},
                 Region:${data[i].region},
                Sub-Region:${data[i].subregion},
                Population:${data[i].population}   `)
}   

}



