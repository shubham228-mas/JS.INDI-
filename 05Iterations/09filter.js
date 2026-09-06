// const myArr = [ "shoto " , " shanky " , " mafia " , " aztec " , " sahil "]

//  const Coding = myArr.forEach( (item) => {
//     // console.log(item)//for each ko return nhi kr skte ham chahe kese bhi kre 
//     return item 
// })
// console.log(Coding);

const myNums = [1,2,3,4,5,6,7,8,9,10]
//  const myNewNums = myNums.filter( (nums) => {
//     return nums > 4 
//  }  )//filter return krta values ko jese yaha pe hr index pe
//   jayega or condition check krega then return krdega jo jo satidfy krengi

// const newNums = []
//     myNums.forEach( (nums) => {
//         if(nums > 4 ){
//             newNums.push(nums)
//         }
//     })
//  console.log(newNums);

const books = [
    {
        bookName : "book one ", publish : 1981 , genre : 'history '
    },
    {
        bookName : "book two ", publish : 1990 , genre : 'fiction '
    },
    {
        bookName : "book three ", publish : 1999 , genre : 'non fiction  '
    },
    {
        bookName : "book four ", publish : 2009 , genre : 'history '
    },
    {
        bookName : "book five  ", publish : 1989 , genre : 'fiction '
    },
    {
        bookName : "book six  ", publish : 2007 , genre : ' non fiction  '
    },
];
let userBooks = books.filter( (bk) =>  bk.genre === 'fiction ' )
//   userBooks = books.filter( (bk) => { return bk.publish <= 2000} )

console.log(userBooks)  //filter can be used for many purposes so use it 
