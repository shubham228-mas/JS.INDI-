// let game = " shubham "
// let repoCoount = 50 ;

// console.log( `hello my name is ${game} and my github repo count is ${repoCoount} `)





 const gameName = new String(' shubham bansal com  ')

 console.log(gameName[0])
 console.log(gameName.__proto__)

 console.log(gameName.charAt(6))
 console.log(gameName.indexOf('h'))

 const anotherString = gameName.substring(0 , 5 );//npot include last number menas only 0 to 4 will print 
 console.log(anotherString)//cannot be negetive 

 const newString = gameName.slice(-6 , 5 )//can be negrtive 
 console.log(newString);

 const newStringOne = "   shubham    "
 console.log(newStringOne)
 console.log(newStringOne.trim())
//  console.log( newStringOne.concat(5))


 const url = " https://shubham.com%20bansal";

 console.log(url.replace('%20','-'))


 console.log(gameName.split(' '))

 const str1 =" shubham "
 const str2 =" bansal  "

 console.log(str1.concat(str2))
 console.log(str2.concat(str1))

 






