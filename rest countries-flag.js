let xhr=new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all',true)

xhr.onload=function(){
  let response=JSON.parse( this.responseText);
  for(let index=0;index<response.length;index++){
    console.log(response[index].flags)
  }
}
xhr.send()
