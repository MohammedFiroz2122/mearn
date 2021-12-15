// var expr="%1+2+3+5"
// try{
//     console.log(eval(expr));
// }
// catch(error){
//     console.log("error occured");
// }

// console.log("db commit");


// var mobile_no="984723410"
// try{
//     if(mobile_no.length<10){
//         throw new Error("invalid mobile number")
//     }
//     else{
//         console.log("valid");
//     }
// }

// catch(error){
//  console.log(error);
// }
var accno="jjj"
try{
    if (isNaN(accno)){
        throw new Error("enter valid account number")
    }
    else{
        console.log("valid");
    }
}
catch(error){
    console.log(error);
}