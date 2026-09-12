function SetUsername(username){
    //complex DB calls
    this.username= username
    console.log("called")
} 

function createUser(username , email,password){
    SetUsername.call(this, username)// asal me yeah ese call nhi hota iske sath call method lgana pdta hai to jake call hota hai 
    // verna sirf refernce jata hai call nhi hota sath me this bhi lgana hota hai 

    this.email= email
    this.password=password

}
const chai  = new createUser("SHUBHAM","shubham6498g@gmail.com","4807")
console.log(chai)