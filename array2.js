const  myHeroes = [" SHOTO ", "WOLVINNNNN" , " SAHILLL " , " KD "];
const  newHeroes = [" SHHANKYY  ", " AZTECCC " , " DELETE " , " MAFIA  "];

// myHeroes.push(newHeroes) // same as concat do same things but 
// console.log(myHeroes)

// console.log(myHeroes)
// console.log(myHeroes[4][2])

// const allHeroes = myHeroes.concat(newHeroes)
// console.log(allHeroes);

const allNewheroes = [...myHeroes,...newHeroes];//spread operaator work as concat kanch ka glass 
// niche gira spread hogya 

// console.log(allNewheroes);

const anotherArr = [ 1,2,3,[4,5,6],7,8,[9,4,3,[3,4,3]]];
const realAnotherArr = anotherArr.flat(Infinity); //gives all combined array chahe jitne bhi subarray hon usme
//  ikathe dedega ek sath flat ka kam hai yeah 

// console.log(realAnotherArr);    

// console.log(Array.isArray("SHUBHAM"));
// console.log(Array.from("SHUBHAM")); //converts into array 
// console.log(Array.from({name : "SHUBHAM"}));//interesting gives empty output 

let score1 = " shubham" ;
let score2 = " pari " ;
let score3 = " mona " ;

console.log(Array.of(score1,score2,score3));




