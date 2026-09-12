class User {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log( `username is ${this.username}`)
    }
    static createId(){//access nhi krne deta khi bhi static keyword chahe kuch bhi kro
        return `1234`
    }
}
const chai = new User("chai")
// console.log(chai.createId())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email= email
    }
}
const iphone = new Teacher("iphone","i@phone.com")
iphone.createId()

