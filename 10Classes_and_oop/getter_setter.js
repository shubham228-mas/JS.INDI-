 class user {
    constructor(email , password){
        this.email = email;
        this.password = password
    }
    get email(){
        return `${this._email.toUpperCase()} Shubham6498g@gmail.com`
    }
    set email(value){
        this._email = value
    }

   get password(){//getter define kiya hai to stter bhi krna hi pdega 
    return `${this._password}chai`
   }
   set password(value){
    this._password = value
   }
 }
 const chai  = new user("s@shubham.ai","shubham")
 console.log(chai.password)
 console.log(chai.email)