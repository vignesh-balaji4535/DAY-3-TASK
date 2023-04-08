//comparing two unorder json objrct

let obj1={name:"person1",age:5}
let obj2={age:5,name:"person1"}
let obj3={name:"person1",age:5}

let object1=JSON.stringify(obj1);
let object2=JSON.stringify(obj2);
let object3=JSON.stringify(obj3);

console.log(object1);
console.log(object2);
console.log(object3);

if( object1===object2){
  console.log("yes! the json object are same(obj1===obj2)")
}
 else if(object1===object3){
  console.log("yes! the json object are  same(obj1===obj3)")
}
else{
  console.log("No! the json object are not same")
}
