// date and time 


let myDate = new Date();

// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate);

// let myNewDate = new Date(2026 , 0 , 23);
// let myNewDate = new Date(2023 , 0 , 23 ,  5 , 3 );
//  let myNewDate = new Date("2023-01-14");
 let myNewDate = new Date("01-25-2026");
// console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myNewDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);

// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());
// console.log(newDate.getMinutes());

newDate.toLocaleString('default',{
    weekday: "long", // gives style to weekdata like mon gives monday full etc 
    dateStyle: "full",// same as date style 
})


