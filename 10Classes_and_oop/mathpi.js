const descripter = Object.getOwnPropertyDescriptor(Math)

// console.log(descripter)

// console.log(Math.PI)
// Math.PI= 5 
// console.log(Math.PI)

const chai = {
    name: "ginger chai",
    price : 370,
    isAvailable : true,
     orderChai : function(){
        console.log("chai nhi bani ")
     }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"))// yeah chai ki property nhi chai
//  ke andr jo property hai unko
//  btata hai kyuki chai ek object hai uske ander properties hai 

// and how can i change the property 

Object.defineProperty(chai , 'name',{
    // writable : false, 
    enumerable: false,   
    
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (const [key , value] of Object.entries(chai)) {// enteris is use to iteratet the object properties
    if(typeof value !== 'function'){ 
    console.log(`${key} : ${value}`)
    }
}