// class set{
//     add(){

//     }
// }

// var st1=new set
// st1.add(10)

// var st=new Set
// st.add(10)
// st.add(10)
// st.add(30)
// console.log(st);



// function add(...args){
//     return args.reduce((num1,num2)=> num1+num2)

// }
// console.log(add(10,20,30,40,50))


function getMax(...args){
    return args.reduce((num1,num2)=>num1>num2?num1:num2)

}
console.log(getMax(11,12,14,13,15));