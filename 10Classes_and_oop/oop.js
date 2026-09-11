// const user = {
//     username: " shubham",
//     loginCount: 8,
//     signnedIn : true,

//     getUserDetails: function(){
//         // console.log("get user details from database ")
//         // console.log(`Username: ${this.username}`)// we use this ki ham bta ske ki ham apne keyword ki hi baat kr rhe hai 
//          console.log(this) // yeah current context pe kaam krta hai this   console.log(this)
//          {
//   username: ' shubham',
//   loginCount: 8,
//   signnedIn: true,
//   getUserDetails: [Function: getUserDetails]
// } this is the cureent context we use this for 
  //  }
//}
// console.log(user.username)
// console.log(user.getUserDetails())

// const promiseOne = new Promise()
// const date = new Date() // new kqyword nya context bnane me kam ata hai like new cunstructtor 

function user( username , loginCount , isLoggedIn ){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greetings = function(){
        console.log(`welcome${this.username}`)
    }


    return this ; //already automaticlay define hota hai likhna jruri nhi hai per ham likhenge 
}
const userOne  = new user("Shubham" , 23, true)
const userTwo  = new  user("Chaiaurcode" , 11, false)
console.log(userOne.constructor);
// console.log(userTwo)

// when new kwyword use an empty objcet  created then 
// step 1 object created 
// conctructor function call hota hai or arguments pack krta hai sabko pack krta hai aur hame de deta hai 
// sare eelemeccnt inject ho jata hai aur agle step me hame voh sab mil jata hai 