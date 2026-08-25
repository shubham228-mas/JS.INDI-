const promiseOne = new Promise(function(resolve , reject){
    // do an asyn task 
    // DB calls , cryptography tasks ,network 
    setTimeout(function(){
        console.log("asyn task is completed ");
        resolve();//pehle task complete hoga then resolve bola acha mera time agya hai run hone ka to 
        // promsie consume ho jayega 
    },1000)
})

promiseOne.then(function(){//then resolve ka keyword hai sidha resolve se linked hai isse call 
    // krke ham promise consume krte hai
    console.log("promise consume ")
})

new Promise(function(resolve , reject ){
    setTimeout(function(){
        console.log("ASYN TAST 2 COMPLETED ");
        resolve()
    },1000)
}).then(function(){
    console.log("ASYN 2 RESOLVED ")
})

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username : "SHUBHAM ", email:"shubham6498g@gmail.com"})//yeah ek object leta hai apne ander 
    },1000)
})
promiseThree.then(function(user){
    console.log(user)

})

const promiseFour = new Promise((resolve , reject )=> {
    setTimeout(() => {
        let error = false ;
    if(!error){
        resolve({username: " Shubham " , password: "12"})
    }else {
        reject('ERROR: SOMETHING WENT WRONG')
    }
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error)
})
// JUST ANOTHER SYNTAX OF ERROR HANDLING AND ASYN AWAIT METHOD  YOU CAN USE .THEN().CATCH() ALSO OR AYSN 
//AWAIT ALSO YOU CAN USE BY TRY CATCH METHOD
const promiseFive = new Promise((resolve , reject )=> {
    setTimeout(() => {
        let error = false ;
    if(!error){
        resolve({username: "Javascript" , password: "12"})
    }else {
        reject('ERROR: JS WENT WRONG')
    }
    }, 1000);
})

async function consumepromiseFive(){
    try {
        const response  = await promiseFive;
        console.log(response)
    } catch (error) {
        console.log(error)//HANDLES ERORR SMOTHLY ANOTHER METHOD 
    }
}
consumepromiseFive();

// async function  getAllUsers(){
//     try {
//         const   response  = await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(response )

//     const data =  await response.json;
//     console.log(data);
//     } catch (error) {
//         console.log("E:" , error)
//     }
// }
// getAllUsers()

// BESDIE OF TRY CATCH WE USE .THEN().CATCH() BECAUSE ITS EASY AND BETTER 

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log("ERROR"))