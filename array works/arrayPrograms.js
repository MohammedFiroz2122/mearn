var arr=[2,3,4,5,6,7,8] // op [1,2,3,7,8,9]
var newArr=[]

for(let number of arr){
    if(number<5){
        newArr.push((number-1));
    }
    else if(number>5){
        newArr.push((number+1));
    }
    else{
        newArr.push((number));
    }
}console.log(newArr);