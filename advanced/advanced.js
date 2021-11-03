console.log("line1");
setTimeout(()=>{
    console.log("first set time out");
},3000)
setTimeout(()=>{
    console.log("second set time out");
},0)
console.log("line2");