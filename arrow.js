const user = {
    username : "shubham ",
    price : 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website `)//this can access all varibales in the
        //  scope like username price etc
        // console.log(this);//prints all scope variables or curent context 
        
    }
}
// user.welcomeMessage()
// user.username = " sam "
// user.welcomeMessage();
// console.log(this);//jab ham node ke andr hai to yeah emty object hota hai  {} like this 
//and  if we console this in brose sbse jada windows varibales hai and we use these in DOM

// function one(){
//     let username = " shubham "
//     console.log(this.username)// in the node envorionment // this cannot be run in the 
//     // funtion only in objets can execute 

// }
// one()


// by this format of functipn decleration this funtion cannot be execute 
// throught this format also for notes
// const chai = function(){
     
//     let username = " shubham "
//     console.log(this.username)// in the node envorionment // this cannot be run in the 
//     // funtion only in objets can execute
// } 
// chai()

const chai = () => {
     
    let username = " shubham "
    console.log(this.username)// in the node envorionment // this cannot be run in the 
    // funtion only in objets can execute
} 
// chai()
// const addTwo = (num1 ,num2 ) => {
//     return num1+num2
// }
const addTwo = (num1 ,num2 ) =>   num1 + num2 //implicit function of arrow no need to write return or brackte 
const addTwo = (num1 ,num2 ) =>   (num1 + num2) 
const addTwo = (num1 ,num2 ) =>  ({username:"shubham"})//object ko hmesha brackets ke ander
//  hi return krna pdta hai 
console.log(addTwo(6,7))

// const myArray = [4,5,3,4,6,4]

// myArray.forEach(()=>{}) syntax for looping functions example 




