const user = {
    username: " shubham",
    loginCount: 8,
    signnedIn : true,

    getUserDetails: function(){
        // console.log("get user details from database ")
        // console.log(`Username: ${this.username}`)// we use this ki ham bta ske ki ham apne keyword ki hi baat kr rhe hai 
         console.log(this) // yeah current context pe kaam krta hai this   console.log(this)
//          {
//   username: ' shubham',
//   loginCount: 8,
//   signnedIn: true,
//   getUserDetails: [Function: getUserDetails]
// } this is the cureent context we use this for 
    }
}
// console.log(user.username)
// console.log(user.getUserDetails())


