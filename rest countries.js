let xhr=new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all',true)

xhr.onload=function(){
  let response=JSON.parse( this.responseText);
  for(let index=0;index<response.length;index++){
   // console.log(response[index].name.common)  -->countries name
   //console.log(response[index].subregion)     --->subregion
   //console.log(response[index].subregion,":",response[index].population) -->subregion with population
    console.log(response[index].regions)   //--> regions
  }
}
xhr.send()
