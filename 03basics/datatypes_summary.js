// // PRIMITIVE 

// // 7 TYPES : STRING , BOOLEAN , NUMBER , NULL , UNDEFINED , SUMBOL , BIGINT 

// const score = 100
// const scoreValue  = 100.8//type of number 

// const isLoggedIn = true 
// const outSideTemp = null// type of null = object ayega 

// let userEmail ;

// const id = Symbol('123')
// const anotherId = Symbol('123') //type of symbol

// console.log(id === anotherId )

// // const bigNumber  = 38405034975034750  number if at the end is not n if n then big int 



//  const heroes = [" shoto ","wolvon","kd","sahiljaatt "]; //type of ibject 
// let myObj= {

//     name : "shubham",
//     age : 34,
// }

// const myFunction = function(){ //type of function 

//     console.log( "Hello World ");
// }

// console.log(typeof heroes  )
// REFERANCE TYPE OR (NON PRIMITIVE )

//  Array , objects , functions 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive ) and Heap memory (non primitive )

let myYoutubename  = " shubhambansal.com "

let anotherName = myYoutubename;
 anotherName = "aartisharmadotcom "


 console.log(myYoutubename) // hhere stack gives the copy of the another means referance is copy ppf first one 
//goes to stack 
 console.log(anotherName)

 let userOne=  {
        email: "user.com ",
        upi: "monabansal@gmail.com"
 }
 let userTwo = userOne 

 userTwo.email = " shubham@gmail.com"//goes to heap or take referance from heap memory both user one and usertwo 

 console.log( userOne.email)
 console.log( userTwo.email)

 


