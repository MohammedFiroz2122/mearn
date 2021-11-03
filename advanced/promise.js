const { reject } = require("promise-polyfill");

var pro=new Promise((resolve,reject)=>{
    let watch_time=0;
    if(watch_time<1){
        reject("session was too bad")
    }
})
pro.then(res=>console.log(res)).catch(error=>console.log(error))