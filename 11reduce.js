// reduce loop genrally used for addition of arrays like these examples 

const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc , currval) {
//         console.log(`acc : ${acc} currcalue : ${currval}`);
//         return acc + currval;
// }, 0 )

// const myTotal = myNums.reduce( (acc , curr) => acc + curr , 2  )

// console.log(myTotal)

const shopingCart = [
    {
        itemName : " JS course ",
        price : 3999
    },
    {
        itemName : " PY course ",
        price : 999
    },
    {
        itemName : " C++ course ",
        price : 4999
    },
    {
        itemName : " MOBILE DEV course ",
        price : 12999
    },
    {
        itemName : " JAVA  course ",
        price : 3999
    },
]

const myTotal = shopingCart.reduce( (acc , item) => acc + item.price, 0 )

console.log(myTotal);