// Array 

const myArr = [0,1,2,3,4,5];

const myPlayers = [" SHOTO ", " KD ", " WOLVINNNN"];
const myArr2 = new Array(2,3,4,5,6);
// console.log(myPlayers[0]);

// ARRAY METTHOODS 

// myArr.push(8)
// myArr.pop()//removes last value form the array 
// myArr.unshift(8)// add element in the startig   
// myArr.shift(8)  
//  myArr.shift()  


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

const newArr = myArr.join( )

// console.log(myArr)
// console.log(typeof newArr) /*join conveert array into striing type 
//like 1,2,3,4,5,6 not like array in brackets 

//SLICE SPLICE 

console.log("A ", myArr)

const myn1 = myArr.slice( 1 , 3)//all array print shen use slice and 3 not included 
console.log(myn1)
console.log("B", myArr);

const myn2 = myArr.splice(1,3)//real meaning of this is wehn we use spilce from 
//starting to ending that part cut out of the array and print out like output is [0,4,5] 
// original is [0,1,2,3,4,5] ad includes 3 also but real meaning is cut out 
console.log("C", myArr)
console.log(myn2);








