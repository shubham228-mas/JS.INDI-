let a = 300//global scope 
if(true ){
    let a = 10;
    const b = 20;
    // var c = 30;
    //  console.log("INNER",a);//inner block scope 
}
// console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const userName = " shubham "
    function two (){
        const website = " sushil kumar "
        console.log(userName)
    }
    // two()//if teo not called then shubham will nt print 
    // console.log(website)
}
one()

if(true){
    const username = " shubham "
    if(username === " shubham "){
        const website = " youtube "
        // console.log(username + website)
    }
    // console.log(website)//error for better undeersatnd not axised 
    // beacuse this is out of scope of if pf website 
}
// console.log(username);//same as website this cannoot be axised bcz this is ut of username scope if 

//++++++++++++++++++intersting+++++++++++++++++++++++++

//this is also type of funton decleration
addOne(5); //in this format funtion exevtion done by this  method also means no error if call above funtion 
function addOne(num ){
    return num  +1;
}
//another type of function decleration 
addTwo(5);//but heere this cannot be accessed beacuse here we declera a variable with function 
// so it cannot be accessed 
const addTwo = function(num ){
    return num  + 2;

}

// also called mini hosting further we discuss  decleration format for more understanding 
