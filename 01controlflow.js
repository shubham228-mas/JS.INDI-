//control flow 

// const IsUsserLoggedIn = true 
// const temperature = 51
// if(temperature > 50 ){
//     console.log("less than 50  ")
// }else{
//     console.log("temperature greater than 50 ")
// }
// console.log("executed ")
//< , > , >=,<= , == , != , (===)strict checing of datatyps equal or not 

// const score = 200
// if(score >100){
//     let power = "fly"//var agr use krte hai too usko ha scope ke bht bhi use kr skte hain
//     //  isiliye hr jgah let aur const hi use krna vhaiye error is good for understanding 
//     // var ko acces kiya ja skta hai scope ke bhr bhi 
//     console.log(`user power ${power}`)
// }
// console.log(`user power ${power}`)
//  const balance = 144
// //  if( balance > 500) console.log("greater  than 50
// if(balance < 500 ){
//     console.log(" less than 500 ")
// }
// else if(balance < 750  ){
//     console.log(" less than 750 ")
// }
// else if(balance < 900  ){
//     console.log(" less than 900 ")
    
// }else{
//     console.log(" less than 1200 ")
    
// }

const userLoggedIn = true 
const debitCard = true 
const loggedInFromGoggle = false 
const loggedInFromEmail = true 

if( userLoggedIn && debitCard && 2==3  ){
    console.log("allowed ")
}
if(loggedInFromEmail|| loggedInFromGoggle) {
    console.log("allowed from anyone ")
}
