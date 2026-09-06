const email = []

if(email){
    console.log("got the eamil ")
}
else {
    console.log(" not got the email")
}

/*falsy values      // truthy values 
                    
false                1:"0"//0 in the string is truthy value
0                    2:'false'//string of false is truthy 
0-                   3:" "//space inside perentheses is a truthy value 
bigInt 0n            4: [] //empty array is truthy value 
""                   5:{} // empty object is truthy value       
null                 6:function(){} // this is also sa truthy value 
undefined
NaN
*/
if (email.length === 0 ) {
    console.log("array is empty ");
    
}
const userEmail = {}

if(Object.keys(userEmail).length ===0 ){
    console.log(" object is empty ")
}

//NULLISH COALESCING OPERATOR (??): NULL AND UNEFINED 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 
val1 = undefined ?? 40 ?? 50

console.log(val1)

//ternerary operator    

// condition ? true : false 

const IceTeaPrice = 100

IceTeaPrice >=80 ? console.log(" more than 80 "): console.log("less than 80")