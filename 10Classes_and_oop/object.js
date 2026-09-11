function  numMulby5(num){
    return num*5
}
numMulby5.power = 2 
console.log(numMulby5(5))
console.log(numMulby5.power)
console.log(numMulby5.prototype)

function cretaeUser(username,score){
    this.username = username;
    this.score = score;

}
cretaeUser.prototype.increment  = function(){
    this.score++ //jisne bulaya  hai uska score bhdado 

}
cretaeUser.prototype.printMe  = function(){
    console.log(`score is ${this.score}`)//jisne bulay hai uska dikhao 
}


const chai = new cretaeUser("CHAI", 25)
const tea =  new cretaeUser("TEA", 250)

chai.printMe()
tea.printMe()

// THEORY OF NEW KEYWORD 

/*
Heres what happens behind the scene when the new keyword is 
used:

A new object is created : the new keyword initiates that 
the creation of a new javascript object 

A prototype is linked : the newly created object gets linked 
to prototype property of the cunstructor function ,this 
means tht it has acces to properties and methods defined 
on the construvtor's prototype 

the constructor is called : the constructor function is 
calle woth the specifeid arguments and this is bound to 
the newly created object . if no explicit return value is 
specifie from the constructor , javascript assumes this ,
the newly created objet . to be the intended return value .

the new object is returned : after the consctructer function
 has been called , if it doesnt return a non primitive value 
(object , array , function , etc.) the newly created object 
is returned .


*/