// // singleton 

// // object literals  

// const mySym = Symbol("key1")

// const jsUser = {
//     name: " shbham ",
//     "full name " : " shuhbham bansal ", // can be axis by only square brackets method 
//     [mySym] :" mykey1 ",
//     age : 18 ,
//     email : "shubham6498g@gmail.com",
//     isLoggedIn : false ,
//     lastLoginDays : ["monday","sunday"] 

// }
// // console.log(jsUser.email);
// // console.log(jsUser["email"]);//another meethod of axis objeccts 
// // console.log(jsUser["full name "]);
// // console.log(jsUser[mySym]);

// jsUser.email = "shubhamchatgptcom "
// // Object.freeze(jsUser)// here we can freeze objects so after that no one can change them and 
// // cannto be changed after this 
// jsUser.email = " shubham,microsoft.com "
// // console.log(jsUser)

// jsUser.greetings = function(){

// console.log(" Hello JS user ")
// }
// // console.log(jsUser.greetings())
// // console.log(jsUser.greetings)//gives function anoymous output 
// jsUser.greetingsTwo = function(){

// console.log(` Hello JS user , ${this.name} , ${this.age}`)
// }
// console.log(jsUser.greetingsTwo())
// console.log(jsUser.greetings())

// const tinderUser = new Object()/singleton
const tinderUser = {} //gives same outout as empty object //nonsingleton
  tinderUser.Id ="1123adf" 
  tinderUser.name ="Shubham " 
  tinderUser.IsLOggedIn = false 
// console.log(tinderUser)

const regularUserName = {
        email : " shubham@gmail.com",
        fullname : {
            userFullName : {
                firstName : " shubham ",
                lastName : " bansal "
            }
        }
}
// console.log(regularUserName.fullname.userFullName.firstName) //we can axis objects in nested by applying dot 
// console.log(regularUserName.fullname.userFullName)
 const obj1 ={ 1 : "a ",2: " b "}
 const obj2 ={ 3 : "a ",4: " b "}
 const obj4 ={ 5 : "a ",6: " b "}

//  const obj3 = Object.assign( {}, obj1 , obj2 , obj4) //combine both objects obj1 and 2 like arrays we 
//  use concat like methods here we use assign // we use empty object here
// because kyi vbar jada ojects hote hai to empty lena cha rehta hai syntax ke liye empty objects rkhna hi chaiye

 const obj3 = {...obj1,...obj2}
//  console.log(obj3)

const users = [
    {
        id : 1,
        email : " shubham.google.vom"
    },
     {
        id : 1,
        email : " shubham.google.vom"
    }, 
    {
        id : 1,
        email : " shubham.google.vom"
    },
]
 users[1].email
//  console.log(tinderUser)

//  console.log(Object.keys(tinderUser))//gives and array of all id name islogged in 
//  console.log(Object.values(tinderUser))// gives vslues in the form of array 
//  console.log(Object.entries(tinderUser))//gives array in the array like 3 entries 
//  console.log(tinderUser.hasOwnProperty('IsLOggedIn'))


 const course = {
    coursename : " JS in hindi ",
    price : "999",
    teacher: " chai or code "

 }
// course.coursename simple way of axis but when we have more than 3 then we use ..

const {teacher: monika } = course // sunytax of another methood mostly people use 
// here we can also change the name of the teacher like monika but output is same modified by ourself 

console.log(monika)

// {
//     "coursename": " shubhm ",//ERROE DEGA YEAH YAHA PE YEAH JSON KA SYNTX HAI API RELATED 
//     "price " : "free ",
//     "course" : "JS INN HINDI "
// }
