class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)//Super keyqord class me jake jo extend ki hai apne aap 
        // username bhi lelega sath me this bhi lelega or sab kuch krdega bs tum username likho 
        this.email = email
        this.password= password
    }
    addCourse(){
        console.log(`A NEW COURSE WAS ADDED BY ${this.username}`)
    }
}
const chai = new Teacher("CHAI","email","4807")
// console.log(chai.logMe)
chai.addCourse()

const masalaChai = new User("Shubham")
masalaChai.logMe()

console.log(masalaChai instanceof User)//instanceof is the keyword
//  for the cheking is the chai is from teacher or any instacne 
//  is realted to teacher and user 
