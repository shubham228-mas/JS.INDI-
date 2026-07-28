// for of 
const arr = [2,3,4,6,8,9,0]
for (const num  of arr) {
    // console.log(num)
}

const greetings = "hello world !"
for(const greet of greetings){
    // console.log(`each char at ${greet}`)
}
//maps 
const map = new Map()

map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA ")
map.set('FR',"FRANCE")

// console.log(map); 
//output expected // map used as a unique value if we repeat the inida or usa agaian it will consider only once 
// // Map(3) {
//   'IN' => 'INDIA',
//   'USA' => 'UNITED STATES OF AMERICA ',
//   'FR' => 'FRANCE'
// }

// for (const key of map) {
//     console.log(key);// shows a array of all these 3 but we have to print like
//     //  maps in the loop so we have another syntax of this loop lets show in the another line 
    
// }
for (const [key , value ] of map) { //here is the syantax of printing like maps by using loops 
    // console.log(key , ':-' , value ); 
    
}

const myObject = {
    'game1' : "freefire",
    'game2' : "pubgmobile",
}
for (const [ key , value] of myObject) {
    // console.log(key , ':-', value)// my object is not iterable for this for of looop 
}
