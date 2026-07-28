// for eaaach loop 


const myArr = [ "shoto " , " shanky " , " mafia " , " aztec " , " sahil "]

myArr.forEach(function (key){//isme hum function ka name nhi dete genrally function declare me
    //  dete hai per for each me nhi dete 
        // console.log(key)
})

myArr.forEach( (item) => {
    // console.log(item)
})

function printme(item){
    // console.log(item)
}
myArr.forEach(printme);

myArr.forEach( (item , index , arr )=> {/// yeehh already declared parmeters hai inex arr jo ki index btayega oor arr 
    // full print krdega shoto  0 [ 'shoto ', ' shanky ', ' mafia ', ' aztec ', ' sahil ' ] like this 
    // console.log(item , index , arr);
})

// array ke ander objects pe kese loop lgate hai for each lets discuss 

const myPlayers =  [
    {
        playerName : " mafia ",
        role: " Sniper"
    }
,
 {
        playerName : " aztec  ",
        role: " In Game Leader "
    },

     {
        playerName : " shanky  ",
        role: " rusher "
    }
]

myPlayers.forEach( (item) => {
    console.log(item)
} )
    
