// function sayMyname(){
//     console.log("s")
//     console.log("h")
//     console.log("u")
//     console.log("b")
//     console.log("h")
//     console.log("a")
//     console.log("m")
// }
// // sayMyname()//execution of function only saymyname wihtout perentheses gives
// //  only referances means yeah vaha rehta hai 

// function addTwoNumbers (number1 , number2 ){//parametterss 
//         console.log(number1 + number2)
// }
// function addTwoNumbers (number1 , number2 ){//parameters 
//         let result = number1 + number2 
//         return result //after return no console would be executed 
//         console.log(" shubham ");   // not executed after return type 
// }

//another method of return 
function addTwoNumbers (number1 , number2 ){//parameters 
        // direct return the output 
        return number1+ number2;
        
}
 const result = addTwoNumbers(65,5)//argumenstS
//  console.log("result: ", result) //pehle undefined how kr rha tha ba nhi krrha kyuki
//   hamne return tyyype leke let result kiya 
function logginUser(userName = " sam " ) {//default valuw if perenthesse are empty 

    if(!userName ){
        console.log(" please enter a name ")
        return
    }
    return `${userName} just logged in `;

}
// console.log(logginUser("shubham"))//empty perenthsiss gives undefined and in the perenthese empty gives nothing 

function calculationCartPrice(...num1){//REST OPERATOR IS SPEREAD OPERATOR ALG ALG JJAGH ALG
    //  ALG NAME USE KRENGE ... IS REST AND SPREAD AND THIS CONVERT IT INTO AN ARRAY 
        return num1 ;

}
// console.log(calculationCartPrice(3455,544,344,3467,2234444,876))
const user = {
        username : "shuham",
        price : 299
}
function handleObject (anyobject){
    // console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)

}
// handleObject(user)
 handleObject({
    username:"sam",
    price : 199
 })

 const myNewArray = [200,500,35,100];

 function returnSecondValue(getArraay){

            return getArraay[3];
 }
//  console.log(returnSecondValue(myNewArray))
 console.log(returnSecondValue([300,500,38,600]))

