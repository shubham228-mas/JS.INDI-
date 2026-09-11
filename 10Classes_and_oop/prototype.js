//let myName = " hitesh    "
//let myChannel = "chai     "

//consle.log(myName.trueLength);



let myHeroes  = [" thor " , " spiderman "]

let herPowers ={
    thor : " hammer ",
    spiderman : " sling ",

    getSpiderPower : function(){
        console.log(`spidu power is ${this.spiderman}`);

    }
    

}
Object.prototype.shubham = function(){
    console.log(`shubham is present in all objects `)
}
Array.prototype.heyShubham = function(){
    console.log(`Shubham says hello `)
}
// herPowers.shubham()
// myHeroes.shubham()
// myHeroes.heyShubham()
// herPowers.heyShubham()

//INHERITANCE 

const user = {
    name:"CHAI",
    email:"chai@gmail.com"
}

const teacher = {
    makeVideo: true,
}
const teachingpot = {
    isAvailable: false,
}
const TAsupport= {
    makeAssignment: ' JS assignment ',
    fullTime: true,
    __proto__:teachingpot
}
teacher.__proto__ = user

//modern syntax 

Object.setPrototypeOf(teachingpot , teacher)


let anotherUserName = "chaiaurcode     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    //  console.log(`${this.name}`);
    console.log(`true length is : ${this.trim().length}`);
}

anotherUserName.trueLength()
"shubham".trueLength()
"icetea".trueLength()