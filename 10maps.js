const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((num) => num + 20 )
//chaining of filter and maps if we do more work on single array or any data type 
const newNums = myNumbers
.map( ( num ) => num * 10 )
.map( ( num ) => num + 5  )
.filter( ( num ) => num >= 60  )
console.log(newNums)