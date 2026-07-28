// loops 1.for

for (let i  = 0;i  <= 10; i++) {
    const element = i;
    if(i == 9 ){
        // console.log("9 is tthe best number  ")
    }
    // console.log(i)
}

for(let i = 0;i<=10;i++){
    // console.log(`inner loop is : ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`outer loop is : ${j} and inner loop is : ${i}`) // ander vala loop 10 bar chlega agr uper vala ek bar chlega kyuki
        //  usko pura 10 bar chlna hi pddega annde bale ko tabhi voh dubara uper aa payega 
        // console.log( i + ` * ` + j + ` = ` + i*j );
    }
}
let myArray = [" shoto ", " shanky "," mafia ","delete"," aztec "]
// console.log(myArray.length)
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
}

// BREAK AND CONTINUE 

for (let i = 0; i < 20; i++) {

    if( i == 7 ){
        // console.log(` detected 5 `)
        break;
    }
    // console.log(` value oof i is ${i}`)
    
}
for (let i = 0; i < 20; i++) {

    if( i == 7 ){
        console.log(` detected 7 `)
        continue // says ki ek bar maff krdo jese yaha hamne 7 se kaha 
        // hua ki detetc ho jaye per voh khud print ni hoga 
    }
    console.log(` value oof i is ${i}`)
    
}