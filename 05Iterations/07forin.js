// for in  generally keys deta hai fdirct value nhi deta to thod mushkil hoyta hai 

const myobj = {
    js : 'javascript',
    py : 'python ',
    cpp : 'c++'
}
for (const key in myobj) {
    // console.log(`${key} shortcut for ${myobj[key]}`);
}

const myArr = [ "shoto " , " shanky " , "  mafia " , " aztec " , " delete "]

for(const key in myArr){
    // console.log(`${key}  is for ${myArr[key]}`)
}
// maps ke uper iterations nhi kiya ja skta age jake pdenge detail main 
// const map = new Map()

// map.set('IN',"INDIA")
// map.set('USA',"UNITED STATES OF AMERICA ")
// map.set('FR',"FRANCE")

// for(const key in  map){
//     console.log(key )
// }