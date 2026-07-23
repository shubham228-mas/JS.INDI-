// immediately innvoked function expressions  (IIFE) GLOBL SCOPE KE POLLUTION SE PRBLM HOTI HAI KYI BAR
//  ISILIYE USKO HTANE KE LIYE HANE IIFE KA USE KIYA 


(function chai (){

    //named IIFE
    console.log(`DB connected `);
    
})();//IIFE //SEMICOLON LGANA JRURI HAI IIFE ME VRNAUSKO PTA NHI LGTA END KHA KRNA HAI SCOPE
//  ISLIYE : LGTA HAI 

( (name) => {
    //unnamed IIFE 
    console.log(`DB connected TWO ${name} `);
    
})('Shoto')//consider it as a function 
//2 IIFE lgane hai to kya krna hai ?semicolon lgana hai ok........  